import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";
import { Blog } from "../types";

const AllBlogs = () => {
  const { loading, blogs } = useBlogs();

  console.log(blogs);

  return (
    <>
      <AppBar />
      {loading && <div>Loading.....</div>}
      {!loading && (
        <div className="flex flex-col items-center justify-center w-screen">
          {blogs.map((blog: Blog) => (
            <BlogCard
              id={blog?.id}
              title={blog?.title}
              authorName={blog?.author?.name || "Vinayak Jaiswal"}
              content={blog?.content}
              publishedDate="2023-4-1"
              key={blog?.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AllBlogs;
