import { Contacto } from "./contactos"

const checkNewContact = (contacto : Contacto) =>{
    let largoN = contacto.first_name.length
    let largoA = contacto.last_name.length  
    if(largoA == 0) {
        return false
    }
    if(largoN > 0){
        return true     
    }

    else{
        return false
    }

    
    
}

export {checkNewContact}