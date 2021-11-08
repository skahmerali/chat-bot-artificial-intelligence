import express from "express";
import cors from "cors"
// import axios from "axios";
import morgan from "morgan";

const app = express();
// const axios = axios();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan());




let users = [];


app.post((req, res, next) => {
    console.log("user is here", req.body)
    res.send(req.body);
    next();
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.get('/user:id', (req, res) => {
    if (users[req.params.id]) {
        res.send(users[req.params.id])
    } else {

        res.send("user not found")
    }

})
app.post('/user', (req, res) => {
    if (!req.body.name || !req.body.email || req.body.password) {
        res.status(400).send("invalid data");
    } else {
        users.push({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

        })

        res.send("user created successfully")
    }
})
app.put('user/:id', (req, res) => {
    if (users[req.params.id]) {
        if (req.body.name) {
            users[req.params.id].name = req.body.name;
        } if (req.body.email) {
            users[req.params.id].email = req.body.email;
        }
        //     if(req.body.name){
        //     users[req.params.id].name=req.body.;
        // }
        if (req.body.password) {
            users[req.params.id].password = passoword;

        }
        res.send(users[req.params.id])

    }
    else {
        res.send("user not found")
    }

})

app.delete('/user/:id', (req, res) => {

    if (users[req.params.id]) {
        users[req.params.id] === {};
        res.send("userdeleted")
    }else{
        res.send("user not found")
    }
})

app.get('/home', (req, res) => {
    res.send('here is your home')
  })
//   app.get('/', (req, res) => {
//     res.send('Hi I am a hello world Server program')
//   })
  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
// axios.get("/user")
//     .then((res) => {
//         res.data.user
//     })
