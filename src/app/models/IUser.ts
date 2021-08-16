export interface IUser {
    id: number;
    username: string;
    password: string;
    type: UserType;
}

export enum UserType {
    Admin = "ADMINISTRATOR",
    Application = "APPLICATION"
}