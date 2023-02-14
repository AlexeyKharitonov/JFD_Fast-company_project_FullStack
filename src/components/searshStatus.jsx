import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    if (lastOne === 1) return "человек тусанет";
    return "человек тусанет";
  };
  return (
    <h1>
      <span className={"badge bg-" + (length > 0 ? "primary" : "danger")}>
        {length > 0
          ? `${length} ${renderPhrase(length)} с тобой сегодня`
          : "Никто не тусанет с тобой"}
      </span>
    </h1>
  );
};

export default SearchStatus;
