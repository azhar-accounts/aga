/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import _config from '../../constants';
import { cn } from '../../lib/utils';
import BRAND from '../../assets/BRAND.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            {/* <ActionBar /> */}
            <header
                className={`sticky top-0 z-50 transition-colors duration-300 ${
                    scrolled ? 'bg-soft-blue' : 'bg-primary'
                }`}
            >
                <div
                    className={cn(
                        'responsive__container overflow-hidden flex flex-col items-start justify-start py-[22px]',
                        !scrolled && 'border-b border-white/20'
                    )}
                >
                    <nav className="flex__between text-white w-full">
                        <a href="#" className="flex items-center space-x-2">
                            <img
                                src={BRAND}
                                alt=""
                                className="h-[36px] w-auto object-cover"
                            />
                            <p className="font-bold text-[33px] brand__logo__font flex items-center">
                                A<span className="text-blue-300">G</span>A
                            </p>
                        </a>
                        <div
                            className={`absolute left-0 top-16 w-full flex-col gap-6 space-y-4 bg-primary-400 px-7 py-12 transition-all duration-300 lg:static lg:flex lg:w-auto lg:flex-row lg:gap-10 lg:space-y-0 lg:py-0 ${
                                isOpen
                                    ? 'flex bg-primary text-white min-h-screen'
                                    : 'hidden'
                            }`}
                        >
                            {_config.NAVIGATION_LINKS?.map((link) => (
                                <a
                                    key={link?.href}
                                    onClick={() => setIsOpen(false)}
                                    href={link.href}
                                    className={cn(
                                        '[text-decoration:none] text-sm relative leading-[24px] flex items-center gap-1',
                                        'hover:font-semibold transition-all duration-300',
                                        isOpen && 'border-b border-b-white/20'
                                    )}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden"
                            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <IoClose size={24} />
                            ) : (
                                <HiBars3BottomRight size={24} />
                            )}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
}
