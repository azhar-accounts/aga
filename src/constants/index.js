
import {
    HiOutlineChartBar,
    HiOutlineDocumentText,
    HiOutlineTruck,
    HiOutlineArrowPath,
    HiOutlineBookOpen,
    HiOutlineCalendarDays,
    HiOutlinePencilSquare,
    HiOutlineCloudArrowUp,
    HiOutlineAdjustmentsHorizontal,
    HiOutlineArrowsRightLeft,
} from 'react-icons/hi2';


const _config = {
    PHONE_NUMBER: process.env.REACT_APP_PHONE_NUMBER,
    EMAIL: process.env.REACT_APP_EMAIL,
    ADDRESS: process.env.REACT_APP_ADDRESS,
    NAVIGATION_LINKS: [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about-us' },
        { name: 'Our Solutions', href: '#features' },
        {
            name: 'Services', href: '#services'
        },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ],
    FEATURES: [
        {
            title: 'Expert Accountants',
            desc: 'Our team has years of experience helping businesses stay financially healthy.',
        },
        {
            title: 'Affordable Pricing',
            desc: 'Transparent and flexible plans to fit all business sizes.',
        },
        {
            title: 'Security First',
            desc: 'We protect your data with strong security measures and strict privacy.',
        },
        {
            title: 'Timely Reports',
            desc: 'Never miss a deadline again – we deliver on time, every time.',
        },
    ],
    SERVICES: [
        {
            title: 'Insightful Financial Reporting',
            description: 'Stay on top of your business health with clear, real-time reports like balance sheets and P&L statements.',
            icon: <HiOutlineChartBar />,
        },
        {
            title: 'GST & VAT Compliance',
            description: 'We handle your GST and VAT returns accurately and on time, so you stay compliant without the stress.',
            icon: <HiOutlineDocumentText />,
        },
        {
            title: 'Accounting for Rural & Farm Businesses',
            description: 'Tailored accounting support for farms and rural enterprises, built to handle industry-specific needs.',
            icon: <HiOutlineTruck />,
        },
        {
            title: 'System Migration & Data Transfer',
            description: 'Switching systems? We make it seamless by safely converting and migrating your financial data.',
            icon: <HiOutlineArrowPath />,
        },
        {
            title: 'Complete Bookkeeping Solutions',
            description: 'From daily entries to monthly reports, we manage every detail of your bookkeeping workflow.',
            icon: <HiOutlineBookOpen />,
        },
        {
            title: 'Year-End Financial Close',
            description: 'We’ll prepare and finalize your annual accounts, making sure everything’s ready for review or audit.',
            icon: <HiOutlineCalendarDays />,
        },
        {
            title: 'Tax Prep & Filing Support',
            description: 'Let us handle your tax filings with precision, keeping you compliant and worry-free all year round.',
            icon: <HiOutlinePencilSquare />,
        },
        {
            title: 'Conversion balance',
            description: 'We help ensure your opening balances are accurate during accounting software transitions, maintaining continuity and financial integrity.',
            icon: <HiOutlineArrowsRightLeft />,
        },
        {
            title: 'Alignment Journals',
            description: 'We prepare alignment journals to ensure your books are accurate, consistent, and in sync with your financial reporting requirements.',
            icon: <HiOutlineAdjustmentsHorizontal />,
        },
        {
            title: 'Data Import (Bank Statemnet and Assets)',
            description: 'We securely import and organize your bank transactions and fixed assets data, streamlining your financial workflow from day one.',
            icon: <HiOutlineCloudArrowUp />,
        },
    ],
    TESTIMONIALS: [
        {
            feedback: "This platform completely transformed how we manage our finances. From the smooth onboarding to the ongoing support, everything has been exceptional. We couldn’t be happier with the results.",
            author: 'Sarah Johnson',
        },
        {
            feedback: "Honestly, I’ve worked with several providers before, but the design quality and level of support here blew me away. It feels like the team truly understands what users need.",
            author: 'David Smith',
        },
        {
            feedback: "Speed, reliability, and ease of use — this platform checks all the boxes. It has saved us so much time and brought a new level of organization to our accounting.",
            author: 'Emily Carter',
        },
        {
            feedback: "We were looking for something modern and user-friendly, and this delivered beyond our expectations. The clean UI and thoughtful UX make it a pleasure to use every day.",
            author: 'Michael Brown',
        },
        {
            feedback: "The platform is incredibly intuitive. Even our team members with no accounting background were able to get started right away. That’s a huge win for us.",
            author: 'Lisa Adams',
        },
    ],
    FAQS: [
        {
            question: 'What types of accounting solutions do you provide?',
            answer: `We provide a full range of accounting services to help you manage your finances better. This includes:
      - Keeping track of daily income and expenses (bookkeeping)
      - Running payroll for your employees
      - Planning and filing taxes on time
      - Preparing financial reports to show how your business is doing
      - Creating and sending invoices to your customers
      - Making sure your GST is calculated and filed properly
      - Acting as your virtual CFO to guide you in financial decisions
        
      Our services are flexible and can be customized based on your business size and needs.`,
        },
        {
            question: 'How can outsourcing accounting help my business?',
            answer: `Outsourcing your accounting means you don’t have to worry about doing it yourself or hiring a full-time accountant. Here’s how it helps:
      - Saves you time to focus on growing your business
      - Reduces chances of making costly mistakes
      - Ensures your taxes and filings are done right and on time
      - Gives you clear reports to make better decisions
      - Cuts down the cost of hiring and managing in-house staff
        
      In short, you get expert help without the headache.`,
        },
        {
            question: 'Is my financial information safe with you?',
            answer: `Yes, your data is completely safe with us. We take data protection very seriously. We use:
      - Bank-level encryption to protect your information
      - Secure cloud servers to store your data
      - Limited access so only trusted team members can view it
        
      We follow best practices and always keep your privacy a top priority.`,
        },
        {
            question: 'Can you support startups and growing businesses?',
            answer: `Absolutely! We love working with startups and businesses that are growing fast. We offer:
      - Flexible pricing plans that fit your budget
      - Help with cash flow so you don’t run out of money
      - Forecasting tools to plan for the future
      - Accounting support that grows with you as your business grows
        
      You won’t have to worry about your numbers—we’ll take care of them while you scale.`,
        },
        {
            question: 'What is the onboarding process like?',
            answer: `Getting started with us is quick and simple. Here's how it works:
      1. We begin with a short consultation to understand your needs
      2. We help you collect and organize your existing financial records
      3. We set up the accounting systems you’ll need
      4. A dedicated accountant will be assigned to your business
      5. We start managing your books right away, usually within a few days
        
      You’ll be up and running in no time, with full support from our team.`,
        },
        {
            question: 'Do you handle tax filings and compliance?',
            answer: `Yes, we take care of all your tax needs. This includes:
      - Filing income tax for your business
      - Managing GST returns on time
      - Handling TDS (Tax Deducted at Source)
      - Keeping you updated with the latest tax rules
      - Making sure your business stays compliant and avoids fines
        
      We’ll handle everything so you never miss a deadline or face penalties.`,
        },
    ],
    FORMSPREE_URL: process.env.REACT_APP_FORMSPREE_URL,
}

export default _config