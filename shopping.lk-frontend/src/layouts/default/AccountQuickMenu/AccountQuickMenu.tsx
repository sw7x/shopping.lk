import React from 'react';
import { AccountIcon } from '@root/layouts/default/AccountQuickMenu/AccountIcon';
import { AccountQuickLinksDropdown } from '@root/layouts/default/AccountQuickMenu/AccountQuickLinksDropdown';

export const AccountQuickMenu = () => {
	return (
		<div className='my-account-icon dropdown'>
			<AccountIcon />
			<AccountQuickLinksDropdown />
		</div>
	);
};
