"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.set("view engine", "ejs");
app.get("/", (req, res, next) => {
    res.render("something");
});
app.listen(12345, () => { console.log("server running"); });
