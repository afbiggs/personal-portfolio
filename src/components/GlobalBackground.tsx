import { motion } from 'framer-motion';

const GlobalBackground = () => (
  <div
    className="fixed inset-0 w-full h-full -z-10"
    style={{
      background: "linear-gradient(135deg, #232046 0%, #4F46E5 60%, #7C3AED 85%, #EC4899 100%)"
    }}
  >
    {/* Darker overlay for depth */}
    <div className="absolute inset-0 bg-[#0A0F1C] opacity-80 pointer-events-none" />
    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          "radial-gradient(circle at 30% 20%, rgba(79,70,229,0.15) 0%, transparent 60%)",
          "radial-gradient(circle at 70% 60%, rgba(124,58,237,0.13) 0%, transparent 60%)",
          "radial-gradient(circle at 30% 20%, rgba(124,58,237,0.10) 0%, transparent 60%)"
        ]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      style={{ pointerEvents: 'none' }}
    />
  </div>
);

export default GlobalBackground; 