import whatsappimage from "../assets/whatsapp.png";

function ButtonWhatsapp(){
    return(
   <>
   <img src={whatsappimage} alt="Whatsapp imagem" className="hover:scale-110 transition duration-3 cursor-pointer fixed bottom-6 right-6 w-[70px] "></img>
   </>
    )
}

export default ButtonWhatsapp;