"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, req, res, next) => {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
};
exports.default = error;
