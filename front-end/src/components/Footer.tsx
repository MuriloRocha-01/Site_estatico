import { Instagram } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import {Phone} from 'lucide-react';
import GoogleMap from './GoogleMap';


function Footer(){
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const localDesejado = { lat: -23.528867978321188, lng: -46.76167588221847 }; 
            
    return(
        <div className='bg-gray-200'>
            
        
        <div className="flex flex-col justify-center items-center md:flex-row md:gap-32 justify-center align-center py-10 text-base text-gray-300 bg-[#1a1a1a] ">
            
            <div className='mb-4'>
                
                <GoogleMap  center={localDesejado} zoom={12} apiKey={apiKey} />
            </div>
            <div className="flex flex-col gap-[9px]">
                <span className='text-center text-[1.2rem] mb-2 text-white'>Informações para contato</span>

                    <span className='text-center md:text-left flex gap-2'>
                    <Mail size={23} className='hover:scale-105'/>
                    Comercial@granperfil.com.br
                    </span>

                    <span className='text-center md:text-left flex gap-2'>
                    <Phone size={23} className='hover:scale-105'/>
                    (11)2273-7171
                    </span>
    
                    <span className='flex gap-2'> 
                        <MapPin size={23} className='hover:scale-105'/>
                        <a 
                        href='https://www.google.com/maps/place/Av.+Henry+Ford,+1028+-+Pres.+Altino,+Osasco+-+SP,+06210-103/@-23.5288889,-46.7642481,17z/data=!3m1!4b1!4m5!3m4!1s0x94ceff3bec3fcfa5:0xb3678fe29e16a5ed!8m2!3d-23.5288938!4d-46.7616732?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D' 
                        className='hover:text-red transition duration-200'>
                            Avenida Henry Ford  1028
                        </a>
                    </span>
                
                    <span className='flex gap-2'> 
                        <Instagram size={23} className='hover:scale-105'/>
                        <a 
                        href="https://www.instagram.com/Granperfil_"
                         className='hover:text-red transition duration-200'>
                            Granperfil_
                        </a>
                    </span>
            </div>
            
            
            </div>
        </div>
        
    )
};


export default Footer;