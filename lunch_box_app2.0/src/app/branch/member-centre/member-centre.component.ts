import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.service';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { ErrorMsgService } from 'src/app/service/error.service';

declare var $: any;

@Component({
  selector: "app-member-centre",
  templateUrl: "./member-centre.component.html",
  styleUrls: ["./member-centre.component.css"]
})
export class MemberCentreComponent implements OnInit {
  memberInfoGroup = new FormGroup({
    name: new FormControl(""),
    birthday: new FormControl(""),
    gender: new FormControl(""),
    phone: new FormControl(""),
    company: new FormControl(""),
    address: new FormControl("")
  })

  contentOption: string;
  userName: string;
  isFullForm;

  // 判斷是否顯示loading畫面
  showSpainner = false;

  // 錯誤訊息內容
  errorMessage = '';

  constructor(private data: DataService, private http: HttpService, private router: Router) {}

  ngOnInit() {
    $('#errorModal').modal('hide');
    this.contentOption = "0";
    this.userName = JSON.parse(this.data.getLocalStorage('userInfo'))['userName'];

    if (!this.data.getLocalStorage('products')) {
      this.showSpainner = true;
      this.http.getProductAndReward()
        .subscribe((data) => {
          console.log('product list:', data);
          this.data.setSession('products', JSON.stringify(data['value']));
          this.data.setLocalStorage('products', JSON.stringify(data['value']));
          this.showSpainner = false;
        },
        (error)=>{
          this.showSpainner = false;
          this.errorMessage = ErrorMsgService.getErrorMsg('invalidNetWork');
          $('#errorModal').modal('show');
        })
    } else {
      this.showSpainner = false;
    }



    // user options tool
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  }

  pageSwitch(option: string) {
    this.contentOption = option;
  }



}
