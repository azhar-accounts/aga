import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import _config from '../../constants/index.js';
import { WorldMap } from '../ui/world-map.js';

export default function Hero() {
    return (
        <section className="bg-primary pt-10 sm:py-16 relative" id="#">
            <div className="responsive__container  relative flex items-center justify-between gap-8">
                <WorldMap />
                <div
                    className="lg:absolute top-0 pb-10 lg:pt-24 xl:pt-36 flex flex-col justify-center overflow-hidden"
                    data-aos="zoom-in-up"
                    data-aos-delay="1000"
                    data-aos-duration="2000"
                >
                    <div className="space-y-2 text-white">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl text-inherit font-bold font-inherit font-body-regular-body-3">
                            Smart Accounting
                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl  text-inherit font-bold  font-body-regular-body-3 ">
                            for{' '}
                            <span className="text-white">
                                Global Entrepreneurs
                            </span>{' '}
                        </h1>
                        <p className="pt-4 text-sm">
                            Manage your finances, taxes, and compliance across
                            multiple countries — all in one platform.
                        </p>
                    </div>

                    <div className="py-6">
                        <ul className="space-y-2 text-white">
                            {[
                                'Bookkeeping',
                                'Tax Filing',
                                'Multi-Currency',
                                'Real-time Reports',
                            ]?.map((item) => (
                                <li className="flex items-center justify-start gap-2">
                                    <MdCheckCircle />
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-gray-700 pb-6  text-white">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <a
                                href={`tel:${_config.PHONE_NUMBER}`}
                                className="hover:underline"
                            >
                                {_config.PHONE_NUMBER}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail size={18} />
                            <a
                                href={`mailto:${_config.EMAIL}`}
                                className="hover:underline"
                            >
                                {_config.EMAIL}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
