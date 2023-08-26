import {Contacto, contactos} from "../src/contactos"
import {editarNombre} from "../src/editarNombre"
import {editarEmail} from "../src/editarEmail"
import {agregarContacto} from "../src/agregarContacto"


 describe("Editar nombre de contactos", () => {
   test("Editar el nombre de un contacto debe ser guardado con el nombre actualizado", () => {
     const contacto = contactos[0]
      const respuesta : Contacto[] = editarNombre(contacto.id,"Carolina", contactos);
     expect(respuesta[0].first_name).toBe("Carolina");
   });


  test("No se puede editar el nombre de un contacto inexistente", () =>{   
     expect( () =>editarNombre(20, "Nahuel", contactos)).toThrow("No existe el contacto")
   })
 });


 describe("Editar email de los contactos para actualizarlos", () => {
   test("Luego de editar el email, debe aparecer actualizado", ()=>{
     const contacto = contactos[0] 
     const res: Contacto[] = editarEmail(contacto.id, "migueldiaz@gmail.com", contactos);
     expect(res[0].email).toBe("migueldiaz@gmail.com")
   })

   test("Luego de editar el email, debe aparecer actualizado", ()=>{
    
    const contactos_to_test = [contactos[0] ]
    const res: Contacto[] = editarEmail(5, "migueldiaz@gmail.com", contactos);
    expect(res[0].email).not.toBe("migueldiaz@gmail.com")
  })
 
  
 })
    


  describe('Agregar nuevos contactos a la lista', () => {
    test('Al agregar un contacto a la lista, no debe de ser identico a otro contacto', () => {
      const contacto = contactos[0]
      const res = agregarContacto (contacto, {
          id:999,
          first_name: "Miguel",
          last_name: "Sanchez",
          email: "miguelsanchez@google.es",
          gender: "Female",
          ip_address: "168.150.9.108",
      })
       expect(res).toBe(false)
     });

    test('No se puede crear un contacto sin ninguna informacion en sus campos', () => {
      const res = agregarContacto({
        id :0,
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        ip_address: "",
      })
      expect(res).toBeNull()
    });
  });


