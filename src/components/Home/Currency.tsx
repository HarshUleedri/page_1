const Currency = () => {
  return (
    <section className="lg:flex gap-28">
      <div className="lg:w-1/2 px-2 mb-16">
        <div className="bg-accent w-full  h-96 rounded-2xl relative ">
          <div className="bg-white gap-8 px-4 py-6 rounded-xl flex justify-between items-center shadow-xl absolute top-8 right-8">
            <img
              className="size-8"
              src="https://cdn-icons-png.flaticon.com/128/14539/14539032.png"
              alt="flag"
            />
            <div className="space-y-2">
              <div className="w-24  rounded-xl h-2 bg-light "></div>
              <div className="w-16  rounded-xl h-2 bg-light "></div>
            </div>
            <p className="text-dark font-bold text-xl">$81.5</p>
          </div>
          <div className="bg-white gap-8 px-4 py-6 rounded-xl flex justify-between items-center shadow-xl absolute top-38 -left-4 border-b-8 border-primary">
            <img
              className="size-8"
              src="https://cdn-icons-png.flaticon.com/128/14539/14539032.png"
              alt="flag"
            />
            <div className="space-y-2">
              <div className="w-24  rounded-xl h-2 bg-light "></div>
              <div className="w-16  rounded-xl h-2 bg-light "></div>
            </div>
            <p className="text-dark font-bold text-xl">$81.5</p>
          </div>
          <div className="bg-white gap-8 px-4 py-6 rounded-xl flex justify-between items-center shadow-xl absolute bottom-4 -right-4 ">
            <img
              className="size-8"
              src="https://cdn-icons-png.flaticon.com/128/14539/14539032.png"
              alt="flag"
            />
            <div className="space-y-2">
              <div className="w-24  rounded-xl h-2 bg-light "></div>
              <div className="w-16  rounded-xl h-2 bg-light "></div>
            </div>
            <p className="text-dark font-bold text-xl">$81.5</p>
          </div>
        </div>
      </div>

      <div className="flex lg:w-1/2  flex-col gap-6 ">
        <p className="title">currency</p>
        <h2 className="text-dark text-4xl font-semibold">
          Holdo and send money in 190+ currencies
        </h2>
        <p className="text-light font-semibold">
          Create an acccount for your chosen currency in seconds. Get great
          prices with limit and stop orders
        </p>
        <button className="btn-primary flex items-center w-fit gap-4">
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
    </section>
  );
};

export default Currency;
