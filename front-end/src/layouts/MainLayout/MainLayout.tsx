import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer';
import ButtonWhatsapp from '../../components/ButtonWhatsapp';

import type {MainLayoutProps} from './interface'

function MainLayout({children}: MainLayoutProps){
    return(
            <>
            <Menu/>
            <div>{children}</div>
            <Footer/>
            <ButtonWhatsapp/>    
            </>
    )
}

export default MainLayout;