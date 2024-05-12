import { useState } from "react";
import AppBar from "../components/AppBar";
import { useCreatePost } from "../hooks";

const Publish = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const { loading, createPost } = useCreatePost({ values });

  return (
    <>
      <AppBar />
      <div className="flex justify-center mt-10">
        <div className="max-w-screen-lg w-full">
          <label
            htmlFor="helper-text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter Title"
            onChange={(e) =>
              setValues({
                ...values,
                title: e.target.value,
              })
            }
          ></input>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <form
          className="max-w-screen-lg w-full"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(values);
            createPost();
          }}
        >
          <div className="max-w-screen-lg w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="px-4 py-2 bg-white rounded-t-lg ">
              <label htmlFor="comment" className="sr-only">
                Content
              </label>
              <textarea
                id="comment"
                rows={4}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0  "
                placeholder="Write your content..."
                required
                onChange={(e) =>
                  setValues({
                    ...values,
                    content: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t ">
              <button
                disabled={loading}
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
              >
                {loading ? "Publishing" : "Publish Post"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Publish;
