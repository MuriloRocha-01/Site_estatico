import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer';

import type { MainLayoutHeroProps } from './interface';
import Hero from '../../components/Hero/Hero'

function MainLayout({children, imagem, label1, label2}: MainLayoutHeroProps){
    return(
            <>
            <Menu/>
            <Hero 
            imagem={imagem}
            label1 = {label1}
            label2 = {label2}
            />
            <div>{children}</div>
            <Footer/>    
            </>
    )
}

export default MainLayout;