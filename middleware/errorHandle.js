const errorHandler = (err, req, res, next) => {
    if(res.status){
        res.status(err.status).json({ mssg: err.message });
    } else{
        res.status(500).json({ mssg: err.message})
    }
}

module.exports = errorHandler;