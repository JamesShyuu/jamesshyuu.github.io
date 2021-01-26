import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.service';
import { HttpService } from 'src/app/service/http.service';
import { ErrorMsgService } from 'src/app/service/error.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/service/validtion.service';
import { UtilsService } from 'src/app/service/utilsService.service';

declare var $: any;

@Component({
  selector: 'app-member-cart',
  templateUrl: './member-cart.component.html',
  styleUrls: ['./member-cart.component.css']
})
export class MemberCartComponent implements OnInit  {

  // 寄送資訊
  deliverForm = new FormGroup({
    name: new FormControl('', [this.valid.requireValidator('name')]),
    phone: new FormControl('', [this.valid.requireValidator('phone')]),
    address: new FormControl('', [this.valid.requireValidator('address')]),
    city: new FormControl({ value: '', disabled: true }),
    district: new FormControl({ value: '', disabled: true }),
    notice: new FormControl(''),
    rewardOfYouUse: new FormControl(''), //20191126
    coupon: new FormControl('') //20191126
  })

  // 付款方式
  paymentForm = new FormGroup({
    coupon: new FormControl(''),
    reward: new FormControl(''),
    paymentOptions: new FormControl('1')
  })

  // 商品列
  productList;

  // 購物車內的商品
  cartItems;

  // 判斷購物車內是否有商品
  hadOrders = false;

  // 判斷是否顯示loading畫面
  showSpainner = false;

  errorMessage = '';

  notificationMsg = '';

  successMessage = "";

  // 購物流程畫面顯示判斷
  purchasingProcess = '1';

  // 地址縣市
  cityList;

  // 地址區
  districtList;

  // 總價格
  totalPrice = 0;

  // 是否顯示折價卷欄位
  showCoupon = false;

  // 送後端用 商品總量
  productAmount;

  // 送後端用 商品編號
  productKey;

  // 送後端用 商品價格
  productPrice;

  // 送後端用 商品總價格
  price = 0;

  // 判斷折扣碼是否正確
  couponIsCorrect = true;

  // 使用者目前剩餘的回饋
  yourReward = 30;

  rewardUse = '';

  // 單筆訂單物品總量
  totalAmount = 0;

  // ----- 很重要 填寫付費方式(回饋, 優惠卷) 參數------ start ------

  // 從 LOCAL STORAGE取到的值  實際回饋
  localStorage_reward = 0;


  // 顯示用總價
  show_totalPrice = 0;

  // 顯示用reward 
  show_reward = 0;

  // 折價卷折價(畫面顯示)
  couponPriceOff = "";

  // 折價卷折價 (到db)
  couponPriceOff_toDB = 0;

  // 回饋折價(畫面顯示)
  rewardPriceOff = "";

  //顯示折價卷錯誤訊息
  couponError = false;

  hasCoupon = false;

  // 折扣碼名稱
  couponName = "";

  // 運費
  deliveryPrice = 100;

  paymentOption_show= '';

  // ----- 很重要 填寫付費方式(回饋, 優惠卷) 參數------ end ------

  constructor(private data: DataService, private http: HttpService, 
    private valid: ValidationService, private utils: UtilsService) { }

  ngOnInit() {

    // 取得總回饋
    this.localStorage_reward = parseInt(this.data.getLocalStorage('totalReward'));
    this.show_reward = this.localStorage_reward;

    // 顯示用總價
    this.show_totalPrice = 0;

   

    // 總價格
    this.totalPrice = 0;


    if (this.data.getLocalStorage('orders')){
      this.cartItems = JSON.parse(this.data.getLocalStorage('orders'));
      this.countTotalPrice();
      if(this.data.productList){
        this.productList = this.data.productList;
        this.hadOrders = true;
      } else {
        // *如於首頁未取得商品列 在這重新取一次
        this.showSpainner = true;
        this.http.getProductAndReward()
          .subscribe((data) => {
            console.log('product list:', data);
            this.productList = data['value'];
            this.data.productList = data['value'];
            this.showSpainner = false;
            this.hadOrders = true;
          },
          (error) => {
            this.showSpainner = false;
            this.errorMessage = ErrorMsgService.getErrorMsg('invalidNetWork');
            // 需修正 此為連線失敗沒有資料時顯示
            this.hadOrders = false;
          })
      }
      
    } else {
      this.hadOrders = false;
    }

    // 判斷是否有取到折價卷
    if (!this.data.couponList && this.hadOrders){
      this.showSpainner = true;
      this.http.getCoupon()
        .subscribe((data) => {
          console.log('coupon:', data);
          this.data.couponList = data['value'];
          this.showSpainner = false;
        },
        (error) => {
          this.showSpainner = false;
          this.errorMessage = error['msg'];
          $('#errorModal').modal('show');
        })
    }
   
    

    // 取得地址縣市區
    this.cityList = this.data.cityList;
    this.districtList = this.data.districtList;
    this.deliverForm.controls.city.setValue(this.cityList[0].name);
    this.deliverForm.controls.district.setValue(this.districtList[0].name);
  }

  

  // 第一步 刪除購物車裡的項目
  deleteItem(index){
    this.cartItems.splice(index, 1);
    this.data.shoppingCartItemsQunt -= 1;
    this.countTotalPrice();
    if (this.cartItems.length == 0){
      this.hadOrders = false;
      this.data.removeLocalStorage('orders');
    } else {
      this.data.setLocalStorage('orders', JSON.stringify(this.cartItems));
    }
  }

  // 第一步 增加購物車裡項目數量
  addAmount(index, amount){
    this.cartItems[index].productAmount = amount + 1;
    this.countTotalPrice();
    this.data.setLocalStorage('orders', JSON.stringify(this.cartItems));
  }

  // 第一步 減少購物車裡項目數量
  decreaseAmount(index, amount){
    this.cartItems[index].productAmount = amount - 1;
    this.countTotalPrice();
    this.data.setLocalStorage('orders', JSON.stringify(this.cartItems));
  }

  // 第一步 計算單一商品價格
  countPrice(amount, price) {
    if (amount) {
      return amount * price;
    }
  }

  // 第一步 計算購物車目前總價
  countTotalPrice(){
    this.totalPrice = 0;
    for (let i = 0; this.cartItems.length > i; i++){
      // 畫面顯示用
      this.totalPrice = this.totalPrice + (this.cartItems[i].productAmount * this.cartItems[i].productPrice);
      
      //判斷訂單總量
      this.totalAmount += this.cartItems[i].productAmount;
    }

    // 送後端的總價(會減去折扣碼與回饋)
    this.show_totalPrice = this.totalPrice + this.deliveryPrice;
  }

  
  // 下一步 第一步 至 第二步
  nextProcess_firstToSecond(){
    if (this.purchasingProcess == '1'){
      if (this.data.isLogin != '0') {
        
        this.purchasingProcess = '2';
        window.scrollTo(0, 0);
      } else {
        this.notificationMsg = "您尚未登入，請先登入";
        $('#notificationModal').modal('show');
      }
    } else {
      this.errorMessage = '流程有誤，請再確認！'
      $('#errorModal').modal('show');
    }
  }

  // 計算 回饋,優惠卷與總價的關係 blur時觸發
  rewardCouponTotalPrice() {
    // 先重新畫面變數
    this.show_totalPrice = this.totalPrice + this.deliveryPrice;
    this.couponPriceOff = "";
    this.rewardPriceOff = "";
    this.couponError = false;
    this.hasCoupon = false;
    this.show_reward = this.localStorage_reward;

    // 判斷回饋
    if (this.paymentForm.controls.reward.value){
      if (this.localStorage_reward - this.paymentForm.controls.reward.value < 0) {
        this.show_reward = 0;
        this.show_totalPrice = this.show_totalPrice - this.localStorage_reward;
        this.paymentForm.controls.reward.setValue(this.localStorage_reward);
        this.rewardPriceOff = "-" + this.localStorage_reward;
      } else {
        this.show_reward = this.localStorage_reward - this.paymentForm.controls.reward.value;
        this.show_totalPrice -= this.paymentForm.controls.reward.value;
        this.rewardPriceOff = "-" + this.paymentForm.controls.reward.value;
      }
    }

    //判斷折扣碼
    if (this.paymentForm.controls.coupon.value) {
      let isError = false;
      for (let i = 0; this.data.couponList.length > i; i++) {
        if (this.data.couponList[i].couponKey == this.paymentForm.controls.coupon.value) {
          this.show_totalPrice -= this.data.couponList[i].discountValue;
          this.couponName = this.data.couponList[i].couponName;
          this.hasCoupon = true;
          this.couponPriceOff = "-" + this.data.couponList[i].discountValue;
          this.couponPriceOff_toDB = this.data.couponList[i].discountValue;
          break;
        } else {
          this.hasCoupon = false;
          isError = true;
        }
      }
      this.couponError = isError;
    }
  }



  // 下一步 第二步 至 第三步
  nextProcess_secondToThird(){
    if (this.purchasingProcess == '2'){
      // 判斷姓名
      if (this.deliverForm.controls.name.errors) {
        this.errorMessage = ErrorMsgService.getErrorMsg(this.deliverForm.controls.name.errors.validationResult);
        $('#errorModal').modal('show');
        return;
      }
      // 判斷電話
      if (this.deliverForm.controls.phone.errors) {
        this.errorMessage = ErrorMsgService.getErrorMsg(this.deliverForm.controls.phone.errors.validationResult);
        $('#errorModal').modal('show');
        return;
      }
      // 判斷地址
      if (this.deliverForm.controls.address.errors) {
        this.errorMessage = ErrorMsgService.getErrorMsg(this.deliverForm.controls.address.errors.validationResult);
        $('#errorModal').modal('show');
        return;
      }

      if (!this.paymentForm.controls.paymentOptions.value){
        this.errorMessage = "請填寫付費方式";
        $('#errorModal').modal('show');
        return;
      }

      if (this.paymentForm.controls.coupon.value && this.couponError) {
        this.errorMessage = "折扣碼有誤，請再確認！";
        $('#errorModal').modal('show');
        return;
      }

      // 判斷付費方式 再次確認呈現用
      for (let i = 0; this.data.paymentList.length > i; i++){
        if (this.data.paymentList[i].key == this.paymentForm.controls.paymentOptions.value){
          this.paymentOption_show = this.data.paymentList[i].value;
        }
      }

      this.purchasingProcess = '3';
      window.scrollTo(0, 0);
    } else {
      this.errorMessage = '流程有誤，請再確認！';
      $('#errorModal').modal('show');
    }
  }

  // 結帳
  toCheck(){
    this.showSpainner = true;

    const orderData = {
      name: this.deliverForm.controls.name.value,
      phone: this.deliverForm.controls.phone.value,
      address: this.deliverForm.controls.city.value + this.deliverForm.controls.district.value + this.deliverForm.controls.address.value,
      email: this.data.getLocalStorage('email'),
      orders: this.cartItems,
      createTime: this.utils.getToday(),
      totalPrice: this.show_totalPrice,
      totalAmount: this.totalAmount,
      notice: this.deliverForm.controls.notice.value,
      rewardForthputting: this.paymentForm.controls.reward.value,
      reward: this.totalAmount*5,
      couponForthputting: this.couponPriceOff_toDB
    }

   

    this.http.newProduct(JSON.stringify(orderData))
      .subscribe(success=>{
        
        if (this.data.getLocalStorage('todayOrdersList')){
          let list = [];
          list = JSON.parse(this.data.getLocalStorage('todayOrdersList'));
          list.push(orderData);
          this.data.setLocalStorage('todayOrdersList', JSON.stringify(list));
        } else {
          this.data.setLocalStorage('todayOrdersList', JSON.stringify(orderData));
        }
        
        this.data.shoppingCartItemsQunt = 0;
        this.cartItems = [];
        // 刪除今日訂單暫存
        this.data.removeLocalStorage('orders');
        this.showSpainner = false;
        this.successMessage = success['msg'];
        $('#successModal').modal('show');
        this.data.setLocalStorage('totalReward', this.show_reward.toString());
        this.purchasingProcess = '4';
        window.scrollTo(0, 0);

      },
      error=>{
        this.showSpainner = false;
        this.errorMessage = error['msg'];
        $('#errorModal').modal('show');
      })
  }
  

  // 回上一步
  previousProcess(){
    if (this.purchasingProcess == '2') {
      this.purchasingProcess = '1';
      window.scrollTo(0, 0);
    } else if (this.purchasingProcess == '3') {
      this.purchasingProcess = '2';
      window.scrollTo(0, 0);
    } 
  }

  

}
