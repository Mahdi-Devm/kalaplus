// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, type ExecuteMeshFn, type SubscribeMeshFn, type MeshContext as BaseMeshContext, type MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { ImportFn } from '@graphql-mesh/types';
import type { NestJsTypes } from './sources/NestJS/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  PaginateProductResponse: ResolverTypeWrapper<PaginateProductResponse>;
  PaginationMetaDto: ResolverTypeWrapper<PaginationMetaDto>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  PaginationLinkDto: ResolverTypeWrapper<PaginationLinkDto>;
  Product: ResolverTypeWrapper<Product>;
  Like: ResolverTypeWrapper<Like>;
  User: ResolverTypeWrapper<User>;
  mutation_CategoriesController_create_products_items_likes_items_user_role: mutation_CategoriesController_create_products_items_likes_items_user_role;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Category: ResolverTypeWrapper<Category>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RequestOtpDto_Input: RequestOtpDto_Input;
  VrifyOtpDto_Input: VrifyOtpDto_Input;
  mutationInput_AuthController_VrifyOtp_input_otp: ResolverTypeWrapper<Scalars['mutationInput_AuthController_VrifyOtp_input_otp']['output']>;
  SummaryUserDataDto_Input: SummaryUserDataDto_Input;
  CreateProductDto_Input: CreateProductDto_Input;
  mutationInput_ProductsController_create_input_title: ResolverTypeWrapper<Scalars['mutationInput_ProductsController_create_input_title']['output']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']['output']>;
  UpdateProductDto_Input: UpdateProductDto_Input;
  mutationInput_ProductsController_updateProduct_input_title: ResolverTypeWrapper<Scalars['mutationInput_ProductsController_updateProduct_input_title']['output']>;
  CreateCategoryDto_Input: CreateCategoryDto_Input;
  UploadController_uploadImages_request_Input: UploadController_uploadImages_request_Input;
  File: ResolverTypeWrapper<Scalars['File']['output']>;
  CreateOrderDto_Input: CreateOrderDto_Input;
  CreateOrderItemDto_Input: CreateOrderItemDto_Input;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']['output']>;
  UpdateOrderDto_Input: UpdateOrderDto_Input;
  CreateLikeDto_Input: CreateLikeDto_Input;
  HTTPMethod: HTTPMethod;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: Record<PropertyKey, never>;
  Float: Scalars['Float']['output'];
  PaginateProductResponse: PaginateProductResponse;
  PaginationMetaDto: PaginationMetaDto;
  JSON: Scalars['JSON']['output'];
  PaginationLinkDto: PaginationLinkDto;
  Product: Product;
  Like: Like;
  User: User;
  Order: Order;
  OrderItem: OrderItem;
  DateTime: Scalars['DateTime']['output'];
  Category: Category;
  Mutation: Record<PropertyKey, never>;
  RequestOtpDto_Input: RequestOtpDto_Input;
  VrifyOtpDto_Input: VrifyOtpDto_Input;
  mutationInput_AuthController_VrifyOtp_input_otp: Scalars['mutationInput_AuthController_VrifyOtp_input_otp']['output'];
  SummaryUserDataDto_Input: SummaryUserDataDto_Input;
  CreateProductDto_Input: CreateProductDto_Input;
  mutationInput_ProductsController_create_input_title: Scalars['mutationInput_ProductsController_create_input_title']['output'];
  NonNegativeFloat: Scalars['NonNegativeFloat']['output'];
  UpdateProductDto_Input: UpdateProductDto_Input;
  mutationInput_ProductsController_updateProduct_input_title: Scalars['mutationInput_ProductsController_updateProduct_input_title']['output'];
  CreateCategoryDto_Input: CreateCategoryDto_Input;
  UploadController_uploadImages_request_Input: UploadController_uploadImages_request_Input;
  File: Scalars['File']['output'];
  CreateOrderDto_Input: CreateOrderDto_Input;
  CreateOrderItemDto_Input: CreateOrderItemDto_Input;
  PositiveFloat: Scalars['PositiveFloat']['output'];
  UpdateOrderDto_Input: UpdateOrderDto_Input;
  CreateLikeDto_Input: CreateLikeDto_Input;
  ObjMap: Scalars['ObjMap']['output'];
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  Boolean: Scalars['Boolean']['output'];
}>;

export type enumDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  value?: Maybe<Scalars['String']['input']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type lengthDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  min?: Maybe<Scalars['Int']['input']>;
  max?: Maybe<Scalars['Int']['input']>;
};

export type lengthDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = lengthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  path?: Maybe<Scalars['String']['input']>;
  operationSpecificHeaders?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']['input']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
  jsonApiFields?: Maybe<Scalars['Boolean']['input']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type transportDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  kind?: Maybe<Scalars['String']['input']>;
  location?: Maybe<Scalars['String']['input']>;
  headers?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
  queryParams?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
};

export type transportDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = transportDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ProductsController_listForAdmin?: Resolver<Maybe<ResolversTypes['PaginateProductResponse']>, ParentType, ContextType, Partial<QueryProductsController_listForAdminArgs>>;
  ProductsController_listForUser?: Resolver<Maybe<ResolversTypes['PaginateProductResponse']>, ParentType, ContextType, Partial<QueryProductsController_listForUserArgs>>;
  ProductsController_findOne?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductsController_findOneArgs, 'id'>>;
  CategoriesController_findAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  CategoriesController_findOne?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoriesController_findOneArgs, 'id'>>;
  CategoriesController_findBySlug?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoriesController_findBySlugArgs, 'slug'>>;
  OrderController_findAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  OrderController_findMyOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  OrderController_findMyOne?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderController_findMyOneArgs, 'id'>>;
  OrderController_findOne?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderController_findOneArgs, 'id'>>;
  LikeController_findAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['Like']>>>, ParentType, ContextType>;
  LikeController_findOne?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<QueryLikeController_findOneArgs, 'id'>>;
}>;

export type PaginateProductResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaginateProductResponse'] = ResolversParentTypes['PaginateProductResponse']> = ResolversObject<{
  meta?: Resolver<ResolversTypes['PaginationMetaDto'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['PaginationLinkDto'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
}>;

export type PaginationMetaDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaginationMetaDto'] = ResolversParentTypes['PaginationMetaDto']> = ResolversObject<{
  itemsPerPage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalItems?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentPage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sortBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filter?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type PaginationLinkDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaginationLinkDto'] = ResolversParentTypes['PaginationLinkDto']> = ResolversObject<{
  first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  current?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mainImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  discountPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sold?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  likes?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type LikeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = ResolversObject<{
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['mutation_CategoriesController_create_products_items_likes_items_user_role'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>;
  likes?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trackingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['OrderItem']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type OrderItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  AuthController_ReqOtp?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<MutationAuthController_ReqOtpArgs>>;
  AuthController_VrifyOtp?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<MutationAuthController_VrifyOtpArgs>>;
  AuthController_Refresh?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  AuthController_SummaryUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<MutationAuthController_SummaryUserArgs>>;
  ProductsController_create?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<MutationProductsController_createArgs>>;
  ProductsController_updateProduct?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationProductsController_updateProductArgs, 'id'>>;
  ProductsController_updateDetail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationProductsController_updateDetailArgs, 'id'>>;
  ProductsController_remove?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationProductsController_removeArgs, 'id'>>;
  CategoriesController_create?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, Partial<MutationCategoriesController_createArgs>>;
  CategoriesController_update?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCategoriesController_updateArgs, 'id'>>;
  CategoriesController_remove?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationCategoriesController_removeArgs, 'id'>>;
  UploadController_uploadImages?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<MutationUploadController_uploadImagesArgs>>;
  UploadController_deleteImage?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationUploadController_deleteImageArgs, 'url'>>;
  OrderController_create?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<MutationOrderController_createArgs>>;
  OrderController_update?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationOrderController_updateArgs, 'id'>>;
  OrderController_remove?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationOrderController_removeArgs, 'id'>>;
  LikeController_create?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationLikeController_createArgs>>;
  LikeController_remove?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLikeController_removeArgs, 'id'>>;
}>;

export interface mutationInput_AuthController_VrifyOtp_input_otpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['mutationInput_AuthController_VrifyOtp_input_otp'], any> {
  name: 'mutationInput_AuthController_VrifyOtp_input_otp';
}

export interface mutationInput_ProductsController_create_input_titleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['mutationInput_ProductsController_create_input_title'], any> {
  name: 'mutationInput_ProductsController_create_input_title';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface mutationInput_ProductsController_updateProduct_input_titleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['mutationInput_ProductsController_updateProduct_input_title'], any> {
  name: 'mutationInput_ProductsController_updateProduct_input_title';
}

export interface FileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['File'], any> {
  name: 'File';
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  PaginateProductResponse?: PaginateProductResponseResolvers<ContextType>;
  PaginationMetaDto?: PaginationMetaDtoResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  PaginationLinkDto?: PaginationLinkDtoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Category?: CategoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  mutationInput_AuthController_VrifyOtp_input_otp?: GraphQLScalarType;
  mutationInput_ProductsController_create_input_title?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  mutationInput_ProductsController_updateProduct_input_title?: GraphQLScalarType;
  File?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  ObjMap?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  enum?: enumDirectiveResolver<any, any, ContextType>;
  length?: lengthDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
  transport?: transportDirectiveResolver<any, any, ContextType>;
}>;

export type MeshInContextSDK = NestJsTypes.Context;

export type MeshContext = BaseMeshContext & MeshInContextSDK;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    }).catch((err) => {
      meshInstance$ = undefined;
      return Promise.reject(err);
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));