class Estudiante  {
    constructor( _name, _lastname, _enrollment, _email ){
        //atributtes
        this.name = _name;
        this.lastname = _lastname;
        this.enrollment =  _enrollment;
        this.email = _email;
    }
    //setters
    set Setname (name){
        this.name = name;
    }
    set Setlastname(lastname){
        this.lastname = lastname;
       }
    set Setenrollment(enrollment){
         this.enrollment = enrollment;
    }
    set Setemail(email){
        this.email = email;
    }

    // getters

    get nameStudent() {
        return console.log(`${this.name}`);
        
    }
    get lastnameStudent() {
        return console.log(`${this.lastname}`);
        
    }

    
    get enrollmentStudent(){
        return console.log(`${this.enrollment}`);
    }

    get emailStudent(){
        
        return console.log(`${this.email}`);
    }

    //metodos

    MostrarEstudiante(){
        console.log(` nombre del estudiante:${this.name}
 apellido del estudiante: ${this.lastname}
 matricula del estudiante: ${this.enrollment}
 Correo del estudiante: ${this.email}`);
        
    }

    Validacionmatricula(){
    console.log(`Hola soy ${this.name} ${this.lastname} y mi matricula es ${this.enrollment} `);
        
    }



    
}
   //declaracion de la nueva clase
class Validaciones extends Estudiante {
    constructor(name, lastname, enrollment, email, fullName){
        super(name, lastname, enrollment, email);
        this.fullName = fullName;
    }

    ValidacionMatricula(){
        if(this.ValidacionCorreo(this.email)){ //si la validacion del correo es true, ejecute la sentencia
            this.fullName= ` ${this.name} ${this.lastname}`;
            console.log(`matricula verificada para  ${this.fullName}`);
        }else{ // si la verificacion es incorrecta, mensaje de error
            console.log(`no fue posible validar la matricula del estudiante`);
            
        }
        
    }

    ValidacionCorreo(){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email)){  //comparacion entre regex y el correo
             console.log(`el correo ${this.email} es valido `);
             return true; // de  ser correcto retorna true
        }
        console.log(`el correo no cumple con los requisitos minimos de una dirección`);
        return false; // de ser falso retorna false y un aviso de error
    
    }
  


}


let estudiante = new Estudiante('Juan', 'Corredor', 124578, 'rexejej@gmail.com' );
estudiante.MostrarEstudiante();
estudiante.Validacionmatricula();
 let estudiante2 = new Validaciones('Carlos', 'Perez', 2323, 'jpcorredor1995@hotmail.com');
 estudiante2.ValidacionMatricula();
 estudiante2.MostrarEstudiante();








