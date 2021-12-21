const express = require("express")
const request = require("request")
const res = require("express/lib/response");
const router = express.Router()

var data3 = ""
data5 = ""

fuc2 = (req,res,next)=>{

    request.get("https://api.covid19api.com/summary", async(err, res, idk)=>{
   data = res.toJSON()
   
   console.log(typeof(data))
   
   data2 = JSON.parse(data.body)
   
   data3 = data2.Countries
   
   next();
   })  
   }
   
   router.get('/',fuc2, (req,res)=>{
   
        res.render('index', {
           data3
       }) 
      
   
   })
   
   
   
   fuc1 = async (req,res,next)=>{
      request.get("https://api.rootnet.in/covid19-in/stats/latest", (err, res, idk) => {
   
           data4 = JSON.parse(res.body);
           
           data5 = data4.data.regional;
   
           next()
   
       })
   
   }
   
   
   router.get('/covidindia',fuc1, (req,res)=>{
   
   res.render('covidIndia', {
       data5
   })
   
   })

   router.get("/contact", (req,res)=>{

res.render('contact')

   })

   module.exports = {router}