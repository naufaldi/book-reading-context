import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import BookContextProvider from "./context/BookContext";
import BookList from "./component/BookList";
import BookForm from "./component/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
