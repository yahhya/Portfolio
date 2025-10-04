
import React, { useState } from 'react';
import { LogoCloud } from './components/LogoCloud';
import { Icon } from './components/Icon';
import { BookingModal } from './components/BookingModal';

const services = [
  { icon: 'website', title: 'Website Creation', description: 'Starter sites, premium builds, and custom solutions' },
  { icon: 'design', title: 'UI/UX Creation', description: 'Beautiful, conversion-focused design systems' },
  { icon: 'ecommerce', title: 'E-commerce Solutions', description: 'Build and scale your online store effectively' },
  { icon: 'speed', title: 'Speed Optimization', description: 'Lightning-fast loading times guaranteed' },
  { icon: 'seo', title: 'SEO & Conversion', description: 'Rank higher and convert more visitors' },
  { icon: 'reviews', title: 'Reviews & Social Proof', description: 'Integrate testimonials and trust signals' },
  { icon: 'chatbot', title: 'AI Chatbot Integration', description: '24/7 automated customer support' },
  { icon: 'cms', title: 'CMS Integration', description: 'Easily manage your website content' },
  { icon: 'maintenance', title: 'Website Maintenance', description: 'Keep your site secure and up-to-date' },
  { icon: 'branding', title: 'Brand Identity', description: 'Logo design and branding guidelines' },
];

const packages = [
  { name: 'Landing Page', price: '$450', features: ['1 High-Converting Page', 'Lead Capture Forms', 'Professional Copywriting', 'Mobile Responsive', '2 Week Delivery'] },
  { name: 'Starter Site', price: '$1,200', features: ['5 Professional Pages', 'SEO Optimization', 'Contact Forms', 'AI Chatbot Integration', '1 Month Support'] },
  { name: 'Premium', price: '$3,150', oldPrice: '$4,000', popular: true, features: ['10 Custom Pages', 'Advanced Animations', 'Custom UI Design', 'Advanced SEO Strategy', '3 Months Support'] },
  { name: 'Redesign Only', price: '$900', features: ['Complete Site Overhaul', 'Speed Optimization', 'Conversion Optimization', 'Modern UI Update', 'SEO Improvements'] },
];

const portfolioProjects = [
  {
    title: 'Pockaur - Full Service Agency UI',
    description: 'A comprehensive UI kit and website design for a full-service digital agency, showcasing modern components and a clean layout to attract high-value clients.',
    image: 'https://i.postimg.cc/bvKg7X9L/a-full-website-creation-service-with-a-p-hus-DMu-Dx-Qmi-PJIXMEhbvw-Q-l-Ou9-Zy-XSMSijlj-JRQ34u-Q.png',
  },
  {
    title: 'Naizop - Social Media Growth Platform',
    description: 'A high-conversion landing page for a social media growth service, using bold typography to encourage user sign-ups and package selection.',
    image: 'https://i.postimg.cc/jRZ44TZT/Naizop-Buy-Followers-Likes-Subscribers-and-Views-1.png',
  },
  {
    title: 'CryptoTrade - Digital Currency Exchange',
    description: 'A sleek, dark-themed UI for a crypto trading platform, designed for clarity and efficiency with advanced tools and real-time data.',
    image: 'https://i.postimg.cc/2zXKQMh1/crypto-trade-template-Lovable-1.png',
  },
  {
    title: 'VR Elektrotechnik - Corporate Identity',
    description: 'A professional and trustworthy website for an electrical engineering company, emphasizing corporate identity and technical expertise.',
    image: 'https://i.postimg.cc/wjFmcgDL/VR-Elektrote-2.png',
  },
];


const testimonials = [
  { quote: "y.web transformed our online presence completely. Our conversion rate increased by 300% within the first month!", name: 'Sarah Johnson', title: 'Digital Marketing Agency', avatar: 'https://i.pravatar.cc/150?u=sarahjohnson' },
  { quote: "The team at y.web delivered exactly what we needed. Professional, fast, and the results speak for themselves.", name: 'Michael Chen', title: 'E-commerce Store Owner', avatar: 'https://i.pravatar.cc/150?u=michaelchen' },
  { quote: "From design to launch, everything was seamless. My clients love the new site and booking calls has never been easier.", name: 'Emily Rodriguez', title: 'Consultant', avatar: 'https://i.pravatar.cc/150?u=emilyrodriguez' },
];

const faqs = [
    { q: 'How fast is delivery?', a: 'Delivery times vary based on the package. A landing page typically takes 2 weeks, while a premium site can take longer. We prioritize quality and will give you a clear timeline upfront.' },
    { q: 'Do you offer redesigns?', a: 'Yes, we have a "Redesign Only" package specifically for overhauling existing websites to improve their design, performance, and conversion rates.' },
    { q: 'Can I ask for edits?', a: 'Absolutely. Each project includes a set number of revision rounds to ensure you are 100% satisfied with the final product. Ongoing support plans are also available for post-launch edits.' },
    { q: 'What tools do you use?', a: 'We primarily use modern web technologies like React, Next.js, and host on platforms like Vercel. For design, we use Figma. We are flexible and can adapt to your specific technology stack if required.' },
    { q: 'Do you offer hosting or help with domains?', a: 'While we don\'t directly provide hosting or domain registration, we offer full support and guidance on setting up the best hosting solutions (like Vercel or Netlify) and connecting your domain.' },
    { q: 'What\'s included in ongoing support?', a: 'Ongoing support includes regular backups, security updates, performance monitoring, and a set number of monthly hours for content updates or minor feature additions.' },
];

interface FaqItemProps {
    faq: { q: string; a: string };
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-blue-200/20 py-6">
            <button onClick={onClick} className="w-full flex justify-between items-center text-left">
                <h3 className="text-lg font-medium text-slate-100">{faq.q}</h3>
                <Icon name="chevronDown" className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="pt-4 text-slate-400">{faq.a}</p>
                </div>
            </div>
        </div>
    );
};

const HowItWorksConnector: React.FC<{ index: number }> = ({ index }) => {
    const animationDuration = 5; // seconds per segment
    const delay = index * animationDuration;

    const dotStyle: React.CSSProperties = {
      animationDuration: `${animationDuration}s`,
      animationDelay: `${delay}s`,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    };

    return (
        <div className="relative flex-grow w-full md:w-auto h-16 md:h-auto md:flex-1 flex items-center md:items-start justify-center md:pt-8">
            {/* Vertical dotted line for mobile */}
            <div className="w-px h-full border-l-2 border-dashed border-slate-700 md:hidden"></div>
            {/* Horizontal dotted line for desktop */}
            <div className="h-px w-full border-t-2 border-dashed border-slate-700 hidden md:block"></div>
            
            {/* Dot for mobile */}
            <div 
              className="md:hidden absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_3px_rgba(6,182,212,0.7)]"
              style={{ ...dotStyle, animationName: 'travel-segment-v' }}
            ></div>
            
            {/* Dot for desktop */}
            <div
              className="hidden md:block absolute top-8 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_3px_rgba(6,182,212,0.7)]"
              style={{ ...dotStyle, animationName: 'travel-segment-h' }}
            ></div>
        </div>
    );
};

const SectionWrapper: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className = '' }) => (
    <section className={`py-20 lg:py-28 relative ${className}`}>
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(200, 210, 255, 0.07) 1px, transparent 0)', backgroundSize: '2rem 2rem'}}></div>
        {children}
    </section>
);


export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const extendedServices = [...services, ...services];

  return (
    <div className="bg-[#050816] text-slate-200 font-sans antialiased overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-0"></div>
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* HERO SECTION */}
        <section className="text-center py-20 lg:py-32">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 text-xs px-3 py-1 rounded-full mb-6 animate-fadeInUp animation-delay-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Professional Web Design Agency
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-400 animate-fadeInUp">
            Launch Your Brand with Professional Web Design
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-400 animate-fadeInUp animation-delay-200">
            y.web helps you turn visitors into loyal clients with high-converting web design that drives real results for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <button onClick={() => setIsModalOpen(true)} className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Get Started for Free
            </button>
            <button onClick={() => setIsModalOpen(true)} className="bg-transparent hover:bg-slate-800/50 border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Book a Call
            </button>
          </div>
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-slate-400 animate-fadeInUp animation-delay-600">
            <div className="flex items-center gap-2">
                <div className="flex -space-x-2"><span className="text-yellow-400">★★★★★</span></div>
                <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                <span>2-Week Average Delivery</span>
            </div>
          </div>
        </section>

        {/* LOGO CLOUD */}
        <LogoCloud />

        {/* SERVICES SECTION */}
        <SectionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Our Services</h2>
            <p className="mt-4 text-slate-400">Everything you need to create a powerful online presence that converts visitors into customers</p>
          </div>
          <div className="mt-16 relative w-full overflow-x-hidden no-scrollbar py-4">
            <div className="flex flex-nowrap animate-scroll-slow">
              {extendedServices.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4">
                  <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 ease-in-out transform hover:scale-[1.05] h-full flex flex-col">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-cyan-400">
                        <Icon name={service.icon} />
                    </div>
                    <h3 className="mt-6 font-bold text-xl text-slate-100">{service.title}</h3>
                    <p className="mt-2 text-slate-400 flex-grow">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#050816] to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#050816] to-transparent pointer-events-none"></div>
          </div>
        </SectionWrapper>
        
        {/* PRICING SECTION */}
        <SectionWrapper>
            <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -z-20"></div>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Choose Your Package</h2>
                <p className="mt-4 text-slate-400">Transparent pricing with no hidden fees. Get exactly what your business needs.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {packages.map((pkg, index) => (
                    <div key={index} className={`group relative bg-slate-800/40 border ${pkg.popular ? 'border-cyan-500' : 'border-slate-700'} p-8 rounded-2xl flex flex-col h-full transition-all duration-300 hover:border-cyan-400 hover:scale-[1.05]`}>
                        {pkg.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>}
                        <h3 className="text-xl font-bold text-slate-100">{pkg.name}</h3>
                        <div className="mt-4">
                            <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                            {pkg.oldPrice && <span className="ml-2 text-slate-500 line-through">{pkg.oldPrice}</span>}
                        </div>
                        <ul className="mt-6 space-y-4 text-slate-400 flex-grow">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Icon name="check" className="w-5 h-5 text-cyan-400" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setIsModalOpen(true)} className={`mt-8 text-center font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 w-full ${pkg.popular ? 'bg-cyan-500 group-hover:bg-cyan-600 text-white' : 'bg-slate-700/50 group-hover:bg-slate-700 text-slate-200'}`}>
                            Get Started →
                        </button>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12">
                <button onClick={() => setIsModalOpen(true)} className="bg-transparent hover:bg-slate-800/50 border border-slate-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                    Request Free Homepage Sample
                </button>
            </div>
        </SectionWrapper>

        {/* HOW IT WORKS */}
        <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">How It Works</h2>
                <p className="mt-4 text-slate-400">Simple 3-step process to get your professional website live</p>
            </div>
            <div className="relative mt-16 flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-4">
                <div className="flex-1 text-center max-w-xs mx-auto">
                    <div className="mx-auto w-16 h-16 rounded-full bg-slate-800/60 border-2 border-slate-700 flex items-center justify-center text-2xl font-bold text-slate-300">1</div>
                    <h3 className="mt-6 text-xl font-bold">Sign Up / Book a Call</h3>
                    <p className="mt-2 text-slate-400">Tell us about your business goals and vision</p>
                </div>
                <HowItWorksConnector index={0} />
                <div className="flex-1 text-center max-w-xs mx-auto">
                    <div className="mx-auto w-16 h-16 rounded-full bg-slate-800/60 border-2 border-slate-700 flex items-center justify-center text-2xl font-bold text-slate-300">2</div>
                    <h3 className="mt-6 text-xl font-bold">Select Your Package</h3>
                    <p className="mt-2 text-slate-400">Choose the perfect plan for your needs</p>
                </div>
                <HowItWorksConnector index={1} />
                <div className="flex-1 text-center max-w-xs mx-auto">
                    <div className="mx-auto w-16 h-16 rounded-full bg-slate-800/60 border-2 border-slate-700 flex items-center justify-center text-2xl font-bold text-slate-300">3</div>
                    <h3 className="mt-6 text-xl font-bold">We Build & Launch</h3>
                    <p className="mt-2 text-slate-400">Sit back while we create your dream website</p>
                </div>
            </div>
        </SectionWrapper>
        
        {/* PORTFOLIO SECTION */}
        <SectionWrapper>
          <div className="absolute top-1/2 -right-1/3 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl -z-20"></div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Our Recent Work</h2>
            <p className="mt-4 text-slate-400">Explore a selection of projects we're proud to have built.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <button 
                key={index}
                onClick={() => alert(`Project: ${project.title}. More details coming soon!`)}
                className="group block bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden text-left transition-all duration-300 ease-in-out hover:border-cyan-400 hover:scale-[1.05] hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-slate-400">{project.description}</p>
                </div>
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* TESTIMONIALS */}
        <SectionWrapper>
          <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -z-20"></div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">What Our Clients Say</h2>
            <p className="mt-4 text-slate-400">Real results from real businesses who trusted y.web with their online presence</p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl flex flex-col transition-all duration-300 ease-in-out transform hover:scale-[1.05]">
                  <div className="flex text-yellow-400">★★★★★</div>
                  <p className="mt-4 text-slate-300 flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                      <div>
                          <p className="font-bold text-slate-100">{testimonial.name}</p>
                          <p className="text-sm text-slate-400">{testimonial.title}</p>
                      </div>
                  </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
        
        {/* WHO WE ARE SECTION */}
        <SectionWrapper>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Who We Are</h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              A design and development agency that blends captivating UI/UX with robust, modern technology to build high-performance digital experiences.
            </p>
            
            <div className="relative w-full h-80 flex items-center justify-center mt-8">
                {/* Background Glow */}
                <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-subtle-pulse"></div>

                {/* Waving/Rippling Lines */}
                <div className="absolute w-32 h-32 rounded-full border border-cyan-400/50 animate-wave"></div>
                <div className="absolute w-32 h-32 rounded-full border border-cyan-400/50 animate-wave animation-delay-1000"></div>
                <div className="absolute w-32 h-32 rounded-full border border-slate-700 animate-wave animation-delay-2000"></div>
                <div className="absolute w-32 h-32 rounded-full border border-slate-700 animate-wave animation-delay-3000"></div>

                {/* Central Logo */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg border-2 border-slate-700/50">
                  <img src="https://lh3.googleusercontent.com/a/ACg8ocKnlwu3_WlMeMKrZt48UdrQazZiUuARCHm71hGokSUY3BQUhIT7=s288-c-no" alt="y.web agency logo" className="w-full h-full object-cover" />
                </div>
            </div>
          </div>
        </SectionWrapper>
        
        {/* FAQ */}
        <SectionWrapper>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg h-[400px] bg-cyan-500/5 rounded-full blur-3xl -z-20"></div>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Frequently Asked Questions</h2>
                <p className="mt-4 text-slate-400">Got questions? We've got answers.</p>
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} faq={faq} isOpen={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} />
                ))}
            </div>
        </SectionWrapper>

      </main>
      
      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}

      {/* FOOTER */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold">y.web</h3>
                <p className="mt-4 text-slate-400 max-w-md">Professional web design agency helping businesses create powerful online presences that convert visitors into loyal customers.</p>
                <div className="mt-6 space-y-3 text-slate-300">
                    <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        wujustyle0000@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                         <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                        +212 696954050
                    </p>
                     <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>
                        @y.web_ux_ui
                    </p>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-lg text-slate-100">Services</h4>
                <ul className="mt-4 space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-cyan-400">Website Creation</a></li>
                    <li><a href="#" className="hover:text-cyan-400">UI/UX Design</a></li>
                    <li><a href="#" className="hover:text-cyan-400">Website Redesign</a></li>
                    <li><a href="#" className="hover:text-cyan-400">Landing Pages</a></li>
                    <li><a href="#" className="hover:text-cyan-400">SEO Optimization</a></li>
                    <li><a href="#" className="hover:text-cyan-400">Speed Optimization</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg text-slate-100">Company</h4>
                <ul className="mt-4 space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
                    <li><a href="#" className="hover:text-cyan-400">Portfolio</a></li>
                    <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
                    <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
                    <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-cyan-400">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center py-6 border-t border-slate-800 text-sm text-slate-500">
            © {new Date().getFullYear()} y.web. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
