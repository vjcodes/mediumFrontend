import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between items-center px-10 py-4">
      <Link to={"/blogs"}>
        <div className="flex flex-col justify-center cursor-pointer">
          Medium
        </div>
      </Link>

      <div>
        <Link to={`/publish`}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            New
          </button>
        </Link>

        <Avatar authorName="Vinayak Jaiswal" />
      </div>
    </div>
  );
};

export default AppBar;
