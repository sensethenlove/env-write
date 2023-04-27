"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const PATH = '.env';
        let text = yield node_fs_1.default.promises.readFile(PATH, 'utf-8');
        const lines = text.split(/\r?\n/);
        for (const [iArgv, request] of process.argv.entries()) { // loop bash arguments
            if (iArgv > 1) { // skip first few arguments
                let lineFound = false;
                const [key, value] = request.split('=');
                for (const [iLine, line] of lines.entries()) { // loop lines in .env file
                    if (line.match(key)) { // if key is found in line
                        lineFound = true;
                        lines[iLine] = `${key}='${value}'`;
                        break;
                    }
                }
                if (!lineFound)
                    lines.push(`${key}='${value}'`); // if line is not found => add line 
            }
        }
        yield node_fs_1.default.promises.writeFile(PATH, lines.join('\n'));
        console.log('💚 Successfully updated .env file');
    });
})();
