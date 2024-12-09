import PropTypes from 'prop-types';

const Create = (props) => {
  const {
    savePostTitleToState,
    savePostBodyToState,
    saveBlog,
    titleRef,
    bodyRef,
  } = props;

  return (
    <form>
      <h1>Create New</h1>
      <input
        className="form-control"
        type="text"
        placeholder="Title..."
        onChange={savePostTitleToState}
        ref={titleRef}
      />
      <br />
      <textarea
        className="form-control"
        placeholder="Body..."
        onChange={savePostBodyToState}
        ref={bodyRef}
      ></textarea>
      <br />
      <button
        className="btn btn-primary"
        onClick={saveBlog}
      >
        <i className="fa-solid fa-floppy-disk me-1"></i>
        Create
      </button>
    </form>
  );
};

Create.propTypes = {
  savePostTitleToState: PropTypes.func,
  savePostBodyToState: PropTypes.func,
  saveBlog: PropTypes.func,
  titleRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  bodyRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
}

export default Create;
