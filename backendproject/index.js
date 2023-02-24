const express = require("express");
const cors = require("cors");
const books = require("./books");
const BOOKS = require("./books");

const app = express();

app.use(cors());

const PORT = 5000;


//get all books
app.get('/', (req,res) => {
    return res.send(books);
})

//get one book
app.get('/api/books/:bookID', cors(), async (req,res) => {
    //returns number entered
    let requestedBook = req.params.bookID;
    for(let i=0; i<books.length; i++){
        if(books[i].label === requestedBook){
            return res.send(books[i]);
        }
    }
})

 

app.listen(PORT, ()=> console.log(`Hi the server ran on ${PORT}`));
