import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Shopping } from '../../../core/model/shopping-model';
import { ShoppingPlatform } from '../../../core/model/shopping-platform.model';
import { ShoppingService } from '../../../core/services/shopping.service';

@Component({
  selector: 'ngx-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss']
})
export class ShoppingFormComponent implements OnInit {

  constructor(private ref: NbDialogRef<ShoppingFormComponent>, private formBuilder: FormBuilder, private shoppingService: ShoppingService) { }


  shoppingForm: FormGroup

  shoppingPlatforms: ShoppingPlatform[] = [
    { id: 1, name: 'Aliexpress' },
    { id: 2, name: 'Shopee' },
  ]

  ngOnInit(): void {
    this.createShoppingForm(new Shopping)
  }

  createShoppingForm(shopping: Shopping) {

    this.shoppingForm = this.formBuilder.group({
      purchaseDate: [shopping.purchaseDate, Validators.required],
      platform: [shopping.platform, Validators.required],
      storeName: [shopping.storeName, Validators.required],
      orderId: [shopping.orderId, Validators.required],
      product: [shopping.product, Validators.required],
      quantity: [shopping.quantity, Validators.required],
      unitPrice: [shopping.unitPrice, Validators.required],
      totalPrice: [shopping.totalPrice, Validators.required],
      trackingCode: [shopping.trackingCode],
      observation: [shopping.observation],

    })

  }


  insert() {

    let shopping = new Shopping();
    shopping.purchaseDate = this.shoppingForm.get('purchaseDate').value
    shopping.platform = this.shoppingForm.get('platform').value
    shopping.storeName = this.shoppingForm.get('storeName').value
    shopping.orderId = this.shoppingForm.get('orderId').value
    shopping.product = this.shoppingForm.get('product').value
    shopping.quantity = this.shoppingForm.get('quantity').value
    shopping.unitPrice = this.shoppingForm.get('unitPrice').value
    shopping.totalPrice = this.shoppingForm.get('totalPrice').value
    shopping.trackingCode = this.shoppingForm.get('trackingCode').value
    shopping.observation = this.shoppingForm.get('observation').value

    console.log(shopping)

    this.shoppingService.insert(shopping).subscribe(() => {
      this.createShoppingForm(new Shopping())
    })

  }


  cancel() {
    this.ref.close();

  }
}
