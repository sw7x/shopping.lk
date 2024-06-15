import React, { useRef, useState } from 'react';
import { AccordionItem } from './AccordionItem';

type AccordionPropsType = {
	data: { question: string; answer: string }[];
	SingleOpen?: boolean;
};

const Accordion: React.FC<AccordionPropsType> = ({ data, SingleOpen = false }) => {
	/* 
	const [activeIndex, setActiveIndex] = useState<null | number>(null);
	const accObject: { [key: string]: boolean } = {};
	for (let i = 0; i < data.length; i++) {
		accObject[`acc${i}`] = false;
	} 
	*/

	const [abc, setAbc] = useState<{ [key: string]: boolean }>(() => {
		const accObject: { [key: string]: boolean } = {};
		for (let i = 0; i < data.length; i++) {
			accObject[`acc${i}`] = false;
		}
		return accObject;
	});

	const handleItemClick = (index: number) => {
		//setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
		setAbc((prev) => {
			if (!SingleOpen) {
				return { ...prev, [`acc${index}`]: !prev[`acc${index}`] };
			} else {
				const newAccordionState = { ...prev };
				Object.keys(newAccordionState).forEach((key) => {
					newAccordionState[key] = false;
				});
				return { ...newAccordionState, [`acc${index}`]: !prev[`acc${index}`] };
			}
		});
	};

	return (
		<>
			{data.map((item, index) => (
				<AccordionItem
					key={index}
					index={index}
					question={item.question}
					answer={item.answer}
					isOpen={abc[`acc${index}`]}
					//isOpen={activeIndex === index}
					handleClick={() => handleItemClick(index)}
				/>
			))}
		</>
	);
};

export default Accordion;

/* 

{
	acc0:false,
	acc1:false,
	acc2:false,

} 



*/
