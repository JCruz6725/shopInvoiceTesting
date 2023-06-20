export class invoice 
{
    public ID? : number;
    public UserID? : number;
    public TechID? : number;
    public CustomerID? : number;
    public SubTotal? : number;
    public Total? : number;
    public ScheduleID? : number;

    constructor(id : number, userId : number, techId : number, customerId : number){
        this.ID = id;
        this.UserID = userId;
        this.TechID = techId;
        this.CustomerID = customerId;
    }



}