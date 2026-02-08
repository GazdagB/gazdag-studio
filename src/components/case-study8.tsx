import { cn } from "@/lib/utils";
import { JSX } from "react";

interface CaseStudy8Props {
  className?: string;
  children?: JSX.Element | JSX.Element[];
  company?: {
    name: string;
  };
}

const CaseStudy8 = ({ className, children, company,  }: CaseStudy8Props) => {
  return (
    <section className={cn("py-32 px-6", className, company)}>
      <div className="container text-white flex flex-col gap-12 lg:flex-row lg:gap-24">
        <article className="flex items-center justify-center flex-col">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className={`mb-8 aspect-video w-full ${company ? "max-w-3xl" : "max-w-5xl"} rounded-lg border object-cover`}
          />
            <h1 className="text-3xl md:text-6xl font-bold max-w-5xl w-full">How Mercury uses shadcn/ui to build their design system</h1>
          <div className="prose dark:prose-invert">
            {children}
          </div>
        </article>

      {company && (

      
        <aside className="lg:max-w-[300px] text-foreground">
          <div className="flex flex-col items-start rounded-lg border border-border bg-accent py-6 md:py-8">
            <div className="mb-8 px-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                alt="placeholder"
                className="max-h-8 w-full"
              />
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Company</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                {company.name}
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Industry</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                Suspendisse volutpat
              </div>
            </div>
            <div className="mb-5 w-full border-t border-border px-6 pt-5 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Location</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                London, United Kingdom
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Company size</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                11-50
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Website</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                <a href="#" className="underline hover:text-foreground">
                  https://example.com/
                </a>
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Skills Used</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                Sed sollicitudin augue eu facilisis scelerisque
              </div>
            </div>
          </div>
        </aside>
      )}
      </div>
    </section>
  );
};

export { CaseStudy8 };
