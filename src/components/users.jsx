import React from "react";
import User from "./user";

const Users = (props) => {
  /*
  props = {
    onDelete: (user.id => ...),
    onToggleBookMark:   id => ...,
    users: [
      {_id: '2342re', name: "Джон Дориан", profession: professions.doctor},
      {_id: '223423342re', name: "н Дориан", profession: professions.doctor},
      {_id: '2sf23r342re', name: "жон Дориан", profession: professions.waiter},
      {_id: '234324fdsaf2re', name: "Джо Дориан", profession: professions.doctor},
      {_id: '234324f3423dsaf2re', name: "Джоff Дориан", profession: professions.waiter},
    ]
  }
  */

  return (
    <>
      {props.users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качество</th>
              <th>Профессия</th>
              <th>Встретился, раз</th>
              <th>Оценка</th>
              <th>Избранное</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => (
              <User
                key={user._id}
                // {...user}
                name={user.name}
                qualities={user.qualities}
                profession={user.profession}
                completedMeetings={user.completedMeetings}
                rate={user.rate}
                id={user._id}
                onDelete={props.onDelete}
                onToggleBookMark={props.onToggleBookMark}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Users;
