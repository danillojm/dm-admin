import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Category } from '../../../core/model/category-model';
import { Product } from '../../../core/model/product-model';
import { ProductService } from '../../../core/services/product.service';
//import { rastrearEncomendas } from 'correios-brasil';

@Component({
  selector: 'ngx-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, protected ref: NbDialogRef<ProductFormComponent>, private productService: ProductService) {

  }

  productForm: FormGroup;
  ngOnInit(): void {
    this.createProductForm(new Product());

  }

  categories: Category[] = [
    { id: 1, name: "SmartWatch", observation: "" },
    { id: 2, name: "Fone de ouvido", observation: "" },
    { id: 3, name: "SmartPhone", observation: "" }
  ];

  createProductForm(product: Product) {
    this.productForm = this.formBuilder.group({
      code: [product.code, Validators.required],
      description: [product.description, Validators.required],
      category: [product.category, Validators.required],
      brand: [product.brand, Validators.required],
      costPrice: [product.costPrice, Validators.required],
      salePrice: [product.salePrice, Validators.required],
      currentInventory: [product.currentInventory, Validators.required],
      observation: [product.observation]
    })
  }

  insert() {

    let product = new Product();
    product.code = this.productForm.get('code').value
    product.category = this.productForm.get('category').value
    product.brand = this.productForm.get('brand').value
    product.costPrice = this.productForm.get('costPrice').value
    product.salePrice = this.productForm.get('salePrice').value
    product.currentInventory = this.productForm.get('currentInventory').value
    product.observation = this.productForm.get('observation').value
    product.description = this.productForm.get('description').value

    console.log(product)
    this.productService.insert(product).subscribe(() => {
      this.createProductForm(new Product())
      this.productService.getSource()
    })

  }

  cancel() {
    this.ref.close();
    console.log(this.productForm.controls)
  }

  get formControl() {
    console.log(this.productForm.controls)
    return this.productForm.controls
  }

  /** rastrearEncomendas() {


     let codRastreio = ['LB117980392HK']; // array de códigos de rastreios

     rastrearEncomendas(codRastreio).then((response) => {

     });
   }
  */
}

//status: string;
//	data: string;
//	hora: string;
//	origem?: string;
//	destino?: string;
//	local?: string;
