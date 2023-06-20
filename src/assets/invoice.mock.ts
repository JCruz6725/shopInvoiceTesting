import { invoice } from "src/app/models/invoice.model";

export class invoiceMock
{

    /**
     * get
     */
    public static get() {
        let i : invoice[] = [
            new invoice(1,1,1,1),
            new invoice(2,2,2,2),
            new invoice(3,3,3,3),
            new invoice(4,4,4,4),
            new invoice(5,5,5,5)
        ];
        return i;
    }
}