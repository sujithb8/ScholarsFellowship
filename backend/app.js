const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const path = require('path');

//import routes
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const univRoutes = require('./routes/univRoutes')
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));



//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
extended:true
}));
app.use(cookieParser());
app.use(cors());


//routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api',univRoutes);

__dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

//error handler
app.use(errorHandler);


//port
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log("listening on port: " + port);
});