import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-bosque-pattern bg-no-repeat bg-cover bg-center'>
  <div
    className='absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5'
  >
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#120b2b]'></div>
      <div
        className='w-1 sm:h-80 h-40 bg-gradient-to-t from-transparent to-[#0b031d]'
      >
      </div>
    </div>

    <div>
      <h1
        className='font-black text-black lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2 text-black-500'
      >
        Hola, soy 
        {' '}
        <span className='text-[#2f723e]'>Jonathan Cruz</span>
      </h1>
      <p
        className='text-[#3a3a3b] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-800'
      >
        Desarrollador Full Stack y Analista de calidad QA
        <br className='sm:block hidden' />
      </p>
      
    </div>
  </div>

  <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
        client:load
        className="w-3 h-3 rounded-full bg-secondary mb-1"
        animate={{ y: [0, 25, 0] }}
        transition={{
        duration: 1.5,
            repeat: 999,
            repeatType: "loop",
          }}
          
        >
        </motion.div>
      </div>
    </a>
  </div>
</section>
  );
};

export default Hero;
