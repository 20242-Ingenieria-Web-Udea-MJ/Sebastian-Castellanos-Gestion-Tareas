"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProductsArgs_1 = require("./args/AggregateProductsArgs");
const CreateManyProductsArgs_1 = require("./args/CreateManyProductsArgs");
const CreateProductsArgs_1 = require("./args/CreateProductsArgs");
const DeleteManyProductsArgs_1 = require("./args/DeleteManyProductsArgs");
const DeleteProductsArgs_1 = require("./args/DeleteProductsArgs");
const FindFirstProductsArgs_1 = require("./args/FindFirstProductsArgs");
const FindManyProductsArgs_1 = require("./args/FindManyProductsArgs");
const FindUniqueProductsArgs_1 = require("./args/FindUniqueProductsArgs");
const GroupByProductsArgs_1 = require("./args/GroupByProductsArgs");
const UpdateManyProductsArgs_1 = require("./args/UpdateManyProductsArgs");
const UpdateProductsArgs_1 = require("./args/UpdateProductsArgs");
const UpsertProductsArgs_1 = require("./args/UpsertProductsArgs");
const helpers_1 = require("../../../helpers");
const Products_1 = require("../../../models/Products");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProducts_1 = require("../../outputs/AggregateProducts");
const ProductsGroupBy_1 = require("../../outputs/ProductsGroupBy");
let ProductsCrudResolver = class ProductsCrudResolver {
    async findUniqueProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProducts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProducts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Products_1.Products, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueProductsArgs_1.FindUniqueProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "findUniqueProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Products_1.Products, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProductsArgs_1.FindFirstProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "findFirstProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Products_1.Products], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProductsArgs_1.FindManyProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "findManyProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Products_1.Products, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateProductsArgs_1.CreateProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "createProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyProductsArgs_1.CreateManyProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "createManyProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Products_1.Products, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProductsArgs_1.DeleteProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "deleteProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Products_1.Products, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProductsArgs_1.UpdateProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "updateProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProductsArgs_1.DeleteManyProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "deleteManyProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyProductsArgs_1.UpdateManyProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "updateManyProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Products_1.Products, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProductsArgs_1.UpsertProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "upsertProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProducts_1.AggregateProducts, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProductsArgs_1.AggregateProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "aggregateProducts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ProductsGroupBy_1.ProductsGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProductsArgs_1.GroupByProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductsCrudResolver.prototype, "groupByProducts", null);
ProductsCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], ProductsCrudResolver);
exports.ProductsCrudResolver = ProductsCrudResolver;
