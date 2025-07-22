import { Request, Response } from 'express';
import { Ball } from '../models/Ball';
let balls: Ball[] = [];
let currentId = 1;

function calculateFinalPrice(ball: Omit<Ball, 'id' | 'finalPrice'>): number {
    let multiplier = 1;
    if (ball.material === 'Leather') multiplier += 0.5;
    if (ball.size >= 5) multiplier += 0.2;
    return ball.basePrice * multiplier;
}

export class BallController {
    public getBalls(req: Request, res: Response): void {
        res.json(balls);
    }

    public getBall(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const ball = balls.find(b => b.id === id);
        if (!ball) {
            res.status(404).json({ error: 'Ball not found' });
            return;
        }
        res.json(ball);
    }

    public createBall(req: Request, res: Response): void {
        const { brand, material, size, basePrice } = req.body;
        if (!brand || !material || !size || !basePrice) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        const finalPrice = calculateFinalPrice({ brand, material, size, basePrice });
        const ball: Ball = { id: currentId++, brand, material, size, basePrice, finalPrice };
        balls.push(ball);
        res.status(201).json(ball);
    }

    public updateBall(req: Request, res: Response): void {
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

    public deleteBall(req: Request, res: Response): void {
        const id = Number(req.params.id);
        balls = balls.filter(b => b.id !== id);
        res.status(204).send();
    }
}