import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  id,
  onDelete,
  onToggleBookMark,
  bookmark,
}) => {
  console.log(id);

  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qualitie) => (
          <Qualitie
            key={qualitie._id}
            name={qualitie.name}
            color={qualitie.color}
          />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <BookMark
          onToggleBookMark={onToggleBookMark}
          id={id}
          status={bookmark}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
