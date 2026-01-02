import { Card, Section } from "@/components/ui";

/**
 * UseCaseIcon component - provides visual differentiation per use case type
 */
function UseCaseIcon({ index }) {
  // Different icons for different use case types
  const icons = [
    // Heart icon - for dating/relationship use cases
    <svg key="heart" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    // Users icon - for couples/groups
    <svg key="users" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Chat bubbles icon - for messaging
    <svg key="chat" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    // Sparkles icon - for special features
    <svg key="sparkles" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>,
  ];

  return (
    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
      {icons[index % icons.length]}
    </div>
  );
}

/**
 * UseCaseCard component for individual use case display
 */
function UseCaseCard({ useCase, index }) {
  const { title, items } = useCase;

  return (
    <Card padding="lg" hover className="h-full">
      {/* Use Case Icon */}
      <UseCaseIcon index={index} />

      {/* Use Case Title */}
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
        {title}
      </h3>

      {/* Bullet Points */}
      <ul className="space-y-3">
        {items?.map((item, itemIndex) => (
          <li key={itemIndex} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-purple-500" />
            <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/**
 * UseCaseSection component displays use cases in a responsive card grid layout
 *
 * @param {Object} props - Component props
 * @param {Array<{title: string, items: string[]}>} props.useCases - Array of use case data
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * const useCases = [
 *   {
 *     title: "For Singles on Feeld",
 *     items: [
 *       "Craft openers that show you understand ENM culture",
 *       "Navigate messaging with couples without the awkwardness",
 *       "Communicate your relationship structure clearly"
 *     ]
 *   }
 * ]
 */
function UseCaseSection({ useCases, className = "" }) {
  if (!useCases || useCases.length === 0) {
    return null;
  }

  return (
    <Section className={className}>
      {/* Use Cases Grid - Responsive: stacked on mobile, 2 col on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} useCase={useCase} index={index} />
        ))}
      </div>
    </Section>
  );
}

export { UseCaseSection };
