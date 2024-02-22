import { useState, React } from "react";
import { logo } from "../assets";
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setValue("");
  };
  return (
    <>
      <div className="w-full bg-white py-32">
        <div className="md:max-w-[1480px]  m-auto grid md:grid-cols-6 md:p-0 p-8">
          <div className="col-span-2 ">
            <img src={logo} alt="logo image" />
            <h1 className="text-2xl my-6">Contact Us</h1>
            <p className="text-[#6D737A] pb-2">Call : +123 400 123</p>
            <p className="text-[#6D737A] pb-4">
              Praesent nulla massa, hendrerit
              <br /> vestibulum gravida in, feugiat auctor felis.
            </p>
            <p className="pb-4">Email: example@mail.com</p>
            <div className="flex gap-4 md:pb-0 pb-8">
              <div className="rounded-lg p-4 bg-[#E9F8F3]">
                <FaFacebookF size={30} color="#4DC39E" />
              </div>
              <div className="rounded-lg p-4 bg-[#E9F8F3]">
                <FaDribbble size={30} color="#4DC39E" />
              </div>
              <div className="rounded-lg p-4 bg-[#E9F8F3]">
                <FaInstagram size={30} color="#4DC39E" />
              </div>
              <div className="rounded-lg p-4 bg-[#E9F8F3]">
                <FaLinkedinIn size={30} color="#4DC39E" />
              </div>
              <div className="rounded-lg p-4 bg-[#E9F8F3]">
                <FaTiktok size={30} color="#4DC39E" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Explore</h1>
            <ul className="pt-6 flex flex-col gap-4">
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Home
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                About
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Course
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Blog
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">Category</h1>
            <ul className="pt-6 flex flex-col gap-4">
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Design
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Development
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Marketing
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Business
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Lifestyle
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Phototgraphy
              </li>
              <li className="hover:cursor-default text-base text-[#6D737A]">
                Music
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:mt-0 mt-4">
            <h1 className="text-2xl">Subscribe</h1>
            <p className="text-[#6D737A] w-[70%] pt-6">
              Lorem Ipsum has been them an industry printer took a galley make
              book.
            </p>
            <form action="submit" className="mt-8 flex flex-col gap-6">
              <input
                className="h-12 w-[70%] bg-[#F2F3F4] pl-4 focus:shadow-md rounded-lg focus:outline-none"
                type="text"
                placeholder="Email here"
                onChange={handleChange}
                value={value}
              />
              <button
                onClick={handleClick}
                className="w-[160px] text-white font-semibold text-base py-3 rounded-md bg-[#20B486]"
              >
                Sign Up For Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
