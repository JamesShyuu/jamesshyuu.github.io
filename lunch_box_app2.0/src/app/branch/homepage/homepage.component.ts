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

  // set coupon form
  // newCouponForm = new FormGroup({
  //   key: new FormControl(''),
  //   couponKey: new FormControl(''),
  //   discountType: new FormControl(''),
  //   discountValue: new FormControl('')
  // })

  // delete coupon form
  // deleteCouponForm = new FormGroup({
  //   key: new FormControl('')
  // })

  // testShoppingCart = new FormGroup({
  //   coupon: new FormControl(''),
  //   reward: new FormControl('')
  // })

  //discountTypeList=[{key: '1', value: '減價'}, {key: '2', value: '打折'}];

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

  // setCoupon(){
  //   const couponData = {
  //     couponKey: this.newCouponForm.controls.couponKey.value,
  //     createTime: this.utils.getToday(),
  //     discountType: this.newCouponForm.controls.discountType.value,
  //     discountValue: parseInt(this.newCouponForm.controls.discountValue.value),
  //     key: this.newCouponForm.controls.key.value
  //   }

  //   this.http.setCoupon(JSON.stringify(couponData))
  //     .subscribe((data)=>{
  //       console.log('coupon set success');
  //       console.log(data);
  //     },
  //     (error)=>{
  //       console.log('coupon set error');
  //     })
  // }

  // deleteCoupon(){
  //   const couponData = { key: this.deleteCouponForm.controls.key.value};
  //   console.log(couponData);
  //   this.http.deleteCoupon(JSON.stringify(couponData))
  //     .subscribe((data)=>{
  //       console.log('刪除成功');
  //     },
  //     (error)=>{
  //       console.log('刪除失敗');
  //     })
  // }

  // testconsole(){
  //   console.log(this.newCouponForm);
  // }


  
  // confirm demo 放在父component
  // testConfirm(a: any){
  //   console.log(a);
  //   $('#confirmModal').modal('hide');
  // }

  // confirm demo 放在父component
  // goconfirm(){
  //   $('#confirmModal').modal('show');
  // }

  // systemError(){
  //   this.data.systemErrorMsg = "test success";
  //   this.router.navigate(['system-error']);
  // }

  // test shopping cart how reward and coupon effect total price START

  // 從 LOCAL STORAGE取到的值  實際回饋
  //test_localStorage_reward = 100;  //第一次從init中取得

  // 實際總價
  //test_totalPrice = 350; // 第一次算出實際總價時 要指定給這變數

  // 顯示用reward 
  //test_show_reward = 100;

  // 顯示用總價
  //test_show_totalPrice = 450;

  // 折價卷折價
  //test_couponPriceOff = "";

  // 回饋折價
  //test_rewardPriceOff = "";

  //顯示折價卷錯誤訊息
  //couponError = false;

  // 送貨價
  //deliveryPrice = 100;

  // testCountTotalPrice(){
  //   this.test_show_totalPrice = this.test_totalPrice + this.deliveryPrice;
  //   this.test_couponPriceOff = ""; 
  //   this.test_rewardPriceOff = "";
  //   this.couponError = false;
  //   this.test_show_reward = this.test_localStorage_reward;
    
  //   if (this.testShoppingCart.controls.reward.value){
  //     if (this.test_localStorage_reward - this.testShoppingCart.controls.reward.value < 0){
  //       this.test_show_reward = 0;
  //       this.test_show_totalPrice = this.test_show_totalPrice - this.test_localStorage_reward;
  //       this.testShoppingCart.controls.reward.setValue(this.test_localStorage_reward);
  //       this.test_rewardPriceOff = "-" + this.test_localStorage_reward;
  //     } else {
  //       this.test_show_reward = this.test_localStorage_reward - this.testShoppingCart.controls.reward.value;
  //       this.test_show_totalPrice -= this.testShoppingCart.controls.reward.value;
  //       this.test_rewardPriceOff = "-" + this.testShoppingCart.controls.reward.value;
  //     }
  //   }
  //   if (this.testShoppingCart.controls.coupon.value) {
  //     let isError = false;
  //     for (let i = 0; this.data.couponList.length > i; i++) {
  //       if (this.data.couponList[i].couponKey == this.testShoppingCart.controls.coupon.value){
  //         this.test_show_totalPrice -= this.data.couponList[i].discountValue;
  //         this.test_couponPriceOff = "-" + this.data.couponList[i].discountValue.toString();
  //         break;
  //       } else{
  //         isError = true;
  //       }
  //     }
  //     this.couponError = isError;
  //   }
    
  // }


  // test shopping cart how reward and coupon effect total price END

}


