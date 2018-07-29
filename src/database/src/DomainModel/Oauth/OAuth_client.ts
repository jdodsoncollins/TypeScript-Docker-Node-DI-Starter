import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('OAuthClient', { name: 'oauth_client' })
export class OAuthClient implements IEntity {

  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'identifier' })
  private _identifier: any;

  @Column({ type: 'varchar', nullable: false, name: 'secret' })
  private _secret: string;

  @Column({ type: 'varchar', nullable: false, name: 'name' })
  private _name: string;

  @Column({ type: 'varchar', nullable: false, name: 'redirect_uri' })
  private _redirectUri: string;

  @Column({ type: 'varchar', nullable: false, name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  private _createdAt: string;
  
  constructor(identifier:string = null) {
    this.identifier = identifier;
  }

  get identifier(): string {
    return this._identifier;
  }

  get secret(): string {
    return this._secret;
  }

  set secret(value: string) {
    this._secret = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get redirectUri(): string {
    return this._redirectUri;
  }

  set redirectUri(value: string) {
    this._redirectUri = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  set identifier(identifier: string) {
    this._identifier = identifier;
  }
}
