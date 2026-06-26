import { NextFunction, Request, Response } from 'express';
import fs, { createWriteStream } from 'node:fs';
import path from 'node:path';
import querystring from 'node:querystring';
//import loginReqFilter from '@src/http/middlewares/filters/request/loginReqFilter';

const file = (req: Request, res: Response, next: NextFunction) => {
	if (req.headers['content-type']?.startsWith('multipart/form-data')) {
		const contentType = req.headers['content-type'] as string;
		const boundary = contentType.split('boundary=')[1];

		try {
			const chunks: Buffer[] = [];
			req.on('data', (chunk) => {
				chunks.push(chunk);
			});

			req.on('end', () => {
				const buffer = Buffer.concat(chunks as Uint8Array[]);
				const boundaryBuffer = Uint8Array.from(Buffer.from(`--${boundary}`));

				//const parts = buffer.split(Buffer.from(`--${boundary}`));
				// Split the buffer by the boundary
				const parts = splitBuffer(buffer, boundaryBuffer);

				const files = parts
					.filter((part) => part.includes(Buffer.from('Content-Disposition')))
					.map((part) => {
						const headerEndIndex = part.indexOf(Buffer.from('\r\n\r\n') as Uint8Array);
						const header = part.subarray(0, headerEndIndex);
						const body = part.subarray(headerEndIndex + 4);

						const contentDisposition = header.toString();
						const match = contentDisposition.match(/name="(.+?)"; filename="(.+?)"/);

						if (!match) return null;
						const fieldname = match[1];
						const filename = match[2];
						const fileContent = body.subarray(0, -Buffer.from('\r\n').length);

						return { fieldname, filename, fileContent };
					})
					.filter(Boolean) as { fieldname: string; filename: string; fileContent: Buffer }[];

				// Save each file to the disk
				files.forEach((file) => {
					//const saveTo = path.join(__dirname, file.filename);
					const saveTo = path.join(__dirname, '..', 'public/uploads', file.filename);
					const fileStream = createWriteStream(saveTo);
					fileStream.write(file.fileContent);
					fileStream.end();
				});

				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end('File(s) uploaded successfully');
			});

			//req.on('error', reject);
		} catch (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end('Error handling file upload');
			console.error('Error parsing form:', err);
		}
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not Found');
	}

	/* 
	// Parse the content-disposition header for the file name (for simplicity)
	const fileName = 'uploaded_file'; // You can extract it from headers or name it dynamically

	// Create a writable stream to save the file
	const fileStream = createWriteStream(path.join(__dirname, fileName));

	// Pipe the request stream directly to the file stream
	req.pipe(fileStream);

	// Handle errors during upload
	req.on('error', (err) => {
		console.error('Error uploading file:', err);
		res.writeHead(500, { 'Content-Type': 'text/plain' });
		res.end('Internal Server Error');
	});

	// Listen for the end of the upload
	req.on('end', () => {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('File uploaded successfully');
	}); 
	*/
};

const form0 = (req: Request, res: Response, next: NextFunction) => {
	let body = '';

	console.log(req.body);
	console.log('req');

	req.on('data', (chunk) => {
		body += chunk.toString();
		console.log('body:', body);
	});

	req.on('end', () => {
		try {
			//const formData = querystring.parse(body);
			//console.log('formData');
			//console.log(formData);

			console.log('end-body:', body);

			//const parsedBody = JSON.parse(body);
			const parsedBody = new URLSearchParams(body);

			console.log('parsedBody:', parsedBody);
			//console.log('parsedBody.get("email"):', parsedBody.get('email'));
		} catch (error) {
			console.log('error:', error);
		}
	});
	/**/

	//console.log('req=============');
	//console.log(req);
	//console.log('req.body========');
	//console.log(req.body);
	//res.send(' form from ts app....kkk');

	res.send(' form from ts app....kkk');
};

const formValidate = (req: Request, res: Response, next: NextFunction) => {
	console.log('<============req.body');
	console.log(req.body);
	console.log('<============req.headers');
	console.log(req.headers);

	res.send(req.body);
	/* let body = '';

	console.log(req.body);
	console.log('req');

	req.on('data', (chunk) => {
		body += chunk.toString();
		console.log('body:', body);
	});

	req.on('end', () => {
		try {
			console.log('end-body:', body);
			const formData = querystring.parse(body);
			console.log(formData);
		} catch (error) {
			console.log('error:', error);
		}
	});
	res.send(' form submitted'); */
};

const login0 = (req: Request, res: Response, next: NextFunction) => {
	console.log(req.body);
	const { email, password } = req.body;
	res.send(req.body);

	// Proceed with your login logic using sanitized email and password

	//console.log('email:', email);
	//console.log('password:', password);
	//res.send('Login form submitted');
};

const login = (req: Request, res: Response, next: NextFunction) => {
	console.log('=== LOGIN CONTROLLER ===');
	console.log('Request body:', req.body);
	console.log('Content-Type:', req.headers['content-type']);

	const { email, password } = req.body;

	// Validate
	if (!email || !password) {
		return res.status(400).json({
			success: false,
			message: 'Email and password are required',
			receivedBody: req.body, // This will show you what was received
		});
	}

	// Your login logic
	res.json({
		success: true,
		message: 'Login successful',
		data: { email, password },
	});
};

const form = (req: Request, res: Response, next: NextFunction) => {
	let body = '';

	console.log(req.body);
	console.log('req');

	req.on('data', (chunk) => {
		body += chunk.toString();
		console.log('body:', body);
	});

	req.on('end', () => {
		try {
			console.log('end-body:', body);
			const formData = querystring.parse(body);
			console.log(formData);
		} catch (error) {
			console.log('error:', error);
		}
	});

	res.send(' form submitted');
};

// Helper function to split a buffer using another buffer
function splitBuffer(buffer: Buffer, delimiter: Uint8Array): Buffer[] {
	//function splitBuffer(buffer: Buffer, delimiter: Buffer): Buffer[] {
	const parts: Buffer[] = [];
	let start = 0;
	let end;

	while ((end = buffer.indexOf(delimiter, start)) !== -1) {
		parts.push(buffer.subarray(start, end));
		start = end + delimiter.length;
	}
	parts.push(buffer.subarray(start));
	return parts;
}

export default {
	file,
	form0,
	formValidate,
	login,
	form,
};
