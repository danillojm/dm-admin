import { ShoppingPlatform } from "./shopping-platform.model";

export class Shopping {

  id: number;
  purchaseDate: Date;
  platform: ShoppingPlatform;
  storeName: string;
  orderId: string;
  product: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  trackingCode: string;
  observation: string;
  status: string;
}
