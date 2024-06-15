import { useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import classes from '@components/Accordion/Accordion.module.css';

type AccordionItemPropsType = {
	index: number;
	question: string;
	answer: string;
	isOpen: boolean;
	handleClick: (index: number) => void;
};

//  accordionitem component
export const AccordionItem: React.FC<AccordionItemPropsType> = ({
	index,
	question,
	answer,
	isOpen,
	handleClick,
}) => {
	const contentHeight = useRef<HTMLDivElement>(null);
	return (
		<div className={classes['accordion-wrapper']}>
			<button
				className={`${classes['question-container']} ${isOpen ? classes.active : ''}`}
				onClick={(event) => handleClick(index)}
			>
				<div className={classes['question-content']}>
					<p className=''>{question}</p>
				</div>
				<RiArrowDropDownLine
					className={`${classes['arrow']} ${isOpen ? classes.active : ''}`}
				/>
			</button>

			<div
				ref={contentHeight}
				className={classes['answer-container']}
				style={isOpen ? { height: contentHeight.current?.scrollHeight } : { height: '0px' }}
			>
				<p className={classes['answer-content']}>{answer}</p>
			</div>
		</div>
	);
};
