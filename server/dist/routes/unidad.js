"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unidad_1 = require("../controllers/unidad");
const router = (0, express_1.Router)();
router.post('/', unidad_1.newUnidad);
exports.default = router;
