/* eslint-disable jsx-a11y/anchor-is-valid */
import _config from '../../constants';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className="bg-primary py-10 text-white">
            <div className="responsive__container space-y-6">
                <div>
                    <h4 className="uppercase font-semibold mb-4 text-2xl">
                        Contact Us
                    </h4>
                    <div className="space-y-1">
                        <p>{_config.ADDRESS}</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 text-gray-700 pb-6  text-white">
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
                <div className="border-t flex__center border-t-white/20 pt-6">
                    <a href="#" className="flex items-center">
                        <p>
                            &copy; 2025{' '}
                            <span className="font-semibold mx-1">AGA.</span>
                            All rights reserved.
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    );
}
