const Cta = () => {
  interface counter {
    id: number;
    count: number;
    text: string;
  }
  const count = [
    {
      id: 1,
      count: 75,
      text: "statisfied user globally",
    },
    {
      id: 2,
      count: 12,
      text: "Benefical Cashback",
    },
    {
      id: 3,
      count: 190,
      text: " countries supported",
    },
  ];

  return (
    <section className="flex justify-around gap-1 px-4 lg:px-20 py-12 lg:py-16 bg-primary text-white rounded-2xl ">
      {count.map((item: counter) => (
        <div key={item.id} className="text-center">
          <h2 className="font-semibold text-3xl lg:text-5xl mb-2 lg:mb-4">
            {item.count}
            {{ 1: "K+", 2: "%", 3: "+" }[item.id] || ""}
          </h2>
          <p className="text-white/60 text-xs ">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Cta;
