import BusinessLogicError from '@root/src/errors/BusinessLogicError';

export default class InsufficientBalanceError extends BusinessLogicError {
	public readonly name: string;

	constructor(accountId: string, cause?: Error) {
		super(`Account ${accountId} has insufficient balance.`, cause);
		this.name = 'BusinessLogic.InsufficientBalanceError';
	}
}
