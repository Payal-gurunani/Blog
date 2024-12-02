import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBlog } from '../Features/blogs/blogSlice';

const EditBlog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetching the blog from the Redux store
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === parseInt(id))
  );

  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Pre-fill form with current blog details when the page loads
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const updatedBlog = {
        id: blog.id,
        title,
        content,
      };

      // Dispatch action to update the blog in Redux store
      dispatch(editBlog(updatedBlog));

      // Navigate back to the Home page after updating
      navigate("/");
    }
  };

  // If blog is not found, show a message
  if (!blog) {
    return <h1 className="text-3xl font-bold " >Blog not found!</h1>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full p-2 text-black border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            className="w-full text-black p-2 border border-gray-300 rounded-md"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
