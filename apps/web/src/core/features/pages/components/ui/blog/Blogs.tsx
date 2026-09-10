import BlogData from "./BlogData";
import BlogComponent from "./BlogComponent";
import BlogHeroSlider from "./BlogHeroSlider";
const BlogPage = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 mb-6">
      {BlogData.map((i) => (
        <BlogComponent key={i.id} img={i.img} title={i.title} date={i.date} />
      ))}
    </div>
  );
};

export default BlogPage;
