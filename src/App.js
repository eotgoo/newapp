import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import { books } from "./data";
import Search from "./Components/Search";
import { useState } from "react";
function App() {
  const [bookList, setBookList] = useState(books);
  const SearchClick = (e) => {
    const chnge = books.filter((book) =>
      book.title.toLowerCase().includes(e.target.value)
    );
    setBookList(chnge);
  };
  return (
    <div className="App">
      <Search handleChange={SearchClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList books={bookList} />} />
        <Route path="/books/:id" element={<BookDetail books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
