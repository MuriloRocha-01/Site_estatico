import whatsappimage from "../assets/whatsapp.png";

function ButtonWhatsapp(){
    return(
   <>
   <img src={whatsappimage} alt="Whatsapp imagem" 
   className="hover:scale-110 transition duration-300 cursor-pointer fixed bottom-6 right-6 w-[60px] md:w-[70px] z-40"></img>
   </>
    )
}

export default ButtonWhatsapp;