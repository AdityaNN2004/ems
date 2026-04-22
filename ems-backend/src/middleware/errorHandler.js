const notFound = (req,res,next)=>{
    res.status(404)
    next(new Error("Not Found"))
}

const errorHandler = (err,req,res,next)=>{
    res.status(500).json({message: err.message})
}

module.exports = {notFound,errorHandler}