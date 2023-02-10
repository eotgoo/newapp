import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BookTest from "../../Components/BookTest";
import Box from "@mui/material/Box";

const BookDetail = ({ books }) => {
  const loc = useParams();
  const book = books[loc.id];
  return (
    <BookTest book={book} />
    // <Box>
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image={book.thumbnailUrl}
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {book.title}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {book.shortDescription}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    // </Box>
  );
};

export default BookDetail;
