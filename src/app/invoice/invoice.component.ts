import { Component, Input, OnInit } from '@angular/core';
import { invoice } from '../models/invoice.model';
import { invoiceService } from '../services/invoice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  @Input('invoice') singleInvoice : invoice = new invoice(1,1,1,1);

  public a? : invoice;


  
  
  
  constructor(private is : invoiceService){
    
  
  
  // private subber? : Subscription;
  // ngOnInit(): void {
  //   this.subber = this.is.selectedInvoice.subscribe(
  //     (iv: invoice) => {this.a = iv;}
  //   )


  }
  public paidInvoice(){
    this.is.deleteInvoice(this.singleInvoice)

  }
  /**
   * InspectInvoice
   */
  public InspectInvoice() {
    this.is.setSelectedInvoice(this.singleInvoice);


  }



}
