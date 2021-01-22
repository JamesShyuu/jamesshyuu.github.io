import { Component, OnInit } from '@angular/core';
import { DataService } from './service/dataService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private data: DataService, private router: Router,){}

  ngOnInit(){
    // 預設如果未登入 會回到首頁 用使用者帳號決定
    const email = this.data.getLocalStorage('email');

    if (!email) {
      this.router.navigate(['']);
    }
  }
}
