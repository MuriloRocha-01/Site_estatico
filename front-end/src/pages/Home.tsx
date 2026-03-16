import Menu from '../components/Menu'
import Header from '../features/Header'
import SobreProdutos from '../features/SobreProdutos/SobreProdutos'
import ButtonWhatsapp from '../components/ButtonWhatsapp'
import Footer from '../components/Footer';

function Home(){
    return(
        <>
            <Menu></Menu>
            <Header></Header>
            <SobreProdutos></SobreProdutos>
            <ButtonWhatsapp/>
            <Footer/>
        </>
    )        
}   

export default Home;