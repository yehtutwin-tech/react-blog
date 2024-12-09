import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Edit = (props) => {
  const {
    savePostTitleToState,
    savePostBodyToState,
    updateBlog,
    titleRef,
    bodyRef,
    blog,
  } = props;

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  return (
    <form>
      <h1>Edit</h1>
      <input
        className="form-control"
        type="text"
        placeholder="Title..."
        onChange={savePostTitleToState}
        ref={titleRef}
        defaultValue={blog.title}
      />
      <br />
      <textarea
        className="form-control"
        placeholder="Body..."
        onChange={savePostBodyToState}
        ref={bodyRef}
        defaultValue={blog.body}
      ></textarea>
      <br />
      <button
        className='btn btn-primary'
        onClick={updateBlog}
      >
        <i className="fa-solid fa-floppy-disk me-1"></i>
        Update
      </button>
    </form>
  );
};

Edit.propTypes = {
  savePostTitleToState: PropTypes.func,
  savePostBodyToState: PropTypes.func,
  updateBlog: PropTypes.func,
  titleRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  bodyRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  blog: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  })
}

export default Edit;
