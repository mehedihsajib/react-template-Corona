/* eslint-disable prettier/prettier */
import React from 'react';
import {
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';

const FaqItem = ({question, answer}) => (
    <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton>{question}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p>
                {answer}
            </p>
        </AccordionItemPanel>
    </AccordionItem>
);

export default FaqItem;
