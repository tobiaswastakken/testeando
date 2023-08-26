import { Contacto, contactos } from "src/contactos";

const editarNombre = (id: number, nombre: string, lista: Contacto[]) => {
  const contactosActualizados = lista.map((contacto) => {
    if(contacto.id === id) {
      return {
        ...contacto,
        first_name: nombre,
      };
    }
    
    return contacto;
  });

  const contactoEncontrado = contactosActualizados.find((contacto) => contacto.id === id);

  if (!contactoEncontrado) {
    throw new Error("No existe el contacto");
  }

  return contactosActualizados;
};





export { editarNombre };
