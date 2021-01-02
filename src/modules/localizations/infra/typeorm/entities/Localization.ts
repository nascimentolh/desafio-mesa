import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Rating from './Rating';

@Entity('localizations')
class Localization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @OneToMany(() => Rating, ratings => ratings.localizations)
  @JoinColumn({ name: 'user_id' })
  ratings: Rating;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Localization;
