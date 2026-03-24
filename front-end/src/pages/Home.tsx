import Header from '../features/Header';
import SobreProdutos from '../features/SobreProdutos/SobreProdutos';

import MainLayout from '../layouts/MainLayout/MainLayout';

function Home(){
    return(
        <>
            <MainLayout>
            <Header></Header>
            <SobreProdutos></SobreProdutos>
            </MainLayout>
        </>
    )        
}   

export default Home;