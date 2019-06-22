import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  result: string;
  documentNumber = '12345678';

  constructor() { }

  ngOnInit() {
  }

  handleSuccess(event): void {
    console.log(`recieve: ${event.detail}`);
    this.result = event.detail;
  }

}
