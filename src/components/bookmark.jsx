import React from "react";

const BookMark = ({ onToggleBookMark, status, id }) => {
  return (
    <button onClick={() => onToggleBookMark(id)}>
      <i className={"bi bi-bookmark" + (status ? "-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
