import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
                        <div className="font-bold text-[16px]">Other Links</div>
                        <a href="https://www.instagram.com/aaahhhrav15/" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Image src="./assets/instagram.png" alt="youtube" width={24} height={24} />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </a>
                        <a href="https://github.com/aaahhhrav15" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo /> 
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a href="https://leetcode.com/u/Aaahhhrav/" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Image src="./assets/leetcode.png" alt="leetcode" width={24} height={24} />
                            <span className="text-[15px] ml-[6px]">Leetcode</span>
                        </a>
                        
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
                        <div className="font-bold text-[16px]">Contact Me</div>
                        <a href="https://www.linkedin.com/in/aarav-lodha-079902255/" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Image src="./assets/linkedin.png" alt="linkedin" width={24} height={24} />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>
                        </a>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className="text-[15px] ml-[6px]">+91-9920280983</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className="text-[15px] ml-[6px]">
                                lodhaaarav12005@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
