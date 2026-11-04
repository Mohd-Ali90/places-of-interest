const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Post = require('../models/Post')
const Country = require('../models/Country')

router.get('/new',isSignedIn, async(req,res)=>{
    const countries = await Country.find()
    res.render('posts/create-post.ejs',{country:countries})
})

router.post('/',isSignedIn, async (req,res)=>{
    const {title , image, address, postBody, rating, countryName} = req.body
const createdPost = await Post.create({
    title: title,
    image: image,
    address: address,
    postBody: postBody,
    rating: rating,
    owner: req.session.user._id,
    country: countryName
})
res.redirect('/Posts')
})

router.get('/',isSignedIn,async(req,res)=>{
const allPosts = await Post.find().populate('owner')
res.render('posts/all-posts.ejs',{posts: allPosts})
})

router.get('/:postId', isSignedIn , async (req,res)=>{
    const foundPost= await Post.findById(req.params.postId).populate('owner country')
    console.log(foundPost)
    res.render('posts/details.ejs',{post:foundPost})
})

router.delete('/:postId', isSignedIn, async (req,res)=>{
    const foundPost =await Post.findById(req.params.postId)
    if (!foundPost.owner.equals(req.session.user._id)){
        return res.send('Action not allowed')
    }
    await Post.findByIdAndDelete(req.params.postId)
    res.redirect('/posts')
})

 router.get('/:postId/edit', isSignedIn , async (req,res)=>{
        const foundPost = await Post.findById(req.params.postId).populate('country')
        const countries = await Country.find()
        res.render('posts/edit-post.ejs',{post:foundPost, country:countries})
    })

    router.put('/:postId' , isSignedIn , async (req,res)=>{
        req.body.country = req.body.countryName
    const updatedPost = await Post.findByIdAndUpdate(req.params.postId, req.body)
        res.redirect('/posts')
    
    })
    module.exports = router;

module.exports = router;