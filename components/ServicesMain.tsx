import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Button } from './Button';
import { FAQ } from './FAQ';
import { 
  Droplets, Fan, Wind, Activity, ShieldCheck, ClipboardList, 
  Layers, Sun, Flame, Thermometer, Zap, Microscope, HardHat,
  ChevronRight, ArrowDown, BarChart3, Clock, Gauge, Scale
} from 'lucide-react';

const coreServices = [
  {
    title: "Cooling Tower Restoration",
    description: "Mechanical and structural restoration to eliminate fouling, restore thermal capacity, and avoid CAPEX replacement.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AHU & Coil Restoration",
    description: "Patented deep-restoration that recovers lost heat-transfer efficiency and reduces system static pressure.",
    icon: Fan,
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "NADCA Duct Hygiene",
    description: "Hospital-grade HVAC decontamination following the ACR NADCA Standard for sensitive clinical environments.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Institutional PM",
    description: "Technical maintenance protocols designed for 100% uptime and regulatory compliance readiness.",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
  }
];

const specialtyServices = [
  {
    title: "Epoxy Coating & Lining",
    description: "Basin restoration and corrosive protection for high-moisture mechanical environments.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "UV-C Implementation",
    description: "Airstream and coil disinfection to neutralize bio-contaminants at the source.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Fire Damper Compliance",
    description: "Certified NFPA inspections and repairs for mission-critical life safety systems.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1599708145804-037402633005?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "IAQ Intelligence",
    description: "Real-time particulate and chemical monitoring for clinical and laboratory validation.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "HEPA Management",
    description: "Turnkey filter change-outs and DOP testing for containment and isolation zones.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "HVAC Energy Analysis",
    description: "Data-driven energy audits to identify thermal loss and airflow recovery opportunities.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=400&q=80"
  }
];

const impactMetrics = [
  { label: "Energy Reduction", value: "15-30%", icon: Zap, detail: "Average reduction in fan and chiller power consumption." },
  { label: "Equipment Life", value: "10-15 Years", icon: Clock, detail: "Added operational life to restored mechanical assets." },
  { label: "Airflow Recovery", value: "Up to 40%", icon: Wind, detail: "Immediate increase in system CFM after coil restoration." },
  { label: "Cost Savings", value: "80% vs Replace", icon: Scale, detail: "Restoration costs significantly less than full capital replacement." }
];

export const ServicesMain: React.FC = () => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      
      {/* --- Services Hero Section --- */}
      <section className="relative pt-40 pb-32 bg-[#0B1110] overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#265A4A]/10 skew-x-[-20deg] translate-x-32"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#265A4A]/30 border border-[#A7D7C5]/30 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A7D7C5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A7D7C5]"></span>
                </span>
                <span className="text-[#A7D7C5] text-xs font-bold uppercase tracking-[0.2em]">Institutional Capabilities</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
                Engineering <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Performance Recovery</span>
             </h1>
             
             <p className="text-[#D7DDDA] text-xl md:text-2xl leading-relaxed mb-12 font-light max-w-2xl">
                BAM provides the specialized mechanical restoration required for facilities where uptime isn't optional—delivering hospital-grade HVAC hygiene and industrial efficiency.
             </p>
             
             <div className="flex flex-wrap items-center gap-8">
               <Button size="lg" className="px-12 shadow-2xl shadow-[#265A4A]/40">Start Facility Assessment</Button>
               <div className="flex items-center gap-6 border-l border-white/20 pl-8">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg leading-none">1,200+</span>
                    <span className="text-[#A7D7C5] text-[10px] uppercase font-bold tracking-widest mt-1">Restored Systems</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg leading-none">Zero</span>
                    <span className="text-[#A7D7C5] text-[10px] uppercase font-bold tracking-widest mt-1">Safety Incidents</span>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- Need-Based Quick Navigation --- */}
      <div className="bg-white border-b border-[#D7DDDA] sticky top-[96px] z-30 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center gap-12">
           {['Mechanical Restoration', 'Hygiene & IAQ', 'Compliance & Safety', 'Efficiency Audits'].map((item) => (
             <button key={item} className="text-[#5E7A86] text-xs font-bold uppercase tracking-widest hover:text-[#265A4A] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#265A4A] group-hover:w-full transition-all duration-300"></span>
             </button>
           ))}
        </div>
      </div>

      {/* --- Core Services Grid --- */}
      <section className="py-32 relative overflow-hidden">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#265A4A 1px, transparent 1px), linear-gradient(90deg, #265A4A 1px, transparent 1px)`, backgroundSize: '100px 100px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
               <h2 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.3em] mb-4">Tier 01 Solutions</h2>
               <h3 className="text-4xl md:text-5xl font-bold text-[#265A4A] tracking-tight leading-tight">Critical Asset Restoration</h3>
               <p className="text-[#5E7A86] mt-6 text-lg leading-relaxed">
                  High-impact mechanical services that recover immediate thermal performance and postpone major capital expenditures.
               </p>
            </div>
            <div className="flex items-center gap-3 py-3 px-6 bg-[#F2F6F5] border border-[#D7DDDA] rounded-sm">
               <ShieldCheck className="w-6 h-6 text-[#265A4A]" />
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-[#265A4A] uppercase tracking-widest">Documentation</span>
                 <span className="text-xs text-[#5E7A86] font-medium">Full Post-Project Closeout</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} category="core" index={idx + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Operational Impact Section --- */}
      <section className="py-24 bg-[#265A4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 leading-tight">Why Restoration is <br/>the Strategic Choice</h2>
                <p className="text-[#D7DDDA] text-lg font-light leading-relaxed mb-10 opacity-90">
                  Replacing a custom cooling tower or AHU in a hospital isn't just expensive—it's logistically complex and operationally risky. Restoration delivers performance recovery without the disruption.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   {impactMetrics.map((metric, i) => (
                     <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm group hover:bg-white/10 transition-all">
                        <metric.icon className="w-6 h-6 text-[#A7D7C5] mb-4" />
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-[10px] uppercase font-bold text-[#A7D7C5] tracking-widest mb-2">{metric.label}</div>
                        <p className="text-xs text-[#D7DDDA] opacity-70 leading-relaxed">{metric.detail}</p>
                     </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-[#0B1110] border border-white/10 rounded-lg overflow-hidden relative shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80" 
                      className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                      alt="Facility Engineering"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1110] to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10">
                       <div className="text-[#A7D7C5] font-bold text-xs uppercase tracking-widest mb-4">Case Validation</div>
                       <div className="text-white text-2xl font-bold mb-6 italic">"BAM recovered 28% capacity on our West Wing towers, avoiding a $400k replacement."</div>
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#265A4A] flex items-center justify-center font-bold text-white">R</div>
                          <div className="flex flex-col">
                            <span className="text-white font-bold text-sm">Director of Facilities</span>
                            <span className="text-[#A7D7C5] text-xs">Regional Medical Center</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Specialty Solutions Grid --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-24">
             <h2 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.3em] mb-4">Tier 02 Solutions</h2>
             <h3 className="text-4xl md:text-5xl font-bold text-[#265A4A] tracking-tight">Specialty Compliance & Protection</h3>
             <div className="w-20 h-1 bg-[#265A4A] mx-auto mt-8 opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} category="specialty" index={coreServices.length + idx + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* --- The Implementation Process --- */}
      <section className="py-32 bg-[#F2F6F5] border-y border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#265A4A]">Standardized Implementation</h2>
              <p className="text-[#5E7A86] mt-4">Every service module follows a strict, repeatable engineering protocol.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", label: "Analysis", icon: Gauge, detail: "Baseline static pressure and airflow testing." },
                { step: "02", label: "Protocol", icon: ClipboardList, detail: "Service-specific SOP and safety containment." },
                { step: "03", label: "Restoration", icon: HardHat, detail: "Mechanical and chemical decontamination." },
                { step: "04", label: "Verification", icon: BarChart3, detail: "Post-restoration metrics and closeout report." }
              ].map((item, i) => (
                <div key={i} className="relative group">
                   <div className="mb-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-white border border-[#D7DDDA] flex items-center justify-center rounded-sm text-[#265A4A] font-bold group-hover:bg-[#265A4A] group-hover:text-white transition-all">
                        {item.step}
                      </div>
                      <div className="h-px flex-grow bg-[#D7DDDA] group-hover:bg-[#265A4A] transition-all"></div>
                   </div>
                   <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-5 h-5 text-[#A7D7C5]" />
                      <h4 className="font-bold text-[#265A4A] uppercase tracking-widest text-sm">{item.label}</h4>
                   </div>
                   <p className="text-sm text-[#5E7A86] leading-relaxed">{item.detail}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <FAQ />

      {/* --- Final CTA Section --- */}
      <section className="py-32 bg-[#0B1110] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1500&q=80')] bg-cover"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
           <div className="w-16 h-1 bg-[#A7D7C5] mx-auto mb-10"></div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight">
              Ready to recover <br/> lost efficiency?
           </h2>
           <p className="text-[#D7DDDA] text-xl font-light mb-16 opacity-90 leading-relaxed">
              Schedule a technical walk-through. We'll identify underperforming assets and provide a documented restoration plan tailored for your facility standards.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12 text-lg font-bold shadow-2xl shadow-[#265A4A]/30">
                 Request Technical Visit
              </Button>
              <button className="flex items-center gap-3 text-white/70 hover:text-[#A7D7C5] transition-all group font-bold tracking-[0.15em] uppercase text-sm">
                 <span>Download Capability Brief</span>
                 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};