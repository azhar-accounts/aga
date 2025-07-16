import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import _config from '../../constants/index.js';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section
            className="py-16 bg-neutral-silver px-4 overflow-hidden scroll-mt-20"
            id="faq"
        >
            <div className="responsive__container">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    FAQ
                </h2>

                <div className="space-y-4">
                    {_config.FAQS?.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="shadow-sm rounded-lg p-4 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="600"
                            >
                                <button
                                    className="w-full text-left flex justify-between items-center"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="font-medium text-gray-800">
                                        {faq.question}
                                    </span>
                                    <IoIosArrowDown
                                        size={22}
                                        className={`text-soft-blue transform transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isOpen ? 'max-h-40 mt-3' : 'max-h-0'
                                    }`}
                                >
                                    <p className="text-seconday text-sm">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
