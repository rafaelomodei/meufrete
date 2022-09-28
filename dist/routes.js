"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creteCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function creteCourse(request, response) {
    CreateCourseService_1.default.execute('NodeJs', 10000, 'omodei');
}
exports.creteCourse = creteCourse;
