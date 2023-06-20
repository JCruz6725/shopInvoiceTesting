import { invoiceMock } from "src/assets/invoice.mock";
import { invoice } from "../models/invoice.model";
import { Observable, Subject, isObservable } from "rxjs";

export class invoiceService
{

    public invoicemockdata? : invoice[];
    public selectedInvoice : Subject<invoice> = new Subject<invoice>();
    

    public maxId : number = -1;


    constructor(){
        this.invoicemockdata = invoiceMock.get();
        this.maxId = this.invoicemockdata.length;
        
        
   } 






    public setSelectedInvoice(selected : invoice){
        this.selectedInvoice.next(selected);
    
    }


    public getInvoiceByID(ID : number){
        for (let i = 0; i < this.invoicemockdata!.length; i++) {
            if (ID == this.invoicemockdata![i].ID){
                return this.invoicemockdata![i];
            }
        }
        return undefined;


    }


    
    public deleteInvoice(selected : invoice){
        let index = -1;
        for (let i = 0; i < this.invoicemockdata!.length; i++) {
            if (selected.ID == this.invoicemockdata![i].ID){
                index = i;
                break;
            }
        }

        if (index !== -1) {
            this.invoicemockdata?.splice(index, 1);
        }
    }

    public addInvoice(){
        this.maxId = this.maxId + 1;
        let newInv = new invoice (this.maxId,this.maxId,this.maxId,this.maxId);
        this.invoicemockdata?.push(newInv)
    }



}