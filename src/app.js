import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searshStatus";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const handleToggleBookMark = (id) => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user._id === id ? { ...user, bookmark: !user.bookmark } : user
      )
    );
  };
  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        onDelete={handleDelete}
        users={users}
        onToggleBookMark={handleToggleBookMark}
      />
    </>
  );
};

export default App;
