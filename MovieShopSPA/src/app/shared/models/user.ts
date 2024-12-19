export interface User {
    // User info -> claims
    family_name: string;
    given_name: string;
    email: string;
    role: Array<string>;
    exp: string;
    alias: string;
    isAdmin: boolean;
    birthDate: Date;
    nameid: number;
}