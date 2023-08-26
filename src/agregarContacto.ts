import { Contacto, contactos } from "./contactos";


function agregarContacto(...nuevosContactos: Contacto[]): boolean | null {
  let existe = true;

  for (const nuevoContacto of nuevosContactos) {
    const contactoExistente = contactos.find((contacto) => contacto.id === nuevoContacto.id);

    if (contactoExistente) {
      existe = false;
      break;
    }

    if (
      nuevoContacto.first_name === "" || nuevoContacto.last_name === "" || nuevoContacto.email === "" || nuevoContacto.gender === "" ||
      nuevoContacto.ip_address === ""
    ) {
      return null;
    }

    contactos.push(nuevoContacto);
  }

  return existe;
}

export {agregarContacto}
