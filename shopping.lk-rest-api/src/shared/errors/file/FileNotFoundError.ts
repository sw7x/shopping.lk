import FileError from '@root/src/shared/errors/FileError';

export default class FileNotFoundError extends FileError {
	public readonly name: string;

	constructor(filePath: string, cause?: Error) {
		super(`File not found: ${filePath}`, cause);
		this.name = 'File.FileNotFoundError';
	}
}
