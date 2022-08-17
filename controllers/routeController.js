const express = require('express');
const router = express.Router();
const viewController = require('./viewController');
const dataController = require('./dataController');

// add routes

// Seed
router.get(
  'products/seed',
  dataController.seed,
  viewController.redirectHome,
);

//  Index
router.get('/products', dataController.index, viewController.index);

// New
router.get('/products/new', viewController.new);

// Delete
router.delete(
  '/products/:id',
  dataController.delete,
  viewController.redirectHome,
);

// Update
router.put(
  'products/:id',
  dataController.update,
  viewController.redirectShow,
);

// Create
router.post(
  'products/',
  dataController.create,
  viewController.redirectHome,
);

// Edit
router.get(
  'products/:id/edit',
  dataController.show,
  viewController.edit,
);

// Show
router.get('products/:id', dataController.show, viewController.show);

// export router
module.exports = router;
