import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import AppBar from "../components/AppBar";
import { Avatar } from "../components/BlogCard";

const Blog = () => {
  const { id } = useParams();
  console.log(useParams());
  const { loading, blog } = useBlog({
    id: id || "",
  });

  console.log(blog);

  return (
    <>
      <AppBar />
      {loading && <div>Loading....</div>}
      {!loading && (
        <div className="flex justify-center">
          <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-2xl">
            <div className="col-span-8">
              <div className="text-4xl font-extrabold">{blog?.title}</div>
              <div className="text-slate-500 mt-2">
                Posted on 2nd Decemeber 2023
              </div>
              <div className="text-xl font-light mt-4">{blog?.content}</div>
            </div>
            <div className="  col-span-4">
              <div className="text-slate-500">Author</div>
              <div className="flex items-center">
                <div className="mr-4">
                  <Avatar authorName={blog?.author?.name || ""} />
                </div>

                <div className="w-[90%]">
                  <div className="text-xl font-bold mb-2 mt-2">
                    {blog?.author?.name}
                  </div>
                  <div className="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor minima, eligendi ratione architecto at deserunt rem.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
