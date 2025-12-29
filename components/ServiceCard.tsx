import React from 'react';
import { ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { Button } from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  category: 'core' | 'specialty';
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, image, category, index }) => {
  const isCore = category === 'core';

  return (
    <div className={`group relative bg-white border border-[#D7DDDA] overflow-hidden flex flex-col transition-all duration-500 hover:border-[#265A4A] hover:shadow-[0_20px_40px_-15px_rgba(38,90,74,0.1)] ${isCore ? 'h-[500px]' : 'h-[320px]'}`}>
      
      {/* Background Image Layer */}
      <div className={`relative overflow-hidden transition-all duration-700 ${isCore ? 'h-56' : 'h-0 group-hover:h-32'}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-[#265A4A]/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Index Number */}
        <div className="absolute bottom-4 left-6 text-white font-bold opacity-60 text-xs tracking-widest uppercase">
          Service Module {index < 10 ? `0${index}` : index}
        </div>
      </div>

      {/* Content Layer */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 bg-[#F7F9F8] border border-[#D7DDDA] rounded-sm group-hover:bg-[#265A4A] group-hover:border-[#265A4A] transition-colors duration-300">
            <Icon className="w-5 h-5 text-[#265A4A] group-hover:text-white transition-colors" />
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
            <span className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-tighter">Compliant</span>
          </div>
        </div>

        <h3 className={`font-bold text-[#265A4A] leading-tight mb-3 transition-colors group-hover:text-[#1e483b] ${isCore ? 'text-2xl' : 'text-lg'}`}>
          {title}
        </h3>

        <p className="text-[#5E7A86] text-sm leading-relaxed mb-6 opacity-90">
          {description}
        </p>

        {/* Action / Specs Link */}
        <div className="mt-auto pt-6 border-t border-[#F7F9F8] flex items-center justify-between">
          <button className="flex items-center gap-2 text-[#265A4A] font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
            <FileText className="w-4 h-4 text-[#A7D7C5]" />
            <span>Technical Specs</span>
          </button>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight className="w-5 h-5 text-[#265A4A] translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
          </div>
        </div>
      </div>

      {/* Hover Highlight Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#A7D7C5] group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};