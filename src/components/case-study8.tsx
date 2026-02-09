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
    <section className={cn("py-30 sm:py-12 md:py-20 lg:py-32 w-full overflow-hidden", className, company)}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-white flex flex-col gap-6 sm:gap-8 md:gap-12 lg:flex-row lg:gap-16 xl:gap-24">
          <article className="flex items-start justify-center flex-col flex-1 min-w-0 w-full overflow-hidden">
            <div className="w-full mb-5 sm:mb-6 md:mb-8 overflow-hidden rounded-md sm:rounded-lg">
              <img
                src={
                  coverImg ||
                  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                }
                alt="Project cover"
                className={`aspect-video w-full ${company ? "lg:max-w-3xl" : "lg:max-w-5xl"} object-cover`}
              />
            </div>
            <h1 className="text-xl leading-tight sm:text-2xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight mb-2 sm:mb-3 md:mb-5 font-bold w-full break-words">
              {title}
            </h1>
            <div className="w-full overflow-hidden">
              <div className="prose prose-xs sm:prose-sm md:prose-base dark:prose-invert max-w-none w-full">
                {children}
              </div>
            </div>
          </article>

          {company && (
            <aside className="w-full lg:w-auto lg:min-w-[260px] lg:max-w-[300px] xl:min-w-[280px] text-foreground shrink-0">
              <div className="flex flex-col items-start rounded-md sm:rounded-lg border border-border bg-accent py-4 sm:py-6 md:py-8 overflow-hidden">
                {company.logo && (
                  <div className="mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 md:px-6 w-full overflow-hidden">
                    <img
                      src={company.logo || ""}
                      alt={`${company.name} logo`}
                      className="max-h-6 sm:max-h-8 w-auto max-w-full object-contain"
                    />
                  </div>
                )}

                <div className="mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-6 last:mb-0 w-full overflow-hidden">
                  <div className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">Company</div>
                  <div className="text-xs sm:text-sm text-muted-foreground break-words">
                    {company.name}
                  </div>
                </div>
                <div className="mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-6 last:mb-0 w-full overflow-hidden">
                  <div className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">Industry</div>
                  <div className="text-xs sm:text-sm text-muted-foreground break-words">
                    {company.industry}
                  </div>
                </div>
                <div className="mb-3 sm:mb-4 md:mb-5 w-full border-t border-border px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-5 last:mb-0 overflow-hidden">
                  <div className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">Location</div>
                  <div className="text-xs sm:text-sm text-muted-foreground break-words">
                    {company.location}
                  </div>
                </div>
                <div className="mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-6 last:mb-0 w-full overflow-hidden">
                  <div className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">Company size</div>
                  <div className="text-xs sm:text-sm text-muted-foreground break-words">
                    {company.size}
                  </div>
                </div>
                <div className="mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-6 last:mb-0 w-full overflow-hidden">
                  <div className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">Website</div>
                  <div className="text-xs sm:text-sm text-muted-foreground break-all overflow-hidden">
                    <a
                      href={company.websiteUrl}
                      className="underline hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.websiteTag || company.websiteUrl}
                    </a>
                  </div>
                </div>
                {company.skills && (
                  <div className="mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-6 w-full last:mb-0 overflow-hidden">
                    <div className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">Skills Used</div>
                    <div className="text-xs sm:text-sm text-muted-foreground w-full">
                      <SkillsUsed skills={company.skills} />
                    </div>
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export { CaseStudy8 };