import { useState } from "react";
import Faq from "../components/common/Faq";
import { FaqData } from "../components/common/Faq";

export const useFaq = (userData: FaqData[]) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleFaqToggle = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };
  if (!userData || userData.length === 0) return null;
  return () => (
    <Faq isOpen={isOpen} data={userData} handleFaqToggle={handleFaqToggle} />
  );
};
