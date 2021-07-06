import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmComponent } from './dm.component';
import { ClientComponent } from './features/client/client.component';
import { ProductComponent } from './features/product/product.component';
import { SalesComponent } from './features/sales/sales.component';
import { ShoppingViewComponent } from './features/shopping/shopping-view/shopping-view.component';
import { ShoppingComponent } from './features/shopping/shopping.component';

const routes: Routes = [
  {
    path: '', component: DmComponent,
    children: [
      { path: 'produtos', component: ProductComponent },
      { path: 'compras', component: ShoppingComponent },
      { path: 'compras/:id', component: ShoppingViewComponent },
      { path: 'vendas', component: SalesComponent },
      { path: 'clientes', component: ClientComponent }

    ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmRoutingModule { }
