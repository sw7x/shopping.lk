import { Button } from 'antd';
import { SaveOutlined, SyncOutlined } from '@ant-design/icons';
import { type FormProps } from 'antd';

type ResetButtonProps = {};

export const ResetButton: React.FC<ResetButtonProps> = (props: FormProps) => {
	return (
		<Button
			type='primary'
			danger
			onClick={() => {
				//setFilters([], 'replace');
				props.form?.resetFields();
			}}
			style={{ marginRight: 8, borderRadius: 2 }}
			icon={
				<SyncOutlined onPointerLeaveCapture={() => {}} onPointerEnterCapture={() => {}} />
			}
		>
			Reset
		</Button>
	);
};
