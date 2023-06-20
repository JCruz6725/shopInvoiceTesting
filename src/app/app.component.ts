import { Component } from '@angular/core';
import { invoiceService } from './services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[invoiceService]
})
export class AppComponent {
  title = 'shop';
}
