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

  @Column({ type: 'varchar', nullable: false, name: 'redirect_urls' })
  private _redirectUrls: string;

  @Column({ type: 'varchar', nullable: false, name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  private _createdAt: string;
  
  constructor(id:string = null) {
    this.setIdentifier(id);
  }

  get identifier(): any {
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

  get redirectUrls(): string {
    return this._redirectUrls;
  }

  set redirectUrls(value: string) {
    this._redirectUrls = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  private setIdentifier(identifier: string): void {
    this._identifier = identifier;
  }
}
