import CardsProdutos from '../SobreProdutos/components/CardsProdutos'


function SobreProdutos(){
    return(
        <section >
            
            <h2 className="font-montserrat text-[2.2rem] mt-20 mb-7 align-center ml-40 font-bold leading-tight">Conheça nossos 
                <span className='text-red  block'>produtos</span></h2>
           

            <CardsProdutos></CardsProdutos>
        </section>
    )


    
}

export default SobreProdutos;