import { StaticImageData } from 'next/image';

type CategoryType = {
  id: string;
  title: string;
  categoryType: string;
  description: string;
  image: string;
};

enum Sizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
};

type ProductType = {
  id: string;
  title: string;
  category: string;
  description: string;
  sizes: string[];
  quantity: {
    [key: Sizes]: number;
  };
  price: number;
  thumb: string;
  images: string[];
  isNew: boolean;
  onSale: {
    isOnSale: boolean;
    discount: number;
  }
};

type ClothingCategoryType = {
  id: string;
  title: string;
  image: string | StaticImageData;
};

type ShippingAddressType = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  email: string;
};

type ShippingCountryType = {
  id: string;
  name: string;
  cost: number;
};

type OrderProductType = {
  id: string;
  title: string;
  size: string;
  quantity: number;
  maxQuantity: number;
  price: number;
  onSale: {
    isOnSale: boolean;
    discount: number;
  }
  thumb: string;
};

type OrderType = {
  id?: string;
  userId?: string;
  date: Date;
  total: number;
  status: string;
  products: OrderProductType[];
  shippingAddress: ShippingAddressType;
};

type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  discount: number;
  address: ShippingAddressType;
  ranking: {
    current: RankingNamesEnum | null;
    next: RankingNamesEnum | null;
    progress: number;
    moneyToNextRanking: number;
  }
};

enum RankingNamesEnum {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum',
}

type RankingType = {
  name: RankingNamesEnum;
  min: number;
  max: number;
  discount: number;
};
