interface StrategicProps {
  icon: string;
  title: string;
  description: string;
}

const strategicData: StrategicProps[] = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/747/747305.png",
    title: "Security Teams",
    description: " Security teams works to keep your money safe",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/5477/5477532.png",
    title: "Authentication",
    description: "We use uthentication to protect your account",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2838/2838851.png",
    title: "Safety Funds",
    description: "Hold money with established financial institutions",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1144/1144760.png",
    title: "Account Place",
    description: "Place all you account, all in one place",
  },
];

const Strategic = () => {
  return (
    <section className="bg-accent/20 px-4 lg:p-16 py-12 rounded-2xl lg:flex lg:justify-between lg:gap-24 ">
      <div className="mb-16 lg:mb-0 lg:flex flex-col justify-between lg:w-96 ">
        <div className="mb-12 lg:mb-0">
          <h2 className="text-4xl font-semibold leading-10 mb-4">
            We are a <br /> strategic choice
          </h2>
          <p className="text-light font-semibold mb-4 ">
            We're on a mission to bring transparency <br />
            to finance and show you upfront.
          </p>
        </div>
        <button className="btn-primary flex gap-2 items-center w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
              clipRule="evenodd"
            />
          </svg>
          Watch Video Guide
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-16  lg:gap-8">
        {strategicData.map((data: StrategicProps, index) => (
          <div key={index}>
            <div className="bg-secondary rounded-full size-12 flex items-center justify-center mb-4 ">
              <img className="size-6 object-cover " src={data.icon} alt="" />
            </div>
            <h3 className="text-dark text-2xl lg:text-lg  font-semibold mb-2">
              {data.title}
            </h3>
            <p className="text-light text-lg lg:text-base font-semibold">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategic;
