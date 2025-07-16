import React from 'react';
import LOGO1 from '../../assets/clients/logo1.png';

export default function Clients() {
    const ANIMATED_LOGOS = [LOGO1, LOGO1, LOGO1, LOGO1, LOGO1, LOGO1, LOGO1];

    return (
        <section className="py-16 bg-white responsive__container">
            <div className="text-center mb-14">
                <h2 className="text-3xl font-semibold text-neutral-d-grey mb-4">
                    Our Clients
                </h2>
                <p className="text-neutral-grey">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>

            <div className="relative overflow-hidden">
                <div className="flex animate-scroll space-x-16 whitespace-nowrap">
                    {ANIMATED_LOGOS.concat(ANIMATED_LOGOS).map(
                        (logo, index) => (
                            <img
                                className=""
                                src={logo}
                                alt="logo"
                                key={index}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
