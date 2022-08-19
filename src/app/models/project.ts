export interface Project {
    Id:number
    projectName:string;
    customerId:number;
    companyName:string;
    explanation:string;
    startedAt:Date;
    status:boolean;
    leadById:number;
    leadByFirstName:string;
    leadByLastName:string;
    leadByEmail:string;
    assignedById:number;
    assignerFirstName:string;
    assignerLastName:string;
    assignerMail:string;
}