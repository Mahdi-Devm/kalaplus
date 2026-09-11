"use client";

import BlogDetailData from "./BlogDetailData";
import BlogDetailComponent from "./BlogDetailComponent";
import { useParams } from "next/navigation";

const BlogDetailPage = () => {
  const { id } = useParams();

  const blog = BlogDetailData.find((item) => item.id === Number(id));

  console.log(blog);

  return (
    <div className="pages-container mb-6">
      {blog && (
        <BlogDetailComponent
          img={blog.img}
          title={blog.title}
          text={blog.text}
        />
      )}
    </div>
  );
};

export default BlogDetailPage;
