import { SlArrowDownCircle } from "react-icons/sl";
import { VscCode } from "react-icons/vsc";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaJs } from "react-icons/fa6";
import { IoLayers } from "react-icons/io5";
import { SiMicrostrategy } from "react-icons/si";
import { TbWorldSearch } from "react-icons/tb";
import { ImBlog } from "react-icons/im";
import { SiGoogleads } from "react-icons/si";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function HomePage() {

  // دالة إرسال الإيميل المعدلة
  const handleSubmit = (e) => {
    e.preventDefault();

    // إظهار علامة انتظار للمستخدم
    Swal.fire({
      title: 'Sending...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const serviceID = "service_fr6lgpm";
    const templateID = "template_145v01j";
    const publicKey = "plRkFq9G2ZZfO3u28";

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Your message has been sent successfully',
          showConfirmButton: false,
          timer: 1500
        });
        e.target.reset(); // تفضي الفورم بعد الإرسال الناجح
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong, please try again!',
        });
        console.log(error.text);
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section  className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-blue-500 font-semibold tracking-widest uppercase">Welcome</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight">David Maher</h1>
            <p className="text-xl sm:text-2xl md:text-4xl text-blue-500 font-semibold">Front-End Developer & SEO Content Writer</p>
          </div>  

          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-2xl mx-auto">
            Crafting beautiful, performant web experiences and creating content that ranks. I bridge the gap between design and functionality while driving organic growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button onClick={() => scrollToSection('Contact')} className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
              Get in Touch
            </button>
            <button 
              onClick={() => scrollToSection('Project')} 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl border border-blue-500"
            >
              Show My Work
            </button>
          </div>

          <div 
            onClick={() => scrollToSection('About')}
            className="pt-8 cursor-pointer animate-bounce flex justify-center"
          >
            <SlArrowDownCircle className="text-blue-400 text-5xl sm:text-6xl" />
          </div>
        </div>
      </section>
    
      {/* About Section */}
      <section data-aos="zoom-out" id="About" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div  className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Me</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
                I'm a passionate developer and writer who believes great digital experiences come from the perfect blend of beautiful code and compelling content. With over 5 years of experience in front-end development, I specialize in building responsive, accessible, and performant web applications using modern technologies like React, TypeScript, and Tailwind CSS. As an SEO content writer, I've helped brands increase their organic traffic by creating strategic, search-optimized content that resonates with both search engines and real people.
              </p>
            </article>

            <article className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">What I Bring</h2>
              <ul className="space-y-4">
                {[
                  'Clean, maintainable code with a focus on user experience',
                  'Strong collaboration with designers and stakeholders',
                  'Continuous learning and adaptation to industry trends',
                  'SEO-driven content strategy with backlink research',
                  'Passion for staying up-to-date with latest technologies'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-sm sm:text-base md:text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    
      {/* Skills Section */}
      <section id="Skills" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">Master both frontend development and SEO strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">Front-End Development</h3>
              {[
                { icon: VscCode, title: 'React & JavaScript', desc: 'Building modern websites and scalable web applications' },
                { icon: IoColorPaletteSharp, title: 'CSS & Tailwind & Bootstrap', desc: 'Creating responsive, visually appealing designs' },
                { icon: FaJs, title: 'JavaScript & React.js', desc: 'Creating fast, maintainable front-end experiences' },
                { icon: IoLayers, title: 'UI/UX Implementation', desc: 'Translating designs into accessible code' }
              ].map((skill, idx) => (
                <article key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 p-5 sm:p-6 md:p-7 flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-100 flex items-center justify-center text-xl sm:text-2xl text-blue-600">
                    <skill.icon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">{skill.title}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1">{skill.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">SEO & Content Writing</h3>
              {[
                { icon: SiMicrostrategy, title: 'SEO Content Strategy', desc: 'Developing content plans to boost organic traffic' },
                { icon: TbWorldSearch, title: 'Keyword Research', desc: 'Identifying high-value keywords for optimization' },
                { icon: ImBlog, title: 'Backlink Building', desc: 'Creating strategies to build authoritative backlinks' },
                { icon: SiGoogleads, title: 'Google Ads', desc: 'Keyword research and search ad creation' }
              ].map((skill, idx) => (
                <article key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 p-5 sm:p-6 md:p-7 flex items-start gap-4">
                  <div className=" w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-100 flex items-center justify-center text-xl sm:text-2xl text-blue-600">
                    <skill.icon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">{skill.title}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1">{skill.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Project" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">Showcase of professional web development and SEO work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Project 1 */}
            <a 
              href="https://saeed45rabee.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden bg-slate-200 aspect-video">
                  <img
                    src="/images/SaeedRabee.png"
                    alt="Saeed Rabee Barber Shop"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-blue-300 font-semibold tracking-wide mb-2">React • TailwindCSS • SEO • Firebase</p>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Saeed Rabee Barber Shop</h3>
                  </div>
                </div>
              </article>
            </a>

            {/* Project 2 */}
            <a 
              href="https://maverick.net/places/category/uncategorized/saudi-arabia/medina-province/medina/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden bg-slate-200 aspect-video">
                  <img
                    src="/images/Dirah-Backlink.png"
                    alt="Dirah business listing and SEO backlink project"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0  from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-black font-semibold tracking-wide mb-2">SEO • Backlink • Local SEO</p>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">Dirah Tourism Listing</h3>
                  </div>
                </div>
              </article>
            </a>
 
            {/* Project 3 */}
            <a 
              href="https://on-region.cataloxy.com/firms/onaping-falls/480degree.com.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden bg-slate-200 aspect-video">
                  <img
                    src="/images/480°.png"
                    alt="480 Degree business listing"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-black font-semibold tracking-wide mb-2">SEO • Backlink • Local SEO</p>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">480 Degree Business Listing</h3>
                  </div>
                </div>
              </article>
            </a>
            <a 
              href="https://saint-karas-and-virgin-mary-church.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden bg-slate-200 aspect-video">
                  <img
                    src="/images/الكنيسة.png"
                    alt="480 Degree business listing"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-blue-300 font-semibold tracking-wide mb-2">Frindely Seo • ReactJs </p>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Church of the Mary and St. Karas</h3>
                  </div>
                </div>
              </article>
            </a>
          </div>
        </div>   
      </section>
      {/* Contact Section - تم إصلاح الفورم هنا */}
      <div className="work mb-10" id="Contact">
        <h2 className="text-2xl mt-10 sm:text-3xl md:text-4xl font-bold text-slate-900 text-center">Let's Work Together</h2>
        <form onSubmit={handleSubmit} className="form-control flex items-center w-full max-w-xs mx-auto mt-10">
          <div className="w-full">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 flex flex-col items-center shadow-lg">
              
              <div className="w-full">
                <label className="label font-bold">name</label>
                {/* تم إضافة الـ name هنا */}
                <input name="name" type="text" className="input w-full" placeholder="Name" required />
              </div>

              <div className="w-full">
                <label className="label font-bold">email</label>
                {/* تم إضافة الـ name هنا */}
                <input name="email" type="email" className="input w-full" placeholder="Email" required />
              </div>

              <div className="w-full">
                <label className="label font-bold">message</label>
                {/* تم إضافة الـ name وتحويله لـ textarea ليكون أفضل */}
                <textarea name="message" className="textarea textarea-bordered w-full h-24" placeholder="Your Message Here" required></textarea>
              </div>

              {/* زر الإرسال نوعه submit فقط بدون onClick */}
              <button type="submit" className="btn btn-neutral mt-4 w-full">Send Message</button>
              
            </fieldset>
          </div>
        </form>
      </div>
    </>
  );
}