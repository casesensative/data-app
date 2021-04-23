import React from 'react';

const Buttons = (props) => {

  return (
    <div className="buttons">
      <div className="previous">
        <button onClick={props.prevUserFn} className="navbuttons">Previous</button>
      </div>
      <div className="edits">
        <button className="editbutton" onClick={props.deleteUserFn}>Delete</button>
      </div>
      <div className="next">
        <button onClick={props.nextUserFn} className="navbuttons">Next</button>
      </div>
    </div>
  )
}

export default Buttons;