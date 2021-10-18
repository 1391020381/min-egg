"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var loader_1 = require("./loader");
var app = new koa_1.default();
// app.use(router.routes())
app.use(loader_1.loader());
app.listen(3000, '127.0.0.1', function () {
    console.log("\u670D\u52A1\u5668\u5728\u8FD0\u884C:http://localhost:3000");
});
