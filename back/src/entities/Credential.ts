import { Column, Entity, Index, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({
    name: "credentials"
})

export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    @Index({unique: true})
    username: string

    @Column({length: 100})
    password: string

    @OneToOne(() => User, (user) => user.credential)
    user: User
}