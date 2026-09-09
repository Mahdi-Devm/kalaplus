import {
  categoriesStory,
  contentsStory,
  coversStory,
} from "../assets/mock/story/story";

export const storyUsers = coversStory.map((cover, index) => {
  const storiesContent = [
    {
      url: `/common/img/story/${contentsStory[index % contentsStory.length]}`,
      type: "image",
      duration: 5000,
    },
  ];

  return {
    id: index + 1,
    name: categoriesStory[index % categoriesStory.length].name,
    avatar: `/common/img/story/${cover}`,
    stories: storiesContent,
  };
});
