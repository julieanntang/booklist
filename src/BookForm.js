import { useState } from "react";

function BookForm(props) {

  const [title, set_title] = useState('')
  const [author, set_author] = useState('')
  const [isbn, set_isbn] = useState('')
  const [genre, set_genre] = useState('')
  const [description, set_description] = useState('')
  const [published, set_published] = useState('')
  const [publisher, set_publisher] = useState('')

  const handleSubmit = (e) => {
     e.preventDefault()
     props.addBook({title, author, isbn, genre, description, published, publisher})
     props.setShowForm(false)
     set_title('')
     set_author('')
     set_isbn('')
     set_genre('')
     set_description('')
     set_published('')
     set_publisher('')

  }


  return (
    <div style={{padding:'20px'}}>
      <h1>New Book</h1>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <p>Title</p>
        <input 
          value={title}
          onChange={(e)=> set_title(e.target.value)}
        />
        <p>Author</p>
        <input 
          value={author}
          onChange={(e)=> set_author(e.target.value)}
        />
        <p>isbn</p>
        <input 
          value={isbn}
          onChange={(e)=> set_isbn(e.target.value)}
        />
        <p>Genre</p>
        <input 
          value={genre}
          onChange={(e)=> set_genre(e.target.value)}
        />
        <p>Description</p>
        <input 
          value={description}
          onChange={(e)=> set_description(e.target.value)}
        />
        <p>Published</p>
        <input 
          value={published}
          onChange={(e)=> set_published(e.target.value)}
        />
        <p>Publisher</p>
        <input 
          value={publisher}
          onChange={(e)=> set_publisher(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}


export default BookForm;

const styles = {
  formContainer: {
    width:'600px',
    margin:'20px auto'
  },
}