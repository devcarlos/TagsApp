const express = require('express');
const controller = require('../controllers/tag.controller');

// module.exports = app => {
//   app
//     .route('/tags')
//     .get(controller.listTags)
//     .post(controller.createTag);

//   app
//     .route('/tags/:tagId')
//     .get(controller.readTag)
//     .put(controller.updateTag)
//     .delete(controller.deleteTag);
// };

const router = express.Router();

/** GET/POST /api/tags/ - List/Create Tags */
router
.route('/')
.get(controller.listTags)
.post(controller.createTag);

/** GET/PUT/DELETE /api/tags/:tagId - Read/Update/Delete Tags */
router
.route('/:tagId')
.get(controller.readTag)
.put(controller.updateTag)
.delete(controller.deleteTag);

module.exports = router;