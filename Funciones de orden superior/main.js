//EJERCICIO Nº1
const alumnos = [
{ nombre: "Lucía", nota: 8 },
{ nombre: "Mateo", nota: 5 },
{ nombre: "Sofía", nota: 9 },
{ nombre: "Juan", nota: 6 },
{ nombre: "Martina", nota: 4 }
];
const nombresAlumnos = alumnos.map(alumno => alumno.nombre);
console.log("Nombres de los alumnos:", nombresAlumnos);

const alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 6);
console.log("Alumnos aprobados:", alumnosAprobados);
const alumnoReact = alumnos.find((el) => el.nombre === "Sofía");
    console.log("Alumna:", alumnoReact);    

const sortAlumnosAprobados = alumnosAprobados.sort((a, b) => a.nota - b.nota);
console.log("Alumnos aprobados ordenados:", sortAlumnosAprobados);



//EJERCICIO Nº2
const productos = [
{ nombre: "Mouse", precio: 15000, stock: 12 },
{ nombre: "Teclado", precio: 28000, stock: 5 },
{ nombre: "Monitor", precio: 180000, stock: 3 },
{ nombre: "Auriculares", precio: 45000, stock: 0 },
{ nombre: "Webcam", precio: 55000, stock: 8 }
];
const nombresdeproductos = productos.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresdeproductos);
const productosDisponibles = productos.filter(producto => producto.stock > 0);
console.log("Productos disponibles:", productosDisponibles);
const productoReact = productos.find((el) => el.nombre === "Monitor");
console.log("Producto:", productoReact);
const sortProductosDisponibles = productosDisponibles.sort((a, b) => b.precio - a.precio);
console.log("Productos disponibles ordenados:", sortProductosDisponibles);


const actualizado = productos.map((el) => {
return {
nombre: el.nombre,
precio: el.precio - el.precio * 0.10
}   
})
console.log("Productos con descuento del 10%:", actualizado);



//EJERCICIO Nº3
const peliculas = [
{ titulo: "Matrix", genero: "Ciencia ficción", anio: 1999,
puntuacion: 8.7 },
{ titulo: "Toy Story", genero: "Animación", anio: 1995, puntuacion:
8.3 },
{ titulo: "Interestelar", genero: "Ciencia ficción", anio: 2014,
puntuacion: 8.6 },
{ titulo: "Shrek", genero: "Animación", anio: 2001, puntuacion: 7.9
},
{ titulo: "El Padrino", genero: "Drama", anio: 1972, puntuacion: 9.2
}
];
const titulosPeliculas = peliculas.map(pelicula => pelicula.titulo);
console.log("Títulos de las películas:", titulosPeliculas);
const peliculasCienciaFiccion = peliculas.filter(pelicula => pelicula.genero === "Ciencia ficción");
console.log("Películas de ciencia ficción:", peliculasCienciaFiccion);
const buscarPorGenero = (genero) => {
    return peliculas.filter(pelicula => pelicula.genero === genero);
};
console.log("Películas de animación:", buscarPorGenero("Animación"));
const peliculasOrdenadas = peliculas.sort((a, b) => b.puntuacion - a.puntuacion);
console.log("Películas ordenadas por puntuación:", peliculasOrdenadas);
const peliculas2000 = peliculas.filter(pelicula => pelicula.anio >= 2000);
console.log("Películas estrenadas a partir del año 2000:", peliculas2000);



//EJERCICIO Nº4
const jugadores = [
{ nombre: "Messi", edad: 39, goles: 25, posicion: "Delantero" },
{ nombre: "Martínez", edad: 29, goles: 21, posicion: "Delantero" },
{ nombre: "De Paul", edad: 32, goles: 4, posicion: "Mediocampista" },
{ nombre: "Romero", edad: 28, goles: 2, posicion: "Defensor" },
{ nombre: "Alvarez", edad: 26, goles: 18, posicion: "Delantero" }
];
const jugadores15goles = jugadores.filter(jugador => jugador.goles > 15);
console.log("Jugadores con más de 15 goles:", jugadores15goles);
const jugadorReact = jugadores.find((el) => el.nombre === "Romero");
console.log("Jugador:", jugadorReact);
const jugadoresOrdenados = jugadores.sort((a, b) => b.goles - a.goles);
console.log("Jugadores ordenados por goles:", jugadoresOrdenados);
const delanteros = jugadores.filter(jugador => jugador.posicion === "Delantero");
console.log("Delanteros:", delanteros);



//EJERCICIO Nº5
const Alumnos = [
{ nombre: "Ana", edad: 17, curso: "6A", promedio: 8.5 },
{ nombre: "Pedro", edad: 18, curso: "6B", promedio: 6.2 },
{ nombre: "Lucía", edad: 17, curso: "6A", promedio: 9.1 },
{ nombre: "Marcos", edad: 18, curso: "6B", promedio: 5.4 },
{ nombre: "Carla", edad: 17, curso: "6A", promedio: 7.8 },
{ nombre: "Tomás", edad: 18, curso: "6B", promedio: 9.4 }
];
const nombresAlumnos2 = Alumnos.map(alumno => alumno.nombre);
console.log("Nombres de los alumnos:", nombresAlumnos2);
const promedio = Alumnos.filter(alumno => alumno.promedio >= 7);
console.log("Alumnos con promedio mayor o igual a 7:", promedio);
const alumno = Alumnos.find((el) => el.nombre === "Tomás");
console.log("Alumno:", alumno);
const alumnosOrdenados = Alumnos.sort((a, b) => b.promedio - a.promedio);
console.log("Alumnos ordenados por promedio:", alumnosOrdenados);
const alumnos6A = Alumnos.filter(alumno => alumno.curso === "6A");
console.log("Alumnos del curso 6A:", alumnos6A);

const alumnosDestacados = () => {
    return Alumnos
    .filter(alumno => alumno.promedio >= 8)
    .sort((a, b) => b.promedio - a.promedio)
    
};