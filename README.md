# **Blog Management App**

A responsive and interactive blog management platform built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This app allows users to create, view, edit, and delete blog posts seamlessly.

## **Features**
- View a list of blog posts.
- Add new blog posts with a title and content.
- Edit existing blog posts.
- Delete blog posts with a single click.
- Responsive design using Tailwind CSS for an optimal user experience on all devices.

---

## **Technologies Used**
- **Frontend**: React
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Styling**: Tailwind CSS

---

## **Getting Started**

Follow these steps to set up and run the project locally.

### **Prerequisites**
- Node.js (v16+ recommended)
- npm or yarn

### **Installation**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-management-app.git
   cd blog-management-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   or 
   
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## **Project Structure**
```
src
├── components
│   └── Navbar.jsx         # Navigation bar
├── features
│   └── blogs
│       └── blogSlice.js   # Redux slice for managing blogs
├── pages
│   ├── Home.jsx           # Homepage with blog list
│   ├── AddBlog.jsx        # Page to add new blogs
│   ├── EditBlog.jsx       # Page to edit blogs
│   └── About.jsx          # About page
├── App.jsx                # Main App component
├── index.js               # Entry point of the application
└── store.js               # Redux store configuration
```

---

## **Usage**
1. **Add Blog**: Navigate to the "Add Blog" page using the navbar. Fill in the form and submit to add a new blog.
2. **Edit Blog**: Click the "Edit" button on any blog from the home page. Make changes and save.
3. **Delete Blog**: Click the "Delete" button on any blog to remove it.
4. **About Page**: Navigate to the "About" page to learn more about the app.

---