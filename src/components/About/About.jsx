export default function About() {
    return (
        <section
            className="responsive__container flex gap-16 py-16 scroll-mt-20"
            id="about-us"
        >
            <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800">
                    About Us
                </h2>
                <p className="m-0 leading-[20px] text-seconday">
                    At{' '}
                    <span className="mx-1 font-semibold text-black">AGA</span>,
                    we're here to simplify finance for individuals, startups,
                    and growing businesses. While we're new to the scene, our
                    foundation is built on precision, transparency, and a deep
                    commitment to client success.
                    <br />
                    <br />
                    We believe accounting is more than just numbers — it’s about
                    providing clarity, control, and confidence in your financial
                    journey. From tax returns to bookkeeping systems and
                    strategic advice, we act as your trusted partners at every
                    step.
                    <br />
                    <br />
                    Our team brings specialized expertise in
                    <span className="mx-1 font-medium text-black">
                        Xero Workpapers
                    </span>
                    and
                    <span className="mx-1 font-medium text-black">
                        CCH Workpapers
                    </span>
                    , enabling us to streamline your workflows and ensure
                    compliance with efficiency and accuracy.
                    <br />
                    <br />
                    Whether you're just starting out or scaling up, we're here
                    to support you with reliable, honest, and expert accounting
                    services. Let’s grow together.
                </p>
            </div>
        </section>
    );
}
