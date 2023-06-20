import { Component, Input } from '@angular/core';
import { invoiceService } from '../services/invoice.service';
import { invoice } from '../models/invoice.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent {

  public a? : invoice;

  private subber? : Subscription;


  
  constructor(private is : invoiceService) {
    this.a = this.is.getInvoiceByID(1);
    //console.log(this.a);
  }

  
  ngOnInit(): void {
    this.subber = this.is.selectedInvoice.subscribe(
      (iv: invoice) => {this.a = iv;}
    )

    console.log(this.subber);

    }


}
