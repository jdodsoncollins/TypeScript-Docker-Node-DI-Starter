import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('OAuthAccessTokenScopes', { name: 'oauth_access_token_scopes' })
export class OAuthAccessTokenScopes {
  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'access_token' })
  private _accessToken: string;

  @Column({ type: 'varchar', nullable: false, name: 'oauth_scope_id' })
  private _oAuthScopeId: string;

  get accessToken(): string {
    return this._accessToken;
  }

  set accessToken(value: string) {
    this._accessToken = value;
  }

  get oAuthScopeId(): string {
    return this._oAuthScopeId;
  }

  set oAuthScopeId(value: string) {
    this._oAuthScopeId = value;
  }
}
