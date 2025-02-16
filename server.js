import express from 'express';

const app = express()


app.get( '/dados', (req,res) => {
    res.send("DEU CERTO O GET!");
}) 

app.post( '/dados', (req,res) => {
    res.send("DEU CERTO O POST!");
}) 

app.put( '/dados', (req,res) => {
    res.send("DEU CERTO O PUT!");
}) 

app.patch( '/dados', (req,res) => {
    res.send("DEU CERTO O PATCH!");
}) 

app.delete( '/dados', (req,res) => {
    res.send("DEU CERTO O DELETE!");
}) 

app.listen(3000);