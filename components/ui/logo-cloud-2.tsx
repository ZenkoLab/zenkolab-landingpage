import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
            Nos partenaires et soutiens
          </h2>
        </div>
        <div
          className={cn(
            "relative grid grid-cols-2 border-x md:grid-cols-3",
            className
          )}
          {...props}
        >
          <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

          <LogoCard
            className="relative border-r border-b bg-secondary dark:bg-secondary/30"
            logo={{
              src: "/21st.png",
              alt: "21st",
              className: "h-10 w-auto md:h-16",
            }}
          >
            <PlusIcon
              className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
              strokeWidth={1}
            />
          </LogoCard>

          <LogoCard
            className="border-b md:border-r"
            logo={{
              src: "https://upload.wikimedia.org/wikipedia/fr/8/86/Logo_CentraleSup%C3%A9lec.svg",
              alt: "CentraleSupélec",
              className: "h-12 w-auto md:h-20",
            }}
          />

          <LogoCard
            className="relative border-r border-b md:border-r-0 md:bg-secondary dark:md:bg-secondary/30"
            logo={{
              src: "/docrezo.png",
              alt: "DocRezo",
              className: "h-10 w-auto md:h-16",
            }}
          >
            <PlusIcon
              className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden"
              strokeWidth={1}
            />
            <PlusIcon
              className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
              strokeWidth={1}
            />
          </LogoCard>

          <LogoCard
            className="relative border-b bg-secondary md:border-r md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
            logo={{
              src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Inr_logo_rouge.svg",
              alt: "Inria",
              className: "h-10 w-auto md:h-16",
            }}
          />

          <LogoCard
            className="relative border-r border-b bg-secondary md:border-b-0 md:bg-secondary dark:bg-secondary/30 md:dark:bg-secondary/30"
            logo={{
              src: "/aphp.png",
              alt: "APHP",
              className: "h-10 w-auto md:h-16",
            }}
          >
            <PlusIcon
              className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
              strokeWidth={1}
            />
          </LogoCard>

          <LogoCard
            className="border-b bg-background md:border-r-0 md:border-b-0 md:bg-background dark:md:bg-background"
            logo={{
              src: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Logo_Universit%C3%A9_Paris-Saclay_2019-12.svg",
              alt: "Université Paris-Saclay",
              className: "h-12 w-auto md:h-20",
            }}
          />

          <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
        </div>
      </div>
    </section>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo?: Logo;
  text?: string;
};

function LogoCard({ logo, text, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      {logo ? (
        <img
          alt={logo.alt}
          className={cn(
            "pointer-events-none select-none dark:brightness-0 dark:invert object-contain",
            logo.className || "h-4 md:h-5"
          )}
          height={logo.height || "auto"}
          src={logo.src}
          width={logo.width || "auto"}
        />
      ) : (
        <span className="text-lg font-bold text-muted-foreground/80">{text}</span>
      )}
      {children}
    </div>
  );
}
