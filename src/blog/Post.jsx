import PropTypes from 'prop-types';

const Post = (props) => {
  const { blog, editBlog, deleteBlog } = props;

  return (
    <tr>
      <td>{blog.id}</td>
      <td>{blog.title}</td>
      <td>{blog.body}</td>
      <td>
        <button
          className='btn btn-warning me-2'
          onClick={() => editBlog(blog.id)}
        >
          <i className="fa-solid fa-pen-to-square me-1"></i>
          Edit
        </button>
        <button
          className='btn btn-danger'
          onClick={() => deleteBlog(blog.id)}
        >
          <i className="fa-solid fa-trash me-1"></i>
          Delete
        </button>
      </td>
    </tr>
  );
};

Post.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  editBlog: PropTypes.func,
  deleteBlog: PropTypes.func,
}

export default Post;
