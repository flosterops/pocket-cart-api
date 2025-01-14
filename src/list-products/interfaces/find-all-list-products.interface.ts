export interface IListProducts {
    product_id: number;
    product_name: string;
    list_id: number;
    list_name: string;
}

export interface IFindAllListProducts extends IListProducts {
    create_at: number;
}

export interface IProduct {
    product_id: number;
    product_name: string;
}

export interface IListWithProducts {
    list_id: number;
    list_name: string;
    products: IProduct[];
}
