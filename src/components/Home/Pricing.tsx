const Pricing = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-4 mb-12">
        <p className="title">pricing</p>
        <h2 className="text-4xl font-semibold"> Plan for every budget</h2>
        <p className="text-light  text-center">
          whether you're a small bussiness or a large corporation, we have a
          plan that's right for you.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col gap-4 p-8 shadow-light/20 border-b-6 border-accent shadow-lg rounded-2xl bg-white ">
          <h3 className="text-primary text-3xl lg:text-2xl font-semibold">
            Personal
          </h3>
          <p className="text-light lg:text-sm font-semibold">
            Built-in budgeting and get more from your money with our standard
            account.
          </p>
          <p className="text-light text-sm mb-4">
            <span className="text-primary text-4xl font-semibold">$0</span>/
            month
          </p>
          <button className="btn-primary">Try For Free</button>
        </div>
        <div className=" p-8 shadow-light/20  shadow-lg rounded-2xl bg-primary flex flex-col gap-12 lg:gap-0 lg:flex-row  ">
          <div className="flex  flex-col gap-4 lg:w-1/2 pr-8 ">
            <h3 className="text-white text-3xl lg:text-2xl font-semibold">
              Personal
            </h3>
            <p className="text-white/50 lg:text-sm font-semibold">
              Give your everyday finances a boost. Get more out of your money
              for less
            </p>
            <p className="text-white/50 text-sm mb-4">
              <span className="text-white text-4xl font-semibold">$0</span>/
              month
            </p>
            <button className=" bg-white text-primary font-semibold rounded-lg px-6 py-2 text-sm cursor-pointer">
              Try For Free
            </button>
          </div>
          <div className="border-t lg:border-l lg:border-t-0 lg:w-1/2 border-white/40 pt-8  lg:pl-8">
            <p className="text-white/50 mb-4 lg:text-sm">FEATURES</p>
            <ul className="list-none space-y-2 text-white lg:text-sm ">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
                No payment back-office needed
              </li>
              <li className="flex items-start  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
                Faster implementation and global roll-out
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
                48 hour support response time
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
                Always benefit form the best rates and features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
