import _config from '../constants/index.js';

export default function WhyChooseUs() {
    return (
        <section
            className="bg-primary py-16 px-4 scroll-mt-40 why__choose__us__image"
            id="features"
        >
            <div
                className="responsive__container text-center text-white space-y-4"
                data-aos="fade-up"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Why choose us
                </h2>
                <p className="mb-10">Smart, Simple, Reliable Accounting</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left py-8">
                    {_config.FEATURES.map((point, idx) => (
                        <div
                            data-aos="zoom-in-up"
                            key={idx}
                            className="bg-gray-50 border border-white/20 rounded-md p-8 transition-transform duration-500 ease-in-out hover:scale-105"
                        >
                            <h3 className="text-lg font-semibold uppercase mb-2">
                                {point.title}
                            </h3>
                            <p>{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
