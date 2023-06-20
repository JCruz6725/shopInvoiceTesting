import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {


  
  public invoiceNumber : number = 1
  public carMake : string = "asdf"
  public carModel : string = "asdf"
  public customerName : string = "asdf"



}
