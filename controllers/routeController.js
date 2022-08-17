const express = require('express');
const router = express.Router();
const viewController = require('./viewController');
const dataController = require('./dataController');

// add routes

// Seed
router.get('/seed', dataController.seed, viewController.redirectHome);

//  Index
router.get('/', dataController.index, viewController.index);

// New
router.get('/new', viewController.new);

// Delete
router.delete(
  '/:id',
  dataController.delete,
  viewController.redirectHome,
);

// Update
router.put(
  '/:id',
  dataController.update,
  viewController.redirectShow,
);

// Create
router.post('/', dataController.create, viewController.redirectHome);

// Edit
router.get('/:id/edit', dataController.show, viewController.edit);

// Show
router.get('/:id', dataController.show, viewController.show);

// export router
module.exports = router;
