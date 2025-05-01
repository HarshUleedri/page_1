export interface FaqData {
  id: number;
  question: string;
  answer: string;
}

interface FaqProps {
  isOpen: number | null;
  data: FaqData[] | [];
  handleFaqToggle: (id: number) => void;
}

const Faq = ({ isOpen = null, data = [], handleFaqToggle }: FaqProps) => {
  return (
    <section>
      <h2 className="text-4xl text-dark font-semibold text-center mb-8 ">
        FAQ
      </h2>

      <div className="space-y-2 lg:w-3/4 mx-auto ">
        {data.map((Faq, index) => (
          <div
            className="bg-secondary/30 p-8 space-y-4 rounded-xl"
            key={index}
            onClick={() => handleFaqToggle(Faq.id)}
          >
            <div className="flex justify-between items-center ">
              <h3 className="text-lg break-words grow max-w-[calc(100%-2rem)]  text-dark font-semibold mr-2">
                {Faq.question}
              </h3>
              {isOpen === Faq.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 cursor-pointer flex-none"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 cursor-pointer flex-none "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            {isOpen === Faq.id && (
              <p className="text-light font-semibold break-words">
                {Faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
