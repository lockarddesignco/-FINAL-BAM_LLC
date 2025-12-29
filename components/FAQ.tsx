import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Does BAM operate during active clinical or facility hours?",
    answer: "Yes. Our teams are specialized in 'Silent Implementation.' We work around your schedule—including nights, weekends, and holidays—to ensure zero disruption to patient care or operational workflows."
  },
  {
    question: "How do you maintain containment in sensitive environments?",
    answer: "We utilize mobile HEPA-filtered containment units, negative air machines, and real-time particulate monitoring. All workflows align with ICRA (Infection Control Risk Assessment) standards for healthcare facilities."
  },
  {
    question: "Are your restoration services ASHRAE and NADCA compliant?",
    answer: "Absolutely. Every restoration project follows the NADCA ACR Standard and supports ASHRAE 62.1 ventilation requirements. We provide full documentation for JCAHO, AAAHC, and other accreditation audits."
  },
  {
    question: "What is the expected lifespan extension of restored equipment?",
    answer: "On average, a BAM restoration extends the operational life of cooling towers and AHUs by 10 to 15 years, often for less than 20% of the cost of a full capital replacement."
  },
  {
    question: "Do you provide documentation for energy rebate programs?",
    answer: "Yes. We document airflow recovery and delta-P improvements, which are often required by utility providers to approve energy efficiency rebates."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-[#D7DDDA]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-4">
             <HelpCircle className="w-5 h-5" />
             <span className="text-xs font-bold uppercase tracking-[0.2em]">Support Intelligence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#265A4A]">Frequently Asked Questions</h2>
          <p className="text-[#5E7A86] mt-4">Addressing technical and operational concerns for high-stakes facilities.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-[#D7DDDA] rounded-sm transition-all duration-300 ${openIndex === idx ? 'bg-[#F7F9F8] border-[#265A4A]' : 'bg-white'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-[#265A4A]' : 'text-[#5E7A86]'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#265A4A]' : 'text-[#A7D7C5]'}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-[#5E7A86] leading-relaxed border-t border-[#D7DDDA]/50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};