const articles = require('../models/articles')

exports.getEn = (req, res) => {
    articles.getNewEN(req, res)
}

exports.getPt = (req, res) => {
    articles.getNewPT(req, res)
}

exports.getEs = (req, res) => {
    articles.getNewES(req, res)
}

exports.getIt = (req, res) => {
    articles.getNewIT(req, res)
}

