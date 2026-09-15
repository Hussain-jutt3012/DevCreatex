import {
  Code2,
  CloudCog,
  BrainCircuit,
  Workflow,
  Check,
} from "lucide-react";

const services = [
  
];

export default function ServiceDetails() {
  return (
    <section className="container pb-24 space-y-8">
      {services.map(([title, desc, points, Icon], i) => (
        <article
          key={title}
          className="card p-7 md:p-10 grid gap-8 lg:grid-cols-[.7fr_1.3fr]"
        >
          <div>
            <div className="icon-box">
              <Icon />
            </div>

            <div className="text-sm text-brand font-bold mt-6">
              SERVICE 0{i + 1}
            </div>

            <h2 className="text-3xl font-bold mt-3">
              {title}
            </h2>
          </div>

          <div>
            <p className="muted text-lg">
              {desc}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-7">
              {points.map((p) => (
                <div
                  key={p}
                  className="flex gap-3 items-center"
                >
                  <Check
                    size={18}
                    className="text-brand"
                  />

                  <span>
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}