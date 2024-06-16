"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
var typeorm_1 = require("typeorm");
var Book_1 = __importDefault(require("./Book"));
var Publisher = /** @class */ (function () {
    function Publisher(name) {
        this.name = name;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Publisher.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Publisher.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Book_1.default; }, function (book) { return book.publisher; }),
        __metadata("design:type", Array)
    ], Publisher.prototype, "books", void 0);
    Publisher = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String])
    ], Publisher);
    return Publisher;
}());
exports.Publisher = Publisher;
