import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/service/dataService.service';

@Component({
  selector: 'app-system-error',
  templateUrl: './system-error.component.html',
  styleUrls: ['./system-error.component.css']
})
export class SystemErrorComponent implements OnInit {

  errorMsg = "系統錯誤，請再確認";

  constructor(private data: DataService, private location: Location) { }

  ngOnInit() {
    if (this.data.systemErrorMsg != ''){
      this.errorMsg = this.data.systemErrorMsg;
    }
    
  }

  backToPrevious(){
    this.location.back();
  }

}
