const express = require("express")
const app = express()
const request = require("request")
const path = require('path');
const res = require("express/lib/response");
const { nextTick } = require("process");
const {router} = require('./rout')
 data3 = "";

app.use(express.static(__dirname + "/public"))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/', router)

app.listen(7000, "localhost", ()=>{

console.log("listining")

})