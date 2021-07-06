import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ProductService } from '../../core/services/product.service';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  source = this.productService.getSource();

  constructor(private dialogService: NbDialogService, private productService: ProductService) {

  }

  ngOnInit(): void {

  }



  settings = {
    hideSubHeader: true,
    noDataMessage: 'Não há dados para exibir',
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {

      code: { title: 'Código', type: 'number' },
      description: { title: 'Descrição', type: 'string' },
      category: { title: 'Categoria', type: 'string' },
      brand: { title: 'Marca', type: 'string' },
      costPrice: { title: 'Preço de custo', type: 'number' },
      salePrice: { title: 'Preço de venda', type: 'number' },
      currentInventory: { title: 'Quantidade', type: 'number' },
      observation: { title: 'Observação', type: 'string' },

    },
  };





  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }



  openProductFormDialog(closeOnBackdropClick: boolean) {
    this.dialogService.open(ProductFormComponent, { closeOnBackdropClick });
  }
}
