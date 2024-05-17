const express = require('express');
const WebTagRouter = express.Router();
const WebTagController = require('../../controller/web/TagController');

WebTagRouter.get('/webapi/tag/list',WebTagController.getTagList)

module.exports = WebTagRouter;