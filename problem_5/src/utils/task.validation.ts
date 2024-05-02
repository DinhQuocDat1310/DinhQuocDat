import { TypeTask } from '@prisma/client';
import { body } from 'express-validator';

export const validateCreateTask = [
	body('name', 'Invalid name').notEmpty().bail().isString(),
	body('description', 'Invalid description').optional().isString(),
	body('type', 'Unknown type task. Type must be one of INDIVIDUAL or GROUP.')
		.notEmpty()
		.bail()
		.isIn([TypeTask.INDIVIDUAL, TypeTask.GROUP]),
];

export const validateUpdateTask = [
	body('name', 'Invalid name').optional().isString(),
	body('description', 'Invalid description').optional().isString(),
	body('type', 'Unknown type task. Type must be one of INDIVIDUAL or GROUP.')
		.optional()
		.bail()
		.isIn([TypeTask.INDIVIDUAL, TypeTask.GROUP]),
];
