"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LibraryRoutes_1 = __importDefault(require("../routes/LibraryRoutes"));
var router = function (app) {
    app.use('/library', LibraryRoutes_1.default);
};
exports.default = router;
