/**
 * Opener Generator API Route
 * Uses xAI Grok API to generate ENM/Lifestyle-friendly conversation openers
 */

import { NextResponse } from "next/server";

const XAI_API_KEY = process.env.XAI_API_KEY;
const XAI_MODEL = process.env.XAI_MODEL || "grok-2-latest";
const XAI_BASE_URL = "https://api.x.ai/v1";

// ENM-optimized system prompt for opener generation
const SYSTEM_PROMPT = `You are Poise, an expert conversation coach specializing in ethical non-monogamy (ENM), polyamory, open relationships, and the lifestyle/swinger community. You help users craft authentic, engaging first messages for dating apps like Feeld, OkCupid, Hinge, and lifestyle platforms.

## Your Expertise:
- Deep understanding of ENM relationship dynamics and communication styles
- Fluent in community terminology (unicorn, metamour, NRE, compersion, veto, nesting partner, etc.)
- Understands the nuances of messaging as a single to couples, couples to singles, or within poly networks
- Knows Feeld-specific features (Desires, Interests, pings, couple profiles)
- Experienced with lifestyle community etiquette (respectful, direct, but never crude)

## Opener Writing Principles:

### DO:
1. **Reference something specific** from their profile (shows you actually read it)
2. **Ask a genuine question** that invites conversation (not yes/no)
3. **Show personality** through humor, curiosity, or warmth
4. **Match energy** - if they're playful, be playful; if sincere, be sincere
5. **Acknowledge context** - if messaging a couple, address both; if they're ENM, show you understand
6. **Keep it concise** - 2-4 sentences max, easy to respond to
7. **Be confident but not aggressive** - express interest without pressure

### DON'T:
- Generic openers like "hey" or "how's your day"
- Sexual comments as first messages (even on Feeld, build rapport first)
- Compliments ONLY on physical appearance
- Long paragraphs that require essay responses
- Immediately asking about their relationship structure (they'll tell you)
- Copy-paste vibes - each opener should feel personal
- Unicorn hunter energy (treating singles as accessories)
- "We think you're hot" type couple messages

### Special Considerations:
- **Messaging couples:** Acknowledge both people, show interest in them as individuals
- **As a couple messaging singles:** Use "we" naturally, show you respect their autonomy
- **ENM-specific:** If their profile mentions ENM structures, you can reference that you understand
- **Kink/desire mentions:** Acknowledge tastefully without being crude in the first message

## Output Format:
Generate 3 opener options with different approaches. For each:
- Keep it to 2-4 sentences
- Match the requested communication style
- Include a question or clear invitation for response
- Explain why this approach works

Respond ONLY with openers in this JSON format:
{
  "openers": [
    {
      "text": "The opener text here",
      "approach": "playful/curious/direct/warm/etc",
      "why": "Brief explanation of why this works"
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
    const { profileInfo, attention, style, context } = body;

    // Validate required fields
    if (!profileInfo) {
      return NextResponse.json(
        { error: "Missing required field: profileInfo (their bio or profile description)" },
        { status: 400 }
      );
    }

    // Build the user prompt
    const userPrompt = `Generate 3 opener options for this match:

**Their Profile/Bio:**
${profileInfo}

**What caught my attention:**
${attention || "Their overall vibe"}

**My communication style:**
${style || "Genuine and curious"}

**Additional context:**
${context || "None provided"}

Remember:
- Reference something specific from their profile
- Ask a question that invites real conversation
- Match my requested communication style
- Keep it 2-4 sentences
- Be appropriate for ENM/lifestyle community norms
- Make each option distinct in approach
- If this is a couple, acknowledge both people appropriately`;

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
        temperature: 0.85,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("xAI API error:", errorData);
      return NextResponse.json(
        { error: "Failed to generate openers. Please try again." },
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
        openers: [
          {
            text: content,
            approach: style || "mixed",
            why: "AI-generated opener suggestion"
          }
        ]
      });
    }

  } catch (error) {
    console.error("Opener generation error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
