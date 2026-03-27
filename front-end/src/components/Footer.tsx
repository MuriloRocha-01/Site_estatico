import { Instagram } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import {Phone} from 'lucide-react';
import GoogleMap from './GoogleMap';


function Footer(){
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const localDesejado = { lat:  -23.5767125, lng:  -46.5975118 }; 
            
    return(
        <div className='bg-gray-200'>
            
        
        <div className="flex flex-col justify-center items-center md:flex-row md:gap-32 justify-center align-center py-10 text-base text-gray-300 bg-[#1a1a1a] ">
            
            <div className='mb-4'>
                
                <GoogleMap  center={localDesejado} zoom={12} apiKey={apiKey} />
            </div>
            <div className="flex flex-col gap-[12px]">
                <span className='text-center text-[1.2rem] text-white'>Informações para contato</span>

                    <span className='text-center md:text-left flex gap-2'>
                    <Mail size={23} className='hover:scale-105'/>
                    Comercial@granperfil.com.br   
                    </span>

                    <span className='text-center md:text-left flex gap-2'>
                    <Phone size={23} className='hover:scale-105'/>
                    Fixo: (11) 2273-7171
                    </span>
    
                    <span className='flex gap-2'> 
                        <MapPin size={23} className='hover:scale-105'/>
                        <a 
                        target="_blank"
                        href='https://maps.google.com/?cid=11346810022040465944&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ' 
                        className='hover:text-red transition duration-200'>
                            Avenida Henry Ford 1028,<br/> Parque da Mooca, SP
                        </a>
                    </span>
                
                    <span className='flex gap-2'> 
                        <Instagram size={23} className='hover:scale-105'/>
                        <a 
                        target="_blank"
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