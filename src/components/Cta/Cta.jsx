import _config from '../../constants';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

export default function CTA() {
    return (
        <section
            className="bg-primary py-16 px-4 scroll-mt-20 contact__us__section"
            id="features"
        >
            <div className="responsive__container text-center text-white space-y-8">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="max-w-xl mx-auto">
                    Have questions or need help with accounting? Fill out the
                    form and our team will reach out shortly.
                </p>

                <form
                    className="max-w-2xl mx-auto space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                    action="https://formspree.io/f/xblorork"
                    method="POST"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            required
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
                        />
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
                        />
                    </div>
                    <input
                        required
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
                    />
                    <input
                        required
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
                    />
                    <textarea
                        required
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-white text-soft-blue hover:text-primary font-semibold px-6 py-3 rounded transition"
                    >
                        Send Enquiry
                    </button>
                </form>
                <div className="flex__center flex-col sm:flex-row  text-sm gap-4">
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
                        <FaRegEnvelope />
                        <a
                            href={`mailto:${_config.EMAIL}`}
                            className="hover:underline"
                        >
                            {_config.EMAIL}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
