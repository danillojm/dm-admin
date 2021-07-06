import { PlatformService } from './core/services/platform.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbMenuModule, NbSelectModule, NbTableModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { DmRoutingModule } from './dm-routing.module';
import { DmComponent } from './dm.component';
import { ClientComponent } from './features/client/client.component';
import { ProductFormComponent } from './features/product/product-form/product-form.component';
import { ProductComponent } from './features/product/product.component';
import { ShoppingFormComponent } from './features/shopping/shopping-form/shopping-form.component';
import { ShoppingComponent } from './features/shopping/shopping.component';
import { SalesComponent } from './features/sales/sales.component';
import { ShoppingViewComponent } from './features/shopping/shopping-view/shopping-view.component';
import { ShoppingService } from './core/services/shopping.service';
import { ProductService } from './core/services/product.service';



@NgModule({
  declarations: [
    DmComponent,
    ProductComponent,
    ClientComponent,
    ShoppingComponent,
    ProductFormComponent,
    ShoppingFormComponent,
    SalesComponent,
    ShoppingViewComponent
  ],
  imports: [

    CommonModule,
    DmRoutingModule,
    NbMenuModule,
    NbInputModule,
    ThemeModule,
    NbCardModule,
    NbSelectModule,
    Ng2SmartTableModule,
    FormsModule,
    NbTableModule,
    NbTabsetModule,
    NbIconModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbToggleModule,
  ],
  providers: [
    ShoppingService,
    ProductService,
    PlatformService
  ]
})
export class DmModule { }
