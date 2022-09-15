module.exports = (req, res, next) => {
    const { pass } = req.query
    if (!pass || pass !== "banana") {
<<<<<<< Updated upstream
        return res..status(400).json("Senha errada!")
    }

    next();
};
=======
        return res.status(400).json("Senha invalida!");
    }

    next();
}
>>>>>>> Stashed changes
