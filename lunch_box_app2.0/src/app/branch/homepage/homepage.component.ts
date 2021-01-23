import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { DataService } from 'src/app/service/dataService.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UtilsService } from 'src/app/service/utilsService.service';


declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  couponList;

  orderList

  showSpainner

  confirmMessage = "網頁系統維護中，如要訂購請用電話訂購。訂購電話：0919-832-269 賀先生";

  constructor(private http: HttpService, 
    private data: DataService, private router: Router, private utils: UtilsService) { }

  ngOnInit() {
    
    // slide show animation
    $(function () {
      $(".rslides").responsiveSlides({
        speed: 1000, 
      });
    });

    if (!this.data.productList){
      this.http.getProductAndReward()
        .subscribe((data) => {
          //console.log('product list:', data);
          // this.productList = data['value'];
          // this.data.setSession('products', JSON.stringify(data['value']));
          // this.data.setLocalStorage('products', JSON.stringify(data['value']));
          this.data.productList = data['value'];
          this.showSpainner = false;
          $('#errorModal').modal('show');
        },
        (error) => {
          this.showSpainner = false;
          //this.errorMessage = ErrorMsgService.getErrorMsg('invalidNetWork');
        })
    }
    
    if (!this.data.couponList){
      // get coupon
      this.http.getCoupon()
        .subscribe((data) => {
          //console.log('coupon:', data);
          this.data.couponList = data['value'];
          this.couponList = data['value'];

        },
        (error) => {
          console.log('get coupon error');
        })
    }

    //console.log('local storage test:', this.data.getLocalStorage('testLocalStorage'));
    
  }



  // test shopping cart how reward and coupon effect total price END

}


