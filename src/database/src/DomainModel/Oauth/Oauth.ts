import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('Oauth', { name: 'Oauth' })
export class Oauth implements IEntity {
  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'id' })
  private _id: any;

  @Column({ type: 'varchar', nullable: false, name: 'access_token' })
  private _access_token: string;

  @Column({ type: 'varchar', nullable: false, name: 'access_token_expires_on' })
  private _access_token_expires_on: string;

  @Column({ type: 'varchar', nullable: false, name: 'client_id' })
  private _client_id: string;

  @Column({ type: 'varchar', nullable: false, name: 'refresh_token' })
  private _refresh_token: string;

  @Column({ type: 'timestamp', nullable: false, name: 'refresh_token_expires_on' })
  private _refresh_token_expires_on: string;

  @Column({ type: 'varchar', nullable: false, name: 'user_id' })
  private _user_id: string;
  
  constructor(id:string = null) {
    this.setId(id);
  }

  get id(): any {
    return this._id;
  }

  get accessToken(): string {
    return this._access_token;
  }

  set accessToken(value: string) {
    this._access_token = value;
  }

  get accessTokenExpiresOn(): string {
    return this._access_token_expires_on;
  }

  set accessTokenExpiresOn(value: string) {
    this._access_token_expires_on = value;
  }

  get clientId(): string | null {
    return this._client_id;
  }

  set clientId(value: string | null) {
    this._client_id = value;
  }

  get refreshToken(): string | null {
    return this._refresh_token;
  }

  set refreshToken(value: string | null) {
    this._refresh_token = value;
  }

  get refreshTokenExpiresOn(): string | null {
    return this._refresh_token_expires_on;
  }

  set refreshTokenExpiresOn(value: string | null) {
    this._refresh_token_expires_on = value;
  }

  get userId(): string | null {
    return this._user_id;
  }

  set userId(value: string | null) {
    this._user_id = value;
  }

  private setId(id: string | null): void {
    if (id === null) {
      id = Uuid.uuid4();
    }
    this._id = id;
  }
}
