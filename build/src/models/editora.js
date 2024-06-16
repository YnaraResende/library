"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editora = void 0;
var Editora = /** @class */ (function () {
    function Editora(nome, livros) {
        this.nome = nome;
        this.livros = livros;
    }
    Editora.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    return Editora;
}());
exports.Editora = Editora;
