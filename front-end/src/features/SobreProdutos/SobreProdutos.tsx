import CardsProdutos from '../SobreProdutos/components/CardsProdutos'


function SobreProdutos(){
    return(
        <section className='overflow-x-hidden'>
            
            <h2 className="xl:ml-[20%] ml-[10%] md:ml-52 text-[1.8rem]  md:text-[2.2rem] pt-12 pb-7 font-bold leading-tight">Conheça nossos 
                <span className='text-red block'>produtos</span></h2>
           

            <CardsProdutos></CardsProdutos>
        </section>
    )


    
}

export default SobreProdutos;