export default function DeleteModal() {
  return (
    <div className="delete-modal">
      <h2 className="delete-modal_title">Delete Comment</h2>
      <p className="delete-modal_content">
        Are you sure you want to delete this comment? This can't be undone.
      </p>
      <div className="delete-modal_btns">
        <button className="delete-modal_btn no">NO, Cancel</button>
        <button className="delete-modal_btn yes">YES, Delete</button>
      </div>
    </div>
  );
}
