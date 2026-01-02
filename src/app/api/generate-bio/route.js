/**
 * Bio Generator API Route
 * Uses xAI Grok API to generate ENM/Lifestyle-friendly dating bios
 */

import { NextResponse } from "next/server";

const XAI_API_KEY = process.env.XAI_API_KEY;
const XAI_MODEL = process.env.XAI_MODEL || "grok-2-latest";
const XAI_BASE_URL = "https://api.x.ai/v1";

// ENM-optimized system prompt for bio generation
const SYSTEM_PROMPT = `You are Poise, an expert dating profile coach specializing in ethical non-monogamy (ENM), polyamory, open relationships, and the lifestyle/swinger community. You help users write authentic, compelling dating bios specifically optimized for platforms like Feeld, OkCupid, Hinge, and lifestyle apps.

## Your Expertise:
- Deep understanding of ENM relationship structures (solo poly, hierarchical poly, relationship anarchy, open marriages, swinging, etc.)
- Fluent in community terminology and etiquette (unicorn, metamour, NRE, compersion, kitchen table poly, parallel poly, etc.)
- Understands the unique dynamics of couples dating together vs separately
- Knows what works on Feeld specifically (Desires, Interests, pings, couple profiles)
- Experienced with lifestyle community norms (SDC, Kasidie, club etiquette)

## Bio Writing Principles:
1. **Authenticity over performance** - Help them sound like themselves, not a pickup artist
2. **Clarity about relationship structure** - Be upfront but not clinical
3. **Specific over generic** - "I make a mean shakshuka on lazy Sundays" beats "I love cooking"
4. **Show personality through details** - Use humor, quirks, and genuine interests
5. **Clear about what they're seeking** - Without being demanding or negative
6. **Avoid red flags** - No "no drama", listing what you DON'T want, or unicorn hunter vibes
7. **Platform-appropriate** - Feeld allows more directness, Hinge needs prompt answers, etc.

## Output Format:
Generate 3 bio options with different vibes/approaches. For each:
- Keep it to 150-300 characters for Feeld, up to 500 for others
- Match the requested vibe/tone
- Include a conversation hook
- Be appropriate for the specific app

Respond ONLY with the bios in this JSON format:
{
  "bios": [
    {
      "text": "The bio text here",
      "vibe": "playful/sincere/witty/etc",
      "tip": "Brief tip about why this works"
    }
  ]
}`;

export async function POST(request) {
  try {
    // Check for API key
    if (!XAI_API_KEY) {
      return NextResponse.json(
        { error: "API not configured. Please add XAI_API_KEY to environment variables." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { app, relationshipStatus, lookingFor, interests, vibe } = body;

    // Validate required fields
    if (!app || !relationshipStatus || !lookingFor) {
      return NextResponse.json(
        { error: "Missing required fields: app, relationshipStatus, lookingFor" },
        { status: 400 }
      );
    }

    // Build the user prompt
    const userPrompt = `Generate 3 dating bio options for me:

**Platform:** ${app}
**Relationship Status:** ${relationshipStatus}
**Looking For:** ${lookingFor}
**Interests/Traits to Highlight:** ${interests || "Not specified"}
**Desired Vibe:** ${vibe || "Authentic and approachable"}

Remember:
- Tailor the length and style for ${app}
- Be authentic to ENM/lifestyle community norms
- Include conversation starters
- Avoid common red flags like "no drama" or unicorn hunter vibes
- Make each option distinct in approach`;

    // Call xAI Grok API
    const response = await fetch(`${XAI_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${XAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: XAI_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.8,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("xAI API error:", errorData);
      return NextResponse.json(
        { error: "Failed to generate bios. Please try again." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No response from AI. Please try again." },
        { status: 500 }
      );
    }

    // Parse the JSON response
    try {
      // Extract JSON from the response (handle markdown code blocks)
      let jsonStr = content;
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        jsonStr = jsonMatch[1];
      }

      const parsed = JSON.parse(jsonStr.trim());
      return NextResponse.json(parsed);
    } catch (parseError) {
      // If JSON parsing fails, return the raw content in a structured format
      console.error("JSON parse error:", parseError);
      return NextResponse.json({
        bios: [
          {
            text: content,
            vibe: vibe || "mixed",
            tip: "AI-generated bio suggestion"
          }
        ]
      });
    }

  } catch (error) {
    console.error("Bio generation error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
