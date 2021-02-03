const express = require('express');
const hbs = require('hbs'); // <-- NOTE 1

/* 1. SETUP EXPRESS */
let app = express();

// 1B. SETUP VIEW ENGINE
app.set('view engine', 'hbs'); // <-- NOTE 2

// tell Express where to find static files
app.use(express.static('public'))

// 2. ROUTES

app.get('/', function (req, res) {
    res.render('index.hbs');
})

app.get('/greeting/:name', (req,res)=>{
    let fullname = req.params.name;
    res.render('welcome.hbs', {
        'fullname': fullname
    })
})

// Q3. Use Math.random()to generate a number between 1 to 1000
// and send it to a view file name lucky.hbs and inform the user
// that is their lucky number

app.get('/:lucky', (req,res)=>{
    let luckyNumber=Math.floor(Math.random()*1000)
    res.render('lucky.hbs', {
        'luckyNumber': luckyNumber
    })
})

// Q4. add a css file that will change the background color of page
// to purple and a javascript file that will alert() function
// to show 'woof'


// 3. RUN SERVER
app.listen(3000, () => console.log("Server started"))
