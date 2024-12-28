import { z } from 'zod';

export const SignupFormSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    lastName: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .trim(),
});

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().min(1, { message: 'Password field must not be empty.' }),
});
export const BlogFormSchema = z.object({
    title: z.string().min(10 , { message: 'Title must be at least 10 characters long.' }),
    content: z.string().min(10, { message: 'Title must be at least 10 characters long.' }),
});
export type FormState =
    | {
        errors?: {
            firstName?: string[];
            lastName?: string[];
            email?: string[];
            password?: string[];
        };
        message?: string;
        ok?:boolean
        username?:string
        id?:number
    }
    | undefined;

export type SessionPayload = {
    userId: string | number;
    expiresAt: Date;
};
export type BlogFormState = 
    | {
        errors?: {
            title?: string[];
            content?: string[];
            
        };
        message?: string;
        ok?:boolean
    }
    | undefined;