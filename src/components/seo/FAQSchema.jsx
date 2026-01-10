export default function FAQSchema({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ data for articles
export const articleFAQs = {
  "feeld-ping-guide": [
    {
      question: "How many free pings do you get on Feeld?",
      answer: "Free Feeld users get a limited number of pings that refresh periodically. The exact number varies, but it's typically 1-3 pings per day. Majestic (premium) members get significantly more pings."
    },
    {
      question: "What's the difference between a ping and a like on Feeld?",
      answer: "A like on Feeld is invisible to the other person unless they also like you (creating a match). A ping sends a direct notification to someone's inbox, making it more visible and forward. Pings are limited while likes are unlimited."
    },
    {
      question: "Do pings expire on Feeld?",
      answer: "Pings don't expire once sent - the recipient will see your ping in their connections/notifications until they act on it. However, your available pings refresh periodically, so unused ping capacity doesn't accumulate."
    },
    {
      question: "Can you send a message with a ping on Feeld?",
      answer: "No, pings on Feeld don't include a message. A ping is simply a notification that you're interested. If you want to send a message, you'll need to match first (both parties like each other) or wait for them to respond to your ping."
    }
  ],
  "feeld-emoji-meanings": [
    {
      question: "What does the unicorn emoji mean on Feeld?",
      answer: "On Feeld, the unicorn emoji typically refers to a single person (usually a woman) who dates or has intimate encounters with couples. It's derived from the idea that such individuals are 'rare' like unicorns in the dating world."
    },
    {
      question: "What do the fire and eggplant emojis mean on dating apps?",
      answer: "The fire emoji generally indicates attraction or that someone finds a profile 'hot.' The eggplant emoji is commonly used as a phallic symbol and often indicates interest in or openness to sexual content or encounters."
    },
    {
      question: "How do I know what emojis mean on Feeld profiles?",
      answer: "Feeld users often use emojis as shorthand for desires, relationship styles, or interests. Common ones include: unicorn for singles who date couples, rainbow for LGBTQ+, and various symbols for specific kinks or preferences. Context from the bio usually helps clarify meaning."
    }
  ],
  "feeld-for-couples": [
    {
      question: "Can couples share a profile on Feeld?",
      answer: "Yes, Feeld allows couples to create a paired/linked profile where both partners appear together. You can also maintain individual profiles that are linked, allowing you to browse separately while showing you're part of a couple."
    },
    {
      question: "How do couples match with singles on Feeld?",
      answer: "Couples can match with singles the same way individuals match - by both parties liking each other. Feeld's filter system helps couples find singles interested in dating pairs, and singles can filter to see couples in their discover feed."
    },
    {
      question: "What is unicorn hunting and why is it controversial?",
      answer: "Unicorn hunting refers to couples seeking a single person (typically a bisexual woman) to join them. It's controversial because it often treats the 'unicorn' as an accessory rather than an equal partner, with couples having veto power or rigid rules that don't consider the third person's needs."
    }
  ]
};
