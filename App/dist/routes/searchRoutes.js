"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSearchRoutes = void 0;
const express_1 = require("express");
const searchController_1 = require("../controllers/searchController");
const router = (0, express_1.Router)();
const searchController = new searchController_1.SearchController();
function setSearchRoutes(app) {
    app.get('/search', searchController.searchUniversities.bind(searchController));
}
exports.setSearchRoutes = setSearchRoutes;
exports.default = router;
