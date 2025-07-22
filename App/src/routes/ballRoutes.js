"use strict";
exports.__esModule = true;
exports.setBallRoutes = void 0;
var ballController_1 = require("../controllers/ballController");
function setBallRoutes(app) {
    var controller = new ballController_1.BallController();
    app.get('/api/balls', controller.getBalls);
    app.get('/api/balls/:id', controller.getBall);
    app.post('/api/balls', controller.createBall);
    app.put('/api/balls/:id', controller.updateBall);
    app["delete"]('/api/balls/:id', controller.deleteBall);
}
exports.setBallRoutes = setBallRoutes;
