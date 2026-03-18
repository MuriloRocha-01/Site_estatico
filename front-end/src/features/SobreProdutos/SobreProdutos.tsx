import CardsProdutos from '../SobreProdutos/components/CardsProdutos'


function SobreProdutos(){
    return(
        <section >
            
            <h2 className="ml-[10%] md:ml-52 text-[1.8rem] items-left font-montserrat md:text-[2.2rem] mt-20 mb-7 items-center justify-center font-bold leading-tight">Conheça nossos 
                <span className='text-red block'>produtos</span></h2>
           

            <CardsProdutos></CardsProdutos>
        </section>
    )


    
}

export default SobreProdutos;