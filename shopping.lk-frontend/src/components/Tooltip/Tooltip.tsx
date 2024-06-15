import React from 'react';
import classes from '@components/Tooltip/Tooltip.module.css';

type TooltipCommonProps = {
	text: string;
	//position?: 'top' | 'bottom' | 'right' | 'left';
	type?: 'success' | 'info' | 'warning' | 'danger';
	effect?: 'fade' | 'movable';
	arrowType?: 'half';
	softEdge?: boolean;
	multiline?: boolean;

	top?: string;
	left?: string;
	bottom?: string;
	right?: string;

	children: React.ReactNode;
};

type TooltipPositionProps =
	| { position: 'top'; top?: never; right?: never }
	| { position: 'right'; top?: never; right?: never }
	| { position: 'bottom'; bottom?: never; right?: never }
	| { position: 'left'; top?: never; left?: never };

type TooltipProps = TooltipCommonProps & TooltipPositionProps;

export const Tooltip: React.FC<TooltipProps> = ({
	text,
	position = 'top',
	type = '',
	effect = '',
	arrowType = '',
	softEdge = true,
	multiline = false,

	top = '',
	left = '',
	bottom = '',
	right = '',

	children,
}) => {
	const positionClass = `simptip-position-${position}`;
	const typeClass = type && `simptip-${type}`;
	const effectClass = effect && `simptip-${effect}`;
	const arrowTypeClass = arrowType && `half-arrow`;
	const softEdgeClass = softEdge == false ? '' : 'simptip-smooth';
	const multiLineClass = multiline == false ? '' : 'simptip-multiline';

	let top_pos;
	let right_pos;
	let bottom_pos;
	let left_pos;

	if (position == 'top') {
		top_pos = top || 'unset';
		right_pos = right || 'unset';
		bottom_pos = bottom || '100%';
		left_pos = left || '50%';
	} else if (position == 'right') {
		top_pos = top || 'unset';
		right_pos = right || 'unset';
		bottom_pos = bottom || '50%';
		left_pos = left || '100%';
	} else if (position == 'bottom') {
		top_pos = top || '100%';
		right_pos = right || 'unset';
		bottom_pos = bottom || 'unset';
		left_pos = left || '50%';
	} else if (position == 'left') {
		top_pos = top || 'unset';
		right_pos = right || '100%';
		bottom_pos = bottom || '50%';
		left_pos = left || 'unset';
	}

	return (
		<>
			<span
				className={`
				${classes[positionClass]} 
				${typeClass && classes[typeClass]} 
				${effectClass && classes[effectClass]}
				${arrowTypeClass && classes[arrowTypeClass]}
				${softEdgeClass && classes[softEdgeClass]}
				${multiLineClass && classes[multiLineClass]}
			`}
				style={
					{
						'--tooltip-top': top_pos,
						'--tooltip-right': right_pos,
						'--tooltip-bottom': bottom_pos,
						'--tooltip-left': left_pos,
					} as React.CSSProperties
				}
				data-tooltip={text}
			>
				{children}
			</span>
		</>
	);
};

/* 
.simptip-position-top{
	top:unset
	left: 50%;
	bottom: 100%;
	right: unset;
}

.simptip-position-left{
	top:unset
	left: unset%;
	bottom: 50%;
	right: 100%;
}

.simptip-position-bottom{
	top:100%
	left: 50%;
	bottom: unset;
	right: unset;
}

.simptip-position-right{
	top:unset
	left: 100%;
	bottom: 50%;
	right: unset;
}



<table>
	<tr>
		<td><span class="simptip-position-top" data-tooltip="I'm in top">position top</span></td>
		<td><span class="simptip-position-bottom" data-tooltip="I'm in bottom">position bottom</span></td>
	</tr>
	<tr>
		<td><span class="simptip-position-right" data-tooltip="I'm in right">position right</span></td>
		<td><span class="simptip-position-left" data-tooltip="I'm in left">position left</span></td>
	</tr>
	<tr>
		<td><span class="simptip-position-bottom simptip-success" data-tooltip="I'm a success tooltip">success</span></td>
		<td><span class="simptip-position-bottom simptip-info" data-tooltip="I'm an info tooltip">info</span></td>
	</tr>
	<tr>
		<td><span class="simptip-position-bottom simptip-warning" data-tooltip="I'm a warning tooltip">warning</span></td>
		<td><span class="simptip-position-bottom simptip-danger" data-tooltip="I'm an danger tooltip">danger</span></td>
	</tr>
	<tr>
		<td><span class="simptip-position-bottom half-arrow simptip-warning" data-tooltip="I'm a tooltip with half arrow">half arrow</span></td>
		<td><span class="simptip-position-bottom simptip-smooth" data-tooltip="I'm a tooltip with soft edge">soft edge</span></td>
	</tr>
	<tr>
		<td><span class="simptip-position-bottom simptip-fade" data-tooltip="I'm a tooltip with fade effect">fade effect</span></td>
		<td><span class="simptip-position-bottom simptip-movable" data-tooltip="I'm a tooltip with movable effect">movable effect</span></td>
	</tr>
	<tr>
		<td><span class="simptip-position-bottom simptip-movable half-arrow simptip-multiline simptip-info" data-tooltip="I'm a multiline tooltip with movable effect and half arrow for information">
		movable effect</span></td>
	</tr>
</table>	
*/
