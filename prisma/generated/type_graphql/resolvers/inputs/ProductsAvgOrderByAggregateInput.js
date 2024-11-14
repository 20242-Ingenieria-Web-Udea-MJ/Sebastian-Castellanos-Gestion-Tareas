"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductsAvgOrderByAggregateInput = class ProductsAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsAvgOrderByAggregateInput.prototype, "price", void 0);
ProductsAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ProductsAvgOrderByAggregateInput);
exports.ProductsAvgOrderByAggregateInput = ProductsAvgOrderByAggregateInput;
