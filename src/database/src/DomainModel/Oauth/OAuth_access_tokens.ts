import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('OAuthAccessTokens', { name: 'oauth_access_tokens' })
export class OAuthAccessTokens implements IEntity {
  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'identifier' })
  private _identifier: any;

  @Column({ type: 'varchar', nullable: false, name: 'oauth_client_id' })
  private _oAuthClientId: string;

  @Column({ type: 'timestamp', nullable: false, name: 'expires_at' })
  private _expiresAt: string;

  @Column({ type: 'timestamp', nullable: false, name: 'created_at' })
  private _createdAt: string;

  @Column({ type: 'varchar', nullable: false, name: 'user_id' })
  private _userId: string;

  @Column({ type: 'tinyint', nullable: false, name: 'is_revoked' })
  private _isRevoked: string;

  constructor(id:string = null) {
    this.setIdentifier(id);
  }

  get identifier(): any {
    return this._identifier;
  }

  get oAuthClientId(): string | null {
    return this._oAuthClientId;
  }

  set oAuthClientId(value: string | null) {
    this._oAuthClientId = value;
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

  get userId(): string | null {
    return this._userId;
  }

  set userId(value: string | null) {
    this._userId = value;
  }

  get isRevoken(): string | null {
    return this._isRevoked;
  }

  set isRevoked(value: string | null) {
    this._isRevoked = value;
  }

  private setIdentifier(identifier: string): void {
    this._identifier = identifier;
  }
}
