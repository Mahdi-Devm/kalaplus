"use client";

import BlogDetailData from "@/core/features/blog/assets/mock/blog/BlogDetailData";
import { useParams } from "next/navigation";
import BlogDetailComponent from "./BlogDetailComponent";

function BlogDetailPage() {
  const { id } = useParams();

  const blog = BlogDetailData.find((item) => item.id === Number(id));

  return (
    <div className=" mb-6">
      {blog && (
        <BlogDetailComponent
          img={blog.img}
          title={blog.title}
          text={blog.text}
        />
      )}
    </div>
  );
}

export default BlogDetailPage;
