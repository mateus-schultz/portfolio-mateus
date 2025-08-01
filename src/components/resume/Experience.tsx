import { HTMLAttributes, memo, useCallback } from "react";
import { Link } from "react-router-dom";

import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/Heading";
import { Markdown } from "@/components/Markdown";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized Experience component
export const Experience = memo<Props>(({ resume, className, ...rest }) => {
  // Generate stable keys for experiences
  const getExperienceKey = useCallback(
    (experience: Resume["experiences"][0], index: number) => {
      return `experience-${experience.company}-${index}`;
    },
    []
  );

  return (
    <div className={cn("flex flex-col gap-3 w-full", className)} {...rest}>
      <Heading level={2}>Experience</Heading>

      <div className="flex w-full gap-3 flex-col">
        {resume.experiences.map((experience, index) => (
          <div
            key={getExperienceKey(experience, index)}
            className="flex flex-col"
          >
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex items-center flex-wrap gap-1.5">
                <Link
                  to={experience.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left font-bold hover:underline"
                >
                  {experience.company}
                </Link>
                <div className="flex items-center gap-1.5">
                  {experience.badges?.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-md border px-2 py-0.5 text-sm font-bold transition-colors focus:outline-none text-nowrap border-transparent bg-black/5 text-black"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="italic">{`${experience.start} - ${
                experience.end || "Present"
              }`}</div>
            </div>
            <div className="font-semibold flex items-center gap-1.5">
              {experience.title}
            </div>
            <div className="text-sm w-full text-black/70 flex flex-col gap-1.5">
              {experience.contents?.map((content, contentIndex) => (
                <div key={`${content.title}-${contentIndex}`}>
                  <b>{content.title}:</b>{" "}
                  {content.description && (
                    <Markdown>{content.description}</Markdown>
                  )}
                  {content.items && content.items.length > 0 && (
                    <span> {content.items.join(" • ")}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Experience.displayName = "Experience";
