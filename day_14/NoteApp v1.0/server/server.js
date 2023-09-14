const express = require("express");
const cors = require('cors')
const app = express();
const cookies = require('cookie-parser')


require('dotenv').config();

const PORT = process.env.PORT;
const DB = process.env.DB;




app.use(express.json(), express.urlencoded({ extended: true }), cors(), cookies());
require('./config/mongoose.config')(DB)
require('./routes/notes.routes')(app)
require('./routes/users.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀🚀`))
