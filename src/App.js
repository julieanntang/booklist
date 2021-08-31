import axios from "axios";
import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";

const App = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("useEffect called");
    getBooks();
  }, []);

  
  const [showForm, setShowForm] = useState(false)

  const addBook = (book) => {
    books.push(book)
  };

  const deleteBook = (isbn) => {
    let filteredBook = books.filter(book=> book.isbn !== isbn)
    setBooks(filteredBook)
  }

  const getBooks = async () => {
    try {
      let res = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
      console.log(res.data.data);
      setBooks(res.data.data);
    } catch (err) {
      alert("err occured getting book");
      console.log(err);
    }
  };

  const renderBooks = () => {
    if (books.length === 0) {
      return <p>no books</p>;
    }

    return books.map((book) => {
      return (
        <div style={styles.container} key={book.isbn}>
          <h1>{`${book.title}`}</h1>
          <h2>{`${book.author}`}</h2>
          <h3>{`${book.genre}`}</h3>
          <p>{`${book.description}`}</p>
          <h4>{`${book.published} ${book.publisher}`}</h4>
          <h5>{`${book.isbn}`}</h5>
          <div onClick={()=>{deleteBook(book.isbn)}}>delete</div>
        </div>
      );
    });
  };

  console.log("rendering");
  return (
   <div>
      <h1>Book List</h1>
      <div style={styles.appContainer}>
        { showForm && 
        <BookForm books={books} addBook={addBook} setShowForm={setShowForm}/>}
        <button 
          onClick={()=>setShowForm(!showForm)}>toggle new form</button>
      </div>
      {renderBooks()}
    </div>
  );
};
const styles = {
  container: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding: "10px",
    margin: "40px",
  },
};


export default App;