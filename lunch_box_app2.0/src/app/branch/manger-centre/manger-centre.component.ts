import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.service';
import { HttpService } from 'src/app/service/http.service';
import { ErrorMsgService } from 'src/app/service/error.service';

declare var $: any;

@Component({
  selector: 'app-manger-centre',
  templateUrl: './manger-centre.component.html',
  styleUrls: ['./manger-centre.component.css']
})
export class MangerCentreComponent implements OnInit {

  contentOption = "3";

  // 判斷是否顯示loading畫面
  showSpainner = false;

  // 錯誤訊息內容
  errorMessage = '';

  constructor(private data: DataService, private http: HttpService) { }

  ngOnInit() {

    if (!this.data.getLocalStorage('products')) {
      this.showSpainner = true;
      this.http.getProductAndReward()
        .subscribe((data) => {
          console.log('product list:', data);
          this.data.setSession('products', JSON.stringify(data['value']));
          this.data.setLocalStorage('products', JSON.stringify(data['value']));
          this.showSpainner = false;
        },
        (error) => {
          this.showSpainner = false;
          this.errorMessage = ErrorMsgService.getErrorMsg('invalidNetWork');
          $('#errorModal').modal('show');
        })
    }else {
      this.showSpainner = false;
    }


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
          items: 2
        }
      }
    })


    // $('#adminConfirmModal').modal('show');

    
  }

  // 功能切換
  pageSwitch(option: string) {
    this.contentOption = option;
  }

  // 再次確認是否為管理者
  confirmAdmin(){
    $('#adminConfirmModal').modal('hide');
  }

  // 關掉modal視窗
  closeModal(){
    $('#adminConfirmModal').modal('hide');
  }

}
