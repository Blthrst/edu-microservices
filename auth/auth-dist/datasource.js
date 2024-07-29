"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const options_1 = require("./options");
const datasource = new typeorm_1.DataSource(options_1.default);
exports.default = datasource;
//# sourceMappingURL=datasource.js.map