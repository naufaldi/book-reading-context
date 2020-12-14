import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="Navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to geth throught ... </p>
    </div>
  );
};

export default Navbar;
