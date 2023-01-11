import { useState, useEffect } from "react";
import '../styles/bookList.css'
import { useNavigate } from "react-router-dom";

const BookList = () => {
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:1000/books')
            let data = await response.json();
            setBooks(data)
            // console.log(data);
        }
        fetchdata()
    }, [books])

    let handleremove = (id, title) => {
        fetch(`http://localhost:1000/books/${id}`, {
            method: 'DELETE'
        })
        alert(`${title} will be deleted Permanently`)
    }

    let navigate = useNavigate();
    let read = (id) => {
        navigate(`/admin/book-list/${id}`)
    }


    return (
        <div className="booklist">
            <h1>Book list : {books.length}</h1>
            <div className="book_section">

                {books.map(data => (
                    <div className="book">
                        <div className="img">
                            <img width='250px' src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="info">
                            <h2>{data.title}</h2>
                            <h4> <span id="span" > Authors:</span>{data.authors}</h4>
                            <h4><span id="span">Category:</span>{data.categories}</h4>
                            <h4>Page Count: {data.pageCount}</h4>
                            <button onClick={() => read(data.id)} >Read More</button>
                            <button onClick={() => handleremove(data.id, data.title)}>Delete</button>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;