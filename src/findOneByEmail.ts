import { Contacto, contactos } from "../src/contactos";



function findOneByEmail(email:string){
    const contactoVacio :Contacto = {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        ip_address: "",
    }

    for (const contacto of contactos) {
        if (contacto.email == email) {
            return contacto;
        }
    }
    return contactoVacio
};





export { findOneByEmail };
