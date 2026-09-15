const courses = [
  [
    "Full Stack Development",
    "Frontend, backend, APIs, authentication and production deployment.",
  ],
  [
    "AI Automation",
    "Automate workflows using APIs, AI tools and modern automation concepts.",
  ],
  [
    "Video Editing",
    "Learn professional editing workflows, storytelling and content production.",
  ],
  [
    "Graphic Design",
    "Build visual design skills for digital products, brands and social content.",
  ],
];

export default function CourseGrid() {
  return (
    <section className="container pb-24">
      <div className="grid gap-6 md:grid-cols-2">
        {courses.map(([t, d], i) => (
          <article
            key={t}
            className="card"
          >
            <div className="flex justify-between">
              <span className="text-brand font-bold text-sm">
                COURSE 0{i + 1}
              </span>

              <span className="muted text-sm">
                Practical Training
              </span>
            </div>

            <h2 className="text-2xl font-bold mt-7">
              {t}
            </h2>

            <p className="muted mt-4">
              {d}
            </p>

            <button className="btn-secondary mt-7">
              Learn More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}