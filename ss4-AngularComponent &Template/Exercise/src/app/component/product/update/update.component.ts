import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/Category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../model/Product";
import {ProductService} from "../../../service/product/product.service";
import {CategoryService} from "../../../service/product/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product: Product;

  productEdit: Product;
  categories: Category[] = [];
  editForm: FormGroup;

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.productService.findById(parseInt(id)).subscribe(next => {
          console.log(next);
          this.product = next;

          this.categoryService.findAll().subscribe(success => {
            console.log(success);
            this.categories = success;
            this.getForm();
          }, error => {
            console.log(error);
          });
        });
      }
    }, error => {
      console.log(error);
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  editProduct() {
    this.productEdit = this.editForm.value;
    this.productService.editProduct(this.productEdit).subscribe(next => {
      this.router.navigateByUrl('/product');
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  private getForm() {
    this.editForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name, [Validators.required]),
      price: new FormControl(this.product.price, [Validators.required]),
      category: new FormControl(this.product.category, [Validators.required]),
      desc: new FormControl(this.product.desc, [Validators.required]),
    });
  }
}
