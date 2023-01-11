import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
const ReadBook = () => {
    let [book, setBook] = useState([])
    let params = useParams()
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch(`http://localhost:1000/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchdata()
    })
    return (
        <div className="readBook">
            <div className="info">
                <h2 className="title">{book.title}</h2>
                <div className="description">
                    <p><span style={{ fontWeight:"bold" }}>Short Desc: </span>{book.shortDescription}</p>
                    <p><span style={{ fontWeight:"bold" }}>Long Desc: </span>{book.longDescription}</p>
                </div>
            </div>
        </div>

    );
}

export default ReadBook;