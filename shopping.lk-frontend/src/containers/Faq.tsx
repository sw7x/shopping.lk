import Accordion from '@root/components/Accordion/Accordion';
import { Alert } from '@root/components/Alert';
import { BannerText } from '@root/components/BannerText';
import { Button } from '@root/components/Button';
import { ButtonLink } from '@root/components/ButtonLink';
import { ErrorMessage } from '@root/components/Error/ErrorMessage';
import { Pagination } from '@root/components/Pagination';
import { PanZoom } from '@root/components/PanZoom';
import { Tab, TabList, TabPanel, Tabs } from '@root/components/Tabs';
import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import halfBgImg from '@assets/images/half-bg.jpg';
import { Tooltip } from '@root/components/Tooltip';
import { ErrorMessageList } from '@root/components/Error/ErrorMessageList';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from '@root/components/LoadingSpinner';
import { ErrorFallback } from '@root/components/Error/ErrorFallback';
import ThreadList from './ThreadList';
import { Modal } from '@root/components/Modal';

import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from './shared/PageHeader';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

const Faq = () => {
	const [currentPage, setCurrentPage] = useState(0);

	const [openModal, setOpenModal] = useState(false);
	const toggeleModal = () => {
		//alert();
		setOpenModal(true);
	};

	const faqData = [
		{
			question: 'What are accordion components?',
			answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',
		},
		{
			question: 'What are they use for?',
			answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
		},
		{
			question: 'Accordion as a musical instrument',
			answer: 'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
		},
		{
			question: 'Can i create an accordion component with a different framework?',
			answer: 'Yes of course, it is very possible to create an accordion component with another framework.',
		},
	];

	const errorList = {
		email: ['The email must be at least 100 characters.'],
		password: [
			'The password must be a valid email address.',
			'The password must be at least 120 characters.',
		],
	};

	return (
		<>
			<PageHeader title='FAQ' subtitle='Frequently Asked Questions' />

			<Breadcrumb />

			<Modal isOpen={openModal} onClose={() => setOpenModal(false)} title='Modal Header'>
				<p className=''>
					I always 111 felt like I could do anything. That’s the main thing people are
					controlled by! Thoughts- their perception of themselves! They're slowed down by
					their perception of themselves. If you're taught you can’t do anything, you
					won’t do anything. I was taught I could do everything.
				</p>
			</Modal>
			<button
				className='btn btn-primary'
				onClick={toggeleModal}
				/* onClick={() => {
					if (document) {
						(document.getElementById('my_modal_1') as HTMLFormElement).showModal();
					}
				}} */
			>
				open modal ggg
			</button>
			<div className='text-section mb-2'>
				<div className='container'>
					<p className='lead'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries, but also
						the leap into electronic typesetting, remaining essentially unchanged. It
						was popularised in the 1960s with the release of Letraset sheets containing.
					</p>
				</div>
			</div>
			<div className='accordion-section mb-5'>
				<div className='container'>
					<Accordion data={faqData} />
				</div>
			</div>
			<div className='text-section mb-5'>
				<div className='container'>
					<p className='lead'>
						When an unknown printer took a galley of type and scrambled it to make a
						type specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged. It was
						popularised in the 1960s with the release of Letraset sheets containing.
					</p>
				</div>
			</div>
			<BannerText title='Protect your personal information' image={halfBgImg}>
				<div className='subheading mb-2'>
					<p>
						Limit the personal information that you make available to others. For
						example, your social media profile should not contain your full name, date
						of birth, or reflect your relationship with others. Protect yourself further
						by not using location check-ins and limiting location-specific information.
					</p>
				</div>
				<div className='mb-1 text-green-700'>
					<Link to='/before-post' className='font-medium'>
						Get early access
					</Link>
				</div>
			</BannerText>
			<div className='text-section mb-5'>
				<div className='container'>
					<div className='btn-section-container clearfix'>
						<div className='pull-right'>
							<ButtonLink href='/ask-question' text='Ask Question' />
						</div>
					</div>
					<button type='button' className='btn'>
						Basic
					</button>
					<button type='button' className='btn btn-default'>
						Default
					</button>
					<button type='button' className='btn btn-primary'>
						Primary
					</button>
					<button type='button' className='btn btn-success'>
						Success
					</button>
					<button type='button' className='btn btn-info'>
						Info
					</button>
					<button type='button' className='btn btn-warning'>
						Warning
					</button>
					<button type='button' className='btn btn-danger'>
						Danger
					</button>
					<button type='button' className='btn btn-link'>
						Link
					</button>
					<br />
					<p className='mt-2'>
						<Button>Go Back</Button>&nbsp;
						<Button type='default'>Go Back</Button>&nbsp;
						<Button type='primary'>Go Back</Button>&nbsp;
						<Button type='success' className='mr-5 ml-5'>
							Go Back
						</Button>
						&nbsp;
						<Button type='info'>Go Back</Button>&nbsp;
						<Button type='warning'>Go Back</Button>&nbsp;
						<Button type='danger'>Go Back</Button>&nbsp;
					</p>
					<br />
					<ErrorMessage>
						Bootstrap does not have a component that allows filtering. However, we can
						use jQuery to filter / search for elements. TableBody TableHead TableHeader
						TableRow
					</ErrorMessage>
					<nav className='toolbox toolbox-pagination'>
						<div className='toolbox-item toolbox-show'>
							<label>Show:</label>

							<div className='select-custom'>
								<select name='count' className='form-control'>
									<option value='9'>9 Products</option>
									<option value='18'>18 Products</option>
									<option value='27'>27 Products</option>
								</select>
							</div>
						</div>

						<Pagination
							currentPage={1}
							totalCount={150}
							pageSize={10}
							onPageChange={(page) => setCurrentPage(page)}
							siblingCount={2}
						/>
					</nav>
					<Tooltip text='Next'>
						<a href='#'>Next</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip text='Next' position='top'>
						<a href='#'>pos-top</a>
					</Tooltip>
					<br />
					<br />
					<br />
					<br />
					<Tooltip text='Next' position='left'>
						<a href='#'>pos-left</a>
					</Tooltip>
					<br />
					<br />
					<br />
					<br />
					<Tooltip text='Next' position='bottom'>
						<a href='#'>pos-bottom</a>
					</Tooltip>
					<br />
					<br />
					<br />
					<br />
					<Tooltip text='Next' position='right'>
						<a href='#'>pos-right</a>
					</Tooltip>
					<br />
					<br />
					<br />
					<br />
					<Tooltip text='Next' type='info'>
						<a href='#'>type-info</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip text='Next' type='success'>
						<a href='#'>type-success</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip text='Next' type='warning'>
						<a href='#'>type-warning</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip text='Next' type='danger'>
						<a href='#'>type-danger</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip text='Next' effect='movable'>
						<a href='#'>effect-movable</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip text='Next' effect='fade'>
						<a href='#'>effect-fade</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip text='Next' arrowType='half'>
						<a href='#'>arrowType-half</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip text='Next' softEdge={false}>
						<a href='#'>softEdge-false</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip
						multiline={true}
						text="I'm a multiline tooltip with movable effect and half arrow for information"
					>
						<a href='#'>softEdge-false movable effect</a>
					</Tooltip>
					<br />
					<br />
					<Tooltip
						multiline={true}
						position='right'
						text="I'm a multiline tooltip with movable effect and half arrow for information"
					>
						<a href='#'>softEdge-false movable effect</a>
					</Tooltip>
					<br />
					<br />

					<ErrorMessageList errors={errorList} />

					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<Suspense
							fallback={
								<div className='category-div mb-10'>
									<LoadingSpinner />
								</div>
							}
						>
							<ThreadList categoryId={1} />
						</Suspense>
					</ErrorBoundary>
				</div>
			</div>
		</>
	);
};

export default Faq;
