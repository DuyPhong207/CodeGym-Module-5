import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/Product";
import {ProductService} from "../../../service/product/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
    this.productService.findAll().subscribe(next => {
      this.products = next;
    })
  }

  ngOnInit(): void {
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(next => {
      this.router.navigateByUrl('/product');
    });

  }
}
