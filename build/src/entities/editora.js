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
exports.Editora = void 0;
var typeorm_1 = require("typeorm");
var livro_1 = __importDefault(require("./livro"));
var Editora = /** @class */ (function () {
    function Editora(nome, livros) {
        this.nome = nome;
        this.livros = livros;
    }
    Editora.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Editora.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Editora.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return livro_1.default; }, function (livro) { return livro.editora; }),
        __metadata("design:type", Array)
    ], Editora.prototype, "livros", void 0);
    Editora = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, Array])
    ], Editora);
    return Editora;
}());
exports.Editora = Editora;
