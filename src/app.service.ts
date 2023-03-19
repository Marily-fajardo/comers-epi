import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts() {
    return [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
  }
  getUsers() {
    return [
      { id: 1, name: 'usrer 1' },
      { id: 2, name: 'mariliy ' },
    ];
  }

  getCategories() {
    return [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];
  }

  createProduct() {
    return { id: 3, name: 'Product 3' };
  }
  createPais() {
    return { id: 1, ciudad: 'Pais 1' };
    return { id: 2, municipio: 'Pais 2' };
  }

  

}
