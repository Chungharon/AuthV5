"use server" //backend

import { LoginSchema } from "@/schemas"
import { startTransition } from "react"
import { z } from "zod"

 
async function login (values: z.infer<typeof LoginSchema> ) {
    const validateFields = LoginSchema.safeParse(values)

    if (!validateFields.success) {
        return { error: "Invalid Username or Password" }
    }

    return { success: "Login Successful" }
}
export default login
