import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('OAuthScopes', { name: 'oauth_scopes' })
export class OAuthScopes implements IEntity {

  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'id' })
  private _id: any;

  @Column({ type: 'varchar', nullable: false, name: 'scope' })
  private _scope: string;

  @Column({ type: 'varchar', nullable: false, name: 'is_default' })
  private _isDefault: boolean;
  
  constructor(id:string = null) {
    this.setId(id);
  }

  get id(): any {
    return this._id;
  }

  get scope(): string {
    return this._scope;
  }

  set scope(value: string) {
    this._scope = value;
  }

  get isDefault(): boolean {
    return this._isDefault;
  }

  set isDefault(value: boolean) {
    this._isDefault = value;
  }

  private setId(id: string | null): void {
    if (id === null) {
      id = Uuid.uuid4();
    }
    this._id = id;
  }
}
