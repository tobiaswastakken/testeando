import { Contacto, contactos } from "./contactos";
const editarEmail = (id: number, email:string, lista: Contacto[],com:string,arroba:string) =>{
    if( email.includes(com && arroba)){
        return true
    }

    return lista.map((contacto) =>{
        return {
            ...contacto,
            email: contacto.id === id ? email : contacto.email,

          };
    })
}; 


export{editarEmail}