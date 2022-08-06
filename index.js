const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const port = process.env.PORT || 5000;
require('dotenv').config()


mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.log(err));


mongoose.Promise = global.Promise;

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

