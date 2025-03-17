import z from "zod";

export const passwordValidation = z
  .string()
  .min(6)
  .max(16)
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must be at least one lower case")
  .regex(/\d/, "Password must contain at least one number")
  .regex(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password must contain at least one special character"
  )
  .refine((password) => !/\s/.test(password), {
    message: "Password must not contain spaces",
  });

export const ValidationSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be more than 3 character" })
    .max(10, { message: "Username must be less than 10 character" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .max(16)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must be at least one lower case")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .refine((password) => !/\s/.test(password), {
      message: "Password must not contain spaces",
    }),
});

export function random(len: number) {
  let options = "qwertyuioasdfghjklzxcvbnm12345678";
  let length = options.length;

  let ans = "";

  for (let i = 0; i < len; i++) {
    ans += options[Math.floor(Math.random() * length)]; 
  }

  return ans;
}
