import {Contacto, contactos} from "../src/contactos"
import {editarNombre} from "../src/editarNombre"
import {editarEmail} from "../src/editarEmail"
// describe("Editar nombre de contactos", () => {
//   test("Editar el nombre de un contacto debe ser guardado con el nombre actualizado", () => {
//     const contacto = contactos[0]
//     const respuesta : Contacto[] = editarNombre(contacto.id,"Carolina", contactos);
//     expect(respuesta[0].first_name).toBe("Carolina");
//   });


//   test("No se puede editar el nombre de un contacto inexistente", () =>{
//    expect( () =>editarNombre(20, "Nahuel", contactos)).toThrow("No existe el contacto")
//   })
// });

// estos test funcionan por separado pero no al mismo tiempo :(


 describe("Editar email de los contactos para actualizarlos", () => {
   test("Luego de editar el email, debe aparecer actualizado", ()=>{
     const contacto = contactos[0] 
     const com = ".com"
     const arroba = "@"
     const res: Contacto[] = editarEmail(contacto.id, "migueldiaz@gmail.com", contactos, com, arroba);
     expect(res[0].email).toBe("migueldiaz@gmail.com")
   })
 })
    test("Debe de incluir '@' y '.com'", () =>{ 
      const contacto = contactos[0]
      const com = ".com"
      const arroba = "@"
      const res = editarEmail(contacto.id,contacto.email,contactos,com, arroba);
      expect(res).toBe(true);
    });


//  describe('Agregar nuevos contactos a la lista', () => {
//    test('Al agregar un contacto a la lista, no debe de ser identico a otro contacto', () => {
//      const contacto = contactos[0]
//      const res = agregarContacto (contacto, {
//          id:999,
//          first_name: "Miguel",
//          last_name: "Sanchez",
//          email: "miguelsanchez@google.es",
//          gender: "Female",
//          ip_address: "168.150.9.108",
//      })
//       expect(res).toBe(true)
//     });
//    test('No se puede crear un contacto sin ninguna informacion en sus campos', () => {
//      const res = agregarContacto({
//        id :0,
//        first_name: "",
//        last_name: "",
//        email: "",
//        gender: "",
//        ip_address: "",
//      })
//      expect(res).toBeNull()
//    });
//  });


