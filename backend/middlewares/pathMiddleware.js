const express = require('express')

const pathMiddleware  = async (req, res, next) => {
    console.log(req.path,req.method)
    next()
}

module.exports = pathMiddleware