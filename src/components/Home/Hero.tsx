const Hero = () => {
  return (
    <section className="lg:flex gap-12 ">
      <div className="mb-16 lg:w-1/2">
        <p className="title mb-4 mt-8 ">Modern Bank</p>
        <h1 className="text-dark text-5xl font-semibold mb-8">
          We're building the future banking just for you
        </h1>
        <p className="text-light text-lg font-medium mb-8">
          Easy and fast international bussiness accoundt that saves you money
          wherever you want to use it.
        </p>
        <div className="flex gap-4 mb-12">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary flex items-center gap-2">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>{" "}
          </button>
        </div>
        <p className="text-light text-sm uppercase mb-6">
          Trusted by company across the world{" "}
        </p>
        <div className="flex justify-between items-center">
          <img
            className="size-16 grayscale "
            src="https://img.icons8.com/?size=100&id=TUk7vxvtu6hX&format=png&color=000000"
            alt=""
          />
          <img
            className="size-16 grayscale "
            src="https://img.icons8.com/?size=100&id=13008&format=png&color=000000"
            alt=""
          />
          <img
            className="size-16 grayscale"
            src="https://img.icons8.com/?size=100&id=20575&format=png&color=000000"
            alt=""
          />
        </div>
      </div>
      <div className="relative lg:mt-8 lg:flex lg:justify-end lg:w-1/2">
        <img
          className="object-cover rounded-xl  lg:w-96 lg:h-108  "
          src="https://images.pexels.com/photos/16282306/pexels-photo-16282306/free-photo-of-a-person-using-a-calculator.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="p-4 w-full lg:w-96 border-b-8 border-accent border rounded-2xl absolute bottom-16 lg:bottom-28 lg:right-16 bg-white shadow-lg shadow-light/50 ">
          <div className="mb-2">
            <p className="text-sm mb-2 text-light">lorem</p>
            <div className="flex justify-between border border-light/70 px-4 py-2 rounded-lg">
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
              <p className="text-dark text-lg font-bold">$2.6000.000</p>
            </div>
          </div>
          <div className=" mb-2 flex gap-4 items-center">
            <div className="grow">
              <p className="text-light text-sm mb-2">Name To</p>
              <div className="flex items-center gap-4 border border-light/70 px-4 py-2 rounded-lg ">
                <img
                  className="rounded-full size-6"
                  src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <p className="text-dark text-lg font-bold">Evelyn</p>
              </div>
            </div>
            <div className="">
              <p className=" text-light mb-2 text-sm">lorem</p>
              <div className="border border-light/70 px-4 py-2 rounded-lg text-dark font-semibold ">
                <p className="text-dark text-lg font-bold ">2.8% + $0.40</p>
              </div>
            </div>
          </div>
          <p className="text-light mb-4 text-sm">
            Upgrade plan for free {""}
            <span className="text-primary underline font-semibold">
              constact sales
            </span>
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                <path
                  fillRule="evenodd"
                  d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="btn-primary grow">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
