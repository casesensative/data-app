import React from 'react';


const PageCounter = (props) => {
  return (
    <div className="pagecounter">
      <h3>
      {props.currentUser}/{props.userArr.length}
      </h3>
    </div>
  )
}

export default PageCounter;