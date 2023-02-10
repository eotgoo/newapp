import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { NavLink } from "react-router-dom";

const Book = ({ book, id }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.thumbnailUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink to={"/books/" + id}>Read more</NavLink>
      </CardActions>
    </Card>
  );
};

export default Book;
