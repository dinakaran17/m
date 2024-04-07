const express=require('express')

const router=express.Router()

router.get('/',async(req,res)=>
{
    const camp=await camp.find({})
    res.render('home',{camp})
})
router.get('/new',(req,res)=>
{
    res.render('new')
})
router.post('/new',async(req,res)=>
{
    const camp=await new U.findById(req.body)
    camp.save()
})
module.exports=router;