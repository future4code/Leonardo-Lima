"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
function criarTarefa(tarefa) {
    const caminhoDoArquivo = 'C:/Users/Leonardo/Desktop/LABENU/Leonardo-Lima/semana14/aula45/src/tarefas.txt';
    fs.appendFileSync(caminhoDoArquivo, '\n' + tarefa);
    const bufferDoArquivo = fs.readFileSync(caminhoDoArquivo) || [];
    const textoDoArquivo = bufferDoArquivo.toString();
    console.log(textoDoArquivo);
}
const tarefa = process.argv[2];
console.log(process.argv);
criarTarefa(tarefa);
//# sourceMappingURL=index.js.map