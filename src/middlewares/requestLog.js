module.exports = (req, res, next) => {
<<<<<<< Updated upstream
    console.log('O ip ${req.ip} acessou a rota: ${req.originalUrl}');
=======
    console.log('O ip: ${req.ip} acessou a rota: ${req.orginalUrl}');
    next();
>>>>>>> Stashed changes
};