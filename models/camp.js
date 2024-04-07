const mongoose=require('mongoose')

const sh=new mongoose.Schema({
    name:String
})
const U=mongoose.model('U',sh)
module.exports=U;