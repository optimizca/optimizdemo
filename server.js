const express = require('express')
//const connectDB = require('./config/db')
const app = express()

//connect to Databse (later usage)
//connectDB();

// Init Middleware
app.use(express.json({extended: false}))

app.get('/',(req,res) => res.send('API Running '));



app.use('/api/appd',require('./routes/api/appd'));

app.use('/api/snow',require('./routes/api/snow'));



const PORT=process.env.PORT || 5000


app.listen(PORT,() => console.log(`Server started on port ${PORT}`));