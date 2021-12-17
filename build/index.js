"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get("/api", function (req, res) {
    res.send("our API is workiiiiiing");
});
app.listen(port, function () {
    console.log("our server is running at http://localhost:".concat(port));
});
