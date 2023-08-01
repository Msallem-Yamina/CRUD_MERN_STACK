
const express = require ('express'),
      app = express(),
      port = 3000,
      userRoute = require ('./Routes/User'),
      conjugaisonRoute= require ('./Routes/ConjugaisonRoute'),
      mongoose = require('mongoose'),
      cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello word')
})

app.use('/user', userRoute)
app.use('/conjugaison', conjugaisonRoute)

mongoose.connect('mongodb://127.0.0.1:27017/gramaticaldb',
    {
        useNewUrlParser: true,
    }
)
const db = mongoose.connection;

db.on ('error', console.error.bind(console, 'connection error'))
db.once('open', function(){
    console.log('database connected successefully')
})
app.listen(port, ()=> {
    console.log(` app listenning at http://localhost:${port}`)
})