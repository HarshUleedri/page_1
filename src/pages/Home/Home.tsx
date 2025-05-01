import Cta from "../../components/Home/Cta";
import Currency from "../../components/Home/Currency";
import Hero from "../../components/Home/Hero";
import Payment from "../../components/Home/Payment";
import Pricing from "../../components/Home/Pricing";
import Strategic from "../../components/Home/Strategic";
import { useFaq } from "../../hooks/useFaq";
import type { FaqData } from "../../components/common/Faq";

const Home = () => {
  const faqData: FaqData[] = [
    {
      id: 1,
      question: "What is Next.js?h",
      answer: "Next.js is a React framework.",
    },
    {
      id: 2,
      question: "What is Vite?",
      answer: "Vite is a fast build tool for modern JavaScript.",
    },
    {
      id: 3,
      question: "What is Next.js?h",
      answer: "Next.js is a React framework.",
    },
  ];
  const Faq = useFaq(faqData);
  return (
    <>
      <Hero />
      <Cta />
      <Currency />
      <Payment />
      <Strategic />
      <Pricing />
      <div>{Faq &&  <Faq />}</div>
    </>
  );
};

export default Home;
