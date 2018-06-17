import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('Oauth', { name: 'Oauth' })
export class Oauth implements IEntity {
  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'id' })
  private _id: any;

  @Column({ type: 'varchar', nullable: false, name: 'access_token' })
  private _accessToken: string;

  @Column({ type: 'varchar', nullable: false, name: 'access_token_expires_on' })
  private _accessTokenExpiresOn: string;

  @Column({ type: 'varchar', nullable: false, name: 'client_id' })
  private _clientId: string;

  @Column({ type: 'varchar', nullable: false, name: 'refresh_token' })
  private _refreshToken: string;

  @Column({ type: 'timestamp', nullable: false, name: 'refresh_token_expires_on' })
  private _refreshTokenExpiresOn: string;

  @Column({ type: 'varchar', nullable: false, name: 'user_id' })
  private _userId: string;
  
  constructor(id:string = null) {
    this.setId(id);
  }

  get id(): any {
    return this._id;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  set accessToken(value: string) {
    this._accessToken = value;
  }

  get accessTokenExpiresOn(): string {
    return this._accessTokenExpiresOn;
  }

  set accessTokenExpiresOn(value: string) {
    this._accessTokenExpiresOn = value;
  }

  get clientId(): string | null {
    return this._clientId;
  }

  set clientId(value: string | null) {
    this._clientId = value;
  }

  get refreshToken(): string | null {
    return this._refreshToken;
  }

  set refreshToken(value: string | null) {
    this._refreshToken = value;
  }

  get refreshTokenExpiresOn(): string | null {
    return this._refreshTokenExpiresOn;
  }

  set refreshTokenExpiresOn(value: string | null) {
    this._refreshTokenExpiresOn = value;
  }

  get userId(): string | null {
    return this._userId;
  }

  set userId(value: string | null) {
    this._userId = value;
  }

  private setId(id: string | null): void {
    if (id === null) {
      id = Uuid.uuid4();
    }
    this._id = id;
  }
}
