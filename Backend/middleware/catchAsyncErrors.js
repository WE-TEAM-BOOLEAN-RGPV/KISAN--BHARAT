module.exports = (theFUN) =>(req,res,next) =>{
    Promise.resolve(theFUN(req,res,next)).catch(next);
}