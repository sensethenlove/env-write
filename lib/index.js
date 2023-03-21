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
        if (process.argv.length !== 4)
            throw new Error('Please pass an environment & then a host');
        else {
            const PATH = '.env';
            const text = yield node_fs_1.default.promises.readFile(PATH, 'utf-8');
            const updated = text
                .replace(/PUBLIC_ENVIRONMENT.+/, `PUBLIC_ENVIRONMENT = '${process.argv[2]}'`)
                .replace(/PUBLIC_HOST.+/, `PUBLIC_HOST = '${process.argv[3]}'`);
            yield node_fs_1.default.promises.writeFile(PATH, updated);
            console.log('💚 Successfully updated .env file');
        }
    });
})();
