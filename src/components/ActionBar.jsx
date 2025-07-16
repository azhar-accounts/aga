import { FaPhoneAlt } from 'react-icons/fa';
import _config from '../constants';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ActionBar() {
    return (
        <>
            <div className="bg-primary">
                <div className="responsive__container flex__between py-4 text-white border-b border-white/20">
                    <div className="flex gap-4 text-xs">
                        <div className="flex items-center gap-2">
                            <MdEmail size={16} className="text-white" />
                            <a
                                href={`mailto:${_config.EMAIL}`}
                                className="hover:underline"
                            >
                                {_config.EMAIL}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-white" />
                            <a
                                href={`tel:${_config.PHONE_NUMBER}`}
                                className="hover:underline"
                            >
                                {_config.PHONE_NUMBER}
                            </a>
                        </div>
                    </div>
                    <div className="hidden gap-4 sm:flex">
                        <FaFacebookF
                            size={14}
                            className="cursor-pointer hover:scale-110"
                        />
                        <FaLinkedinIn
                            size={14}
                            className="cursor-pointer hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
