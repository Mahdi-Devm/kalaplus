import BlogData from "../../../assets/mock/blog/blogDeta";
import BlogComponent from "./BlogComponent";
const BlogPage = () => {
  return (
    <div className="mx-auto grid w-full  grid-cols-1 gap-6 px-4 md:grid-cols-4 mb-6">
      {BlogData.map((i) => (
        <BlogComponent key={i.id} img={i.img} title={i.title} id={i.id} />
      ))}
    </div>
  );
};

export default BlogPage;
