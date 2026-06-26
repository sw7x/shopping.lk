import { NextFunction, Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';

const video1 = async (req: Request, res: Response, next: NextFunction) => {
	// The path to the video file
	const videoPath = path.join(__dirname, '..', 'public/videos', 'sample.mp4');
	//res.sendFile(path.join(__dirname, '..', 'public/videos', 'index.html'));

	try {
		// Get video file stats (size, etc.)
		const stat = await fs.promises.stat(videoPath);
		const fileSize = stat.size;

		// Check if the client is requesting a specific byte range
		const range = req.headers.range;

		if (range) {
			const chunkSize = 128 * 1024;

			// Extract the byte range (start and end) from the range header
			const parts = range.replace(/bytes=/, '').split('-');
			const start = parseInt(parts[0], 10);
			//const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
			const end = Math.min(start + chunkSize, fileSize - 1);

			//const chunkSize = end - start + 1;
			const actualChunkSize = end - start + 1;

			const highWaterMark = 256 * 1024;

			// Create a readable stream for the requested chunk
			const videoStream = fs.createReadStream(videoPath, { start, end });

			// Set the correct headers for partial content
			res.writeHead(206, {
				'Content-Range': `bytes ${start}-${end}/${fileSize}`,
				'Accept-Ranges': 'bytes',
				'Content-Length': actualChunkSize,
				'Content-Type': 'video/mp4',
			});

			// Pipe the video stream to the response
			videoStream.pipe(res);
		} else {
			res.status(400).send('error');

			// If no range is specified, send the entire video (not ideal for large files)
			/*
			res.writeHead(200, {
				'Content-Length': fileSize,
				'Content-Type': 'video/mp4',
			}); 
			*/

			// Create a readable stream for the entire file
			//fs.createReadStream(videoPath).pipe(res);
		}
	} catch (error) {
		res.status(404).send('Video file not found');
	}
};

const video2 = (req: Request, res: Response, next: NextFunction) => {
	res.sendFile(path.join(__dirname, '..', 'public/videos', 'sample2.mp4'));
};

export default {
	video1,
	video2,
};
