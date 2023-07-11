import { Contacto, contactos } from "src/contactos";

const editarNombre = (id: number, nombre: string, lista: Contacto[]) => {
  return lista.map((contacto) => {
    if (contacto.id !== id) {
      throw ("No existe el contacto");
    }
    
    return {
      ...contacto,
      first_name: contacto.id === id ? nombre : contacto.first_name,
    };
  });
};

export { editarNombre };
