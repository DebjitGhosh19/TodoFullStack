import Joi from "joi";

export const userValidationSchema = Joi.object({
  userName: Joi.string()
    .min(3)
    .max(20)
    .required()
    .messages({
      "string.empty": "Username cannot be empty",
      "string.min": "Username must be at least 3 characters",
      "string.max": "Username cannot exceed 20 characters",
      "any.required": "Username is required"
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.email": "Invalid email format",
      "string.empty": "Email cannot be empty",
      "any.required": "Email is required"
    }),

  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$!%*?&]).*$"))
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.pattern.base": "Password must contain uppercase, lowercase, number, and special character",
      "string.empty": "Password cannot be empty",
      "any.required": "Password is required"
    }),
});
