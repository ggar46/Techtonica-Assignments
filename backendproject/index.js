const express = require("express");
const cors = require("cors");
const tvprograms = require("./tvprograms");

const app = express();

app.use(cors());

const PORT = 5000;


//get all books
app.get('/', (req,res) => {
    return res.json(tvprograms);
})

//get one book
app.get('/api/tvprograms/:showID', cors(), async (req,res) => {
    //returns number entered
    let requestedShow = req.params.showID;
    for(let i=0; i<tvprograms.length; i++){
        if(tvprograms[i].label === requestedShow){
            return res.json(tvprograms[i]);
        }
    }
})

 

app.listen(PORT, ()=> console.log(`Hi the server ran on ${PORT}`));
