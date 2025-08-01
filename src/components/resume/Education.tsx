import { HTMLAttributes, memo, useCallback } from "react";
import { Link } from "react-router-dom";

import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/Heading";
import { Markdown } from "@/components/Markdown";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized Education component
export const Education = memo<Props>(({ resume, className, ...rest }) => {
  // Generate stable keys for educations
  const getEducationKey = useCallback(
    (education: Resume["educations"][0], index: number) => {
      return `education-${education.company}-${index}`;
    },
    []
  );

  return (
    <div className={cn("flex flex-col gap-3 w-full", className)} {...rest}>
      <Heading level={2}>Education</Heading>

      <div className="flex w-full gap-3 flex-col">
        {resume.educations.map((education, index) => (
          <div
            key={getEducationKey(education, index)}
            className="flex flex-col"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <img
                  src={education.logo}
                  alt={`${education.company} logo`}
                  className="w-8 h-8 rounded-full"
                />
                <Link
                  to={education.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left font-bold hover:underline"
                >
                  {education.company}
                </Link>
                <div className="flex items-center gap-1.5">
                  {education.badges?.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-md border px-2 py-0.5 text-sm font-bold transition-colors focus:outline-none text-nowrap border-transparent bg-black/5 text-black"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="italic">{`${education.start} - ${
                education.end || "Present"
              }`}</div>
            </div>
            <div>{education.title}</div>
            <div className="text-sm w-full text-black/70">
              <Markdown>{education.description}</Markdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Education.displayName = "Education";
