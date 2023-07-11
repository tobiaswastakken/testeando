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




describe("Editar email de los contactos para actualizarlos", () => {
  test("Luego de editar el email, debe aparecer actualizado", ()=>{
    const contacto = contactos[0] 
    const res = editarEmail(contacto.id, "migueldiaz@gmail.com");
    expect(contacto.email).toBe("migueldiaz@gmail.com")
  })

  test("Debe de incluir '@' y '.com'", () =>{ 
    const contacto = contactos[0]
    const com = ".com"
    const arroba = "@"
    const res = editarEmail(contacto.email, com, arroba);
    expect(res).toBe(true);
  });
})


describe('Agregar nuevos contactos a la lista', () => {
  test('Al agregar un contacto a la lista, no debe de ser identico a otro contacto', () => {
    const contacto = contactos[0]
    const res = agregarContacto (contacto, {
      id: 1,
        first_name: "Miguel",
        last_name: "Sanchez",
        email: "miguelsanchez@google.es",
        gender: "Female",
        ip_address: "168.150.9.108",
    })
     expect(res).toBe(true)
   });

   
});
});


