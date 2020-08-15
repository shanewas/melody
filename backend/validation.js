const Joi = require("joi");

const registerValidation = (data) => {
	const signUpSchema = Joi.object({
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	});
	return signUpSchema.validate(data);
};

const loginValidation = (data) => {
	const loginSchema = Joi.object({
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	});
	return loginSchema.validate(data);
};

module.exports = { registerValidation, loginValidation };
