import { Component, OnInit } from '@angular/core';
import {ManagementService} from '../../services/management.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public users :any;
  constructor( private manageService: ManagementService) { }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.manageService.getDetails()
      // clone the data object, using its known Config shape
      .subscribe((_Data: any[]) => {
        this.users = _Data;
        console.log(_Data);
    }, error => {console.log(error.text()) }
    );
}

}
