import React from "react";

export default function EditModal( {element, story, setStory, editId, setEditId} ) {

  const editHandler = (id) => {
    //console.log(id);
    //console.log(element)
    //console.log(element.desc)
    setEditId(id);
    story.filter((element) => {
      if(element.id === id) {
        document.getElementById("edit-desc").value = element.desc;
      }
    })
  }

  const updateHandler = () => {
   const updateStory = story.map((element) => {
      //console.log(element)
      if(editId === element.id) {
        return {...element, desc: document.getElementById("edit-desc").value}
      } else {
        return element;
      }
    })
    console.log(updateStory);
    setStory(updateStory);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick = {() => {
          editHandler(element.id)
      }}
      >
        Edit
      </button>{" "}

      <div
        className="modal"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
         
            <div className="modal-body"></div>
            <form>

          <div className="mb-3">
            <label htmlFor="exampleText" className="form-label">
              Edit Your Story!
            </label>
            <textarea
              name = "edit-desc"
              id = "edit-desc"
              rows="25"
              className="form-control"
            ></textarea>
          </div>
        </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick = {updateHandler}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
