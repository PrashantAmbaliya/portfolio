"use client"
import { useActiveSectionContext } from "@/common/stores/active-section";
import {
    RxGithubLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { links } from '@/common/lib/data'
import { smoothScrollTo } from '@/common/lib/utils';

export default function Footer() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


    return (
        <footer className="flex w-full flex-col items-center justify-center px-4 pb-10 text-center text-gray-500 dark:bg-darkBg">
            {/* <section className="max-w-[28rem]">
        <small className="mb-2 block text-xs">
          &copy; 2024 Prashant Ambaliya. All rights reserved.
        </small>
        <p className="text-xs">
          <span className="font-semibold">
            How about we break the ice and start a conversation?
          </span>{" "}
          It&apos;s like adding sprinkles to the cake of life - makes everything
          more fun!
        </p>
      </section> */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Connect Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
                        <div className="space-y-4">
                            <a
                                href="https://github.com/PrashantAmbaliya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-gray-300 transition-colors duration-200"
                            >
                                <RxGithubLogo className="text-xl mr-3" />
                                <span className="">GitHub</span>
                            </a>

                            <a
                                href="https://x.com/Prashant__101"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-gray-300 transition-colors duration-200"
                            >
                                <RxTwitterLogo className="text-xl mr-3" />
                                <span className="">Twitter</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/prashant-a-889590228/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-gray-300 transition-colors duration-200"
                            >
                                <RxLinkedinLogo className="text-xl mr-3" />
                                <span className="">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <div className="space-y-3">
                            {links.map((link) => (
                                <a
                                    key={link.id}
                                    onClick={(e) => {
                                        smoothScrollTo({ e, id: link.id });
                                        setActiveSection(link.id);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                    className="block cursor-pointer text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>



                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
                        <div className="space-y-3">
                            <a
                                href="mailto:prashantambaliya226@gmail.com"
                                className="flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200"
                            >
                                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                prashantambaliya226@gmail.com
                            </a>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Open to new opportunities and collaborations.
                                Feel free to reach out for projects or just to connect!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    {/* <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Prashant Ambaliya. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <button className="hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </button>
                            <button className="hover:text-white transition-colors duration-200">
                                Terms of Service
                            </button>
                        </div>
                    </div> */}

                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                        <section className="max-w-[28rem]">
                            <small className="mb-2 block text-xs">
                                &copy; 2024 Prashant Ambaliya. All rights reserved.
                            </small>
                            <p className="text-xs">
                                <span className="font-semibold">
                                    How about we break the ice and start a conversation?
                                </span>{" "}
                                It&apos;s like adding sprinkles to the cake of life - makes everything
                                more fun!
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </footer>
    );
}
