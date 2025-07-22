"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const ballRoutes_1 = require("./routes/ballRoutes");

const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;

app.use(express_1.default.json());

// Define the route for ballRoutes
(0, ballRoutes_1.setBallRoutes)(app);

// Serve the static files in the 'frontend' directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'frontend')));

// If you need to directly serve the 'index.html' file when navigating to the root
app.get('/', (req, res) => {
  res.sendFile(path_1.default.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
