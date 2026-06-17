import { Star } from "lucide-react";

const Testimonials = () => {
  const ratings = [
    {
      starsCount: 5,
      review:
        "Finally, a notes app that doesn't feel like work. The paper aesthetic makes writing feel natural and enjoyable again.",
      author: "Sarah Chen, Writer",
    },
    {
      starsCount: 4,
      review:
        "I've tried dozens of note apps, but Paper Notes is the first one that actually feels like writing. Love the handwritten fonts!",
      author: "Marcus Rodriguez, Student",
    },
    {
      starsCount: 4,
      review:
        "The clean, minimal design helps me focus on my thoughts without distractions. Perfect for journaling and brainstorming.",
      author: "Emma Thompson, Designer",
    },
  ];

  return (
    <section id="testimonials" className="px-4 py-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="handwritten mb-4 -rotate-1 transform text-4xl font-bold md:text-5xl">
            Loved by Writers
          </h2>
          <p className="handwritten text-xl text-gray-600">
            {"See what people are saying about Paper Notes"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Testimonial 1 */}
          {ratings.map((rating, idx) => (
            <div key={idx}  className="bg-card note-shadow border-accent rounded-lg border-2 p-6">
              <div className="mb-4 flex items-center">
                {[...Array(rating.starsCount)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current text-yellow-500"
                  />
                ))}
              </div>
              <p className="handwritten text-foreground/50 mb-4">
                {rating.review}
              </p>
              <div className="handwritten text-sm text-gray-600">
                — {rating.author}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
