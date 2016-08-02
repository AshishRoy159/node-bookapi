var express = require("express");
var routes = function (Book) {
    var bookRouter = express.Router();
    var bookController = require("../controllers/bookController")(Book, bookRouter);
    
    bookRouter.route('/')
        .post(bookController.post)
        .get(bookController.get);
    bookRouter.route('/:bookId')
        .get(bookController.getOne)
        .put(bookController.putOne)
        .patch(bookController.patchOne)
        .delete(bookController.deleteOne);
    return bookRouter;
};
module.exports = routes;