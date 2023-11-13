export interface IUser {
  email?: string,
  password?: string,
  returnSecureToken: boolean
}

export interface IAuthResponse {
  idToken: string
  refreshToken: string,
  expiresIn: string,
  email: string,
  localId:	string,
  registered:	boolean

}
