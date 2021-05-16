"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
function fetch(url) {
    url = url || 'https://fedev.feng1.com/wxapp/v2/api-docs';
    return new Promise((resolve, reject) => {
        request_1.default({
            url,
            method: "GET",
            json: true,
            headers: {
                "content-type": "application/json",
            },
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            }
        });
    });
}
exports.default = fetch;
