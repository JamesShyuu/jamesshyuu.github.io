import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(document).ready(function () {
    //   $.fakeLoader({
    //     bgColor: '#9b7d3b',
    //     spinner: 'spinner2'
    //   });
    // });
  }

}
