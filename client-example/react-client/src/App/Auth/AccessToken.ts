import * as jwtDecode from 'jwt-decode';

export interface IAccessTokenJWT {
    aud: string;
    jti: string;
    iat: number;
    nbf: number;
    exp: number;
    sub: string;
    scopes: string[];
  }  

export interface IAccessToken {
  readonly clientId?: string,
  readonly accessToken?: string,
  readonly expiresAt?: number,
  readonly tokenString?: string;
}

export class AccessToken implements IAccessToken {

  public static createFromJsonObject(json: IAccessToken): AccessToken {
    return new AccessToken(json.clientId, json.accessToken, json.expiresAt);
  }
  
  public static createFromJWTString(jwtString: string): AccessToken {
    const token: IAccessTokenJWT = jwtDecode(jwtString);
    return new AccessToken(token.aud, token.jti, token.exp);
  }

  public static createFromTokenOnly(token: string): AccessToken {
    return new AccessToken(null, token, null);
  }

  public readonly tokenString: string;
  
  constructor(
    public readonly clientId?: string,
    public readonly accessToken?: string,
    public readonly expiresAt?: number,
  ) {
    this.tokenString = `Bearer ${this.accessToken}`;
  }
  
  public isValid(): boolean {
    const timestamp = Math.floor(Date.now() / 1000);
    return timestamp < this.expiresAt;
  }
}
