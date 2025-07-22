"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var ballRoutes_1 = require("./routes/ballRoutes");
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 3000;
app.use(express_1["default"].json());
(0, ballRoutes_1.setBallRoutes)(app);
// Serve frontend
app.use(express_1["default"].static(path_1["default"].join(__dirname, 'frontend')));
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
