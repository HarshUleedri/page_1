const Payment = () => {
  return (
    <section className=" lg:flex gap-32">
      <div className="flex lg:w-1/2  flex-col gap-6 mb-16 lg:mb-0 ">
        <p className="title">Payment</p>
        <h2 className="text-dark text-4xl font-semibold">
          Sending money, easy by the default
        </h2>
        <p className="text-light font-semibold">
          Moving money should never take more than more than a few taps Transfer
          are always free between friends
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

      <div className="lg:w-1/2 px-2 mb-16">
        <div className="bg-primary w-full  h-96 rounded-2xl relative ">
          <div className="bg-white w-full lg:w-96 gap-6 px-4 py-6 rounded-xl flex flex-col shadow-xl absolute top-8 -left-4  border-b-8 border-accent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2">$750.00</h3>
                <p className="text-dark font-bold">
                  Send to <span className="text-primary">Emma Watson</span>
                </p>
              </div>
              <img
                className="rounded-full size-12"
                src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="space-y-2">
              <div className="w-56  rounded-xl h-2 bg-light/24 "></div>
              <div className="w-24  rounded-xl h-2 bg-light/24 "></div>
            </div>
            <div className="flex gap-2">
              <button className="btn-secondary grow "> Reject</button>
              <button className="btn-primary grow"> Approve</button>
            </div>
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
            <p className="text-dark font-bold text-xl">-$50.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
