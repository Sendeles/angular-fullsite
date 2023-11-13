export interface IEnvironment {
  apiKey: string,
  production: boolean,
  fbDbUrl: string

}

export interface IPost {
  id?: string,
  title: string,
  content: string,
  author: string,
  date: Date
}

export interface IFbCreateResponse {
  name: string
}
