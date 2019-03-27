import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../services/navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private navbar:NavbarService) { }

  ngOnInit() {
  }

}
