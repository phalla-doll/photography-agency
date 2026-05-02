import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Container wrapper for padding */}
      <div className="px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto py-8">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-16 md:mb-24">
          <div className="font-clash font-bold flex items-center gap-2 text-xl tracking-wide uppercase">
            <span className="w-6 h-6 border-2 border-brand-dark rounded-full flex items-center justify-center text-xs">C</span>
            PHOTOGRAPHY
          </div>
          <nav className="hidden md:flex gap-4">
            {['About', 'Gallery', 'Project', 'Contact'].map(item => (
              <button key={item} className="px-6 py-1.5 rounded-full border border-brand-dark/20 text-sm hover:bg-brand-dark hover:text-brand-bg transition-colors">
                {item}
              </button>
            ))}
          </nav>
        </header>

        {/* HERO TYPOGRAPHY */}
        <section className="mb-8 md:mb-12">
          <h1 className="font-clash font-black text-[clamp(4.5rem,14vw,14rem)] leading-[0.8] tracking-tighter uppercase mb-4 w-full text-center sm:text-left break-words sm:break-normal">
            CAPTURING
          </h1>
          <h2 className="font-clash font-bold text-lg md:text-3xl lg:text-4xl uppercase tracking-wider md:text-right border-t-2 border-brand-dark/20 pt-4">
            THE MOMENTS THAT CAPTIVATE YOUR HEART
          </h2>
        </section>

        {/* HERO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-24 md:mb-32">
          {/* Left Dark Card */}
          <div className="md:col-span-4 bg-[#23201e] text-brand-bg rounded-2xl p-6 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[500px]">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-brand-bg/90 mt-2">
              Amelia Allen is a lifestyle, portrait and documentary photographer from Somerset who now lives and works in London.
            </p>
            <button className="flex items-center gap-2 font-clash font-bold uppercase tracking-wider text-base md:text-lg hover:text-brand-bg/70 transition-colors mt-12 w-fit">
              ABOUT US
              <span className="bg-brand-bg/20 rounded-full p-1"><ArrowUpRight size={18} /></span>
            </button>
          </div>
          {/* Right Image */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden h-[400px] md:h-[600px]">
            <Image 
              src="https://images.unsplash.com/photo-1506795660198-e95c77602129?auto=format&fit=crop&q=80&w=2000"
              alt="Photographer at work"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Wheat icon in bottom right */}
            <div className="absolute bottom-6 right-6 w-12 h-16 border-2 border-white/30 rounded-full flex flex-col items-center justify-center p-2 opacity-80 mix-blend-overlay">
               <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-full h-full">
                 <path d="M12 22V2M12 12c-2-2-4-1-4-1s2-1 4-1M12 16c-3-2-5-1-5-1s2-1 5-1M12 8c-2-2-4-1-4-1s2-1 4-1" />
               </svg>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
             <div className="md:col-span-4 border-t-[3px] border-brand-dark pt-6">
               <h3 className="font-clash font-bold text-3xl md:text-4xl uppercase tracking-wide">ABOUT ME</h3>
             </div>
             <div className="md:col-span-8 md:pl-8 lg:pl-16 border-t-[1px] border-brand-dark/20 pt-6">
               <p className="text-lg md:text-2xl leading-relaxed text-brand-dark/80">
                 Starting her career in fashion photography at the age of 18, it was on the sets of high end brand campaigns and fashion shows that Amelia learnt the technicalities of what has become her signature style. Having always been drawn to sociological documentary photography, Amelia applies her classic and energetic style seamlessly to her portraiture and documentary projects.
               </p>
             </div>
          </div>
          {/* 3 Images row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
               <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" alt="Camera lens close up" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
               <Image src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800" alt="Fern leaf" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
               <Image src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=800" alt="Editing desk" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

      </div>

      {/* FEATURED WORKS (Dark Section) */}
      <section className="bg-[#171512] text-[#d9cebe] py-16 md:py-32 px-4 md:px-8 lg:px-12">
         <div className="max-w-[1600px] mx-auto">
            <h2 className="font-clash font-black text-[clamp(3.5rem,9.5vw,10rem)] leading-[0.8] mb-12 md:mb-20 tracking-tighter uppercase">
              FEATURED WORKS
            </h2>
            <div className="space-y-4">
              {/* Strip 1 */}
              <div className="relative h-32 md:h-48 lg:h-56 group overflow-hidden rounded-2xl bg-[#2a2a2a] cursor-pointer">
                <Image src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000" fill alt="Art Director" className="object-cover mix-blend-overlay opacity-60 group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out" referrerPolicy="no-referrer" />
                <div className="relative h-full flex justify-between items-center px-6 md:px-12 lg:px-16 font-clash font-bold uppercase tracking-wider">
                  <span className="text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-xl z-10">ART DIRECTOR</span>
                  <span className="text-lg md:text-3xl font-satoshi font-bold text-white drop-shadow-xl z-10">2021</span>
                </div>
              </div>
              {/* Strip 2 */}
              <div className="relative h-32 md:h-48 lg:h-56 group overflow-hidden rounded-2xl bg-[#2a2a2a] cursor-pointer">
                <Image src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" fill alt="Photographer" className="object-cover mix-blend-overlay opacity-60 group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out" referrerPolicy="no-referrer" />
                <div className="relative h-full flex justify-between items-center px-6 md:px-12 lg:px-16 font-clash font-bold uppercase tracking-wider">
                  <span className="text-lg md:text-3xl font-satoshi font-bold text-white drop-shadow-xl z-10">2021</span>
                  <span className="text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-xl z-10">PHOTOGRAPHER</span>
                </div>
              </div>
              {/* Strip 3 */}
              <div className="relative h-32 md:h-48 lg:h-56 group overflow-hidden rounded-2xl bg-[#2a2a2a] cursor-pointer">
                <Image src="https://images.unsplash.com/photo-1601552553952-4148eec26f56?auto=format&fit=crop&q=80&w=2000" fill alt="Videographer" className="object-cover mix-blend-overlay opacity-60 group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out" referrerPolicy="no-referrer" />
                <div className="relative h-full flex justify-between items-center px-6 md:px-12 lg:px-16 font-clash font-bold uppercase tracking-wider">
                  <span className="text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-xl z-10">VIDEOGRAPHER</span>
                  <span className="text-lg md:text-3xl font-satoshi font-bold text-white drop-shadow-xl z-10">2022</span>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* PROJECTS (Light Section) */}
      <section className="py-16 md:py-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-[3px] border-brand-dark pb-4 mb-8 md:mb-12 gap-4">
          <h2 className="font-clash font-black text-[clamp(3.5rem,8.5vw,9rem)] tracking-tighter uppercase leading-[0.85]">
            PROJECTS
          </h2>
          <button className="flex items-center gap-2 font-clash font-bold uppercase tracking-wider text-base hover:opacity-70 transition-opacity whitespace-nowrap mb-2">
            SHOW ALL
            <span className="bg-brand-dark text-brand-bg rounded-full p-1"><ArrowUpRight size={18} /></span>
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_auto_auto] gap-4">
          
          {/* Top Left (Road) */}
          <div className="md:col-span-4 md:row-span-1 relative h-[400px] md:h-auto rounded-2xl overflow-hidden aspect-[4/5] object-cover hover:opacity-95 transition-opacity">
             <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" alt="Mountain Road" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Top Middle (Portrait) */}
          <div className="md:col-span-4 md:row-span-1 relative h-[350px] md:h-auto rounded-2xl overflow-hidden aspect-square self-end hover:opacity-95 transition-opacity">
             <Image src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&q=80&w=800" alt="Fashion Portrait" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Right Tall (Interior) spans 2 rows */}
          <div className="md:col-span-4 md:row-span-2 relative h-[500px] md:h-full rounded-2xl overflow-hidden aspect-[2/3] md:aspect-auto hover:opacity-95 transition-opacity">
             <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" alt="Interior Design" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Middle Left Wide (Desk) */}
          <div className="md:col-span-8 md:row-span-1 relative h-[300px] md:h-auto rounded-2xl overflow-hidden aspect-[16/7] hover:opacity-95 transition-opacity">
             <Image src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1600" alt="Desk setup" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Bottom Full Wide (Sculpture) */}
          <div className="md:col-span-12 md:row-span-1 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden hover:opacity-95 transition-opacity pt-4">
             <div className="relative w-full h-full rounded-2xl overflow-hidden mt-4">
               <Image src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=2400" alt="Carved Sculpture" fill className="object-cover" referrerPolicy="no-referrer" />
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 md:px-8 lg:px-12 py-16 md:py-24 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12">
        <div className="flex flex-col gap-2">
           <h3 className="font-clash font-bold text-5xl md:text-6xl lg:text-7xl flex items-center gap-2 lg:gap-4 mb-2">
              Say hello 
              <span className="transform -scale-y-100 rotate-45 -mt-2"><ArrowUpRight className="w-10 h-10 md:w-14 md:h-14" /></span>
           </h3>
           <a href="mailto:hello@gmail.com" className="text-2xl md:text-3xl font-medium tracking-wide hover:opacity-70 transition-opacity">hello@gmail.com</a>
        </div>
        <div className="flex flex-col gap-3 text-left md:text-right">
           {['LinkedIn', 'Instagram', 'Twitter'].map(link => (
             <a key={link} href="#" className="text-xl md:text-2xl hover:italic hover:opacity-70 transition-all font-satoshi font-medium tracking-wide">
               {link}
             </a>
           ))}
        </div>
      </footer>

      {/* BIG BOTTOM LOGO */}
      <div className="px-4 md:px-8 lg:px-12 pb-12 w-full max-w-[2000px] mx-auto">
         <div className="bg-[#171512] rounded-[1.5rem] md:rounded-[3.5rem] w-full py-10 md:py-20 px-4 md:px-8 flex items-center justify-center overflow-hidden">
            <h1 className="font-clash font-black text-[clamp(2.5rem,11vw,24rem)] leading-none text-[#d9cebe] tracking-tighter uppercase text-center w-full h-auto pb-4 md:pb-8">
              PHOTOGRAPHY
            </h1>
         </div>
      </div>

    </main>
  );
}
