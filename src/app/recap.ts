//Variables en TS
const username: string | number = "Abril";

//funcion flecha
const suma = (a: number, b:number)=>{
  return a + b;
}

//funcion flecha, llamado
suma(1, 2);

//Inicialización de clase
class Person {
  //encapsulamiento
  //private age:number;
  //lastName:string;

  //constructor //si pongo el alcance como parametro, la variable se crea y se autoasigna con el parametro
  constructor( private age:number,public lastName:string){}

  setage (age:number){
    this.age = age;
  }
}

//Instanciación
const abril = new Person(12,"Martinez");
abril.setage(22);

/*a las funciones tambien se les puede asignar el valor que devolverán desde
ellas mismas, poniendo el tipo de devolucion luego de los parámetros*/
const suma2 = ( a : number , b: number):number => a + b
const saludar = (nombre: string , edad: number ):string => `Hola me llamo ${nombre} y tengo ${edad} años`
