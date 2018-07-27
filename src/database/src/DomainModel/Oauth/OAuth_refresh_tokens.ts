import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('OAuthRefreshTokens', { name: 'oauth_refresh_tokens' })
export class OAuthRefreshTokens implements IEntity {
  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'identifier' })
  private _identifier: any;

  @Column({ type: 'varchar', nullable: false, name: 'oauth_access_token_id' })
  private _oAuthAccessTokenId: string;

  @Column({ type: 'varchar', nullable: false, name: 'access_token_expires_on', default: () => 'CURRENT_TIMESTAMP' })
  private _accessTokenExpiresOn: string;

  @Column({ type: 'timestamp', nullable: false, name: 'expires_at', default: () => 'CURRENT_TIMESTAMP' })
  private _expiresAt: string;

  @Column({ type: 'timestamp', nullable: false, name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  private _createdAt: string;
  
  constructor(id:string = null) {
    this.setIdentifier(id);
  }

  get identifier(): any {
    return this._identifier;
  }

  get oAuthAccessTokenId(): string {
    return this._oAuthAccessTokenId;
  }

  set oAuthAccessTokenId(value: string) {
    this._oAuthAccessTokenId = value;
  }

  get accessTokenExpiresOn(): string {
    return this._accessTokenExpiresOn;
  }

  set accessTokenExpiresOn(value: string) {
    this._accessTokenExpiresOn = value;
  }

  get expiresAt(): string | null {
    return this._expiresAt;
  }

  set expiresAt(value: string | null) {
    this._expiresAt = value;
  }

  get createdAt(): string | null {
    return this._createdAt;
  }

  set createdAt(value: string | null) {
    this._createdAt = value;
  }

  private setIdentifier(identifier: string ): void {
    this._identifier = identifier;
  }
}
