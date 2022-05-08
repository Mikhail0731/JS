const { verify } = require("jsonwebtoken");
const User = require("../models/User");
const { verifyToken, verifyTokenAndAutorization } = require("./verifyToken");

const router = require("express").Router();

//UPDATE

router.put("/:id", verifyTokenAndAutorization, (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true}
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;







/*router.get("/test",(req,res)=>{
    res.send("User test is successful");
});

router.post("/userpost", (req,res)=>{
    const username = req.body.username;
    console.log( "Your user name is " + username);
})
*/