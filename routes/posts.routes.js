const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Post = require('../models/Post')
const Country = require('../models/Country')

router.get('/new',isSignedIn, async(req,res)=>{
    const countries = await Country.find()
    res.render('posts/create-post.ejs',{country:countries})
    
})

router.post('/', isSignedIn, async (req, res) => {
    const { title, image, address, postBody, rating, countryName } = req.body
    try {
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
    } catch(error){
 if (error.name === 'ValidationError') {
      const firstKey = Object.keys(error.errors)[0];
      const specificMessage = error.errors[firstKey].message;

      return res.status(400).send('The title and address fields are required');
    }
}
})

router.get('/',isSignedIn,async(req,res)=>{
const allPosts = await Post.find().populate('owner')
res.render('posts/all-posts.ejs',{posts: allPosts})
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

router.get('/country-list',isSignedIn,async(req,res)=>{
const fullObjects = await Post.aggregate([
  {
    $group: {
      _id: '$country', 
      post: { $first: '$$ROOT' } 
    }
  },
  {
    $replaceRoot: { newRoot: '$post' } 
  }
]);
await Post.populate(fullObjects, { path: 'country' });

console.log(fullObjects);
res.render('posts/country-list.ejs', { posts: fullObjects });

})

router.get('/:postId', isSignedIn , async (req,res)=>{
    const foundPost= await Post.findById(req.params.postId).populate('owner country')
    res.render('posts/details.ejs',{post:foundPost})
})

router.get('/by-country/:countryId', async (req,res)=>{
    const postsForCountry = await Post.find({country: req.params.countryId}).populate('country')
    res.render('posts/post-by-country.ejs',{posts: postsForCountry})
})
module.exports = router;

// older code for the country-list route

// const uniqueIds = await Post.distinct('country');
// const fullObjects = await Post.find({ country: { $in: uniqueIds } }).populate('country');
// console.log(fullObjects)
// res.render('posts/country-list.ejs',{posts:fullObjects})