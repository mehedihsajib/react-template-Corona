import React from 'react';
import { Accordion } from 'react-accessible-accordion';
import headerIcon from '../../assets/images/lg.png';
import SectionHeader from '../../components/SectionHeader';
import FaqItem from './FaqItem';

const Faq = () => (
    <div className="accordion_area bg_color pb-60 pt-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title center mb-5">
                        <SectionHeader
                            icon={headerIcon}
                            smallHeading="FAQ"
                            mainHeading="Some Question &#38; Answer"
                            desc="The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure."
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                    <Accordion>
                        <FaqItem
                            question="What is Corona Virus and COVID-19"
                            answer="On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”."
                        />
                        <FaqItem
                            question="How to Protect Yourself?"
                            answer="Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Many countries around the world have seen cases of COVID-19 and several have seen outbreaks. Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so check regularly for the latest news."
                        />

                        <FaqItem
                            question="Symptoms &#38; Testing"
                            answer="On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”."
                        />
                        <FaqItem
                            question="Symptoms &#38; Testing"
                            answer="On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”."
                        />
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
);

export default Faq;
