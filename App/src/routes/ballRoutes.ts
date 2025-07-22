import { Express } from 'express';
import { BallController } from '../controllers/ballController';

export function setBallRoutes(app: Express) {
    const controller = new BallController();
    app.get('/api/balls', controller.getBalls);
    app.get('/api/balls/:id', controller.getBall);
    app.post('/api/balls', controller.createBall);
    app.put('/api/balls/:id', controller.updateBall);
    app.delete('/api/balls/:id', controller.deleteBall);
}