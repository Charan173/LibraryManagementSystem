import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css'
const AddBook = () => {

    let[title,setTitle]=useState("")
    let[categories,setCategories]=useState("")
    let[authors,setAuthor]=useState("")
    let[pageCount,setPage]=useState("")
    let[shortDescription,setShort]=useState("")
    let[longDescription,setLong]=useState("")
    let[thumbnailUrl,setUrl]=useState("")

let navigate=useNavigate();

    let HandleSubmit=(e)=>{
        e.preventDefault();
    let bookData={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
        fetch('http://localhost:1000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')

    }
    return ( 
        <div className="addBook">
            <h1>Add a book</h1>
            <div className="form">
                <form action="" onSubmit={HandleSubmit}>
                  <div style={{margin:"10px"}} className="title">
                   <input style={{width:"250px", height:"30px", textAlign:"center"}}  value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                  </div>
                  <div style={{margin:"10px"}} className="authors">
                  <input style={{width:"250px", height:"30px", textAlign:"center"}}  value={authors} onChange={(e)=>setAuthor(e.target.value)} type="text" required placeholder="authors of the book" />
                  </div>
                  <div style={{margin:"10px"}} className="categories">
                  <input style={{width:"250px", height:"30px", textAlign:"center"}}  value={categories} onChange={(e)=>setCategories(e.target.value)} type="text" required placeholder="categories of the book" />
                  </div>
                  <div style={{margin:"10px"}} className="pageCount">
                  <input style={{width:"250px", height:"30px", textAlign:"center"}}  value={pageCount} onChange={(e)=>setPage(e.target.value)} type="text" required placeholder="pagecount of the book" />
                  </div>
                  <div style={{margin:"10px"}} className="shortDescription">
                  <textarea style={{width:"450px", height:"100px", textAlign:"center"}}  value={shortDescription} onChange={(e)=>setShort(e.target.value)} type="text" required placeholder="short description of the book" />
                  </div>
                  <div style={{margin:"10px"}} className="longDescription">
                  <textarea style={{width:"450px", height:"100px", textAlign:"center"}}  value={longDescription} onChange={(e)=>setLong(e.target.value)} type="text" required placeholder="long description of the book" />
                  </div>
                  <div style={{margin:"10px"}} className="thumbnailUrl">
                  <input style={{width:"250px", height:"30px", textAlign:"center"}}  value={thumbnailUrl} onChange={(e)=>setUrl(e.target.value)} type="text" required placeholder="thumbnailUrl of the book" />
                  </div>
                  <button style={{width:"150px", height:"30px", textAlign:"center", backgroundColor:"green"}} >Add Books</button>
                </form>
            </div>

        </div>
     );
}
 
export default AddBook;