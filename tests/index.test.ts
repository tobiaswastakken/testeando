import {editarNombre} from "../src/editarContacto";
import {contactos} from "../src/contactos"

describe("Editar nombre o apellido de contactos", () => {
  test("Editar el nombre de un contacto debe ser guardado con el nombre actualizado", () => {
    const contacto = contactos[0]
    const respuesta = editarNombre(contacto.id, "Carolina");
    expect(contacto.first_name).toBe("Carolina")
  });
  test("No se puede editar el nombre de un contacto inexistente", () =>{
   expect(editarNombre(20, "Nahuel")).toThrowError("No existe el contacto")

  })
});

describe("Editar email de los contactos para actualizarlos")


