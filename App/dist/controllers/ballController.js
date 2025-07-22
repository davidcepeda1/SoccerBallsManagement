"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BallController = void 0;
let balls = [];
let currentId = 1;
function calculateFinalPrice(ball) {
    let multiplier = 1;
    if (ball.material === 'Leather')
        multiplier += 0.5;
    if (ball.size >= 5)
        multiplier += 0.2;
    return ball.basePrice * multiplier;
}
class BallController {
    getBalls(req, res) {
        res.json(balls);
    }
    getBall(req, res) {
        const id = Number(req.params.id);
        const ball = balls.find(b => b.id === id);
        if (!ball) {
            res.status(404).json({ error: 'Ball not found' });
            return;
        }
        res.json(ball);
    }
    createBall(req, res) {
        const { brand, material, size, basePrice } = req.body;
        if (!brand || !material || !size || !basePrice) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        const finalPrice = calculateFinalPrice({ brand, material, size, basePrice });
        const ball = { id: currentId++, brand, material, size, basePrice, finalPrice };
        balls.push(ball);
        res.status(201).json(ball);
    }
    updateBall(req, res) {
        const id = Number(req.params.id);
        const ballIndex = balls.findIndex(b => b.id === id);
        if (ballIndex === -1) {
            res.status(404).json({ error: 'Ball not found' });
            return;
        }
        const { brand, material, size, basePrice } = req.body;
        if (!brand || !material || !size || !basePrice) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        const finalPrice = calculateFinalPrice({ brand, material, size, basePrice });
        balls[ballIndex] = { id, brand, material, size, basePrice, finalPrice };
        res.json(balls[ballIndex]);
    }
    deleteBall(req, res) {
        const id = Number(req.params.id);
        balls = balls.filter(b => b.id !== id);
        res.status(204).send();
    }
}
exports.BallController = BallController;
