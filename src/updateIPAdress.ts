import { Contacto, contactos } from "./contactos";


const updateIPAddress = (listita:Contacto[]) =>{

    

    return listita.map((contacto) =>{
        return {
            ...contacto,
            ip_address:contacto.ip_address + "." + contacto.id

        }

    })
    



}

export {updateIPAddress}
