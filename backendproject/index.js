const express = require("express");
const cors = require("cors");
const books = require("./books");

const app = express();

app.use(cors());

PORT = 5000;

app.listen(PORT, ()=> console.log(`Hi the server ran on ${PORT}`));

//get all books
app.get('/api/books', (req,res) => {
    res.send(books);
})

//get specific books by country
// app.get('/api/books/:country', cors(), async (req,res) => {
//     let requestedCountry = req.params.country;
//     for(let book of books){
//         if(book.country === requestedCountry){
//             res.json(book);
//         }
//     }
// })

// app.post('/test', (req, res) => {
//     books.push(req.body);
//     res.send(``)
// })





// app.get('/api/books/:author, (res,req) => {
//     res.send(req.params);
// })



//works
// app.get('/:y', (req, res) => {
//     req.params;
//     res.json(books)
//   })