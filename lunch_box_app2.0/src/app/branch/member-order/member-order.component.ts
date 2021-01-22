import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/service/dataService.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpService } from 'src/app/service/http.service';
import { UtilsService } from 'src/app/service/utilsService.service';
import { ValidationService } from 'src/app/service/validtion.service';
import { ErrorMsgService } from 'src/app/service/error.service';

declare var $: any;

@Component({
  selector: 'app-member-order',
  templateUrl: './member-order.component.html',
  styleUrls: ['./member-order.component.css']
})
export class MemberOrderComponent implements OnInit {
  orderForm = new FormGroup({
    // productName: new FormControl(''),
    amount: new FormControl('', [this.valid.amountValidator()])
  })

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

  editForm = new FormGroup({
    amount: new FormControl('', [this.valid.amountValidator()])
  })


  productList = [];
  // price = "";
  totalPrice = 0;

  totalPrice_edit = 0;

  memberOrderPage = '1';


  // user's order product key
  productData;

  // 判斷購物車是否有商品 用來決定畫面
  isOrder = false;

  // 暫用 商品價錢 fix next time
  productPrice = 0;

  // 暫用 商品名稱 fix next time
  productName = '';

  // 暫用 商品編號 fix next time
  productKey = '';

  // 暫用 商品預購總數 fix next time
  orders = [];

  // 要修改訂單內容資料
  ordersList;

  // 顯示修改訂單用
  isShowEditModal = false;

  // error msg
  errorMessage = '';

  todayHadOrder = [];

  cityList;

  districtList;

  showSpainner = false;

  productName_edit = '';

  amount_edit = 0;

  productPrice_edit = 0;

  orderNumber_edit;

  date = new Date();

  amount: number = 5;

  checkoutTotal = 0;
  
  totalReward = 0;

  constructor(private data: DataService, private utils: UtilsService,
    private db: AngularFirestore, private http: HttpService, 
    private valid: ValidationService, private location: Location) { }

  ngOnInit() {


    // 判斷目前購物車是否有商品
    if (this.data.getLocalStorage('orders')){
      this.orders = JSON.parse(this.data.getLocalStorage('orders'));
      this.isOrder = true;
    }

    // 取得今日目前已新增訂單
    if (JSON.parse(this.data.getLocalStorage('todayOrdersList'))){
      this.todayHadOrder = JSON.parse(this.data.getLocalStorage('todayOrdersList'));
    }
    
    // 取得該客戶的回饋
    // if (JSON.parse(this.data.getLocalStorage('orderList')).length !== 0){
    //   const orderList = JSON.parse(this.data.getLocalStorage('orderList'));
    //   for (let x = 0; orderList.length > x; x++){
    //     this.totalReward += orderList[x]['reward'];
    //   }
    // }

    // console.log('this is today orders', JSON.parse(this.data.getLocalStorage('todayOrder')));

    // 取得 商品資料
    if (!this.data.getLocalStorage(this.data.products)){

    } else {
      this.productList = JSON.parse(this.data.getLocalStorage(this.data.products));
    }

    this.productList = JSON.parse(this.data.getLocalStorage(this.data.products));

    this.cityList = this.data.cityList;
    this.districtList = this.data.districtList;

    this.deliverForm.controls.city.setValue(this.cityList[0].name);
    this.deliverForm.controls.district.setValue(this.districtList[0].name);

    $('#orderModal').modal('hide');
    $('#confirmModal').modal('hide');
    // $('#editModal').modal('hide');
  }

  
  
  // 計算總價  FIXME: 此方法為 hard code 需修正
  countPrice(amount, price) {
    if (amount){
      return amount * price;
      // return num;
    }


  }

  // 計算總價  FIXME: 此方法為 hard code 需修正 此方發需與 countPrice
  // countPrice2() {
  //   if (this.editForm.controls.amount.value) {
  //     let num = parseInt(this.editForm.controls.amount.value, 10) *
  //       this.productPrice;
  //     this.totalPrice2 = num;
  //   }

  // }

  // get menu page
  newOrder(){

    // 訂購時間驗證
    // if (this.date.getHours() < 9) {
    //   this.errorMessage = ErrorMsgService.getErrorMsg('invalidBeginTime');
    //   $('#errorModal').modal('show');
    //   return;
    // }

    // 訂購時間驗證
    // if (this.date.getHours() > 9){
    //   this.errorMessage = ErrorMsgService.getErrorMsg('invalidLastTime');
    //   $('#errorModal').modal('show');
    //   return;
    // }

    
    
    this.memberOrderPage = '2';
  }

  // open modal select order info
  openOrderModal(num){
    // 清空上一次紀錄總金額
    this.totalPrice = 0;
    // 預設數量為5
    this.amount = 5;
    // 清空上一次訂購總量
    // this.orderForm.controls.amount.setValue(0);

    for(let x = 0; this.productList.length>x; x++){
      if (this.productList[x].productKey === num){
        this.productData = this.productList[x];
        this.productKey = num;
        this.productName = this.productList[x]['productName'];
        this.productPrice = this.productList[x]['productPrice'];
      }
    }
    // 算出預設數量的總價 10個總價
    this.totalPrice = this.countPrice(this.amount, this.productPrice);
    $('#orderModal').modal('show');
  }

  // 增加訂購數
  addAmount(amount){
    this.amount = amount += 1;
    this.totalPrice = this.countPrice(this.amount, this.productPrice);
  }
  // 減少訂購數
  decreaseAmount(amount){
    this.amount = amount -= 1;
    this.totalPrice = this.countPrice(this.amount, this.productPrice);
  }

  // close order modal
  closeOrderModal(){
    $('#orderModal').modal('hide');
  }

  // 開啟 確認訂購者 modal
  openConfirmModal() {
    // 清空上次使用紀錄
    this.deliverForm.controls.name.setValue('');
    this.deliverForm.controls.phone.setValue('');
    this.deliverForm.controls.address.setValue('');

    // 計算本次消費總價
    let total = 0;
    for (let i = 0; this.orders.length > i; i++){
      total += this.orders[i].price;
    }
    this.checkoutTotal = total;


    $('#confirmModal').modal('show');
  }

  // 關閉 confirmModal
  closeconfirmModal(){
    $('#confirmModal').modal('hide');
  }

  // 新增一筆訂單
  setOrderInfo(){

    // if (this.orderForm.controls.amount.errors){
    //   this.errorMessage = ErrorMsgService.getErrorMsg(this.orderForm.controls.amount.errors.validationResult);
    //   $('#errorModal').modal('show');
    //   return;
    // }
    // if (!this.orderForm.controls.amount.value) {
    //   alert('請填寫數量');
    //   return;
    // }

    this.orders.push({ 
        productAmount: this.amount, 
        productKey: this.productKey,
        productPrice: this.productPrice,
        price: this.totalPrice,

      });

    this.data.setLocalStorage('orders', JSON.stringify(this.orders));
    console.log(this.data.getLocalStorage('orders'));
    $('#orderModal').modal('hide');
    this.memberOrderPage = '1';  //20191126 修改
    //this.location.back(); //20191126 修改
    this.isOrder = true;
  }

  

  // 確認今日訂單
  confirmOrder(){
    // 判斷姓名
    if (this.deliverForm.controls.name.errors) {
      this.errorMessage = ErrorMsgService.getErrorMsg(this.orderForm.controls.password.errors.validationResult);
      $('#errorModal').modal('show');
      return;
    }
    // 判斷電話
    if (this.deliverForm.controls.phone.errors) {
      this.errorMessage = ErrorMsgService.getErrorMsg(this.orderForm.controls.phone.errors.validationResult);
      $('#errorModal').modal('show');
      return;
    }
    // 判斷地址
    if (this.deliverForm.controls.address.errors) {
      this.errorMessage = ErrorMsgService.getErrorMsg(this.orderForm.controls.address.errors.validationResult);
      $('#errorModal').modal('show');
      return;
    }
    // 折扣碼與回饋二擇一  20191126
    if (this.deliverForm.controls.rewardOfYouUse && this.deliverForm.controls.coupon) {
      this.errorMessage = ErrorMsgService.getErrorMsg('invalidCouponAndReward');
      $('#errorModal').modal('show');
      return;
    }

    // if (!this.deliverForm.controls.name){
    //   alert('請填寫收件者姓名');
    //   return;
    // }
    // if(!this.deliverForm.controls.phone){
    //   alert('請填寫聯絡電話');
    //   return;
    // }
    // if (!this.deliverForm.controls.address){
    //   alert('請填寫收件地址');
    //   return;
    // }

    this.showSpainner = true;

    let totalPrice = 0;
    let totalAmount = 0;

    for(let z = 0; this.orders.length > z; z++){
      totalPrice += this.orders[z]['price']; //判斷總價
      totalAmount += this.orders[z]['productAmount']; //判斷訂單總量
    }

    // 判斷總量
    if (totalAmount < 5){
      this.showSpainner = false;
      this.errorMessage = ErrorMsgService.getErrorMsg('invalidTotalAmount');
      $('#errorModal').modal('show');
      return;
    }

    // 今日訂單資訊
    const orderData = {
      name: this.deliverForm.controls.name.value,
      phone: this.deliverForm.controls.phone.value,
      address: this.deliverForm.controls.city.value + this.deliverForm.controls.district.value + this.deliverForm.controls.address.value,
      email: this.data.getLocalStorage('email'),
      orders: this.orders,
      createTime: this.utils.getToday(),
      totalPrice: totalPrice,
      totalAmount: totalAmount,
      notice: this.deliverForm.controls.notice.value,
      //coupon: "", //20191126 折扣碼
      //reward: 0 //20191126使用回饋
    }

    // 刪除今日訂單暫存
    this.data.removeLocalStorage('orders');

    this.http.newProduct(JSON.stringify(orderData))
      .subscribe(success=>{
        this.showSpainner = false;
        alert('感謝您的訂購');
        this.isOrder = false;
        this.orders = [];
        this.todayHadOrder.push(orderData)
        // 暫存今日訂單 減少db儲存用
        // this.data.setLocalStorage('todayOrdersList', JSON.stringify(this.todayHadOrder));
        
        // 新增 訂單標誌 如有新增轉成 true
        this.data.iHadNewOrderToday = true;

        $('#confirmModal').modal('hide');
      },
      error=>{
        console.log(error);
        this.showSpainner = false;
      })

    
  }

  // 從新增訂單 回訂單首頁 暫用 此為hard code
  backToFirstStep(){
    this.memberOrderPage = '1';
    // this.location.back();
  }

  // 修改訂單
  // editOrder(no) {
    
    //$('#editModal').modal('show');
    // this.ordersList = this.orders[no];
    // this.data.editOrdersList_ProductPrice = this.orders[no]['productPrice'];
    // this.data.editOrdersList_productAmount = this.orders[no]['productAmount'];
    // this.data.editOrdersList_productName = this.orders[no]['productName'];
    // this.data.editOrdersList_total = this.orders[no]['productAmount'] * this.orders[no]['productPrice'];
    // this.isShowEditModal = true;
    // this.productName_edit = list.productPrice;
    // this.productPrice_edit = list.productAmount;
    // this.totalPrice_edit = totalPrice;
  //   this.productName_edit = this.orders[no]['productName'];
  //   this.productPrice_edit = this.orders[no]['productPrice'];
  //   this.amount_edit = this.orders[no]['productAmount'];
  //   this.totalPrice_edit = this.orders[no]['productAmount'] * this.orders[no]['productPrice'];
  //   this.orderNumber_edit = no;
  // }
  

  deleteOrder(no) {
    this.orders.splice(no, 1);
    this.data.setLocalStorage('orders', JSON.stringify(this.orders));
    if (JSON.parse(this.data.getLocalStorage('orders')).length === 0) {
      this.data.removeLocalStorage('orders');
      this.isOrder = false;
    }
    
  }


  // countPrice_im_a_biggest_hard_code_ever() {
  //   if (this.editForm.controls.amount.value) {
  //     let num = parseInt(this.editForm.controls.amount.value, 10) *
  //       this.productPrice_edit;
  //     this.totalPrice_edit = num;
  //   }

  // }

  // closeOrderModal_im_a_biggest_hard_code_ever(){
  //   $('#editModal').modal('hide');
  // }


  // setOrderInfo_im_a_biggest_hard_code_ever(){
  //   const obj = {
  //     this.productName_edit
  //   }
  //   this.orderNumber_edit
  //   $('#editModal').modal('hide');
  // }



}
