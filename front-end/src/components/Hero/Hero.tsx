import type { HeroProps } from "./interfaces"

const Hero = ({ imagem, label1, label2 } : HeroProps) => {
    return(
        <header className='relative h-[700px] w-full flex items-center overflow-hidden'>
            <img 
            src={imagem}
            alt="" 
            className='absolute inset-0 w-full h-full object-cover z-0'
            />
            <div className='absolute inset-0 bg-black/50 z-10'></div>

            <section className='relative z-20 px-4 text-left text-white  md:ml-10 xl:ml-[10%]'>
            <h1 className='text-[1.4rem] font-bold md:text-3xl md:text-4xl tracking-wider'>
                {label1}
            </h1>
            <h2 className='text-[1rem] md:text-lg font-light max-w-2xl mx-auto'>
                {label2}
            </h2>
            </section>
        </header>
    ) 
};

export default Hero;