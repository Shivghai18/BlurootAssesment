const express=require('express');
const router=express.Router();
const User= require('../models/githubuser.model.js');

//Saves user to the database
router.route("/gituser").post((req,res)=>{
    try{ 
    const login=req.body.login;
    const html_url=req.body.html_url;
    const location=req.body.location;
    const newGitUser=new User({
        login,html_url,location
    });
    
    newGitUser.save();
}
catch(err){
        res.status(500).send('SERVER ERROR');
    }
})

//Q4: Generate Leads
router.post("")

router.get("/getleads",async(req,res) =>{
    try{
    let storedUsers =await User.find();
    
    res.json(storedUsers)
    }catch(error)
    {
        res.send(error)
    }
    })

//Q3: Get Leads->service getting data based on the city name
router.get("/getleads/:location",async(req,res) =>{
    try{
    let storedUsers =await User.find();
        const newarr = storedUsers.filter(item=>{
           return item.location == req.params.location
        })
        res.json(newarr)
    }catch(error)
        {
            res.send(error)
        }
    })

    router.get('/generateleads', function(req, res, next) {
        request({
          uri: 'https://api.github.com/search/users',
        //   qs: {
        //     location: 'toronto',
        //     per_page: '5'
        //   }
        }).pipe(res);
        console.log(res);
      });
module.exports = router;