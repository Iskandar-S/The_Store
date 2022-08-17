const Product = require('../models/product');
const productsData = require('../utilities/seed');

const dataController = {
  async seed(req, res, next) {
    await Product.deleteMany({});
    await Product.create(productsData);
    next();
  },
  index(req, res, next) {
    Product.find({}, (error, allProducts) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.products = allProducts;
        next();
      }
    });
  },
  create(req, res, next) {
    Product.create(req.body, (error, createdProduct) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.product = createdProduct;
        next();
      }
    });
  },
  show(req, res, next) {
    Product.findById(req.params.id, (error, foundProduct) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.product = foundProduct;
        next();
      }
    });
  },
  update(req, res, next) {
    Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedProduct) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.product = updatedProduct;
          next();
        }
      },
    );
  },
  delete(req, res, next) {
    Product.findByIdAndDelete(
      req.params.id,
      (error, deletedProduct) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.product = deletedProduct;
          next();
        }
      },
    );
  },
};

module.exports = dataController;
