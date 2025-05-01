import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary lg:h-[500px] pt-16 lg:pt-20 px-4 lg:px-20">
      <div className="lg:flex justify-between items-start mb-12 lg:mb-24">
        <div className="grid grid-cols-2 gap-8 lg:gap-12 lg:grid-cols-4 mb-16 lg:mb-0">
          <ul className="text-white/50 flex flex-col gap-2 ">
            <li className="text-white/70 text-lg font-semibold mb-2">
              Platfrom
            </li>
            <li>multi-virtual Card</li>
            <li> Investment</li>
            <li>learn</li>
          </ul>
          <ul className="text-white/50 flex flex-col gap-2 ">
            <li className="text-white/70 text-lg font-semibold mb-2">
              Solution
            </li>
            <li>Exchange & Pro</li>
            <li>Wallet</li>
            <li>Commerce</li>
            <li>Taxes</li>
          </ul>
          <ul className="text-white/50 flex flex-col gap-2 ">
            <li className="text-white/70 text-lg font-semibold mb-2">
              Feature
            </li>
            <li>Transfer</li>
            <li> Investot Index</li>
            <li>Exchange</li>
          </ul>
          <ul className="text-white/50 flex flex-col gap-2 ">
            <li className="text-white/70 text-lg font-semibold mb-2">
              Company
            </li>
            <li>About Us</li>
            <li>Career</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-4">Follow our newsletter</p>
          <div className="relative w-80 ">
            <input
              type="text"
              placeholder="Your work email"
              className=" text-light h-fit w-full bg-white px-4 py-2 rounded-lg"
            />
            <button className="btn-tertiary absolute top-1/2 right-0 transform -translate-y-1/2">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-light/50 pb-6 mb-4 lg:mb-8 ">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-full size-6"
            src="https://cdn-icons-png.flaticon.com/128/10597/10597864.png"
            alt="flag"
          />
          <button className="flex gap-2  items-center">
            <p className="text-white">English</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-8 items-center">
          <p className="text-sm text-white">Follow us</p>
          <ul className="flex gap-4 items-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-white"
              >
                <path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-white"
              >
                <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-white"
              >
                <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 flex-col lg:flex-row lg:justify-between items-center pb-4">
        <img
          className="size-8 lg:size-12 "
          src="https://cdn-icons-png.flaticon.com/128/10213/10213463.png"
          alt=""
        />
        <p className="text-white/60">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <ul className="lg:flex gap-8 hidden  text-white/80 font-semibold">
          <li>Security</li>
          <li>Privacy</li>
          <li>Term</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
