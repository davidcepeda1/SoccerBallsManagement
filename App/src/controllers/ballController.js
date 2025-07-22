"use strict";
exports.__esModule = true;
exports.BallController = void 0;
var balls = [];
var currentId = 1;
function calculateFinalPrice(ball) {
    var multiplier = 1;
    if (ball.material === 'Leather')
        multiplier += 0.5;
    if (ball.size >= 5)
        multiplier += 0.2;
    return ball.basePrice * multiplier;
}
var BallController = /** @class */ (function () {
    function BallController() {
    }
    BallController.prototype.getBalls = function (req, res) {
        res.json(balls);
    };
    BallController.prototype.getBall = function (req, res) {
        var id = Number(req.params.id);
        var ball = balls.find(function (b) { return b.id === id; });
        if (!ball) {
            res.status(404).json({ error: 'Ball not found' });
            return;
        }
        res.json(ball);
    };
    BallController.prototype.createBall = function (req, res) {
        var _a = req.body, brand = _a.brand, material = _a.material, size = _a.size, basePrice = _a.basePrice;
        if (!brand || !material || !size || !basePrice) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        var finalPrice = calculateFinalPrice({ brand: brand, material: material, size: size, basePrice: basePrice });
        var ball = { id: currentId++, brand: brand, material: material, size: size, basePrice: basePrice, finalPrice: finalPrice };
        balls.push(ball);
        res.status(201).json(ball);
    };
    BallController.prototype.updateBall = function (req, res) {
        var id = Number(req.params.id);
        var ballIndex = balls.findIndex(function (b) { return b.id === id; });
        if (ballIndex === -1) {
            res.status(404).json({ error: 'Ball not found' });
            return;
        }
        var _a = req.body, brand = _a.brand, material = _a.material, size = _a.size, basePrice = _a.basePrice;
        if (!brand || !material || !size || !basePrice) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        var finalPrice = calculateFinalPrice({ brand: brand, material: material, size: size, basePrice: basePrice });
        balls[ballIndex] = { id: id, brand: brand, material: material, size: size, basePrice: basePrice, finalPrice: finalPrice };
        res.json(balls[ballIndex]);
    };
    BallController.prototype.deleteBall = function (req, res) {
        var id = Number(req.params.id);
        balls = balls.filter(function (b) { return b.id !== id; });
        res.status(204).send();
    };
    return BallController;
}());
exports.BallController = BallController;
