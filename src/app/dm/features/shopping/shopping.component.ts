import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Platform } from '../../core/model/platform-model';
import { PlatformService } from '../../core/services/platform.service';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';

@Component({
  selector: 'ngx-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private dialogService: NbDialogService, private router: Router, private platformService: PlatformService) { }

  platforms: Platform[] = []

  ngOnInit(): void {

    this.platformService.getPlatforms().subscribe((platforms) => {

      this.platforms = platforms

    })

  }



  openShoppingFormDialog(closeOnBackdropClick: boolean) {
    this.dialogService.open(ShoppingFormComponent, { closeOnBackdropClick });
  }


  opeShoppingView() {
    console.log(this.router)
    this.router.navigate(['/compras/view'])
  }

}
