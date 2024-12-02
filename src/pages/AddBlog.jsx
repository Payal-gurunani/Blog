import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import {addBlog}  from '../Features/blogs/blogSlice'
import { useNavigate } from "react-router-dom";


function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(title && content){
     const newBlog = {
      id: Date.now(),
      title,
      content
     };
    

    dispatch(addBlog(newBlog));

    setTitle('');
    setContent('');
    navigate('/')
    }
  }
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">Add a New Blog</h1>
      <form onSubmit = {handleSubmit} action="" className="space-y-4">
        <div>
          <label htmlFor="title"className='block text-lg font-medium mb-2'>Title</label>
          <input 
          id="title"
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full rounded-md p-2 border text-black border-gray-300'
          required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium mb-2 ">Content</label>
          <textarea
            id="content"
            className="w-full p-2 text-black border border-gray-300 rounded-md"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
            <button type="submit"
            className="w-full py-2 bg-gray-900 font-semibold rounded-md hover:bg-gray-700"
            >
              Add Blog
            </button>

      </form>
    </div>
  )
}

export default AddBlog