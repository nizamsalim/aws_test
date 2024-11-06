"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({
        success: true,
        route: "/",
        status: "working",
    });
});
app.get("/someroute", (req, res) => {
    res.json({
        success: true,
        route: "/someroute",
    });
});
app.get("/withquery", (req, res) => {
    const { q1, q2 } = req.query;
    res.json({
        success: true,
        route: "/withquery",
        queries: {
            q1,
            q2,
        },
    });
});
app.listen(3000, () => {
    console.log("server on 3000");
});
