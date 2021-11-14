module.exports = app => {
    const controlador = require("../controladores/controller.js");

    var router = require("express").Router();

    router.get("/en", controlador.getEn);

    router.get("/pt", controlador.getPt);

    router.get("/es", controlador.getEs);

    router.get("/it", controlador.getIt);

    app.use('/news', router);
};