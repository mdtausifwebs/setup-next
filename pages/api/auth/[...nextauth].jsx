import NextAuth from "next-auth"
import GithhubProvider from "next-auth/providers/github"

export const authOption={
    providers:[
        GithhubProvider({
            clientId:"4a373a1db3d8cc9aeacc",
            clientSecret:"2a6323de10003726576a7a03429591b885552360"
        })
    ]
}

export default NextAuth(authOption)