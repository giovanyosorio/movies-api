const joi = require('@hapi/joi') //schema usuario

const userIdSchema = joi
    .string()
    .regex(/^[0-9a-fA-F]{24}$/)

const createUserSchema = {
    name: joi
        .string()
        .max(100)
        .required(),
    email: joi
        .string()
        .email(10)
        .required(),
    password: joi
        .string()
        .required(),
    isAdmin: joi.boolean()

}

module.exports = {
    userIdSchema,
    createUserSchema
}