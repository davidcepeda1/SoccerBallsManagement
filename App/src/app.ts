import express from 'express';
import path from 'path';
import { setBallRoutes } from './routes/ballRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
setBallRoutes(app);

// Serve frontend
app.use(express.static(path.join(__dirname, 'frontend')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});