function preload() {
  soundFormats ('mp3','ogg');
  song = loadSound ('/data/musica.mp3');
  
   imagenes[0] = loadImage('data/principal1.jpg'); //inicio
   imagenes[1] = loadImage('data/principal2.jpg'); //creditos
   imagenes[2] = loadImage('data/desaparicion3.jpg'); //los habitantes desaparecen
   imagenes[3] = loadImage('data/viaje1.jpg'); //viajan al bosque
   imagenes[4] = loadImage('data/pistas.jpg'); // encuentran una pista
   imagenes[5] = loadImage('data/bosque3.jpg'); // investigan solos
   imagenes[6] = loadImage('data/cueva3.jpg'); //encuentran una cueva
   imagenes[7] = loadImage('data/cueva1.jpg'); //lo enfrentan y mueren
   imagenes[8] = loadImage('data/bosque2.jpg'); // piden ayuda
   imagenes[9] = loadImage('data/auto1.jpg'); //encuentran pista en el auto
   imagenes[10] = loadImage('data/libros.jpg'); //consultan libros y descubren maquina
   imagenes[11] = loadImage('data/maquinatiempo1.jpg'); //encuentran la maquina
   imagenes[12] = loadImage('data/maquinatiempo3.jpg'); //destruyen la maquina
   imagenes[13] = loadImage('data/festejo.jpg'); //festejo
   imagenes[14] = loadImage('data/maquinatiempo2.jpg'); //usan la maquina
   imagenes[15] = loadImage('data/tds2.jpg'); //desaparicion del pueblo


 fuente1 = loadFont('data/Typewriter.ttf');
 
 
/* fuente2 = loadFont('data/fuente1.ttf');
 
textos = loadStrings('textos.txt');
listaDeTextos[0] = "Gravity Falls\nMenú principal"; 
listaDeTextos[1] = "Créditos\nGonzalez Victoria\nTenutto Lucila\nDirector: Alexander Robert Hirsch"; 
listaDeTextos[2] = "Los habitantes de Gravity Falls comenzaron a desaparecer";
listaDeTextos[3] = "Viajan al bosque en busca de respuestas";
listaDeTextos[4] = "Encuentran una pista que los guía a la verdad";
listaDeTextos[5] = "Investigan solos, el peligro aumenta";
listaDeTextos[6] = "Encuentran una cueva misteriosa...";
listaDeTextos[7] = "Lo enfrentan, pero no logran sobrevivir... FINAL1";
listaDeTextos[8] = "Piden ayuda a Soos y Wendy..";
listaDeTextos[9] = "Encuentran una pista en el auto de Soos"
listaDeTextos[10] = "Dipper consulta los 3 libros a la vez que revelan algo impactante.."
listaDeTextos[11] = "Deciden destruir la maquina"
listaDeTextos[12] = "Logran salvar al pueblo FINAL2"
listaDeTextos[13] = "Utilizan la maquina y algo ocurre";
listaDeTextos[14] = "Desaparece el pueblo entero excepto ellos FINAL3";

*/
}
