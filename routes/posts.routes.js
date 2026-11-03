const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Post = require('../models/Post')
const Country = require('../models/Country')

router.get('/new',isSignedIn, async(req,res)=>{
    const countries = await Country.find()
    res.render('posts/create-post.ejs',{country:countries})
})

router.post('/',isSignedIn, async (req,res)=>{
    const {title , image, address, postBody, rating, country} = req.body
const createdPost = await Post.create({
    title: title,
    image: image,
    address: address,
    postBody: postBody,
    rating: rating,
    owner: req.session.user._id,
    country: country
})
res.redirect('/Posts')
})

router.get('/',isSignedIn,async(req,res)=>{
const allPosts = await Post.find().populate('owner')
res.render('posts/all-posts.ejs',{posts: allPosts})
})

router.get('/:postId', isSignedIn , async (req,res)=>{
    const foundPost= await Post.findById(req.params.postId).populate('owner')
    res.render('posts/details.ejs',{post:foundPost})
})

module.exports = router;