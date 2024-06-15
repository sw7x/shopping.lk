import React, { useState } from 'react';

export const PanZoom = () => {
	const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

	const onScroll = (e: any) => {
		console.log(e);
		const delta = e.deltaY * -0.01;
		const newScale = pos.scale + delta;

		const ratio = 1 - newScale / pos.scale;

		setPos({
			scale: newScale,
			x: pos.x + (e.clientX - pos.x) * ratio,
			y: pos.y + (e.clientY - pos.y) * ratio,
		});
	};

	const onCursorMove = (e: any) => {
		console.log(e.movementX);
		console.log(e.movementY);
		console.log('----------');
	};

	return (
		<div
			onWheelCapture={onScroll}
			onMouseMove={onCursorMove}
			style={{ width: '300px', height: '300px', overflow: 'hidden' }}
		>
			<img
				src='https://source.unsplash.com/random/300x300?sky'
				style={{
					transformOrigin: '0 0',
					transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
				}}
			/>
		</div>
	);
};
//
