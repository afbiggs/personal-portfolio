import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profileImage from '../assets/images/profile-image.jpeg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
  const titles = [
    "Full-Stack Developer",
    "Creative Embedded Systems Engineer",
    "Embedded UI Developer",
    "Linux & Networking Enthusiast",
    "Microcontrollers & SBCs Are My Playground",
    "Automation & Control Systems Developer",
    "Remote-Friendly Tinkerer",
    "One Project Away From Overengineering Everything",
    "Embedded Dev with a Multimeter",
    "Code + Hardware = ❤️"
  ];

  const [typedTitle] = useTypewriter({
    words: titles,
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });

  const [introName] = useTypewriter({
    words: ['Alex Biggs'],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent px-2 sm:px-6 md:px-12">
      <div
        className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto rounded-2xl bg-[#18192A]/80 border-2 border-[#7C3AED] shadow-2xl backdrop-blur-lg px-4 sm:px-10 lg:px-16 py-8 sm:py-12 lg:py-16 flex flex-col md:flex-row items-center md:items-start gap-8"
        style={{ boxShadow: '0 0 40px 0 #7C3AED55, 0 0 0 2px #4F46E5' }}
      >
        {/* Faux window controls */}
        <div className="absolute left-0 top-0 flex space-x-2 p-4">
          <span className="w-3 h-3 rounded-full bg-[#EC4899] inline-block shadow-md" />
          <span className="w-3 h-3 rounded-full bg-[#FBBF24] inline-block shadow-md" />
          <span className="w-3 h-3 rounded-full bg-[#22D3EE] inline-block shadow-md" />
        </div>

        {/* Terminal-like Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-6 text-[#CBD5E1] font-mono text-sm opacity-70">[~/alexbiggs]$</div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-mono">
            <span className="text-[#7C3AED]">{`>`} </span>
            <span>{introName}</span>
            <Cursor cursorColor="#7C3AED" />
          </h1>

          <div className="mb-6 h-[5rem] sm:h-[5.5rem] md:h-[6rem] flex items-start justify-start">
  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-[#7C3AED] leading-snug text-left w-full">
    {typedTitle}
    <Cursor cursorColor="#7C3AED" />
  </h2>
</div>

<p className="text-[#CBD5E1] text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
  Specializing in web development, embedded systems, and solving problems I probably created in the first place.
  I build stuff that works, sometimes even on the first try.
</p>

          <div className="flex flex-wrap gap-6 mb-8">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-[#4F46E5] text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <span className="relative z-10">Contact Me</span>
            </a>
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-transparent text-[#CBD5E1] font-semibold rounded-lg border-2 border-[#4F46E5] overflow-hidden hover:scale-105 transition-transform"
            >
              <span className="relative z-10">See My Work</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6">
  <div className="flex gap-6">
    {/* Social icons */}
    {[
      { icon: FaGithub, href: "https://github.com/afbiggs" },
      { icon: FaLinkedin, href: "https://linkedin.com/in/alex-biggs-2a8a0194" },
    ].map((social, index) => (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#CBD5E1] hover:text-[#4F46E5] transition-colors text-3xl"
      >
        <social.icon />
      </a>
    ))}
  </div>

  <a
    href="/Alexander Biggs Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm sm:text-base font-semibold text-[#CBD5E1] border border-[#4F46E5] rounded-md px-4 py-2 hover:bg-[#4F46E5] hover:text-white transition-colors"
  >
    View Résumé
  </a>
</div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-shrink-0 flex justify-center items-center mt-8 md:mt-0">
          <img
            src={profileImage}
            alt="Alex Biggs"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-[#7C3AED] shadow-lg bg-[#232046]"
            style={{ boxShadow: '0 0 24px 0 #7C3AED55, 0 0 0 4px #232046' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
