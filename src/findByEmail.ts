import { Contacto, contactos } from "./contactos";

const findByEmail = (palabra: string) => {


    if (palabra === "") {
        return contactos
    }

    const encontrados = []
    const parecidos = []

    // for (const contacto of contactos) {
    //     if( email === contacto.email){
    //         encontrados.push(contacto)
    //     }

    // }
    for (const contacto of contactos) {
        if (contacto.email.includes(palabra)) {
            encontrados.push(contacto)

        }
        // if (palabra === contacto.email) {
        //     encontrados.push(contacto)
        // }
    }
    return encontrados 

}
export { findByEmail }