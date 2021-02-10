const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

require('dotenv').config();
const mongoURL=process.env.MONGO_URL;
const MongoUtil=require('./MongoUtil')

// create an instance of express app
let app=express()

app.set('view engine','hbs')
// static folder
app.use(express.static('public'))
// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')
// enable forms
app.use(express.urlencoded({
    'extended':false
}));

async function main(){
    let db =await MongoUtil.connect(mongoURL, 'tgc11_recipes')
    app.get('/ingredients/create',(req,res)=>{
        res.render('ingredients/create')
    })

    app.post('/ingredients/create',async (req,res)=>{
        await db.collection('recipes').insertOne({
            'name':req.body.ingredientName
        })
        res.send('Ingredient has been added');
    })
}
main()


app.listen(3000, ()=>{
    console.log("Server has started")
}
)
