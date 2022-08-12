export interface Post {
  readonly id: number;
  readonly shop_id: number;
  readonly start_date: Date;
  readonly end_date: Date;
  readonly pos: string;
  readonly price: number;
  readonly content: string;
  readonly tech: string;
}
