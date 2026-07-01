import { FaInfoCircle } from 'react-icons/fa';
import { Tooltip } from '@root/components/Tooltip';

type ToolTipInfoCircleProps = {
	text: string;
	position?: 'top' | 'bottom' | 'right' | 'left';
	multiline?: boolean;
	type?: 'info' | 'success' | 'warning' | 'danger';
};

export const ToolTipInfoCircle: React.FC<ToolTipInfoCircleProps> = ({
	text,
	position = 'top',
	multiline = true,
	type = 'success',
}) => {
	return (
		<Tooltip text={text} position={position} multiline={multiline} type={type}>
			<FaInfoCircle
				style={{
					color: '#7aa93c',
					fontSize: '14px',
					background: 'transparent',
					marginLeft: '0.3rem',
				}}
			/>
		</Tooltip>
	);
};
