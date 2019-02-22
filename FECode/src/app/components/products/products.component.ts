import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}
