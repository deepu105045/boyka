import { Status } from "../service/status";

export class Order {
    id: string
    uid: string;
    count: number;
    name: string;
    phoneNumber : string;
    status?: Status
}
