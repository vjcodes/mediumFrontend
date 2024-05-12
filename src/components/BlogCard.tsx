import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  authorName = "Vinayak Jaiswal",
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${id}`)}
      className="w-[60%] m-4 border-b-[1px] border-slate-300 pb-4"
    >
      <div className="flex items-center">
        {authorName && <Avatar authorName={authorName} />}
        <span className="font-extralight ml-2">{authorName}</span>{" "}
        <div className="w-1 h-1 rounded-full bg-slate-400 ml-2" />
        <span className="pl-2 font-thin text-slate-400">{publishedDate}</span>
      </div>
      <div className="font-semibold text-3xl">{title}</div>
      <div className="font-light text-slate-600 mt-1">
        {content.slice(0, 100) + "..."}
      </div>
      <div className="text-slate-500 font-thin text-sm mt-2">{`${Math.ceil(
        content.length / 100
      )} minute(s) read`}</div>
    </div>
  );
};

export const Avatar = ({ authorName }: { authorName: string }) => {
  const nameArray = authorName?.split(" ");
  let str = "";
  str += nameArray[0][0] + nameArray[1][0];
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-xs text-gray-600 dark:text-gray-300">{str}</span>
    </div>
  );
};

export default BlogCard;
