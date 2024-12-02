import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../features/blogs/blogSlice";
import { Link } from "react-router-dom";

const Home = () => {
  // Fetching blogs from Redux store
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  // Function to handle blog deletion
  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {blogs.length === 0 ? (
        <p>No blogs available. Please add some!</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="mb-4 p-4 border border-gray-300 rounded-lg"
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p>{blog.content.substring(0, 100)}...</p>
              <div className="mt-2 flex justify-between">
                <Link
                  to={`/edit/${blog.id}`}
                  className="hover:text-gray-400"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="hover:text-gray-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
