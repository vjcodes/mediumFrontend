import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Blog } from "../types";
import { CreateBlogInput } from "@vjcodess/medium-common-2";
import { useNavigate } from "react-router-dom";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blog,
  };
};

export const useCreatePost = ({ values }: { values: CreateBlogInput }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createPost = () => {
    setLoading(true);
    axios
      .post(`${BACKEND_URL}/api/v1/blog`, values, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        navigate(`/blog/${response.data.blog.id}`);
      });
  };

  return {
    loading,
    createPost,
  };
};
