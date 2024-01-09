import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  author!: string

  @Column()
  editorial!: string

  @Column()
  pages!: number

  @Column()
  year!: number
}
