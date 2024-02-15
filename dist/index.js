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
exports.server = void 0;
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
require('dotenv').config();
exports.server = (0, fastify_1.default)();
exports.server.register(cors_1.default);
exports.server.get('/ping', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return 'pong\n';
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.server.listen({ host: process.env.HOST, port: Number(process.env.PORT) }, (err, address) => {
                console.log(`Server ready at ${address}`);
            });
        }
        catch (e) {
            console.log(e);
            process.exit(1);
        }
    });
}
main();
//# sourceMappingURL=index.js.map