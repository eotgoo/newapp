import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context";

const BookTest = ({ book }) => {
  const { userName, setUserName } = useContext(UserContext);

  //   console.log(name);

  return (
    <div>
      {console.log("Return worked", book)}
      <div>
        <h2>{userName}</h2>
        <h2>{book.title}</h2>
        <img src={book.thumbnailUrl} alt="" />
        <button
          onClick={() => {
            setUserName("Saraa");
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default BookTest;
