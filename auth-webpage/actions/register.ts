"use server" //backend

import { RegisterSchema } from "@/schemas"
import { db } from "@/lib/db"
import { startTransition } from "react"
import { z } from "zod"
import bcrypt from "bcrypt"

 
async function register (values: z.infer<typeof RegisterSchema> ) {
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: "Invalid Username or Password" }
    }

    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await db.user.findUnique({
        where: {
            email: "mail@example.com"
        }
    })

    if (existingUser) {
        return { error: "Email already taken" }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

     //TODO: send verification token email

    return { success: "User Created!" }
}
export default register
