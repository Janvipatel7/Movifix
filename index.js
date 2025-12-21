const express = require("express");
const connectDb = require("./config/db.js");
const adminRouter = require("./routes/adminRoutes.js");
const clientRouter = require("./routes/clientRoutes.js");

const app = express();
const PORT = 7000;
connectDb();

app.set('view engine' , 'ejs')
app.use(express.urlencoded({ extended : true }));
app.use(express.static('public'))
app.use('/uploads' , express.static('uploads'))

app.use('/' , clientRouter)
app.use('/admin', adminRouter)

app.listen(PORT , (error) => {
    if(error){
        console.log("Server not valid..")
    }
    console.log(`Server is running at http://localhost:${PORT}`)
})