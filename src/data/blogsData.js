export const blogsData = [
  {
    id: "1",
    titulo: "CASO CURIOSO #1: La guitarra que sobrevivió a un incendio",
    resumen: "Descubre cómo logramos restaurar una Fender Stratocaster clásica después de un grave accidente en un estudio de grabación local. Un trabajo de luthería extrema.",
    fecha: "4 de Septiembre de 2026",
    autor: "Equipo de Luthería",
    imagen: "/img/blog/blog1.jpg",
    introduccion: "Hace unas semanas, recibimos en nuestro taller de Sonido Vivo uno de los desafíos más grandes de nuestra carrera. Un músico local nos trajo su preciada Fender Stratocaster clásica tras un accidente en su estudio de grabación.",
    secciones: [
      {
        subtitulo: "El diagnóstico inicial",
        contenido: "A simple vista, la situación era devastadora. El barniz estaba completamente derretido en el cuerpo, el mástil presentaba signos de carbonización leve y toda la electrónica interna estaba fundida. Sin embargo, al revisar la integridad estructural, el alma del mástil seguía intacta."
      },
      {
        subtitulo: "El proceso de restauración",
        contenido: "El trabajo consistió en tres etapas fundamentales:",
        lista: [
          { negrita: "Decapado y lijado:", texto: " Tuvimos que retirar toda la capa quemada respetando la madera original." },
          { negrita: "Reemplazo electrónico:", texto: " Instalamos nuevas pastillas (cápsulas) y cableado respetando el diagrama clásico de Fender." },
          { negrita: "Acabado:", texto: " Aplicamos un acabado 'Relic' para no ocultar su historia, sellando la madera para protegerla." }
        ]
      }
    ],
    conclusion: "Hoy, esta guitarra no solo volvió a sonar, sino que tiene una resonancia única y una historia increíble que contar en cada acorde."
  },
  {
    id: "2",
    titulo: "CASO CURIOSO #2: El mito de las maderas pesadas",
    resumen: "¿Es cierto que un bajo más pesado suena mejor? Analizamos las frecuencias y el sustain de distintas maderas para desmitificar esta creencia popular entre los bajistas.",
    fecha: "5 de Septiembre de 2026",
    autor: "Equipo de Acústica",
    imagen: "/img/blog/blog2.jpg",
    introduccion: "En el mundo de los bajistas, existe una creencia que ha pasado de generación en generación: 'Mientras más pesado sea el bajo, mejor será su sustain y más profundos sus graves'. En Sonido Vivo decidimos poner a prueba esta vieja leyenda de la luthería.",
    secciones: [
      {
        subtitulo: "El experimento de las frecuencias",
        contenido: "Para salir de dudas, armamos tres cuerpos de bajo idénticos en dimensiones, pero utilizando distintas maderas: Fresno de pantano (muy ligero), Aliso (peso medio) y Caoba densa (muy pesado). Utilizamos el mismo mástil, las mismas cuerdas y la misma electrónica intercambiable para grabar las frecuencias en el estudio."
      },
      {
        subtitulo: "Los sorprendentes resultados",
        contenido: "Al analizar los espectrogramas de audio, descubrimos lo siguiente:",
        lista: [
          { negrita: "El mito del Sustain:", texto: " El bajo de caoba (el más pesado) tuvo un sustain marginalmente mayor, pero la diferencia fue casi imperceptible al oído humano (menos del 2%)." },
          { negrita: "Frecuencias graves:", texto: " Sorprendentemente, el bajo de aliso (peso medio) entregó una respuesta de graves mucho más cálida y definida que la caoba." },
          { negrita: "Comodidad vs Sonido:", texto: " El fresno ligero demostró que se puede tener un tono contundente, con mucho 'punch', sin destrozar la espalda del músico tras dos horas de show." }
        ]
      }
    ],
    conclusion: "Conclusión: El peso no es un indicador definitivo de calidad o de un mejor tono. La vibración depende más de la estructura de las vetas de la madera, la unión del mástil con el cuerpo y la calidad del hardware. ¡Así que no temas elegir un instrumento ligero!"
  }
];