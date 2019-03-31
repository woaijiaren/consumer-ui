enum CouponType {
  Discount = 'Discount',
  Free = 'Free',
}

class CouponBaseModel {
  id: string;
}

class CouponDiscountModel extends CouponBaseModel {
  type: CouponType = CouponType.Discount;
}

class CouponFreeModel extends CouponBaseModel {
  type: CouponType = CouponType.Free;
}

type CouponModel = CouponDiscountModel | CouponFreeModel;

class CouponCardModel {
  id: string;
  coupon: CouponModel;
  num: string;
  startDate: Date;
  expireDate: Date;
}

class ProductModel {
  title: string;
  subtitle: string;
  price: number;
}

class SkuPackageItemModel {
  product: ProductModel;
  quantity: number;
}

class SkuPackageModel {
  id: string;
  title: string;
  subtitle: string;
  items: SkuPackageItemModel[] = [];
  price: number;
}

export class AccountModel {
  id: string;
  userId: string;
  // 历史上曾获得的总积分
  historicalPoints: number;
  // 剩余积分
  remainingPoints: number;
  balance: number;
  coupons: CouponCardModel[];
  packages: SkuPackageModel[];
}
