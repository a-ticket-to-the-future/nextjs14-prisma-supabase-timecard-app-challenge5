export interface User  {
    id: string,
    name: string | null,
    email: string | null,
    emailVerified: Date | null, 
    hashedPassword: string | null,
    image: string | null
    createdAt: Date,
    updatedAt: Date,
}


export interface Timecard {
    id: string,
    userId: string,
    startedAt: Date,
    endedAt: Date,
    createdAt: Date,
    updatedAt: Date,
}


// id          Int     @id @default(autoincrement())
//   userId      Int
//   startedAt   DateTime
//   endedAt     DateTime
//   createdAt   DateTime  @default(now())
//   updatedAt   DateTime  @updatedAt


// export interface user {
//     id: string ,
//     name: string ,
//     email: string ,
//     emailVerified: Date ,
//     image: string ,
//     hashedPassword: string ,
//     createdAt: Date,
//     updatedAt: Date,
// } 
// export interface user {
//     id: string,
//     name: string | null,
//     email: string | null,
//     emailVerified: Date | null,
//     image: string | null,
//     hashedPassword: string | null,
//     createdAt: Date,
//     updatedAt: Date,
// } 