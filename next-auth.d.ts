
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

// declare module "next-auth" {
//     interface Session {
//         user: {
//             id: string,
//             role: string,
//         } & DefaultSession
//     }

//     interface User extends DefaultUser {
//         role: string,
//     }
// }

// declare module "next-auth/jwt" {
//     interface JWT extends DefaultJWT {
//         role: string,
//     }
// }
declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            name: string;
            phone: string;
            email: string;
            accessToken: string;
        } & DefaultSession
    }
    interface User extends DefaultUser {
        phone: string,
        accessToken: string
    }
}
declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        phone: string,
        accessToken: string;

    }
}