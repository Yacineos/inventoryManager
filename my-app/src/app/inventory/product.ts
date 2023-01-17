export interface Product{
    id: number;
    name: string;
    price: number;
    quantity: number;
    discount: number;
    totalValue: number;
    listed: boolean;
    expiryDate: Date;
    isChecked: boolean;
}