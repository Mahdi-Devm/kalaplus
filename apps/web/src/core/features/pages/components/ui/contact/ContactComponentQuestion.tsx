"use client";

import { useState } from "react";

import {
  H3,
  Muted,
  Span,
Button
} from "@/core/components/custom/ui/typography/Typography";

type BoxComponentType = {
  title: string;
  text?: string;
  image?: string;
};

const ContactComponentQuestion = ({
  title,
  text,
  image,
}: BoxComponentType) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleAnswer = () => {
    if (text) {
      setShowFullText((prev) => !prev);
    }
  };

  return (
    <div className="w-full px-2 py-2 sm:px-3">
      <div
        className={`
          w-full
          overflow-hidden
          rounded-2xl
          border
          bg-card
          shadow-sm
          transition-all
          duration-300
          ease-out
          ${
            showFullText
              ? "border-primary shadow-md"
              : "border-border hover:border-primary/40 hover:shadow-md"
          }
        `}
      >
        {image && (
          <div className="relative w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="block aspect-video w-full object-cover"
            />
          </div>
        )}

        <button
          type="button"
          onClick={toggleAnswer}
          disabled={!text}
          aria-expanded={showFullText}
          className={`
            group
            flex
            w-full
            items-center
            justify-between
            gap-4
            px-4
            py-4
            text-right
            transition-colors
            duration-300
            sm:px-5
            sm:py-5
            lg:px-6
            ${
              showFullText
                ? "bg-primary/10"
                : "bg-card hover:bg-muted/50"
            }
            ${!text ? "cursor-default" : "cursor-pointer"}
          `}
        >
          <H3
            className={`
              flex-1
              text-right
              text-base
              font-semibold
              leading-7
              transition-colors
              duration-300
              sm:text-lg
              ${
                showFullText
                  ? "text-primary"
                  : "text-foreground"
              }
            `}
          >
            {title}
          </H3>

          {text && (
            <span
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                text-lg
                font-medium
                transition-all
                duration-300
                sm:h-10
                sm:w-10
                sm:text-xl
                ${
                  showFullText
                    ? "rotate-180 border-primary bg-primary text-primary-foreground"
                    : "border-border bg-muted text-muted-foreground group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary"
                }
              `}
            >
              <Span className="leading-none">
                {showFullText ? "−" : "+"}
              </Span>
            </span>
          )}
        </button>

        <div
          className={`
            grid
            transition-all
            duration-500
            ease-[cubic-bezier(0.4,0,0.2,1)]
            ${
              showFullText
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="min-h-0 overflow-hidden">
            {text && (
              <div
                className="
                  border-t
                  border-border
                  px-4
                  py-4
                  sm:px-5
                  sm:py-5
                  lg:px-6
                  lg:py-6
                "
              >
                <Muted
                  className="
                    text-justify
                    text-sm
                    leading-7
                    sm:leading-8
                    md:text-base
                  "
                >
                  {text}
                </Muted>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponentQuestion;