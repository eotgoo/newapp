import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import { books } from "./data";
import Search from "./Components/Search";
import { useState } from "react";
import { UserContext } from "./context";
function App() {
  const [userName, setUserName] = useState("Naraa");
  const [bookList, setBookList] = useState(books);
  const SearchClick = (e) => {
    const chnge = books.filter((book) =>
      book.title.toLowerCase().includes(e.target.value)
    );
    setBookList(chnge);
  };
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <Search handleChange={SearchClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList books={bookList} />} />
        <Route path="/books/:id" element={<BookDetail books={books} />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
