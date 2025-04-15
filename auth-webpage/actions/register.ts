"use server" //backend

import { RegisterSchema } from "@/schemas"
import { startTransition } from "react"
import { z } from "zod"

 
async function register (values: z.infer<typeof RegisterSchema> ) {
    const validateFields = RegisterSchema.safeParse(values)

    if (!validateFields.success) {
        return { error: "Invalid Username or Password" }
    }

    return { success: "Login Successful" }
}
export default register
