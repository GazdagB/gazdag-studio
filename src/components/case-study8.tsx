import { cn } from "@/lib/utils";
import type { CaseProjects } from "@/types/project.types";
import SkillsUsed from "./common/SkillsUsed";

interface CaseStudyProps {
  className?: string;
  project: CaseProjects;
  children: React.ReactNode;
}

const CaseStudy8 = ({ className, children, project }: CaseStudyProps) => {
  const { title, coverImg, company } = project;
  return (
    <section className={cn("py-32 px-6", className, company)}>
      <div className="container text-white flex flex-col gap-12 lg:flex-row lg:gap-24">
        <article className="flex items-start justify-center flex-col">
          <img
            src={
              coverImg ||
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            }
            alt="placeholder"
            className={`mb-8 aspect-video w-full ${company ? "max-w-3xl" : "max-w-5xl"} rounded-lg border object-cover`}
          />
          <h1 className="text-3xl md:text-6xl mb-7 font-bold max-w-5xl w-full">
            {title}
          </h1>
          <div className="prose dark:prose-invert">{children}</div>
        </article>

        {company && (
          <aside className="lg:max-w-[300px] text-foreground">
            <div className="flex flex-col items-start rounded-lg border border-border bg-accent py-6 md:py-8">
              {company.logo && (
                <div className="mb-8 px-6">
                  <img
                    src={company.logo || ""}
                    alt="placeholder"
                    className="max-h-8 w-full"
                  />
                </div>
              )}

              <div className="mb-5 px-6 last:mb-0">
                <div className="mb-2 text-xs font-semibold">Company</div>
                <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                  {company.name}
                </div>
              </div>
              <div className="mb-5 px-6 last:mb-0">
                <div className="mb-2 text-xs font-semibold">Industry</div>
                <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                  {company.industry}
                </div>
              </div>
              <div className="mb-5 w-full border-t border-border px-6 pt-5 last:mb-0">
                <div className="mb-2 text-xs font-semibold">Location</div>
                <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                  {company.location}
                </div>
              </div>
              <div className="mb-5 px-6 last:mb-0">
                <div className="mb-2 text-xs font-semibold">Company size</div>
                <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                  {company.size}
                </div>
              </div>
              <div className="mb-5 px-6 last:mb-0">
                <div className="mb-2 text-xs font-semibold">Website</div>
                <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                  <a
                    href={company.websiteUrl}
                    className="underline hover:text-foreground"
                  >
                    {company.websiteTag || company.websiteUrl}
                  </a>
                </div>
              </div>
              {company.skills && (
                <div className="mb-5 px-6 w-full min-w-80 last:mb-0">
                  <div className="mb-2 text-xs font-semibold">Skills Used</div>
                  <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                    <SkillsUsed skills={company.skills}></SkillsUsed>
                  </div>
                </div>
              )}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
};

export { CaseStudy8 };
