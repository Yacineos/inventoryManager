export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    orders: number;
    ordersTotal: number;
    costumerSince: string;
    isChecked: boolean;
}