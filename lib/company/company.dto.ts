export interface Company {
  readonly id: number;
  readonly name: string;
  readonly contry: string;
  readonly region: string;
}

export interface AddCompanyDTO {
  readonly name: string;
  readonly contry: string;
  readonly region: string;
}
