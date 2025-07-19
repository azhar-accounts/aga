import { useForm } from '@formspree/react';
import _config from '../../constants';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { Bounce, toast } from 'react-toastify';

export default function CTA() {
    const [state, handleSubmit, reset] = useForm('xeozobrg');
    const formRef = useRef();
    useEffect(() => {
        if (state?.succeeded) {
            toast.success('Thank you! We have received your enquiry.', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Bounce,
            });
            formRef.current.reset();
        }
    }, [state.succeeded, reset]);

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
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
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
                        {state?.submitting ? 'Submitting...' : ' Send Enquiry'}
                    </button>
                </form>
                <div className="flex__center flex-col sm:flex-row gap-4">
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
