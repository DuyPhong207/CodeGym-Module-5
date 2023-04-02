import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product/product.service";
import {CategoryService} from "../../../service/product/category/category.service";
import {Router} from "@angular/router";
import {Category} from "../../../model/Category";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];
  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.categoryService.findAll().subscribe(next => {
      this.categories = next;
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        desc: new FormControl('', [Validators.required]),
      })
    })
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.productService.addProduct(this.productForm.value).subscribe(next => {
      this.router.navigateByUrl('/product')
    });
  }
}
