"use client";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { useCallback, useState } from "react";
import Stories from "react-insta-stories";
import { storyUsers } from "../../../utils/storyUsers";

function StoriesSection() {
  const [currentUserIndex, setCurrentUserIndex] = useState<number | null>(null);

  const openStory = useCallback((index: number) => {
    setCurrentUserIndex(index);
  }, []);

  const closeStory = useCallback(() => {
    setCurrentUserIndex(null);
  }, []);

  const nextUser = useCallback(() => {
    setCurrentUserIndex((prevIndex) => {
      if (prevIndex !== null && prevIndex < storyUsers.length - 1) {
        return prevIndex + 1;
      } else {
        return null;
      }
    });
  }, [storyUsers]);

  return (
    <div className="flex justify-center">
      <div className="flex gap-4 overflow-hidden p-2">
        {storyUsers.map((user, index) => (
          <button
            key={user.id}
            onClick={() => openStory(index)}
            className="flex flex-col items-center gap-1 shrink-0 transition-transform hover:scale-105"
          >
            <div className="sm:w-22 sm:h-22 w-18 h-18 rounded-full p-0.5 bg-linear-to-tr from-primary via-accent to-primary shadow-md">
              <ImgNormalCustom
                src={user.avatar}
                alt={user.name}
                width={100}
                height={100}
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <span className="text-xs text-gray-700 truncate max-w-18 font-medium">
              {user.name}
            </span>
          </button>
        ))}
      </div>

      {currentUserIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeStory}
        >
          <div
            className="relative w-full max-w-105 aspect-9/16 bg-black rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-linear-to-b from-black/60 to-transparent pointer-events-none">
              <div className="flex items-center gap-3 pointer-events-auto">
                <ImgNormalCustom
                  src={storyUsers[currentUserIndex].avatar}
                  alt={storyUsers[currentUserIndex].name}
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <div className="flex flex-col">
                  <Span className="text-white font-semibold text-sm">
                    {storyUsers[currentUserIndex].name}
                  </Span>
                </div>
              </div>
            </div>

            <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Stories
                stories={storyUsers[currentUserIndex].stories}
                defaultInterval={5000}
                width="100%"
                height="100%"
                onAllStoriesEnd={nextUser}
                storyContainerStyles={{
                  borderRadius: "16px",
                  background: "#000",
                }}
                storyStyles={{
                  objectFit: "contain",
                  background: "#000",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StoriesSection;
