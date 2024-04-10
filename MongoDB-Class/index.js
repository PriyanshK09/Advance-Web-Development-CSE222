const express =require('express');
const mongoose = require ('mongoose');
const app =express();
const Port = 3004;
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/user_management_db')
.then(()=>console.log('connected to Mongodb'))
.catch((err)=> console.log('Error connectiong to MongoDb:', err));

//user schema
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
});

app.post('/users', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        .then(() => res.status(201).json(newUser))
        .catch(err => res.status(400).json({ message: err.message }));
});

// Example Body for Postman 
// {
//     "name": "John Doe",
//     "email": "johndoe@yahoo.com",
//     "password": "password"
// }

// How to Postman usage
// 1. Open Postman
// 2. Select POST
// 3. Enter URL: http://localhost:3004/users
// 4. Select Body
// 5. Select Raw
// 6. Select JSON
// 7. Enter the example body above
// 8. Click Send

const User = mongoose.model('User', userSchema);
app.get('/users',(req,res)=>{
    User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({message: err.message} ) );
});
app.listen(Port, ()=>{
    console.log("Server is running on port", Port);
});