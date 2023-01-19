import React from "react";
import Book from "../../Components/Book";
import { Grid } from "@mui/material";
const BookList = ({ books }) => {
  return (
    <Grid container>
      {books.map((book, i) => (
        <Book book={book} id={i} key={i} />
      ))}
    </Grid>
  );
};

export default BookList;
