export declare class AppService {
    getHello(): string;
    getProducts(): {
        id: number;
        name: string;
    }[];
    getUsers(): {
        id: number;
        name: string;
    }[];
    getCategories(): {
        id: number;
        name: string;
    }[];
    createProduct(): {
        id: number;
        name: string;
    };
    createPais(): {
        id: number;
        ciudad: string;
        municipio?: undefined;
    } | {
        id: number;
        municipio: string;
        ciudad?: undefined;
    };
}
