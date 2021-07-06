import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './../pages/pages-menu';
@Component({
  selector: 'ngx-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.scss']
})
export class DmComponent implements OnInit {

  constructor() { }
  menu = MENU_ITEMS;
  ngOnInit(): void {
  }

}
