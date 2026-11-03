const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Post = require('../models/Post')

router.get('/new',isSignedIn,(req,res)=>{
    res.render('posts/create-post.ejs')
})
module.exports = router;