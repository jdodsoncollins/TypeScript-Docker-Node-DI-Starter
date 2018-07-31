import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('OAuthAccessToken', { name: 'oauth_access_token' })
export class OAuthAccessToken implements IEntity {
  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'identifier' })
  private _identifier: any;

  @Column({ type: 'varchar', nullable: false, name: 'oauth_client_id' })
  private _oAuthClientId: string;

  @Column({ type: 'timestamp', nullable: false, name: 'expires_at', default: () => 'CURRENT_TIMESTAMP' })
  private _expiresAt: string;

  @Column({ type: 'timestamp', nullable: false, name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  private _createdAt: string;

  @Column({ type: 'varchar', nullable: false, name: 'user_id' })
  private _userId: string;

  @Column({ type: 'tinyint', nullable: false, name: 'is_revoked', default: () => '0' })
  private _isRevoked: string;

  constructor(id:string = null) {
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

  get isRevoked(): string | null {
    return this._isRevoked;
  }

  set isRevoked(value: string | null) {
    this._isRevoked = value;
  }

  set identifier(identifier: any) {
    this._identifier = identifier;
  }
}
