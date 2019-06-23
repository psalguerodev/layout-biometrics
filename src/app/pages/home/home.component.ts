import { Component, OnInit } from '@angular/core';

export interface Customer {
  fullName: string;
  documentType: string;
  documentNumber: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customer: Customer = {
    fullName: 'Patrick Salguero',
    documentNumber: '70570294',
    documentType: 'DNI'
  };

  isProcessing = false;
  resultProcess: any = null;

  constructor() { }

  ngOnInit() {
  }

  handleProcess(event): void  {
    this.resultProcess = event.detail;
    console.log(this.resultProcess);
  }

  triggerResize(event) {
    console.log(event.value);
  }

}
