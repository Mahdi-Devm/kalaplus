// @ts-nocheck

import type { InContextSdkMethod } from '@graphql-mesh/types';

export namespace NestJsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  mutationInput_AuthController_VrifyOtp_input_otp: { input: unknown; output: unknown; }
  mutationInput_ProductsController_create_input_title: { input: unknown; output: unknown; }
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: { input: number; output: number; }
  mutationInput_ProductsController_updateProduct_input_title: { input: unknown; output: unknown; }
  /** The `File` scalar type represents a file upload. */
  File: { input: File; output: File; }
  /** Floats that will have a value greater than 0. */
  PositiveFloat: { input: number; output: number; }
  ObjMap: { input: unknown; output: unknown; }
};

export type Query = {
  /** همه محصولات را با اطلاعات کامل شامل موجودی و قیمت دقیق نمایش می‌دهد. */
  ProductsController_listForAdmin?: Maybe<PaginateProductResponse>;
  /** محصولات با قیمت‌های تخفیف‌ خورده (اگر تخفیف داشته باشند). */
  ProductsController_listForUser?: Maybe<PaginateProductResponse>;
  /** اطلاعات کامل یک محصول شامل قیمت اصلی، قیمت تخفیف‌خورده و وضعیت تخفیف. */
  ProductsController_findOne?: Maybe<Product>;
  /** دریافت همه دسته‌ بندی‌ ها */
  CategoriesController_findAll?: Maybe<Array<Maybe<Category>>>;
  /** دریافت یک دسته‌ بندی */
  CategoriesController_findOne?: Maybe<Category>;
  /** دریافت دسته‌ بندی با اسلاگ */
  CategoriesController_findBySlug?: Maybe<Category>;
  /** لیست تمام سفارش‌ های سیستم را برای ادمین برمی‌ گرداند. */
  OrderController_findAll?: Maybe<Array<Maybe<Order>>>;
  /** لیست تمام سفارش‌ های کاربر لاگین‌ شده را برمی‌ گرداند. */
  OrderController_findMyOrders?: Maybe<Array<Maybe<Order>>>;
  /** جزئیات یک سفارش متعلق به کاربر را برمی‌ گرداند. */
  OrderController_findMyOne?: Maybe<Order>;
  /** جزئیات یک سفارش خاص را برای ادمین برمی‌ گرداند. */
  OrderController_findOne?: Maybe<Order>;
  LikeController_findAll?: Maybe<Array<Maybe<Like>>>;
  LikeController_findOne?: Maybe<Like>;
};


export type QueryProductsController_listForAdminArgs = {
  page?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  filter_categoryId?: InputMaybe<Scalars['String']['input']>;
  filter_price?: InputMaybe<Scalars['String']['input']>;
  filter_discountPercent?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductsController_listForUserArgs = {
  page?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  filter_categoryId?: InputMaybe<Scalars['String']['input']>;
  filter_price?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductsController_findOneArgs = {
  id: Scalars['String']['input'];
};


export type QueryCategoriesController_findOneArgs = {
  id: Scalars['String']['input'];
};


export type QueryCategoriesController_findBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryOrderController_findMyOneArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrderController_findOneArgs = {
  id: Scalars['String']['input'];
};


export type QueryLikeController_findOneArgs = {
  id: Scalars['String']['input'];
};

export type PaginateProductResponse = {
  meta: PaginationMetaDto;
  links: PaginationLinkDto;
  data: Array<Maybe<Product>>;
};

export type PaginationMetaDto = {
  itemsPerPage: Scalars['Float']['output'];
  totalItems?: Maybe<Scalars['Float']['output']>;
  currentPage?: Maybe<Scalars['Float']['output']>;
  totalPages?: Maybe<Scalars['Float']['output']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  search?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
};

export type PaginationLinkDto = {
  first?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  current: Scalars['String']['output'];
  next?: Maybe<Scalars['String']['output']>;
  last?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  title: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  description: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  mainImage: Scalars['String']['output'];
  images: Array<Maybe<Scalars['String']['output']>>;
  discountPercent?: Maybe<Scalars['Float']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  stock: Scalars['Float']['output'];
  sold: Scalars['Float']['output'];
  likes: Array<Maybe<Like>>;
  category: Category;
  categoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Like = {
  product: Product;
  productId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type User = {
  name: Scalars['String']['output'];
  role: mutation_CategoriesController_create_products_items_likes_items_user_role;
  phone: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  orders: Array<Maybe<Order>>;
  likes: Array<Maybe<Like>>;
  id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type mutation_CategoriesController_create_products_items_likes_items_user_role =
  | 'user'
  | 'owner'
  | 'admin';

export type Order = {
  user: User;
  userId: Scalars['String']['output'];
  totalPrice: Scalars['Float']['output'];
  address?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  trackingCode?: Maybe<Scalars['String']['output']>;
  items: Array<Maybe<OrderItem>>;
  id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderItem = {
  order: Order;
  orderId: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Category = {
  title: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  image: Scalars['String']['output'];
  products: Array<Maybe<Product>>;
  id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  AuthController_ReqOtp?: Maybe<Scalars['JSON']['output']>;
  AuthController_VrifyOtp?: Maybe<Scalars['JSON']['output']>;
  AuthController_Refresh?: Maybe<Scalars['JSON']['output']>;
  AuthController_SummaryUser?: Maybe<Scalars['JSON']['output']>;
  /** فقط ادمین و مالک می‌توانند محصول جدید ایجاد کنند. تخفیف اختیاری است. */
  ProductsController_create?: Maybe<Scalars['JSON']['output']>;
  /** همه فیلدهای محصول را بروزرسانی می‌کند. فیلدهای ارسال نشده حذف می‌شوند. */
  ProductsController_updateProduct?: Maybe<Scalars['JSON']['output']>;
  /** فقط فیلدهای ارسال شده را بروزرسانی می‌کند. بقیه فیلدها تغییری نمی‌کنند. */
  ProductsController_updateDetail?: Maybe<Scalars['JSON']['output']>;
  /** محصول را به‌طور کامل از دیتابیس حذف می‌کند. این عملیات غیرقابل بازگشت است! */
  ProductsController_remove?: Maybe<Scalars['JSON']['output']>;
  /** ایجاد دسته‌ بندی جدید */
  CategoriesController_create?: Maybe<Category>;
  /** بروزرسانی دسته‌ بندی */
  CategoriesController_update?: Maybe<Category>;
  /** حذف دسته‌ بندی */
  CategoriesController_remove?: Maybe<Scalars['JSON']['output']>;
  /** آپلود چند عکس محصول (حداکثر ۵ عدد) */
  UploadController_uploadImages?: Maybe<Scalars['JSON']['output']>;
  /** یک عکس را از سرور حذف می‌کند. */
  UploadController_deleteImage?: Maybe<Scalars['JSON']['output']>;
  /** سفارش جدید توسط کاربر ثبت می‌ شود. */
  OrderController_create?: Maybe<Scalars['JSON']['output']>;
  /** وضعیت، کد پیگیری و اطلاعات سفارش توسط ادمین بروزرسانی می‌شود. */
  OrderController_update?: Maybe<Scalars['JSON']['output']>;
  /** یک سفارش توسط ادمین حذف می‌شود. */
  OrderController_remove?: Maybe<Scalars['String']['output']>;
  LikeController_create?: Maybe<Scalars['String']['output']>;
  LikeController_remove?: Maybe<Scalars['String']['output']>;
};


export type MutationAuthController_ReqOtpArgs = {
  input?: InputMaybe<RequestOtpDto_Input>;
};


export type MutationAuthController_VrifyOtpArgs = {
  input?: InputMaybe<VrifyOtpDto_Input>;
};


export type MutationAuthController_SummaryUserArgs = {
  input?: InputMaybe<SummaryUserDataDto_Input>;
};


export type MutationProductsController_createArgs = {
  input?: InputMaybe<CreateProductDto_Input>;
};


export type MutationProductsController_updateProductArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<UpdateProductDto_Input>;
};


export type MutationProductsController_updateDetailArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<UpdateProductDto_Input>;
};


export type MutationProductsController_removeArgs = {
  id: Scalars['String']['input'];
};


export type MutationCategoriesController_createArgs = {
  input?: InputMaybe<CreateCategoryDto_Input>;
};


export type MutationCategoriesController_updateArgs = {
  id: Scalars['String']['input'];
};


export type MutationCategoriesController_removeArgs = {
  id: Scalars['String']['input'];
};


export type MutationUploadController_uploadImagesArgs = {
  input?: InputMaybe<UploadController_uploadImages_request_Input>;
};


export type MutationUploadController_deleteImageArgs = {
  url: Scalars['String']['input'];
};


export type MutationOrderController_createArgs = {
  input?: InputMaybe<CreateOrderDto_Input>;
};


export type MutationOrderController_updateArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<UpdateOrderDto_Input>;
};


export type MutationOrderController_removeArgs = {
  id: Scalars['String']['input'];
};


export type MutationLikeController_createArgs = {
  input?: InputMaybe<CreateLikeDto_Input>;
};


export type MutationLikeController_removeArgs = {
  id: Scalars['String']['input'];
};

export type RequestOtpDto_Input = {
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type VrifyOtpDto_Input = {
  otp: Scalars['mutationInput_AuthController_VrifyOtp_input_otp']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type SummaryUserDataDto_Input = {
  fullName: Scalars['String']['input'];
};

export type CreateProductDto_Input = {
  title: Scalars['mutationInput_ProductsController_create_input_title']['input'];
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  mainImage: Scalars['String']['input'];
  images: Array<InputMaybe<Scalars['String']['input']>>;
  price: Scalars['NonNegativeFloat']['input'];
  discountPercent: Scalars['NonNegativeFloat']['input'];
  stock?: InputMaybe<Scalars['NonNegativeFloat']['input']>;
};

export type UpdateProductDto_Input = {
  title?: InputMaybe<Scalars['mutationInput_ProductsController_updateProduct_input_title']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  mainImage?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['NonNegativeFloat']['input']>;
  discountPercent?: InputMaybe<Scalars['NonNegativeFloat']['input']>;
  stock?: InputMaybe<Scalars['NonNegativeFloat']['input']>;
};

export type CreateCategoryDto_Input = {
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  image: Scalars['String']['input'];
};

export type UploadController_uploadImages_request_Input = {
  images?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
};

export type CreateOrderDto_Input = {
  items: Array<InputMaybe<CreateOrderItemDto_Input>>;
  address: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  trackingCode: Scalars['String']['input'];
};

export type CreateOrderItemDto_Input = {
  productId: Scalars['String']['input'];
  quantity: Scalars['PositiveFloat']['input'];
};

export type UpdateOrderDto_Input = {
  address: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  trackingCode: Scalars['String']['input'];
};

export type CreateLikeDto_Input = {
  productId: Scalars['String']['input'];
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** همه محصولات را با اطلاعات کامل شامل موجودی و قیمت دقیق نمایش می‌دهد. **/

  ProductsController_listForAdmin: InContextSdkMethod<Query['ProductsController_listForAdmin'], QueryProductsController_listForAdminArgs, BaseMeshContext>,
  /** محصولات با قیمت‌های تخفیف‌ خورده (اگر تخفیف داشته باشند). **/

  ProductsController_listForUser: InContextSdkMethod<Query['ProductsController_listForUser'], QueryProductsController_listForUserArgs, BaseMeshContext>,
  /** اطلاعات کامل یک محصول شامل قیمت اصلی، قیمت تخفیف‌خورده و وضعیت تخفیف. **/

  ProductsController_findOne: InContextSdkMethod<Query['ProductsController_findOne'], QueryProductsController_findOneArgs, BaseMeshContext>,
  /** دریافت همه دسته‌ بندی‌ ها **/

  CategoriesController_findAll: InContextSdkMethod<Query['CategoriesController_findAll'], {}, BaseMeshContext>,
  /** دریافت یک دسته‌ بندی **/

  CategoriesController_findOne: InContextSdkMethod<Query['CategoriesController_findOne'], QueryCategoriesController_findOneArgs, BaseMeshContext>,
  /** دریافت دسته‌ بندی با اسلاگ **/

  CategoriesController_findBySlug: InContextSdkMethod<Query['CategoriesController_findBySlug'], QueryCategoriesController_findBySlugArgs, BaseMeshContext>,
  /** لیست تمام سفارش‌ های سیستم را برای ادمین برمی‌ گرداند. **/

  OrderController_findAll: InContextSdkMethod<Query['OrderController_findAll'], {}, BaseMeshContext>,
  /** لیست تمام سفارش‌ های کاربر لاگین‌ شده را برمی‌ گرداند. **/

  OrderController_findMyOrders: InContextSdkMethod<Query['OrderController_findMyOrders'], {}, BaseMeshContext>,
  /** جزئیات یک سفارش متعلق به کاربر را برمی‌ گرداند. **/

  OrderController_findMyOne: InContextSdkMethod<Query['OrderController_findMyOne'], QueryOrderController_findMyOneArgs, BaseMeshContext>,
  /** جزئیات یک سفارش خاص را برای ادمین برمی‌ گرداند. **/

  OrderController_findOne: InContextSdkMethod<Query['OrderController_findOne'], QueryOrderController_findOneArgs, BaseMeshContext>,
  
  LikeController_findAll: InContextSdkMethod<Query['LikeController_findAll'], {}, BaseMeshContext>,
  
  LikeController_findOne: InContextSdkMethod<Query['LikeController_findOne'], QueryLikeController_findOneArgs, BaseMeshContext>
  };

  export type MutationSdk = {
      
  AuthController_ReqOtp: InContextSdkMethod<Mutation['AuthController_ReqOtp'], MutationAuthController_ReqOtpArgs, BaseMeshContext>,
  
  AuthController_VrifyOtp: InContextSdkMethod<Mutation['AuthController_VrifyOtp'], MutationAuthController_VrifyOtpArgs, BaseMeshContext>,
  
  AuthController_Refresh: InContextSdkMethod<Mutation['AuthController_Refresh'], {}, BaseMeshContext>,
  
  AuthController_SummaryUser: InContextSdkMethod<Mutation['AuthController_SummaryUser'], MutationAuthController_SummaryUserArgs, BaseMeshContext>,
  /** فقط ادمین و مالک می‌توانند محصول جدید ایجاد کنند. تخفیف اختیاری است. **/

  ProductsController_create: InContextSdkMethod<Mutation['ProductsController_create'], MutationProductsController_createArgs, BaseMeshContext>,
  /** همه فیلدهای محصول را بروزرسانی می‌کند. فیلدهای ارسال نشده حذف می‌شوند. **/

  ProductsController_updateProduct: InContextSdkMethod<Mutation['ProductsController_updateProduct'], MutationProductsController_updateProductArgs, BaseMeshContext>,
  /** فقط فیلدهای ارسال شده را بروزرسانی می‌کند. بقیه فیلدها تغییری نمی‌کنند. **/

  ProductsController_updateDetail: InContextSdkMethod<Mutation['ProductsController_updateDetail'], MutationProductsController_updateDetailArgs, BaseMeshContext>,
  /** محصول را به‌طور کامل از دیتابیس حذف می‌کند. این عملیات غیرقابل بازگشت است! **/

  ProductsController_remove: InContextSdkMethod<Mutation['ProductsController_remove'], MutationProductsController_removeArgs, BaseMeshContext>,
  /** ایجاد دسته‌ بندی جدید **/

  CategoriesController_create: InContextSdkMethod<Mutation['CategoriesController_create'], MutationCategoriesController_createArgs, BaseMeshContext>,
  /** بروزرسانی دسته‌ بندی **/

  CategoriesController_update: InContextSdkMethod<Mutation['CategoriesController_update'], MutationCategoriesController_updateArgs, BaseMeshContext>,
  /** حذف دسته‌ بندی **/

  CategoriesController_remove: InContextSdkMethod<Mutation['CategoriesController_remove'], MutationCategoriesController_removeArgs, BaseMeshContext>,
  /** آپلود چند عکس محصول (حداکثر ۵ عدد) **/

  UploadController_uploadImages: InContextSdkMethod<Mutation['UploadController_uploadImages'], MutationUploadController_uploadImagesArgs, BaseMeshContext>,
  /** یک عکس را از سرور حذف می‌کند. **/

  UploadController_deleteImage: InContextSdkMethod<Mutation['UploadController_deleteImage'], MutationUploadController_deleteImageArgs, BaseMeshContext>,
  /** سفارش جدید توسط کاربر ثبت می‌ شود. **/

  OrderController_create: InContextSdkMethod<Mutation['OrderController_create'], MutationOrderController_createArgs, BaseMeshContext>,
  /** وضعیت، کد پیگیری و اطلاعات سفارش توسط ادمین بروزرسانی می‌شود. **/

  OrderController_update: InContextSdkMethod<Mutation['OrderController_update'], MutationOrderController_updateArgs, BaseMeshContext>,
  /** یک سفارش توسط ادمین حذف می‌شود. **/

  OrderController_remove: InContextSdkMethod<Mutation['OrderController_remove'], MutationOrderController_removeArgs, BaseMeshContext>,
  
  LikeController_create: InContextSdkMethod<Mutation['LikeController_create'], MutationLikeController_createArgs, BaseMeshContext>,
  
  LikeController_remove: InContextSdkMethod<Mutation['LikeController_remove'], MutationLikeController_removeArgs, BaseMeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["NestJS"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
