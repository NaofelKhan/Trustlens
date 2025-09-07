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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var csv_parser_1 = require("csv-parser");
var db_1 = require("./db"); // Neon connection
function importProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        var _this = this;
        return __generator(this, function (_a) {
            results = [];
            fs_1.default.createReadStream("E:\\5 projects\\Trustlens\\Docs\\datasets\\products_clean.csv")
                .pipe((0, csv_parser_1.default)())
                .on("data", function (row) {
                results.push(row);
            })
                .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
                var categoryRes, categoryId, _i, results_1, row, details, brandName, brandId, brandRes, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("\uD83D\uDCE6 Read ".concat(results.length, " rows from CSV"));
                            return [4 /*yield*/, db_1.pool.query("SELECT category_id FROM Category WHERE name = $1", ["All Beauty"])];
                        case 1:
                            categoryRes = _a.sent();
                            categoryId = categoryRes.rows[0].category_id;
                            _i = 0, results_1 = results;
                            _a.label = 2;
                        case 2:
                            if (!(_i < results_1.length)) return [3 /*break*/, 9];
                            row = results_1[_i];
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 7, , 8]);
                            details = null;
                            brandName = null;
                            try {
                                details = row.details ? JSON.parse(row.details) : null;
                                if (details && details.Brand) {
                                    brandName = details.Brand;
                                }
                            }
                            catch (err) {
                                console.warn("⚠️ Failed to parse details for:", row.parent_asin);
                            }
                            brandId = null;
                            if (!brandName) return [3 /*break*/, 5];
                            return [4 /*yield*/, db_1.pool.query("INSERT INTO Brand (name) VALUES ($1)\n               ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name\n               RETURNING brand_id", [brandName])];
                        case 4:
                            brandRes = _a.sent();
                            brandId = brandRes.rows[0].brand_id;
                            _a.label = 5;
                        case 5: 
                        // Insert product
                        return [4 /*yield*/, db_1.pool.query("INSERT INTO Product (\n              parent_asin, title, brand_id, category_id, price, average_rating, rating_number, description, features, details\n            ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)\n            ON CONFLICT (parent_asin) DO NOTHING", [
                                row.parent_asin,
                                row.title,
                                brandId,
                                categoryId,
                                row.price || null,
                                row.average_rating || null,
                                row.rating_number || null,
                                row.description || null,
                                row.features || null,
                                details,
                            ])];
                        case 6:
                            // Insert product
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 7:
                            err_1 = _a.sent();
                            console.error("❌ Insert error:", err_1.message);
                            return [3 /*break*/, 8];
                        case 8:
                            _i++;
                            return [3 /*break*/, 2];
                        case 9:
                            console.log("✅ Import finished!");
                            return [4 /*yield*/, db_1.pool.end()];
                        case 10:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
importProducts();
