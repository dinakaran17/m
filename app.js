if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express=require('express')
const app=express()
const path=require('path')
const ejsMate=require('ejs-mate')
const r=require('./router/c')
const mongoose=require('mongoose')
mongoose.connect(process.env.Database,{useNewUrlParser:true})
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.engine('ejs',ejsMate)
app.use('/',r)
app.listen(process.env.PORT || 3000)