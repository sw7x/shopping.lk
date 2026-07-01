import { Button } from 'antd';
import { SaveOutlined, SyncOutlined } from '@ant-design/icons';
import { type FormProps } from 'antd';

type SaveButtonProps = {};

export const SaveButton: React.FC<SaveButtonProps> = (props: FormProps) => {
	return (
		<Button
			type='primary'
			//className='text-stone-900'
			//style={{ color: '#000 !important' }}
			onClick={() => {
				//setFilters([], 'replace');
				props.form?.submit();
			}}
			style={{ borderRadius: 2 }}
			icon={
				<SaveOutlined onPointerLeaveCapture={() => {}} onPointerEnterCapture={() => {}} />
			}
		>
			Save
		</Button>
	);
};
