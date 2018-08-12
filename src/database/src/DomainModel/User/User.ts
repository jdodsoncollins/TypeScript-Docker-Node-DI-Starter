import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Uuid } from '../../Infrastructure/Lib/Id/Uuid';
import { IEntity } from '../../Infrastructure/Entity/IEntity';

@Entity('user', { name: 'user' })
export class User implements IEntity {
  @PrimaryColumn({ type: 'varchar', nullable: false, name: 'id' })
  private _id: any;

  @Column({ type: 'varchar', nullable: true, name: 'email' })
  private _email: string;

  @Column({ type: 'varchar', nullable: true, name: 'firstName' })
  private _firstName: string | null;

  @Column({ type: 'varchar', nullable: true, name: 'lastName' })
  private _lastName: string | null;

  @Column({ type: 'varchar', nullable: true, name: 'password' })
  private _password: string | null;

  constructor(id: string = null) {
    this.setId(id);
  }

  get id(): any {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstName(): string | null {
    return this._firstName;
  }

  set firstName(value: string | null) {
    this._firstName = value;
  }

  get lastName(): string | null {
    return this._lastName;
  }

  set lastName(value: string | null) {
    this._lastName = value;
  }

  get password(): string | null {
    return this._password;
  }

  set password(value: string | null) {
    this._password = value;
  }

  private setId(id: string | null): void {
    if (id === null) {
      id = Uuid.uuid4();
    }
    this._id = id;
  }
}
