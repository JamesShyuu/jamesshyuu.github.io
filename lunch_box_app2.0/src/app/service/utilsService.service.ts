import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Injectable()
export class UtilsService {

    private previousUrl: string;
    private currentUrl: string;

    constructor(private router: Router){
        this.currentUrl = this.router.url;
        router.events.subscribe(event => {
            if(event instanceof NavigationEnd){
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
            }
        })
    }

    // 取得系統時間
    getToday() {
        const d = new Date();
        let year = d.getFullYear().toString();
        let month = (d.getMonth()+1).toString();
        let date = d.getDate().toString();

        return year + '-' + month + '-' + date;
    }

    // 取得前一頁url
    getPreviousUrl(){
        return this.previousUrl;
    }


    
}
