import { ProductsAvgAggregate } from "../outputs/ProductsAvgAggregate";
import { ProductsCountAggregate } from "../outputs/ProductsCountAggregate";
import { ProductsMaxAggregate } from "../outputs/ProductsMaxAggregate";
import { ProductsMinAggregate } from "../outputs/ProductsMinAggregate";
import { ProductsSumAggregate } from "../outputs/ProductsSumAggregate";
export declare class ProductsGroupBy {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductsCountAggregate | null;
    _avg: ProductsAvgAggregate | null;
    _sum: ProductsSumAggregate | null;
    _min: ProductsMinAggregate | null;
    _max: ProductsMaxAggregate | null;
}
