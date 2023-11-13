export interface IInfo {
  title: string;
  description: string;
  source_id: string;
  pubDate: string;
  creator: string;
  country: string;
}

export interface IData {
  results: IInfo[]
}
