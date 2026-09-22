/* Guiones · Impermeabilización Elástica Solmi (21/09/2026, versión 2: recortados y aptos para publicidad;
   22/09/2026: se suman la fila 05, la temporada del Niño, y los carruseles C4 y C5).
   Cada dato sale del folleto de la empresa, de lo que contestó en el formulario o de lo que dijo Víctor.
   Beat: [tiempo, quién, qué se ve, texto]. El texto se puede cambiar en la página; lo que va [entre corchetes]
   se completa en la obra con el dato real. */
window.GUIONES = {
  titulo: "Techos: los primeros videos y carruseles",
  intro: [
    "Todo apunta a impermeabilizar techos. Cada fila es uno de los cuatro formatos de la propuesta: a la izquierda, el video de ejemplo; a la derecha, sus guiones. Más abajo, los carruseles y el perfil.",
    "Nuevo: la fila 05 y los carruseles C4 y C5 apuntan a la temporada del Niño. Conviene publicarlos antes de las tormentas fuertes.",
    "Cada pieza sirve también como anuncio: se entiende sin sonido, dice una sola cosa y termina en WhatsApp.",
    "Los textos se pueden cambiar: tocá cualquiera. Lo que cambiás queda en naranja y «Volver al original» lo deshace. Cuando termines, tocá «Enviar»."
  ],
  reglas: [
    "Sin precios.",
    "Se habla de la membrana como método, nunca de otra empresa.",
    "Ni plazos ni garantías hasta que Solmi los defina.",
    "Cómo actúa el producto lo confirma Solmi antes de publicar.",
    "Entre 15 y 35 segundos, con el texto en pantalla."
  ],
  falta: [
    "Quién habla a cámara en los formatos 01 y 02.",
    "El WhatsApp que se publica: el 7352 es el mismo del estudio jurídico.",
    "Permiso para nombrar a Cementos Avellaneda, Editorial Perfil, Molinos Cañuelas y Multigranos.",
    "Las fotos originales: las del folleto miden 230 píxeles.",
    "Un papel que muestre el 1889.",
    "La próxima obra para filmar.",
    "Las piezas del Niño: chequear el pronóstico del Servicio Meteorológico la semana que se publica cada una."
  ],
  refs: [
    {
      n: 1, id: "DMI8tnVBJHK",
      formato: "El paso a paso en el techo",
      resumen: "Alguien de Solmi en el techo muestra la falla y la arregla, etapa por etapa, hablándole a cámara",
      cuenta: "@juve3dstudio", datos: "80.728 me gusta",
      tags: ["En el techo", "Etapa por etapa", "Habla a cámara"],
      mecanica: [
        "Arranca con la falla a la vista: el que tiene la misma en su casa se queda.",
        "Cada etapa dura pocos segundos y cambia la imagen.",
        "Termina con el techo listo: el final es la prueba."
      ],
      guiones: [
        {
          v: "A", tipo: "Idea tuya · fijado «Cómo trabajamos»",
          titulo: "Así es como impermeabilizamos tu techo, paso a paso",
          hooks: [
            ["Pregunta inducida", "¿Cómo se arregla un techo con humedad sin romperlo?"],
            ["Vulnerabilidad", "Si ya arreglaste el techo y volvió a filtrar, mirá cómo lo hacemos nosotros."],
            ["Impacto visual", "[Sin hablar] Un balde en el medio del living, y una gota que cae adentro. Corte al techo."],
            ["Advertencia", "Esa mancha en el techo no se va sola."],
            ["Pregunta inducida", "¿Ves esta mancha? Mirá qué hacemos con ella."],
            ["Impacto visual", "[Sin hablar] La mancha del techo, de cerca. Una mano la toca y está húmeda."],
            ["Provocación", "Tu techo tiene humedad y vos le pusiste un balde abajo."],
            ["Pregunta inducida", "¿Por qué aparece esta mancha cada vez que llueve?"],
            ["Advertencia", "Si tu techo tiene una mancha así, mirá cómo se arregla antes de llamar a un albañil.", "Ojo: no puede sonar a crítica de los albañiles."],
            ["Vulnerabilidad", "¿Cuántas veces arreglaste el mismo techo?"],
            ["Caso real", "Obra de hoy en [lugar]. Humedad en el techo. Mirá lo que hacemos.", "Poné el lugar real de la obra."],
            ["Impacto visual", "[Sin hablar] Una grieta en el techo, de cerca, y el agua corriendo hacia ella con la manguera.", "Ojo: mojar la grieta a propósito en una obra real."],
            ["Pregunta inducida", "¿Te cae agua del techo cuando llueve fuerte?"],
            ["Provocación", "¿Seguís con el balde abajo de la gotera?"],
            ["Transformación", "Paso a paso: de techo con humedad a techo arreglado."],
            ["Lista", "Los pasos en tu techo, uno por uno."],
            ["Impacto visual", "[Sin hablar] Alguien de Solmi sube la escalera con el envase en la mano. Corte: la mancha del techo."],
            ["Pregunta inducida", "¿Qué hacemos cuando subimos a tu techo?"],
            ["Advertencia", "Antes de que llueva de nuevo, fijate si tu techo tiene esta mancha."],
            ["Error", "Muchos esperan a que el agua entre a la casa para mirar el techo."],
            ["Impacto visual", "[Sin hablar] Una mancha marrón en el cielorraso de un cuarto de chicos. Corte al techo, desde arriba."]
          ],
          angulo: "Una obra real, contada mientras pasa.",
          dur: "≈30 s",
          hook: { quien: "Habla", dice: "Así es como impermeabilizamos tu techo, paso a paso.", placa: "Así impermeabilizamos tu techo · paso a paso" },
          beats: [
            ["0:03", "Habla", "La mancha o la grieta.", "Este techo tiene humedad."],
            ["0:06", "Habla", "Vos en el techo, sin herramientas de albañil.", "No lo vamos a romper: sin albañiles, sin polvo, sin membrana."],
            ["0:11", "Habla", "El envase, en la mano.", "Usamos nuestro producto: lo fabricamos nosotros."],
            ["0:15", "Habla", "Primer plano de la aplicación.", "Entra en el techo mojándolo, como el agua."],
            ["0:20", "Habla", "Detalle, de cerca.", "En segundos se hace un gel elástico y lo sella por dentro."],
            ["0:25", "Habla", "El techo terminado.", "Así queda."]
          ],
          cta: "¿Humedad en el techo? Escribinos por WhatsApp.",
          confirmar: "¿El paso a paso es así en obra, o hay algo antes de aplicar que convenga mostrar? ¿Y quién habla?"
        },
        {
          v: "B", tipo: "Techo de chapa",
          titulo: "Un techo de chapa oxidado se recupera sin cambiar las chapas",
          hooks: [
            ["Pregunta inducida", "¿Hay que cambiar todas las chapas si el techo está oxidado?"],
            ["Advertencia", "Antes de cambiar todas las chapas, fijate en este techo."],
            ["Impacto visual", "[Sin hablar] Una chapa oxidada, de cerca. Una mano pasa el dedo y queda naranja."],
            ["Provocación", "¿Vas a tirar las chapas por un poco de óxido?"],
            ["Pregunta inducida", "¿Tu techo de chapa está así?"],
            ["Pregunta inducida", "¿Tiene arreglo un techo de chapa así de oxidado?"],
            ["Contracorriente", "Techo de chapa oxidado no quiere decir techo nuevo."],
            ["Impacto visual", "[Sin hablar] Un techo de chapa naranja de óxido, desde arriba, con el sol pegando."],
            ["Caso real", "Techo de chapa en [lugar]. Así estaba cuando llegamos.", "Poné el lugar real de la obra."],
            ["Provocación", "Tu techo de chapa no está para tirar."],
            ["Secreto", "Qué hacemos con un techo de chapa oxidado antes de pensar en cambiarlo."],
            ["Impacto visual", "[Sin hablar] Una gota de agua que cae de un agujerito de óxido, adentro de un galpón."],
            ["Vulnerabilidad", "¿Te dijeron que había que cambiar todo el techo de chapa?", "Ojo: no puede sonar a crítica de otros."],
            ["Error", "Muchos cambian el techo de chapa sin preguntar si se puede recuperar."],
            ["Provocación", "Ese óxido no es el final de tu techo."],
            ["Pregunta inducida", "¿Galpón, quincho o casa con techo de chapa oxidado?"],
            ["Advertencia", "Antes de tirar las chapas viejas, preguntá."],
            ["Contracorriente", "Un techo viejo de chapa no es un techo perdido."]
          ],
          angulo: "Recuperar en vez de reemplazar, sin nombrar un precio.",
          dur: "≈25 s",
          hook: { quien: "Habla", dice: "Un techo de chapa oxidado no se cambia. Se recupera.", placa: "No cambies el techo de chapa: recuperalo" },
          beats: [
            ["0:03", "Habla", "El óxido, de cerca.", "Primero, reparamos lo que haga falta."],
            ["0:08", "Habla", "El tratamiento sobre la chapa.", "Después frenamos el óxido que ya tiene."],
            ["0:13", "Habla", "La plastificación, de cerca.", "Y lo protegemos con plastificación elástica, que copia la forma de la chapa."],
            ["0:20", "Habla", "El techo terminado, mismo encuadre que al principio.", "Mismas chapas. Techo recuperado."]
          ],
          cta: "¿Tu techo de chapa está así? Escribinos por WhatsApp.",
          confirmar: "¿Los pasos van en este orden en cada obra?"
        }
      ]
    },
    {
      n: 2, id: "DZGVdSgy6wa",
      formato: "La recorrida",
      resumen: "Alguien de Solmi camina el lugar y cuenta dónde están y qué hacen",
      cuenta: "@revestechargentina", datos: "aplicador, Argentina",
      tags: ["Caminando", "Lugar en pantalla", "Datos concretos"],
      mecanica: [
        "Abre diciendo dónde están.",
        "Da datos concretos: qué se hace, dónde, cuánto.",
        "Cierra en una frase corta."
      ],
      guiones: [
        {
          v: "A", tipo: "Idea tuya · fijado «Quiénes somos»",
          titulo: "Una empresa familiar desde 1889, y al alcance tuyo",
          hooks: [
            ["Número específico", "137 años en el mismo lugar.", "1889 → 2026. Confirmar con el papel que muestre 1889."],
            ["Pregunta inducida", "¿Qué hacía mi familia en este lugar en 1889?"],
            ["Contracorriente", "No empezamos arreglando techos. Empezamos haciendo carruajes."],
            ["Secreto", "Lo que se hacía en este lugar de San Pedro hace más de cien años."],
            ["Advertencia", "Antes de elegir quién arregla tu techo, conocé quiénes somos."],
            ["Impacto visual", "[Sin hablar] Una foto vieja del lugar en 1889, y al lado el mismo lugar hoy.", "Solo si existe la foto."],
            ["Contraste", "Mi tatarabuelo hacía carruajes acá. Yo arreglo techos.", "Ajustá el parentesco real."],
            ["Transformación", "1889: carruajes. Hoy: techos."],
            ["Secreto", "La historia detrás de la empresa que te arregla el techo."],
            ["Impacto visual", "[Sin hablar] Una mano abre el candado del portón. Adentro, el taller."],
            ["Número específico", "Seis generaciones en San Pedro."],
            ["Contracorriente", "Una empresa que existe desde 1889 no es solo para grandes obras."],
            ["Pregunta inducida", "¿Qué tiene que ver una herrería de carruajes con tu techo?"],
            ["Vulnerabilidad", "Mi familia está acá desde 1889. Te muestro dónde."],
            ["Provocación", "Tenemos 137 años y seguimos haciendo el producto nosotros.", "Confirmar 1889."],
            ["Pregunta inducida", "¿Una empresa de 1889 arregla el techo de una casa común?"],
            ["Contracorriente", "Una empresa antigua no tiene que ser lejana."],
            ["Transformación", "Mismo lugar, mismo apellido, otro oficio."],
            ["Pregunta inducida", "¿Qué empresa de San Pedro lleva el mismo apellido desde 1889?"]
          ],
          angulo: "La presentación, caminando Mitre 2250.",
          dur: "≈30 s",
          hook: { quien: "Habla", dice: "Una empresa familiar desde 1889. Y al alcance tuyo.", placa: "Impermeabilización Elástica Solmi · desde 1889" },
          beats: [
            ["0:04", "Habla", "El portón de Mitre 2250.", "En este lugar de San Pedro mi familia tenía una herrería de carruajes. Seis generaciones después, seguimos acá."],
            ["0:13", "Habla", "Donde se prepara el producto.", "Hoy impermeabilizamos techos, con un producto que fabricamos y aplicamos nosotros."],
            ["0:20", "Habla", "Fotos de obra, una detrás de otra.", "Trabajamos en todo el país: fábricas, hoteles, edificios y casas."]
          ],
          cta: "¿Humedad en el techo? Escribinos por WhatsApp.",
          confirmar: "Tu frase decía «la empresa de impermeabilizantes más antigua del país». No se puede comprobar: en 1889 la familia hacía carruajes, y la empresa familiar más antigua del país es de 1838. Si tienen cómo probarla, vuelve. ¿Se puede filmar dónde preparan el producto?"
        }
      ]
    },
    {
      n: 3, id: "C90njrpxSvN",
      formato: "La obra con voz en off",
      resumen: "Imágenes de obra y una voz que explica, con el texto en pantalla. Nadie sale en cámara",
      cuenta: "@revestechargentina", datos: "3.769 me gusta",
      tags: ["Nadie en cámara", "Voz grabada aparte", "Uno, dos, tres"],
      mecanica: [
        "Abre con una pregunta a la que el que mira contesta que sí.",
        "Enumera: primero, segundo, tercero. La cuenta hace que se quede.",
        "Se filma la obra y la voz se graba aparte, con el celular."
      ],
      guiones: [
        {
          v: "A", tipo: "El diferencial · fijado «Qué nos diferencia»",
          titulo: "El producto lo hacemos y lo aplicamos nosotros",
          hooks: [
            ["Pregunta inducida", "¿Quién hizo el producto que te pusieron en el techo?"],
            ["Lista", "Tres hechos que nos diferencian. Ninguno es una promesa."],
            ["Advertencia", "Antes de que alguien suba a tu techo, hacele una pregunta."],
            ["Vulnerabilidad", "Si ya te prometieron un techo sin goteras y volvió a gotear, fijate cómo trabajamos."],
            ["Impacto visual", "[Sin hablar] Una promesa escrita en un papel: «NO FILTRA MÁS». Alguien la tacha. Corte a un techo terminado.", "Ojo: el papel no puede ser de otra empresa."],
            ["Provocación", "Las promesas no tapan goteras."],
            ["Contraste", "Promesas o techos terminados. ¿Qué preferís ver?"],
            ["Error", "Mucha gente elige al que arregla el techo sin saber qué le van a poner."],
            ["Pregunta inducida", "¿Por qué te importaría quién fabricó lo que tenés en el techo?"],
            ["Contracorriente", "Menos palabras, más techos terminados."],
            ["Advertencia", "Si nadie te sabe decir qué te pusieron en el techo, desconfiá."],
            ["Secreto", "Lo que hacemos distinto se ve en el techo, no en la publicidad."],
            ["Pregunta inducida", "¿Qué es lo primero que mirás cuando alguien te ofrece arreglar el techo?"]
          ],
          angulo: "Tres hechos, sin adjetivos.",
          dur: "≈25 s",
          hook: { quien: "Voz", dice: "Seguro ya te prometieron que tu techo no iba a filtrar más. Nosotros preferimos mostrártelo.", placa: "Lo que nos diferencia" },
          beats: [
            ["0:05", "Voz", "El producto en el taller.", "Uno: el producto lo fabricamos nosotros."],
            ["0:09", "Voz", "El mismo producto, en el techo.", "Dos: lo aplicamos nosotros. De la fábrica a tu techo, sin intermediarios."],
            ["0:15", "Voz", "El frente de Mitre 2250.", "Tres: somos la misma familia desde 1889."],
            ["0:20", "Voz", "Un techo terminado.", "No te prometemos de más. Te mostramos la obra."]
          ],
          cta: "Escribinos por WhatsApp y mirá cómo trabajamos.",
          confirmar: "¿Hablamos de garantía o todavía no?"
        },
        {
          v: "B", tipo: "Por qué falló lo anterior",
          titulo: "Por qué tu techo sigue filtrando aunque le pusiste membrana",
          hooks: [
            ["Vulnerabilidad", "Si ya le pusiste membrana al techo y volvió a filtrar, no pases de largo."],
            ["Impacto visual", "[Sin hablar] Un corte del techo con capas de membrana una arriba de otra, como una torta.", "Ojo: se necesita una foto real del corte."],
            ["Advertencia", "Antes de ponerle otra membrana al techo, esperá."],
            ["Provocación", "¿Cuántas membranas le pusiste ya a tu techo?"],
            ["Pregunta inducida", "¿Le pusiste membrana nueva y a la primera lluvia volvió la gotera?"],
            ["Impacto visual", "[Sin hablar] Rollos de membrana nuevos en la vereda y una gotera cayendo adentro."],
            ["Número específico", "Una membrana. Dos. Tres. Y la gotera sigue ahí."],
            ["Impacto visual", "[Sin hablar] Una mano levanta una punta de membrana vieja y abajo hay agua.", "Ojo: solo si se ve en una obra real."],
            ["Pregunta inducida", "¿Por qué vuelve la humedad al techo si lo arreglaste hace poco?"],
            ["Pregunta inducida", "¿Cada vez que llueve fuerte, volvés a mirar el techo?"],
            ["Provocación", "Si tu techo parece una torta de membranas, frená acá."],
            ["Vulnerabilidad", "¿Ya no sabés qué ponerle al techo para que deje de filtrar?"],
            ["Impacto visual", "[Sin hablar] Un balde abajo de una gotera, y arriba, en el techo, una membrana nueva y brillante."],
            ["Pregunta inducida", "¿Otra membrana más? Esperá."],
            ["Número específico", "¿Cuántas veces arreglaste la misma gotera?"]
          ],
          angulo: "Para el que ya probó algo y le volvió a filtrar.",
          dur: "≈25 s",
          hook: { quien: "Voz", dice: "¿Por qué tu techo sigue filtrando aunque le pusiste membrana?", placa: "¿Le pusiste membrana y sigue filtrando?" },
          beats: [
            ["0:04", "Voz", "Capas de membrana, una arriba de la otra.", "Cada vez que filtra, otra membrana arriba. Las capas se acumulan y el agua sigue entrando."],
            ["0:11", "Voz", "La aplicación del producto.", "Nuestro producto no es una membrana: entra en el techo y lo sella por dentro."],
            ["0:18", "Voz", "Un techo terminado.", "Y las membranas viejas no hace falta sacarlas."]
          ],
          cta: "¿Te pasa? Escribinos por WhatsApp.",
          confirmar: "¿Las membranas viejas nunca hace falta sacarlas, o depende del techo?"
        }
      ]
    },
    {
      n: 4, id: "DbTIooilYK_",
      formato: "La pieza animada",
      resumen: "Fotos de obra con la gráfica de la marca y una voz que lee. Se arma en edición, sin filmar",
      cuenta: "@kartonsec", datos: "fabricante, Argentina",
      tags: ["Frase fuerte", "Fotos con gráfica", "Sin filmar"],
      mecanica: [
        "Arranca con una frase que cualquiera reconoce.",
        "Las imágenes pasan rápido, con texto encima: se entiende sin audio.",
        "Alcanza con fotos de obra y una voz."
      ],
      guiones: [
        {
          v: "A", tipo: "Antes de las lluvias",
          titulo: "La humedad no avisa",
          hooks: [
            ["Pregunta inducida", "¿Tu techo aguanta la próxima lluvia?"],
            ["Impacto visual", "[Placa] Un cielo que se nubla sobre un techo. Texto: «¿Y tu techo?»"],
            ["Error", "Esperar a que llueva para mirar el techo."],
            ["Secreto", "Lo que tu techo no te muestra hasta que llueve."],
            ["Contraste", "Mirar el techo antes de la lluvia, o con el balde abajo."],
            ["Predicción", "Se vienen las lluvias. ¿Tu techo está listo?", "Publicar antes de la temporada de lluvias."],
            ["Lista", "Manchas, grietas, goteras. Revisá tu techo."],
            ["Impacto visual", "[Placa] Foto de un techo de obra con un balde abajo. Texto: «Esto se ve recién cuando llueve.»"],
            ["Pregunta inducida", "¿Cuándo fue la última vez que miraste tu techo?"],
            ["Provocación", "El pronóstico dice lluvia. ¿Y tu techo qué dice?"],
            ["Vulnerabilidad", "¿Te acordás de la última gotera?"],
            ["Impacto visual", "[Placa] Un balde en el medio del living, animado, que se llena. Texto: «¿Otra vez?»"],
            ["Advertencia", "Antes de la próxima tormenta, mirá arriba."],
            ["Secreto", "La humedad empieza donde no mirás: arriba."],
            ["Contraste", "Arreglarlo con sol o arreglarlo con balde."],
            ["Provocación", "Tu techo no te va a mandar un mensaje."],
            ["Advertencia", "Si tu techo nunca lo revisó nadie, es momento."],
            ["Vulnerabilidad", "La gotera siempre aparece en el peor momento."],
            ["Pregunta inducida", "¿Otra lluvia más con el balde abajo?"]
          ],
          angulo: "Se puede publicar ya, con fotos de archivo.",
          dur: "≈15 s",
          hook: { quien: "Voz", dice: "La humedad en el techo no avisa. Aparece cuando llueve.", placa: "La humedad no avisa" },
          beats: [
            ["0:04", "Voz", "Fotos de techos de obra.", "Revisá tu techo antes de que lleguen las lluvias."],
            ["0:08", "Voz", "Foto de una aplicación.", "Lo impermeabilizamos sin romperlo."],
            ["0:12", "Texto", "Placa final: logo y «Desde 1889».", "Impermeabilización Elástica Solmi. Desde 1889."]
          ],
          cta: "Escribinos por WhatsApp."
        },
        {
          v: "B", tipo: "Recuperar en vez de cambiar",
          titulo: "No cambies el techo de chapa: recuperalo",
          hooks: [
            ["Transformación", "Antes. Después. Sin cambiar las chapas."],
            ["Impacto visual", "[Placa] Chapa oxidada que se desliza y se vuelve chapa recuperada, en la misma foto."],
            ["Pregunta inducida", "¿Techo de chapa oxidado? No lo tires."],
            ["Error", "Cambiar las chapas por un poco de óxido."],
            ["Secreto", "Este techo de chapa no se cambió."],
            ["Provocación", "¿Todavía pensás en cambiar el techo de chapa?"],
            ["Advertencia", "Antes de tirar las chapas, mirá estas tres."],
            ["Número específico", "Tres techos de chapa. Ninguno se cambió.", "Son los tres antes y después del folleto."],
            ["Impacto visual", "[Placa] Tres fotos de «antes» que se dan vuelta como cartas, una por una."],
            ["Pregunta inducida", "¿Se puede recuperar un techo de chapa así?"],
            ["Contracorriente", "Chapa oxidada no es chapa perdida."],
            ["Pregunta inducida", "¿Galpón, quincho o casa? Si el techo de chapa tiene óxido, mirá."],
            ["Lista", "Galpones, casas, fábricas. Mismas chapas, recuperadas.", "Solo con obras reales de cada tipo."],
            ["Contracorriente", "Tu techo de chapa tiene arreglo."],
            ["Secreto", "¿Cuál de estas fotos es el antes?"],
            ["Vulnerabilidad", "¿Ya te dijeron que había que cambiar todo el techo?", "Ojo: no puede sonar a crítica de otros."],
            ["Impacto visual", "[Placa] Primer plano de óxido que se va alejando hasta mostrar el techo entero."],
            ["Transformación", "Un techo de chapa. Dos fotos. Adiviná cuál es la de hoy."],
            ["Pregunta inducida", "¿Tu techo de chapa se ve así?"],
            ["Provocación", "No tires el techo. Tirá el óxido."]
          ],
          angulo: "Los antes y después del folleto, animados. Se puede armar ya.",
          dur: "≈15 s",
          hook: { quien: "Voz", dice: "No cambies el techo de chapa. Recuperalo.", placa: "Antes / después" },
          beats: [
            ["0:03", "Voz", "Antes y después 1 y 2.", "Frenamos el óxido y lo protegemos con plastificación elástica."],
            ["0:09", "Voz", "Antes y después 3.", "Sin cambiar las chapas."],
            ["0:12", "Texto", "Placa final: logo y «Desde 1889».", "Impermeabilización Elástica Solmi. Desde 1889."]
          ],
          cta: "Escribinos por WhatsApp.",
          confirmar: "¿Tienen estas fotos en tamaño original?"
        }
      ]
    },
    {
      n: 5, id: "DdUkouxAQVt",
      formato: "La temporada del Niño",
      resumen: "Tres piezas para las semanas antes de las tormentas: la noticia que todos vieron, llevada a qué hacer con el techo",
      cuenta: "@kartonsec", datos: "19 me gusta · 15/09/2026",
      titMec: "Qué tomamos y qué mejoramos",
      tags: ["Noticia del clima", "Antes de las tormentas", "Algo para hacer hoy"],
      mecanica: [
        "Tomamos: la noticia del Niño como gancho. La gente ya la vio en el noticiero y la reconoce en un segundo.",
        "Mejoramos el dato: Kartonsec dice que la ONU avisó que «será el más fuerte que se haya registrado». Eso no lo dijo nadie: la Organización Meteorológica Mundial habla de un Niño «fuerte». Nosotros citamos al Servicio Meteorológico Nacional y no inflamos.",
        "Mejoramos el final: ellos cierran en su producto, con fotos de catálogo. Nosotros le damos al que mira algo para revisar hoy en su techo, con obras reales, y recién ahí el WhatsApp."
      ],
      guiones: [
        {
          v: "A", tipo: "Pieza animada · se publica ya",
          titulo: "El Niño ya está acá. ¿Y tu techo?",
          hooks: [
            ["Pregunta inducida", "Seguro escuchaste que llegó el Niño. ¿Qué tiene que ver con tu techo?"],
            ["Impacto visual", "[Placa] El mapa del pronóstico del Servicio Meteorológico, y encima un balde. Texto: «¿Y tu techo?»"],
            ["Predicción", "Lo dijo el Servicio Meteorológico: el Niño sigue hasta el verano. Tu techo, ¿llega?", "Chequear el pronóstico vigente la semana que se publica."],
            ["Contraste", "El pronóstico lo mirás todos los días. El techo, ¿cuándo lo miraste?"],
            ["Advertencia", "Antes de la próxima tormenta, mirá arriba."],
            ["Provocación", "El Niño no te va a avisar por dónde entra el agua."],
            ["Contraste", "Arreglar el techo con sol, o con el balde abajo."],
            ["Pregunta inducida", "¿Te acordás de la última tormenta fuerte? ¿Y de dónde pusiste el balde?"]
          ],
          angulo: "La noticia que todos vieron, llevada a una sola idea: el techo se arregla antes, con sol.",
          dur: "≈18 s",
          hook: { quien: "Voz", dice: "Seguro escuchaste que llegó el Niño. ¿Qué tiene que ver con tu techo?", placa: "El Niño y tu techo" },
          beats: [
            ["0:04", "Voz", "Placa: «Fuente: Servicio Meteorológico Nacional».", "El Servicio Meteorológico lo confirmó: el Niño está activo y sigue hasta el verano."],
            ["0:09", "Voz", "Una mancha de humedad en un techo de obra.", "Con el Niño, en buena parte del país llueve más de lo normal. Y una tormenta fuerte encuentra cualquier fisura."],
            ["0:14", "Voz", "Foto de una aplicación.", "Un techo se arregla con sol, no con el balde abajo."],
            ["0:17", "Texto", "Placa final: logo y «Desde 1889».", "Impermeabilización Elástica Solmi. Desde 1889."]
          ],
          cta: "Revisalo antes de la próxima tormenta. Escribinos por WhatsApp.",
          ojo: "Nada de «el más fuerte de la historia»: no lo dice ninguna fuente. Para San Pedro el pronóstico de primavera no marca más lluvia que lo normal (la señal fuerte es el Litoral y el sudoeste bonaerense), por eso dice «en buena parte del país» y no «en tu zona».",
          confirmar: "¿El producto se puede aplicar con el techo húmedo, o necesitan días secos? Cambia el «con sol» del cierre."
        },
        {
          v: "B", tipo: "Paso a paso en el techo · para guardar",
          titulo: "Tres cosas que mirar en tu techo antes de la tormenta",
          hooks: [
            ["Lista", "Antes de la próxima tormenta, subí al techo y mirá estas tres cosas."],
            ["Impacto visual", "[Sin hablar] Una mano saca un puñado de hojas mojadas de una canaleta. Corte a la cara, a cámara."],
            ["Advertencia", "Si tu techo tiene alguna de estas tres, el Niño la va a encontrar."],
            ["Pregunta inducida", "¿Sabés qué mirar en tu techo antes de que llueva fuerte?"],
            ["Error", "Casi todos miran el techo recién cuando aparece la gotera."],
            ["Secreto", "Por dónde entra el agua a un techo. No es por donde creés."],
            ["Pregunta inducida", "¿Por dónde entra el agua cuando tu techo gotea?"],
            ["Lista", "Canaleta, grietas y bordes. Revisalo hoy."]
          ],
          angulo: "Algo útil de verdad: el que mira sube a su techo con el video. Es el que se guarda y se manda.",
          dur: "≈28 s",
          hook: { quien: "Habla", dice: "Antes de la próxima tormenta, subí al techo y mirá estas tres cosas.", placa: "3 cosas para mirar en tu techo antes de la tormenta" },
          beats: [
            ["0:04", "Habla", "La canaleta con hojas, de cerca.", "Una: canaletas y desagües. Si están tapados, el agua se junta arriba y busca por dónde entrar."],
            ["0:11", "Habla", "Una grieta en la losa, de cerca.", "Dos: grietas. Por más finas que sean, una tormenta fuerte las encuentra."],
            ["0:17", "Habla", "Un borde de membrana levantado, o óxido en los tornillos de una chapa.", "Tres: bordes y uniones. Membrana que se levanta, o chapa oxidada alrededor de los tornillos."],
            ["0:24", "Habla", "Vos en el techo, a cámara.", "Si encontraste alguna, arreglala ahora, antes de que llueva."]
          ],
          cta: "¿Encontraste una? Mandanos la foto por WhatsApp.",
          confirmar: "¿Los tres puntos son los que ustedes revisarían primero? ¿Contestan si les mandan una foto? ¿Y quién habla?"
        },
        {
          v: "C", tipo: "Obra con voz en off · galpones y chapa",
          titulo: "Si guardás algo bajo un techo de chapa, esto es para vos",
          hooks: [
            ["Advertencia", "Si guardás algo bajo un techo de chapa, esto es para vos."],
            ["Impacto visual", "[Sin hablar] Una gota que cae de un agujerito de óxido sobre una máquina, adentro de un galpón."],
            ["Pregunta inducida", "¿Qué hay abajo de tu techo de chapa cuando llueve fuerte?"],
            ["Contraste", "Lo que se moja no es el techo. Es lo que está abajo."],
            ["Pregunta inducida", "¿Galpón, quincho o depósito con la chapa oxidada? Antes del Niño, mirá esto."],
            ["Contracorriente", "Para llegar bien al verano no hace falta cambiar las chapas."]
          ],
          angulo: "La temporada de lluvia, contada desde lo que se pierde abajo del techo. Se une con «recuperar en vez de cambiar».",
          dur: "≈22 s",
          hook: { quien: "Voz", dice: "Si guardás algo bajo un techo de chapa, esto es para vos.", placa: "¿Qué hay abajo de tu techo de chapa?" },
          beats: [
            ["0:04", "Voz", "Óxido en los tornillos y en las uniones, de cerca.", "La chapa se oxida primero en los tornillos y en las uniones. Por ahí entra el agua."],
            ["0:09", "Voz", "Adentro del galpón: lo que se guarda abajo.", "Con el Niño, lo que se moja no es el techo: es lo que tenés abajo."],
            ["0:14", "Voz", "Antes y después de chapa, del folleto.", "Frenamos el óxido y lo protegemos con plastificación elástica. Sin cambiar las chapas."],
            ["0:20", "Texto", "Placa final: logo y «Desde 1889».", "Impermeabilización Elástica Solmi. Desde 1889."]
          ],
          cta: "¿Tu techo de chapa está así? Escribinos por WhatsApp.",
          confirmar: "¿Trabajan galpones de campo y depósitos, además de silos y fábricas? ¿Se puede filmar adentro de uno?"
        }
      ]
    }
  ]
};

/* Carruseles: cada lámina es [título, bajada, foto (opcional)]. Las fotos salen del folleto (p. 4 y 10). */
window.GUIONES.carruseles = {
  n: 6,
  titulo: "Carruseles",
  resumen: "Tres para arrancar y dos para la temporada del Niño. Cada lámina se puede cambiar",
  items: [
    {
      k: "C1", tipo: "Presentación",
      titulo: "Quiénes somos",
      angulo: "Para el que llega al perfil o al anuncio y quiere saber con quién habla.",
      laminas: [
        ["Impermeabilización Elástica Solmi", "Impermeabilizamos techos. Desde 1889."],
        ["Desde 1889", "En San Pedro, donde la familia tenía una herrería de carruajes. Seis generaciones después, seguimos en el mismo lugar."],
        ["El producto es nuestro", "Lo fabricamos y lo aplicamos nosotros. Sin intermediarios."],
        ["Sin romper el techo", "Entra mojándolo, como el agua, y lo sella por dentro. Sin albañiles, sin polvo, sin membrana."],
        ["Qué hacemos", "Impermeabilizamos techos y terrazas. Recuperamos techos de chapa y membranas viejas."],
        ["En todo el país", "De Jujuy a Mar del Plata: fábricas, hoteles, edificios y casas.", "molinos-canuelas"],
        ["¿Humedad en el techo?", "Escribinos por WhatsApp."]
      ],
      caption: "Impermeabilización Elástica Solmi. Desde 1889, la misma familia en San Pedro. Fabricamos nuestro producto y lo aplicamos en todo el país. Escribinos por WhatsApp.",
      confirmar: "¿Se puede publicar así cómo actúa el producto?"
    },
    {
      k: "C2", tipo: "Fotos de obra",
      titulo: "Dónde trabajamos",
      angulo: "Una foto por lámina: la prueba de todo lo demás.",
      laminas: [
        ["Dónde trabajamos", "Impermeabilización Elástica Solmi · desde 1889", "cementos-avellaneda"],
        ["Cementos Avellaneda", "Impermeabilización en altura.", "cementos-avellaneda"],
        ["Editorial Perfil", "Terraza.", "editorial-perfil"],
        ["Molinos Cañuelas", "Silos.", "molinos-canuelas"],
        ["Multigranos", "Techo de silos.", "multigranos-silos"],
        ["Techo de chapa · antes", "", "chapa-1-antes"],
        ["Después", "Recuperado, sin cambiar las chapas.", "chapa-1-despues"],
        ["Techo de chapa · antes", "", "chapa-3-antes"],
        ["Después", "", "chapa-3-despues"],
        ["¿Tu techo es el próximo?", "Escribinos por WhatsApp."]
      ],
      caption: "Fábricas, silos, terrazas y techos de chapa, en todo el país. Escribinos por WhatsApp.",
      confirmar: "¿Se puede nombrar a estos cuatro clientes? ¿Tienen las fotos en tamaño original?"
    },
    {
      k: "C3", tipo: "La técnica, simple",
      titulo: "Tres techos que se arreglan sin romperlos",
      angulo: "Cada uno reconoce su techo en una lámina.",
      laminas: [
        ["¿Tu techo tiene humedad?", "Tres techos, tres arreglos. Ninguno lo rompe."],
        ["Losa o terraza", "El producto entra mojándolo, como el agua, y lo sella por dentro."],
        ["Chapa oxidada", "Se repara, se frena el óxido y se protege. Sin cambiar las chapas.", "chapa-2-antes"],
        ["Capas de membrana", "No hace falta sacarlas: se repara la última y se protege."],
        ["¿Cuál es el tuyo?", "Escribinos por WhatsApp."]
      ],
      caption: "Losa, chapa o membrana vieja: los tres se arreglan sin romper el techo. Escribinos por WhatsApp.",
      confirmar: "¿Los tres arreglos se pueden explicar así?"
    },
    {
      k: "C4", tipo: "El Niño · para guardar",
      titulo: "El Niño ya está acá: cinco cosas para mirar en tu techo",
      angulo: "El «Llega el Niño» de Kartonsec, pero con algo para hacer en cada lámina. Es el que se guarda y se manda.",
      laminas: [
        ["El Niño ya está acá. ¿Tu techo?", "Cinco cosas para mirar hoy, antes de la próxima tormenta."],
        ["Qué es el Niño, en una línea", "El Pacífico más caliente de lo normal cambia las lluvias en Sudamérica. El Servicio Meteorológico lo da activo hasta el verano."],
        ["1 · Canaletas y desagües", "Sacales hojas y tierra. Tapados, el agua se junta arriba."],
        ["2 · Grietas", "Por más finas que sean, una tormenta fuerte las encuentra."],
        ["3 · Membrana", "Bordes levantados, globos o capas arriba de capas: por ahí entra."],
        ["4 · Chapa", "Óxido alrededor de los tornillos y en las uniones.", "chapa-2-antes"],
        ["5 · Adentro", "Manchas o pintura inflada en el cielorraso o arriba de las paredes: el agua ya está entrando."],
        ["¿Encontraste alguna?", "Mandanos la foto por WhatsApp. El techo se arregla antes de que llueva."]
      ],
      caption: "El Niño está activo y, según el Servicio Meteorológico Nacional, sigue hasta el verano. Antes de la próxima tormenta, mirá estas cinco cosas en tu techo. Guardalo para tenerlo a mano y, si encontrás alguna, mandanos la foto por WhatsApp.",
      confirmar: "¿Los cinco puntos los firmarían ustedes? ¿Contestan si les mandan una foto?"
    },
    {
      k: "C5", tipo: "El Niño · creencias",
      titulo: "Cuatro frases que se dicen antes de las lluvias",
      angulo: "Cada lámina es algo que el que mira ya dijo. La respuesta sale del folleto, sin prometer de más.",
      laminas: [
        ["Cuatro frases que se escuchan antes de las lluvias", "Y lo que pasa en el techo."],
        ["«Si no gotea, está bien»", "La humedad avanza antes de que caiga la primera gota. Cuando gotea, ya viene de antes."],
        ["«Le pongo otra membrana y listo»", "Las capas se acumulan y el agua sigue entrando. No hace falta sacarlas: se repara la última y se protege."],
        ["«La chapa oxidada hay que cambiarla»", "Se repara, se frena el óxido y se protege. Sin cambiar las chapas.", "chapa-3-antes"],
        ["Así queda", "La misma chapa.", "chapa-3-despues"],
        ["«Lo arreglo cuando pare de llover»", "Con el Niño activo hasta el verano, el momento de arreglarlo es ahora, con sol."],
        ["¿Dijiste alguna?", "Escribinos por WhatsApp."]
      ],
      caption: "Si no gotea, está bien. Le pongo otra membrana y listo. Lo arreglo cuando pare de llover. Antes del Niño, cuatro frases que conviene revisar. Escribinos por WhatsApp.",
      confirmar: "¿«La humedad avanza antes de que gotee» se puede decir así? ¿Y lo de las membranas y la chapa, igual que en el folleto?"
    }
  ]
};

window.GUIONES.fijados = {
  titulo: "Importante · los 3 videos fijados",
  resumen: "Van arriba de todo en el perfil, para el que quiere saber quiénes son antes de escribir",
  items: [
    {
      n: "01", formato: "Quiénes somos",
      contesta: "¿Quiénes son?",
      ideas: [
        "Desde 1889, la misma familia en el mismo lugar de San Pedro.",
        "Hoy impermeabilizan techos con un producto propio.",
        "Tu idea: «al alcance tuyo»."
      ],
      pide: "Guion 2A. Necesita a alguien de la familia caminando el lugar."
    },
    {
      n: "02", formato: "Qué nos diferencia",
      contesta: "¿Por qué ustedes?",
      ideas: [
        "Fabrican y aplican su propio producto.",
        "No prometen de más: muestran la obra.",
        "La misma familia desde 1889."
      ],
      pide: "Guion 3A. Nadie sale en cámara."
    },
    {
      n: "03", formato: "Cómo trabajamos",
      contesta: "¿Qué pasa si les escribo?",
      ideas: [
        "Tu idea: «Así es como impermeabilizamos tu techo, paso a paso».",
        "Una obra real, de la mancha al techo terminado."
      ],
      pide: "Guion 1A. Se filma en la próxima obra."
    }
  ]
};

/* Perfil de Instagram de ejemplo. Cuenta nueva: todavía no existe. Todo se puede cambiar en la página. */
window.GUIONES.perfil = {
  titulo: "Así se vería el perfil",
  resumen: "Cuatro versiones para elegir. Tocá una arriba del panel de la derecha y después cambiale lo que quieras: se guarda en este dispositivo",
  base: {
    usuario: "impermeabilizacionsolmi",
    nombre: "Solmi | Impermeabilización",
    categoria: "Contratista",
    bio: "Impermeabilizamos techos sin romper nada\nFabricamos y aplicamos nuestro producto\nDesde 1889 · Obras en todo el país\n📍 San Pedro, Bs. As.",
    link: "WhatsApp (falta el número)",
    posts: "0", seguidores: "0", seguidos: "0",
    destacadas: [
      { nombre: "Obras", letra: "O", fondo: "azul" },
      { nombre: "Techos", letra: "T", fondo: "hueso" },
      { nombre: "Desde 1889", letra: "89", fondo: "azul" },
      { nombre: "Consultar", letra: "C", fondo: "hueso" }
    ],
    fijados: ["Quiénes somos", "Qué nos diferencia", "Cómo trabajamos"]
  },
  notas: [
    "«Impermeabilización Elástica Solmi» tiene 33 caracteres e Instagram deja 30. «Solmi | Impermeabilización» entra y tiene la palabra que busca la gente.",
    "El usuario no está reservado todavía. Otras opciones: solmi.impermeabilizacion, solmi1889.",
    "«Sin romper nada» sale del folleto; la confirman ustedes antes de publicar.",
    "El link va al WhatsApp cuando esté el número. solmi.com.ar no: es de 2018 y mezcla otros proyectos.",
    "Cada versión trae un usuario distinto de los tres posibles. «Sin romper nada» (B) y «Se recuperan sin cambiarlos» (D) los confirman ustedes antes de publicar.",
    "Los fijados se fijan en orden 03, 02, 01: Instagram muestra primero el último."
  ]
};

/* Versiones del perfil para elegir. Cada una pisa sobre la base solo lo que cambia. */
window.GUIONES.perfil.versiones = [
  {
    "v": "A",
    "titulo": "La empresa",
    "porque": "La propuesta de hasta ahora: qué hacen, que el producto es propio y desde cuándo.",
    "datos": {}
  },
  {
    "v": "B",
    "titulo": "El problema primero",
    "porque": "La bio arranca por lo que le pasa al que busca: humedad y goteras. Es la que mejor acompaña a los anuncios.",
    "datos": {
      "usuario": "solmi.impermeabilizacion",
      "nombre": "Solmi | Techos y humedad",
      "bio": "¿Humedad o goteras en el techo?\nLo arreglamos sin romper nada\nFabricamos y aplicamos nuestro producto\n📍 San Pedro · obras en todo el país",
      "destacadas": [
        {
          "nombre": "Antes y después",
          "letra": "A",
          "fondo": "azul"
        },
        {
          "nombre": "Cómo lo hacemos",
          "letra": "C",
          "fondo": "hueso"
        },
        {
          "nombre": "Obras",
          "letra": "O",
          "fondo": "azul"
        },
        {
          "nombre": "Escribinos",
          "letra": "E",
          "fondo": "hueso"
        }
      ]
    }
  },
  {
    "v": "C",
    "titulo": "La familia",
    "porque": "El 1889 adelante: seis generaciones en el mismo lugar de San Pedro. El dato lo confirma el papel que falta.",
    "datos": {
      "usuario": "solmi1889",
      "nombre": "Solmi | Techos · desde 1889",
      "bio": "Una familia de San Pedro desde 1889\nHoy arreglamos techos, terrazas y chapas\nFabricamos y aplicamos nuestro producto\n💬 Escribinos por WhatsApp",
      "destacadas": [
        {
          "nombre": "Nuestra historia",
          "letra": "89",
          "fondo": "azul"
        },
        {
          "nombre": "Techos",
          "letra": "T",
          "fondo": "hueso"
        },
        {
          "nombre": "Obras",
          "letra": "O",
          "fondo": "azul"
        },
        {
          "nombre": "Consultar",
          "letra": "C",
          "fondo": "hueso"
        }
      ]
    }
  },
  {
    "v": "D",
    "titulo": "Las obras",
    "porque": "Casi sin palabras propias: qué techos arreglan y para quién trabajaron. La prueba antes que la promesa.",
    "datos": {
      "bio": "Techos con humedad y chapas oxidadas\nSe recuperan sin cambiarlos\nFábricas, hoteles, edificios y casas\nDesde 1889 · San Pedro, Bs. As.",
      "destacadas": [
        {
          "nombre": "Obras",
          "letra": "O",
          "fondo": "azul"
        },
        {
          "nombre": "Chapa",
          "letra": "C",
          "fondo": "hueso"
        },
        {
          "nombre": "Terrazas",
          "letra": "T",
          "fondo": "azul"
        },
        {
          "nombre": "Consultar",
          "letra": "?",
          "fondo": "hueso"
        }
      ]
    }
  }
];
