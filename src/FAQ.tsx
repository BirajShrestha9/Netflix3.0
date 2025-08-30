import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of more",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Netflix offers several subscription plans, including Basic, Standard, and Premium, with prices varying by region.",
    },
    {
      question: "How can I cancel my Netflix subscription?",
      answer:
        "You can cancel your Netflix subscription at any time by going to the Account settings and selecting 'Cancel Membership.'",
    },
    {
      question: "Where can I watch?",
      answer:
        "You can watch Netflix on a variety of devices, including smart TVs, smartphones, tablets, computers, and gaming consoles.",
    },
    {
      question: "Is Netflix available worldwide?",
      answer:
        "Yes, Netflix is available in most countries around the world, but the content library may vary depending on the region.",
    },
    {
      question: "How do I change the language on Netflix?",
      answer:
        "Go to Account Language settings, and choose the language you prefer for both audio and subtitles.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isShowed, setIsShowed] = useState<boolean>(false);

  return (
    <>
      <div className="faqContainer">
        <h1>Frequently Asked Questions</h1>
        <div>
          {faqs.map((faq, index) => {
            return (
              <div key={index}>
                <div
                  className="faqQuest"
                  onClick={() => {
                    setActiveIndex(index);

                    // activeIndex === index && setIsShowed((show) => !show);
                    if (activeIndex === index) {
                      setIsShowed((show) => !show);
                    }
                  }}
                >
                  <span>{faq.question}</span>

                  {activeIndex === index && isShowed ? (
                    <span>
                      <img src="img/right.png" className="wrongSign" />
                    </span>
                  ) : (
                    <span>
                      <img src="img/right.png" className="rightSign" />
                    </span>
                  )}
                </div>
                {activeIndex === index && isShowed && (
                  <p className="faqAns">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FAQ;
