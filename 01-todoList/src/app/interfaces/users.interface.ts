export type Role = 'admin' | 'user';

export interface User {
    id?: string,
    email: string,
    password?: string,
    username?: string,
    role: Role
}
