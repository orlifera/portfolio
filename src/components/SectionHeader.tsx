import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  /** The conversational line above the title. */
  lead?: ReactNode;
  title: string;
  className?: string;
};

/** The title rises out of a mask and settles to its depth's width as it scrolls in. */
export default function SectionHeader({ lead, title, className }: SectionHeaderProps) {
  return (
    <Reveal as="header" kind="title" className={cn("max-w-3xl", className)}>
      {lead && <div className="title-lead mb-3 text-base text-muted-foreground sm:text-lg">{lead}</div>}
      <h2 className="display text-[clamp(2.5rem,7vw,4.75rem)]">
        <span className="title-mask">
          <span className="title-line">{title}</span>
        </span>
      </h2>
    </Reveal>
  );
}
