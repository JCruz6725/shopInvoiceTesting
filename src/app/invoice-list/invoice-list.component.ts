import { Component, DebugElement } from '@angular/core';
import { invoice } from '../models/invoice.model';
import { invoiceService } from '../services/invoice.service';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent {

  public invoices? : invoice[];

  constructor (private is : invoiceService ){
    this.invoices = is.invoicemockdata;
    
  }

  public addInvoice() 
  {
    this.is.addInvoice();
  }

}
