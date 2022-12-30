const {verify} = require("jsonwebtoken")


module.exports={
    checkToken:(req,res,next)=>{
        let token= req.get("authorization")
        if(token){
            token=token.replace(/^Bearer\s/, '');
            // token=token.slice(7)
            verify(token,"qwe123",(err,decoded)=>{
                if(err){
                    res.json({
                        success:0,
                        message:"invalid token"
                    })
                }
                else{
                    next();
                }
            })
        }else{
            res.json({
                success:0,
                message:"unauthorized access"
            })
        }
    }
}