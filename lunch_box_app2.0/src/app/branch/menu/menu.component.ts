import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.service';
import { HttpService } from 'src/app/service/http.service';
import { ErrorMsgService } from 'src/app/service/error.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/service/validtion.service';
import { UtilsService } from 'src/app/service/utilsService.service';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  orderForm = new FormGroup({
    // productName: new FormControl(''),
    amount: new FormControl('', [this.valid.amountValidator()])
  })
  // 商品列
  productList = [];

  // 判斷是否要顯示畫面 ＊如商品項目於首頁未取得 須等拿到賞品資訊才顯示畫面
  isShow = false;

  // 判斷是否顯示loading畫面
  showSpainner = false;

  // 錯誤訊息內容
  errorMessage = '';

  amount: number = 5;

  totalPrice = 0;

  productData;

  productKey = '';

  productName = '';

  productPrice = 0;

  // 暫用 商品預購總數 fix next time
  orders = [];

  successMessage = '商品已新增至購物車中';


  // 暫用 商品總量
  test_productAmount = 5;

  // 暫用 商品編號
  test_productKey = '招牌福隆便當';

  // 暫用 商品價格
  test_productPrice = 70;

  // 暫用 商品總價格
  test_totalPrice = 350;

  constructor(private data: DataService, private http: HttpService, 
              private valid: ValidationService, private utils: UtilsService) { }

  ngOnInit() {

    $('#orderModal').modal('hide');

    // 取得 商品資料
    if (!this.data.productList) {
      // *如於首頁未取得在這重新取一次
      this.showSpainner = true;
      this.http.getProductAndReward()
        .subscribe((data) => {
          console.log('product list:', data);
          this.productList = data['value'];
          this.data.productList = data['value'];
          // this.data.setSession('products', JSON.stringify(data['value']));
          // this.data.setLocalStorage('products', JSON.stringify(data['value']));
          this.showSpainner = false;
          this.isShow = true;
        },
        (error) => {
          this.showSpainner = false;
          this.errorMessage = ErrorMsgService.getErrorMsg('invalidNetWork');
          $('#errorModal').modal('show');
        })
    } else {
      this.productList = this.data.productList;
      this.isShow = true;
    }

    // 判斷購物車內是否有東西
    if (this.data.getLocalStorage('orders')){
      this.orders = JSON.parse(this.data.getLocalStorage('orders'));
    }

  }


  openOrderModal(num) {
    // 清空上一次紀錄總金額
    this.totalPrice = 0;
    // 預設數量為5
    this.amount = 5;
    // 清空上一次訂購總量
    // this.orderForm.controls.amount.setValue(0);

    for (let x = 0; this.productList.length > x; x++) {
      if (this.productList[x].productKey === num) {
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


  // 計算總價  FIXME: 此方法為 hard code 需修正
  countPrice(amount, price) {
    if (amount) {
      return amount * price;
      // return num;
    }
  }

  // close order modal
  closeOrderModal() {
    $('#orderModal').modal('hide');
  }

  // 增加訂購數
  addAmount(amount) {
    this.amount = amount += 1;
    this.totalPrice = this.countPrice(this.amount, this.productPrice);
  }
  // 減少訂購數
  decreaseAmount(amount) {
    this.amount = amount -= 1;
    this.totalPrice = this.countPrice(this.amount, this.productPrice);
  }

  // 新增一筆訂單到購物車
  addOrderToCart() {
    this.orders.push({
      productAmount: this.amount,
      productKey: this.productKey,
      productPrice: this.productPrice,
      price: this.totalPrice,
      createTime: this.utils.getToday()
    });

    // 增加購物車內商品總量
    this.data.shoppingCartItemsQunt += 1;
    this.data.setLocalStorage('orders', JSON.stringify(this.orders));

    //alert('success');
    $('#orderModal').modal('hide');
    $('#successModal').modal('show');
  }


}
