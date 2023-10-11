import ErrorHandler from "../utils/ErrorHandle";

export default (err,_req, res, _next)=>{
    // eiye to aise hi pass kar diya hu.baad mai dekhna hai.
    err.statusCode = err.statusCode || 500
    err.message =err.message || "Internal Server Error"

    //Wrong mongodb id error
    if(err.name === "CastError"){
        const message = `Resources not found with this ID invalid ${err.path}`;
        err = new ErrorHandler(message,400);
    }
    //dublicate key error
    if (err.code ===11000){
        const message = `Duplicate key $(Obeject.keys(err.keyvalue) Entered `;
        err = new ErrorHandler(message, 400);

    }
    //wrong jwt error
    if(err.name === "JsonwebtokenError"){
        const message = `Your url is invalid please try again later`;
        err = new Errorhandler(message,400);

    }
    //jwt get expired
    if (err.name ==="TokenExpiredError"){
        const message = `Your URL is expired `;
        err = new Errorhandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })

}

