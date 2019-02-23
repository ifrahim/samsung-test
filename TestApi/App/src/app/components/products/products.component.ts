import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}
