import { v4 as uuidv4 } from 'uuid';
import icon1 from '../images/feature1.png';
import icon3 from '../images/feature2.png';
import icon2 from '../images/feature3.png';

const data = [
    {
        id: uuidv4(),
        icon: icon1,
        title: 'Human Contact',
        text: 'Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus.',
    },

    {
        id: uuidv4(),
        icon: icon2,
        title: 'Human Contact',
        text: 'Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus.',
    },

    {
        id: uuidv4(),
        icon: icon3,
        title: 'Human Contact',
        text: 'Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus.',
    },
];

export default data;
