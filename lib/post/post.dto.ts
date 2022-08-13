export interface Post {
  readonly id: number;
  readonly shop_id: number;
  readonly pos: string;
  readonly price: number;
  readonly content: string;
  readonly tech: string;
}

export interface CreatePostDTO {
  readonly shop_id: number;
  readonly pos: string;
  readonly price: number;
  readonly content: string;
  readonly tech: string;
}

export interface SimplePostDTO {
  readonly id: number;
  readonly shop_name: string;
  readonly contry: string;
  readonly region: string;
  readonly pos: string;
  readonly price: number;
  readonly tech: string;
}

export interface DetailPostDTO {
  readonly id: number;
  readonly shop_name: string;
  readonly contry: string;
  readonly region: string;
  readonly pos: string;
  readonly price: number;
  readonly tech: string;
  readonly content: string;
  readonly others: number[];
}
