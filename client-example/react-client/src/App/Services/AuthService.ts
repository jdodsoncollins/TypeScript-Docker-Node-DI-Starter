
export class AuthService {
  public accessToken: string;

  constructor() {
    this.accessToken = this.fetchToken();
  }

  public isAuthenticated(): boolean {
    if (this.accessToken === null) {
      return false;
    }

    return true;
  }

  public get(key: string): string | null {
    const item = window.localStorage.getItem(key);

    if (!item || item === 'null') {
      return null;
    }

    try {
      return item;
    } catch (err) {
      return null;
    }
  }

  public set(key: string, value: any): boolean {
    if (value === undefined) {
      value = null;
    } else {
      try {
        value = JSON.stringify(value);
      } catch (err) {
        return false;
      }
    }

    try {
        window.localStorage.setItem(key, value);
    } catch (err) {
      return false;
    }
  }

  private fetchToken(): string {
    return this.get('token');
  }

}
