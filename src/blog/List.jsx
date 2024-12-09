import { useRef, useState } from 'react';
import Create from './Create';
import Post from './Post';
import Edit from './Edit';

const List = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [blogs, setBlogs] = useState([
    { id: 1, title: 't1', body: 'b1' },
    { id: 2, title: 't2', body: 'b2' },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const savePostTitleToState = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const savePostBodyToState = (e) => {
    // console.log(e.target.value);
    setBody(e.target.value);
  };

  const saveBlog = (e) => {
    e.preventDefault();
    setBlogs([
      ...blogs,
      {
        id: blogs.length + 1, 
        title, body 
      }
    ]);
    titleRef.current.value = '';
    bodyRef.current.value = '';
    titleRef.current.focus();
    toggleCreate();
  };

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const editBlog = (id) => {
    setEditId(id);
    toggleEdit();
  }

  const updateBlog = (e) => {
    e.preventDefault();
    const updatedBlogs = blogs.map(blog => {
      if (blog.id === editId) {
        return {
          ...blog,
          title: title || blog.title,
          body: body || blog.body,
        };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
    toggleEdit();
  }

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  }

  if (isCreate) {
    return (
      <>
        <Create
          savePostTitleToState={savePostTitleToState}
          savePostBodyToState={savePostBodyToState}
          saveBlog={saveBlog}
          titleRef={titleRef}
          bodyRef={bodyRef}
        />
      </>
    );
  }
  else if (isEdit) {
    const blog = blogs.find(blog => blog.id === editId);
    return (
      <>
        <Edit
          savePostTitleToState={savePostTitleToState}
          savePostBodyToState={savePostBodyToState}
          updateBlog={updateBlog}
          titleRef={titleRef}
          bodyRef={bodyRef}
          blog={blog}
        />
      </>
    );
  }
  return (
    <>
      <h1>All Blog Posts</h1>
      <button
        className='btn btn-primary mb-2'
        onClick={toggleCreate}
      >
        <i className="fa-solid fa-plus me-1"></i>
        New
      </button>
      <br/>

      {!blogs.length ? (
        <div className='alert alert-info'>No record found</div>
      ) : (
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <Post
                key={blog.id}
                blog={blog}
                editBlog={editBlog}
                deleteBlog={deleteBlog}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default List;
