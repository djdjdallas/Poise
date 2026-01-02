import { Section } from "@/components/ui";
import { TestimonialCard } from "./TestimonialCard";

/**
 * TestimonialSection component displays a grid of testimonials
 *
 * @param {Object} props - Component props
 * @param {Array<{quote: string, author: string, details: string}>} props.testimonials - Array of testimonial data
 * @param {React.ReactNode} [props.children] - Optional section title slot (renders above testimonials)
 * @param {string} [props.className] - Additional CSS classes
 */
function TestimonialSection({ testimonials, children, className = "" }) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <Section background="muted" className={className}>
      {/* Optional Section Title Slot */}
      {children && (
        <div className="text-center mb-12 md:mb-16">
          {children}
        </div>
      )}

      {/* Testimonials Grid - Responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            details={testimonial.details}
          />
        ))}
      </div>
    </Section>
  );
}

export { TestimonialSection };
