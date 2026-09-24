/* Guiones · Impermeabilización Elástica Solmi (21/09/2026, versión 2: recortados y aptos para publicidad;
   22/09/2026: se suman la fila 05, la temporada del Niño, y los carruseles C4 y C5;
   23/09/2026: se arranca con carruseles y videos animados. Los guiones de video pasan a carrusel, se suman carruseles
   de los videos de YouTube de la empresa, y entran la estrategia, el calendario y la pauta).
   Cada dato sale de los folletos de la empresa (2013 y 2018), de sus videos, de lo que contestó en el formulario o de lo
   que dijo Víctor. Beat: [tiempo, quién, qué se ve, texto]. El texto se puede cambiar en la página; lo que va
   [entre corchetes] se completa en la obra con el dato real. */
window.GUIONES = {
  titulo: "Techos: carruseles, videos animados y estrategia",
  intro: [
    "Arrancamos con carruseles y videos animados: por ahora no hace falta filmar. Son dos publicaciones por semana, en dos estrategias, una para empresas y otra para particulares.",
    "De arriba abajo: la estrategia, el calendario de ocho semanas, la pauta, el perfil, los tres fijados y los carruseles de cada estrategia. Después, los videos de YouTube de ustedes, de donde salen varios carruseles, y al final los guiones de video, para cuando se filme.",
    "Lo del Niño va en el primer mes: conviene publicarlo antes de las tormentas fuertes.",
    "Los textos se pueden cambiar: tocá cualquiera. Lo que cambiás queda en naranja y «Volver al original» lo deshace. En cada carrusel podés elegir la portada. Cuando termines, tocá «Enviar»."
  ],
  reglas: [
    "Sin precios.",
    "Se habla de la membrana como método, nunca de otra empresa.",
    "Ni plazos ni garantías hasta que Solmi los defina.",
    "Cómo actúa el producto lo confirma Solmi antes de publicar.",
    "Nada inventado: cada frase sale de los folletos, de los videos de ustedes o de lo que nos dijeron."
  ],
  falta: [
    "El WhatsApp que se publica: el 7352 es el mismo del estudio jurídico. Los videos de YouTube publican el 7351: ¿es ese?",
    "La cuenta publicitaria de Meta a nombre de Solmi, para la pauta.",
    "El OK a lo que dice cada carrusel en «Confirmanos».",
    "Un papel que muestre el 1889.",
    "Permiso para nombrar a Cementos Avellaneda, Editorial Perfil, Molinos Cañuelas y Multigranos.",
    "Las fotos originales (las del folleto miden 230 píxeles) y, si están, los videos originales.",
    "Una foto actual del lugar y una de un techo terminado.",
    "Lo del Niño: chequear el pronóstico del Servicio Meteorológico la semana que se publica cada pieza."
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

/* 23/09/2026 · se arranca con carruseles y videos animados, dos publicaciones por semana, en dos estrategias.
   Los guiones de video de arriba quedan para cuando se filme; sus ideas pasaron a carrusel.
   Cada lámina: {t: título, b: bajada, foto: foto del folleto (o [antes, después]), img: qué imagen va, yt: [video, segundo], f: de dónde sale}.
   Vale lo mismo que en todo el tablero: nada inventado; lo que depende de Solmi va en «Confirmanos». */
const SOLMI_YT = {A: 'll7fdX5Ntco', B: '9ZQBr8aMLAg', C: 'llcor5tzM7M', D: '5qr3om-G8BE'};

window.GUIONES.estrategia = {
  titulo: "Dos estrategias: empresas y particulares",
  resumen: "El mismo perfil, dos públicos. Los tres fijados sirven a los dos",
  decisiones: [
    "Se arranca con carruseles y videos animados: por ahora no se filma nada.",
    "Los guiones de video pasan a carrusel, y los tres fijados también. Se suman carruseles hechos con los videos de YouTube de la empresa.",
    "Dos estrategias, empresas y particulares, con carruseles para la temporada del Niño.",
    "Dos publicaciones por semana y $150.000 de pauta."
  ],
  confirmar: [
    {k: "est-frec", q: "Dos publicaciones por semana en total en la cuenta, no dos por estrategia."},
    {k: "est-pauta", q: "Los $150.000 de pauta son por mes."},
    {k: "est-cons", q: "Los administradores de consorcio van con empresas: deciden con presupuestos y asamblea."}
  ],
  cols: [
    {k: "PAR", nombre: "Particulares", filas: [
      ["A quién", "La dueña de casa con goteras (Sandra, en la propuesta)."],
      ["Qué le pasa", "Tiene goteras y ya se lo arreglaron una vez y volvió. La frena que le rompan todo."],
      ["Cómo llega", "Ve una publicación y escribe."],
      ["Qué necesita ver", "Por qué volvió a filtrar, qué mirar antes de la tormenta y la prueba de que no se rompe nada."],
      ["Cómo se le habla", "El problema adelante, con su palabra: humedad. Se le muestra, no se le promete: ya le prometieron antes."],
      ["El Niño", "Abre la puerta: la noticia que todos vieron, llevada a algo para revisar hoy en el techo. Con el dato del Servicio Meteorológico, sin «en tu zona» ni «el más fuerte de la historia»."],
      ["Publicaciones", "El Niño en video (V1) · P1 · P2 · Y2 · Y1 · P4 · P3 · La humedad no avisa (V3)"],
      ["Cierre", "«Mandanos la foto por WhatsApp» o «Escribinos por WhatsApp»."],
      ["Pauta", "$100.000"],
      ["Qué se mide", "Cuántos escriben por WhatsApp y cuántos mandan la foto del techo. Guardados y envíos: P1 y P2 son para guardar."]
    ]},
    {k: "EMP", nombre: "Empresas", filas: [
      ["A quién", "El que tiene un galpón, un depósito o una planta; el jefe de mantenimiento (Marcelo, en la propuesta); el administrador de consorcio."],
      ["Qué le pasa", "Chapa oxidada y filtraciones sobre lo que guarda. Parar una planta cuesta plata: lo que más lo frena es la obra, no el precio."],
      ["Cómo llega", "Casi siempre le pasan el nombre y lo busca antes de llamar. Los de galpón y los de consorcio sí escriben."],
      ["Qué necesita ver", "Que existen desde 1889 y trabajaron en plantas, que la chapa se recupera sin cambiarla y que el trabajo es llave en mano."],
      ["Cómo se le habla", "Con el argumento económico del folleto: se recupera la chapa y se evita el costo de chapas nuevas y la mano de obra de cambiar un techo. Sin precios."],
      ["El Niño", "Entra por lo que se moja abajo del techo (E1)."],
      ["Publicaciones", "E1 · Y3 · No cambies el techo de chapa en video (V2) · E3 · E2. Y el plastificado (Y5, Y6) cuando lo definamos."],
      ["Cierre", "«Escribinos por WhatsApp». Para este público también puede servir el mail: lo definimos juntos."],
      ["Pauta", "$50.000"],
      ["Qué se mide", "Cuántos escriben, cuántos miran el perfil y cuántos terminan en visita o presupuesto. Para el que busca el nombre, la ficha de Google pesa tanto como las publicaciones."]
    ]}
  ]
};

window.GUIONES.calendario = {
  titulo: "Calendario · ocho semanas, dos por semana",
  resumen: "La semana 1 es la semana en que se abre la cuenta. Dos días fijos, por ejemplo martes y viernes",
  semanas: [
    ["F1 · Quiénes somos", "carrusel · fijado", "V1 · El Niño ya está acá (5A)", "video animado · particulares · Niño"],
    ["F3 · Cómo trabajamos", "carrusel · fijado", "P1 · El Niño: cinco cosas", "carrusel · particulares · Niño"],
    ["F2 · Qué nos diferencia", "carrusel · fijado", "E1 · Si guardás algo bajo un techo de chapa", "carrusel · empresas · Niño"],
    ["P2 · Cuatro frases antes de las lluvias", "carrusel · particulares · Niño", "Y3 · Tu techo de chapa en tres pasos", "carrusel · empresas"],
    ["Y2 · Sin tratamiento, la humedad pasa", "carrusel · particulares", "V2 · No cambies el techo de chapa (4B)", "video animado · empresas"],
    ["Y1 · ¿Membranas y pinturas que fallan?", "carrusel · particulares", "E3 · Obras", "carrusel · empresas"],
    ["P4 · Tres techos sin romperlos", "carrusel · particulares", "E2 · No cambies el techo de chapa: recuperalo", "carrusel · empresas"],
    ["P3 · ¿Le pusiste membrana y sigue filtrando?", "carrusel · particulares", "V3 · La humedad no avisa (4A)", "video animado · particulares"]
  ],
  notas: [
    "Lo del Niño va en el primer mes: pierde valor si se corre. Cada publicación sale con el pronóstico del Servicio Meteorológico chequeado esa semana.",
    "Los fijados se fijan en orden F3, F2, F1: Instagram muestra primero el último.",
    "E3 nombra clientes: si no hay permiso, sale sin nombres o cambia de semana con P3.",
    "Los tres videos animados son los guiones 5A, 4B y 4A de más abajo. Los videos de YouTube tienen material para armarlos sin filmar: la demostración del gel y la aplicación en un techo de chapa real.",
    "En reserva: Y4, Y5 y Y6, de plastificado."
  ]
};

window.GUIONES.pauta = {
  titulo: "Pauta · $150.000",
  resumen: "Una propuesta: el reparto, las publicaciones y la zona se definen juntos",
  donde: "En Instagram y Facebook, con anuncios que abren una conversación de WhatsApp. No hace falta página web: el que toca el anuncio escribe directo. Google Ads necesita una página a donde llevar el clic, así que queda para cuando haya web.",
  reparto: [
    ["Particulares", "$100.000", "$25.000 por semana. Semanas 1 y 2: el video animado del Niño (V1). Semanas 3 y 4: la publicación de particulares que más mensajes y guardados haya traído (P1 o P2)."],
    ["Empresas", "$50.000", "$25.000 por semana, en las semanas 3 y 4: E1, los galpones con el Niño."]
  ],
  antes: [
    "El WhatsApp propio de impermeabilización. El 11 5954 7352 es el del estudio jurídico: las consultas se mezclarían y no se podría saber qué trajo cada anuncio. Los videos de YouTube de la empresa, de 2010 a 2019, publican el 11 5954 7351: ¿es ese?",
    "Una cuenta publicitaria de Meta a nombre de Solmi, con su tarjeta: la pauta se paga directo.",
    "Instagram abierto y con los tres fijados arriba: el que llega desde un anuncio mira el perfil antes de escribir.",
    "Quién contesta los mensajes y en cuánto tiempo. Un anuncio que trae mensajes que tardan días en contestarse hace más daño que no pautar.",
    "La zona: a dónde puede ir la cuadrilla. Con este monto rinde más una zona chica que todo el país."
  ],
  mide: [
    "Cuántas conversaciones empezaron desde cada anuncio y cuánto costó cada una.",
    "Cuántas trajeron la foto del techo y cuántas terminaron en visita o presupuesto.",
    "Guardados y envíos de cada publicación, pautada o no."
  ],
  notas: [
    "El primer mes se pauta lo del Niño, que vence con la temporada. Desde el segundo, la plata va a la publicación de cada estrategia que más mensajes trajo.",
    "Nada de campañas de «reconocimiento de marca»: cada peso va a que alguien escriba.",
    "No prometemos un número de mensajes ni de clientes: el primer mes es para medir."
  ]
};

window.GUIONES.videos = {
  titulo: "Los videos de YouTube de Solmi",
  resumen: "Tres canales: solmisa, Victor Solmi y Solmi San Pedro. De acá salen tres carruseles y las imágenes de otros",
  items: [
    {v: "A", id: SOLMI_YT.A, nombre: "La prueba de la casita", anio: "2010", versiones: ["xRK8_1AMjk4", "2LZDXmNvwZ0", "XQNKZ5LxwMc", "JUhPwxjI6dc"],
      que: "Spot de 26 segundos: una casita de maqueta, un bloque tratado y la demostración del producto, un gotero y una cuchara que levanta el gel.",
      dice: "Tratamiento interno y elástico, no superficial; ingresa como agua y se transforma en gel, sellando por dentro; no lo afectan el sol ni el granizo.",
      usa: "Y2 entero · imágenes de F1, F2 y F3"},
    {v: "B", id: SOLMI_YT.B, nombre: "La chapa en tres pasos", anio: "2011", versiones: ["YIc90o8a8eQ", "IN1bP8C9wdE"],
      que: "Spot de 28 segundos filmado en un techo de chapa real, con los aplicadores trabajando.",
      dice: "«Recuperamos su techo de chapa en solo tres pasos»: curado y pavonizado, un freno al óxido y la corrosión; impermeabilizado, para evitar la filtración; plastificado.",
      usa: "Y3 entero · imágenes de F1, F2, P1, E1 y E2"},
    {v: "C", id: SOLMI_YT.C, nombre: "¿Membranas y pinturas fallan?", anio: "2011", versiones: [],
      que: "Animado de 44 segundos: fotos de humedad, la aplicación en una terraza en 3D y placas.",
      dice: "Productos que, actuando como el agua, ingresan a la estructura y se transforman en gel; ocupan elásticamente el lugar del agua; de desarrollo propio, no se venden en el mercado.",
      usa: "Y1 entero · imágenes de F3, P1, P2, P3 y P4"},
    {v: "D", id: SOLMI_YT.D, nombre: "La placa de 2019", anio: "2019", versiones: [],
      que: "Diez segundos, la única en alta: «Techos · Paredes · Piletas · Sin molestia de obra · Llave en mano».",
      dice: "Son cuatro frases: no da para un carrusel propio.",
      usa: "«Llave en mano» de F3"}
  ],
  plast: "Dieciocho de plastificado (2011 y 2012): paredes y frentes, pisos y caminos de tierra, bateas, contenedores, un barco y piletas. Salen Y4, Y5 y Y6, en reserva.",
  fuera: "No se usan: el de quita-grafiti, el de 2019 sin locución, Lubrifilm, el tren a hidrógeno y los de autos. De lo que dicen, tampoco lo que es promesa o plazo: «el agua no entra más», «protección definitiva», «solución en el momento», «degradable a partir de los 100 años».",
  nota: "Los videos son de 480 píxeles de alto: sirven para mostrar la obra dentro de una lámina, no de fondo. Si tienen los originales, mejor."
};

/* Carruseles, por estrategia. hooks: las tres portadas para elegir; la primera va por defecto. */
window.GUIONES.carruseles = {
  grupos: [
    {id: "F", n: "★", titulo: "Los 3 fijados, ahora en carrusel", resumen: "Van arriba de todo en el perfil: es lo que mira el que llega desde un anuncio o una recomendación",
      intro: {titulo: "Cómo leer los carruseles", lista: [
        "Portada: tres para elegir. La primera va por defecto.",
        "Cada lámina: el texto grande, el chico, qué imagen va y de dónde sale.",
        "«Video A 0:12» es el cuadro de ese segundo del video A: tocalo y se abre en ese punto.",
        "Todos los textos se pueden cambiar, como los guiones."
      ], titulo2: "De dónde sale cada uno", lista2: [
        "F1 ← 2A y C1 · F2 ← 3A · F3 ← 1A",
        "P1 ← C4, 5A y 5B · P2 ← C5 · P3 ← 3B · P4 ← C3",
        "E1 ← 5C · E2 ← 1B y 4B · E3 ← C2",
        "Y1, Y2 e Y3 ← los videos de YouTube",
        "4A, 4B y 5A quedan también como videos animados"
      ]},
      items: [
        {k: "F1", tipo: "Fijado 01 · la historia", titulo: "Quiénes somos", para: "Las dos estrategias", sale: "2A, con el cambio guardado el 23/09, C1 y el folleto de 2018",
          hooks: [["Idea tuya (2A)", "Una empresa familiar desde 1889. Y al alcance tuyo."], ["Contracorriente", "No empezamos arreglando techos. Empezamos haciendo carruajes."], ["Pregunta", "¿Qué tiene que ver una herrería de carruajes con tu techo?"]],
          laminas: [
            {t: "Una empresa familiar desde 1889. Y al alcance tuyo.", b: "", img: "El logo «Desde 1889»", f: "2A"},
            {t: "No empezamos arreglando techos.", b: "Empezamos haciendo carruajes.", img: "Solo texto", f: "2A · folleto 2018"},
            {t: "Estamos en San Pedro.", b: "Acá nuestra familia instaló una herrería de carruajes, antes de que existieran los autos.", img: "Una foto actual de Mitre 2250 (falta). Si no llega, solo texto con «1889» grande", f: "2A, el cambio del 23/09"},
            {t: "Seis generaciones después, seguimos en el mismo lugar.", b: "La misma familia, sin cortes.", img: "Solo texto", f: "C1 · folleto 2018"},
            {t: "Hoy impermeabilizamos techos y terrazas.", b: "Y recuperamos techos de chapa y membranas viejas.", img: "Video B 0:06 · el aplicador en el techo", yt: [SOLMI_YT.B, 6], f: "C1"},
            {t: "El producto es nuestro.", b: "Lo fabricamos y lo aplicamos nosotros. Sin intermediarios.", img: "Video A 0:14 · el gel", yt: [SOLMI_YT.A, 14], f: "C1 · Víctor · video C"},
            {t: "En todo el país.", b: "De Jujuy a Mar del Plata: fábricas, hoteles, edificios y casas.", foto: "molinos-canuelas", img: "Folleto: los silos de Molinos Cañuelas", f: "C1 · lista de clientes del folleto"},
            {t: "¿Humedad en el techo?", b: "Escribinos por WhatsApp.", img: "El logo", f: "2A"}
          ],
          caption: "Impermeabilización Elástica Solmi. Desde 1889, la misma familia en San Pedro. Fabricamos nuestro producto y lo aplicamos en todo el país. Escribinos por WhatsApp.",
          confirmar: "¿Tienen un papel que muestre el 1889? ¿Y una foto actual del lugar?"},
        {k: "F2", tipo: "Fijado 02", titulo: "Qué nos diferencia", para: "Las dos estrategias", sale: "3A y los dos folletos",
          hooks: [["Tensión (3A)", "Seguro ya te prometieron que tu techo no iba a filtrar más."], ["Lista", "Tres hechos que nos diferencian. Ninguno es una promesa."], ["Pregunta", "¿Quién hizo el producto que te pusieron en el techo?"]],
          laminas: [
            {t: "Seguro ya te prometieron que tu techo no iba a filtrar más.", b: "", img: "Solo texto", f: "3A"},
            {t: "Nosotros preferimos mostrártelo.", b: "Tres hechos. Ninguno es una promesa.", img: "Solo texto, fondo azul", f: "3A"},
            {t: "1 · El producto lo fabricamos nosotros.", b: "A medida de cada trabajo.", img: "Video A 0:12 · el gotero", yt: [SOLMI_YT.A, 12], f: "3A · los dos folletos"},
            {t: "2 · Lo aplicamos nosotros.", b: "De la fábrica a tu techo, sin intermediarios.", img: "Video B 0:10 · a pincel", yt: [SOLMI_YT.B, 10], f: "3A · Víctor"},
            {t: "3 · Somos la misma familia desde 1889.", b: "Seis generaciones, en el mismo lugar de San Pedro.", img: "El logo «Desde 1889»", f: "3A · folleto 2018"},
            {t: "No te prometemos de más.", b: "Te mostramos la obra.", foto: ["chapa-3-antes", "chapa-3-despues"], img: "Folleto: el techo de chapa, antes y después", f: "3A"},
            {t: "Escribinos por WhatsApp", b: "y mirá cómo trabajamos.", img: "El logo", f: "3A"}
          ],
          caption: "Seguro ya te prometieron que tu techo no iba a filtrar más. Nosotros preferimos mostrártelo: el producto lo fabricamos y lo aplicamos nosotros, y somos la misma familia desde 1889. Escribinos por WhatsApp.",
          confirmar: "¿Hablamos de garantía o todavía no? ¿Tienen un papel que muestre el 1889?"},
        {k: "F3", tipo: "Fijado 03", titulo: "Cómo trabajamos", para: "Las dos estrategias", sale: "1A, los videos A y C y los dos folletos",
          hooks: [["Idea tuya (1A)", "Así es como impermeabilizamos tu techo, paso a paso."], ["Pregunta", "¿Cómo se arregla un techo con humedad sin romperlo?"], ["Vulnerabilidad", "Si ya arreglaste el techo y volvió a filtrar, mirá cómo lo hacemos nosotros."]],
          laminas: [
            {t: "Así es como impermeabilizamos tu techo, paso a paso.", b: "", img: "Video C 0:09 · el aplicador en la terraza", yt: [SOLMI_YT.C, 9], f: "1A"},
            {t: "Este techo tiene humedad.", b: "No lo vamos a romper: sin albañiles, sin polvo, sin membrana.", img: "Video C 0:03 · el cielorraso con la grieta", yt: [SOLMI_YT.C, 3], f: "1A · folleto 2013"},
            {t: "1 · Usamos nuestro producto.", b: "Lo fabricamos nosotros, para cada trabajo.", img: "Video A 0:12 · el gotero", yt: [SOLMI_YT.A, 12], f: "1A · folleto 2018"},
            {t: "2 · Entra en el techo como el agua.", b: "Lo moja y recorre el mismo camino que el agua.", img: "Video C 0:14 · entra en la losa", yt: [SOLMI_YT.C, 14], f: "1A · los dos folletos · video A"},
            {t: "3 · En segundos, se hace un gel elástico.", b: "Y sella el techo por dentro.", img: "Video A 0:14 · la cuchara que levanta el gel", yt: [SOLMI_YT.A, 14], f: "1A · folleto 2013 · video A"},
            {t: "Así queda.", b: "", img: "Falta: una foto real de un techo terminado. Mientras tanto, video A 0:09, «Con Solmi la humedad no pasa»", yt: [SOLMI_YT.A, 9], f: "1A · video A"},
            {t: "Llave en mano.", b: "Fabricamos el producto y lo aplicamos con nuestra gente.", img: "Solo texto", f: "Los dos folletos · video D · Víctor"},
            {t: "¿Humedad en el techo?", b: "Escribinos por WhatsApp.", img: "El logo", f: "1A"}
          ],
          caption: "Así impermeabilizamos un techo con humedad: con nuestro producto, que entra como el agua y en segundos se hace un gel elástico que lo sella por dentro. Sin albañiles, sin polvo, sin membrana. Escribinos por WhatsApp.",
          confirmar: "¿El paso a paso es así en obra, o hay algo antes de aplicar que convenga mostrar? ¿Se puede decir así cómo actúa el producto y «sin romper»? ¿Tienen la foto de un techo terminado?"}
      ]},
    {id: "PAR", n: "PAR", titulo: "Carruseles · particulares", resumen: "Para la dueña de casa con goteras. Los del Niño van primero",
      intro: {titulo: "Para particulares", lista: [
        "El problema adelante, nunca la empresa, y con su palabra: humedad.",
        "El Niño abre la puerta: algo para revisar hoy en el techo.",
        "Después, por qué volvió a filtrar y la prueba de que no se rompe nada.",
        "P1 y P2 son para guardar; el resto cierra en WhatsApp."
      ]},
      items: [
        {k: "P1", tipo: "Particulares · El Niño", titulo: "El Niño: cinco cosas para mirar en tu techo", para: "La dueña de casa", sale: "C4 (con el título cambiado el 23/09), que reúne a 5A y 5B",
          hooks: [["Predicción (C4)", "El Niño ya está acá. ¿Tu techo?"], ["Pregunta (5A)", "Seguro escuchaste que llegó el Niño. ¿Qué tiene que ver con tu techo?"], ["Lista (5B)", "Antes de la próxima tormenta, subí al techo y mirá estas cinco cosas."]],
          laminas: [
            {t: "El Niño ya está acá. ¿Tu techo?", b: "Cinco cosas para mirar hoy, antes de la próxima tormenta.", img: "Solo texto", f: "C4"},
            {t: "Qué es el Niño", b: "El Pacífico más caliente de lo normal cambia las lluvias en Sudamérica. El Servicio Meteorológico lo da activo hasta el verano.", img: "Solo texto, con «Fuente: Servicio Meteorológico Nacional»", f: "C4 · Servicio Meteorológico Nacional"},
            {t: "1 · Canaletas y desagües", b: "Sacales hojas y tierra. Tapados, el agua se junta arriba.", img: "Solo texto", f: "C4"},
            {t: "2 · Grietas", b: "Por más finas que sean, una tormenta fuerte las encuentra.", img: "Video C 0:03 · la grieta", yt: [SOLMI_YT.C, 3], f: "C4"},
            {t: "3 · Membrana", b: "Bordes levantados, globos o capas arriba de capas: por ahí entra.", img: "Video C 0:04 · las membranas rotas", yt: [SOLMI_YT.C, 4], f: "C4"},
            {t: "4 · Chapa", b: "Óxido alrededor de los tornillos y en las uniones.", img: "Video B 0:02 · el techo de chapa", yt: [SOLMI_YT.B, 2], f: "C4"},
            {t: "5 · Adentro", b: "Manchas o pintura inflada en el cielorraso o arriba de las paredes: el agua ya está entrando.", img: "Video C 0:01 · la pared manchada", yt: [SOLMI_YT.C, 1], f: "C4"},
            {t: "¿Encontraste alguna?", b: "Mandanos la foto por WhatsApp. El techo se arregla antes de que llueva.", img: "El logo", f: "C4"}
          ],
          caption: "El Niño está activo y, según el Servicio Meteorológico Nacional, sigue hasta el verano. Antes de la próxima tormenta, mirá estas cinco cosas en tu techo. Guardalo para tenerlo a mano y, si encontrás alguna, mandanos la foto por WhatsApp.",
          confirmar: "¿Los cinco puntos los firmarían ustedes? ¿Contestan si les mandan una foto? El pronóstico se chequea la semana que sale."},
        {k: "P2", tipo: "Particulares · El Niño", titulo: "Cuatro frases que se escuchan antes de las lluvias", para: "La dueña de casa", sale: "C5, con dos frases cambiadas porque no tenían fuente",
          hooks: [["Creencias (C5)", "Cuatro frases que se escuchan antes de las lluvias."], ["Espejo", "«Si no gotea, está bien». ¿La dijiste?"], ["Pregunta", "¿Cuál de estas cuatro dijiste antes de la última tormenta?"]],
          laminas: [
            {t: "Cuatro frases que se escuchan antes de las lluvias.", b: "Y lo que pasa en el techo.", img: "Solo texto", f: "C5"},
            {t: "1 · «Si no gotea, está bien.»", b: "Las membranas viejas juntan humedad por debajo.", img: "Solo texto", f: "Folleto 2018 (antes decía «la humedad avanza antes de que gotee», sin fuente)"},
            {t: "2 · «Le pongo otra membrana y listo.»", b: "Las capas se acumulan y el agua sigue entrando. No hace falta sacarlas: se repara la última y se protege.", img: "Video C 0:04 · las membranas rotas", yt: [SOLMI_YT.C, 4], f: "C5 · folleto 2013"},
            {t: "3 · «La chapa oxidada hay que cambiarla.»", b: "Se repara, se frena el óxido y se protege. Sin cambiar las chapas.", foto: "chapa-3-antes", img: "Folleto: el techo de chapa, antes", f: "C5"},
            {t: "Así queda.", b: "Recuperada, sin cambiar las chapas.", foto: "chapa-3-despues", img: "Folleto: el mismo techo, después", f: "C5 · C2"},
            {t: "4 · «Lo arreglo cuando pare de llover.»", b: "Con el Niño activo hasta el verano, el momento de arreglarlo es ahora.", img: "Solo texto", f: "C5, sin «con sol» · Servicio Meteorológico Nacional"},
            {t: "¿Dijiste alguna?", b: "Escribinos por WhatsApp.", img: "El logo", f: "C5"}
          ],
          caption: "Si no gotea, está bien. Le pongo otra membrana y listo. La chapa oxidada hay que cambiarla. Lo arreglo cuando pare de llover. Antes del Niño, cuatro frases que conviene revisar. Escribinos por WhatsApp.",
          confirmar: "¿Lo de las membranas y la chapa se puede decir así? ¿El producto se aplica con el techo húmedo? (por eso salió el «con sol»)"},
        {k: "P3", tipo: "Particulares", titulo: "¿Le pusiste membrana y sigue filtrando?", para: "La dueña de casa (sirve también para el administrador)", sale: "3B y los dos folletos",
          hooks: [["Pregunta (3B)", "¿Le pusiste membrana y sigue filtrando?"], ["Número", "Una membrana. Dos. Tres. Y la gotera sigue ahí."], ["Provocación", "¿Cuántas membranas le pusiste ya a tu techo?"]],
          laminas: [
            {t: "¿Le pusiste membrana y sigue filtrando?", b: "", img: "Video C 0:04 · las membranas rotas", yt: [SOLMI_YT.C, 4], f: "3B"},
            {t: "Cada vez que filtra, otra membrana arriba.", b: "Las capas se acumulan y el agua sigue entrando.", img: "Solo texto", f: "3B · folleto 2013"},
            {t: "Y abajo, la humedad.", b: "Las membranas viejas juntan humedad por debajo.", img: "Solo texto", f: "Folleto 2018"},
            {t: "Nuestro producto no es una membrana.", b: "Entra en el techo y lo sella por dentro.", img: "Video C 0:21 · se llenan las grietas", yt: [SOLMI_YT.C, 21], f: "3B · video C"},
            {t: "¿Y las membranas viejas?", b: "No hace falta sacarlas: se repara la última y se protege con plastificación elástica.", img: "Solo texto", f: "3B · los dos folletos"},
            {t: "Así queda.", b: "Membranas recuperadas y protegidas.", foto: ["membranas-antes", "membranas-despues"], img: "Folleto 2018: membranas, antes y después", f: "Folleto 2018"},
            {t: "¿Te pasa?", b: "Escribinos por WhatsApp.", img: "El logo", f: "3B"}
          ],
          caption: "Cada vez que filtra, otra membrana arriba: las capas se acumulan, juntan humedad por debajo y el agua sigue entrando. Nuestro producto no es una membrana: entra en el techo y lo sella por dentro. Y las membranas viejas no hace falta sacarlas. ¿Te pasa? Escribinos por WhatsApp.",
          confirmar: "¿Las membranas viejas nunca hace falta sacarlas, o depende del techo? ¿El antes y el después de la lámina 6 son el mismo techo?"},
        {k: "P4", tipo: "Particulares", titulo: "Tres techos que se arreglan sin romperlos", para: "La dueña de casa", sale: "C3, con otra portada por defecto (la del C3 era genérica)",
          hooks: [["Espejo", "Losa, chapa o membrana vieja: ¿cuál es tu techo?"], ["Pregunta (C3)", "¿Tu techo tiene humedad?"], ["Pregunta", "¿Cómo se arregla un techo con humedad sin romperlo?"]],
          laminas: [
            {t: "Losa, chapa o membrana vieja: ¿cuál es tu techo?", b: "Tres techos, tres arreglos. Ninguno lo rompe.", img: "Solo texto", f: "C3"},
            {t: "1 · Losa o terraza", b: "El producto entra mojándolo, como el agua, y lo sella por dentro.", img: "Video C 0:09 · la terraza", yt: [SOLMI_YT.C, 9], f: "C3"},
            {t: "2 · Chapa oxidada", b: "Se repara, se frena el óxido y se protege. Sin cambiar las chapas.", foto: "chapa-1-antes", img: "Folleto: chapa, antes", f: "C3"},
            {t: "3 · Capas de membrana", b: "No hace falta sacarlas: se repara la última y se protege.", foto: "membranas-antes", img: "Folleto 2018: membranas", f: "C3"},
            {t: "¿Cuál es el tuyo?", b: "Escribinos por WhatsApp.", img: "El logo", f: "C3"}
          ],
          caption: "Losa, chapa o membrana vieja: los tres se arreglan sin romper el techo. Escribinos por WhatsApp.",
          confirmar: "¿Los tres arreglos se pueden explicar así?"},
        {k: "Y1", tipo: "Particulares · del video C", titulo: "¿Membranas y pinturas que fallan?", para: "La dueña de casa", sale: "El video C y el folleto de 2013",
          hooks: [["Pregunta (video C)", "¿Membranas y pinturas que fallan?"], ["Pregunta (video C)", "¿Humedad? ¿Filtraciones? Hay otra técnica."], ["Vulnerabilidad (3B)", "Si ya le pusiste membrana al techo y volvió a filtrar, no pases de largo."]],
          laminas: [
            {t: "¿Membranas y pinturas que fallan?", b: "", img: "Video C 0:04", yt: [SOLMI_YT.C, 4], f: "Video C"},
            {t: "Humedad. Filtraciones.", b: "", img: "Video C 0:01 y 0:03 · la pared y el cielorraso", yt: [SOLMI_YT.C, 1], f: "Video C"},
            {t: "Hay otra técnica.", b: "Un producto que, actuando como el agua, entra en la estructura y se transforma en gel.", img: "Video C 0:09", yt: [SOLMI_YT.C, 9], f: "Video C"},
            {t: "Y queda como gel, adentro.", b: "Ocupa elásticamente el lugar del agua.", img: "Video C 0:21", yt: [SOLMI_YT.C, 21], f: "Video C"},
            {t: "Sin membrana, pintura ni brea.", b: "Y sin molestias de obra ni roturas.", img: "Solo texto", f: "Video C · folleto 2013"},
            {t: "No lo afecta el sol ni el granizo.", b: "Es impermeabilización interna, no superficial.", img: "Solo texto", f: "Video C · los dos folletos"},
            {t: "Sin tratamiento, la humedad pasa. Con Solmi, no.", b: "", img: "Video C 0:24 · la casita", yt: [SOLMI_YT.C, 24], f: "Video C"},
            {t: "Un producto propio.", b: "De desarrollo propio: no se vende en el mercado.", img: "Solo texto", f: "Video C"},
            {t: "¿Te pasa?", b: "Escribinos por WhatsApp.", img: "El logo", f: "3B"}
          ],
          caption: "¿Membranas y pinturas que fallan? Hay otra técnica: un producto que entra como el agua, se transforma en gel y sella por dentro. Sin membrana, pintura ni brea, y sin roturas. Escribinos por WhatsApp.",
          confirmar: "¿Se puede decir así: «ocupa el lugar del agua», «no lo afecta el sol ni el granizo», «interna, no superficial»?"},
        {k: "Y2", tipo: "Particulares · del video A", titulo: "Sin tratamiento, la humedad pasa", para: "La dueña de casa", sale: "El video A y el folleto de 2013",
          hooks: [["Contraste (video A)", "Sin tratamiento, la humedad pasa."], ["Lista (video A)", "Filtraciones, goteras, humedad de todo tipo."], ["Pregunta (1A)", "¿Cómo se arregla un techo con humedad sin romperlo?"]],
          laminas: [
            {t: "Sin tratamiento, la humedad pasa.", b: "", img: "Video A 0:06 · la casita", yt: [SOLMI_YT.A, 6], f: "Video A"},
            {t: "Con Solmi, no pasa.", b: "", img: "Video A 0:09 · el bloque tratado", yt: [SOLMI_YT.A, 9], f: "Video A"},
            {t: "Es un líquido que entra como el agua…", b: "", img: "Video A 0:12 · el gotero", yt: [SOLMI_YT.A, 12], f: "Video A"},
            {t: "…y se transforma en gel.", b: "Elástico: sella por dentro.", img: "Video A 0:14 · la cuchara", yt: [SOLMI_YT.A, 14], f: "Video A"},
            {t: "Tratamiento interno, no superficial.", b: "Por eso no lo afecta el sol ni el granizo.", img: "Video A 0:17", yt: [SOLMI_YT.A, 17], f: "Video A · folleto 2013"},
            {t: "Filtraciones, goteras, humedad de todo tipo.", b: "En losas, terrazas, techos de chapa, paredes y quinchos.", img: "Solo texto", f: "Video A"},
            {t: "¿Humedad en el techo?", b: "Escribinos por WhatsApp.", img: "El logo", f: "El tablero"}
          ],
          caption: "Sin tratamiento, la humedad pasa; con Solmi, no. Es un líquido que entra como el agua y se transforma en un gel elástico que sella por dentro. Escribinos por WhatsApp.",
          confirmar: "¿Se puede contar así cómo actúa el producto? («Solución en el momento», que dice el video, no va: es un plazo.)"}
      ]},
    {id: "EMP", n: "EMP", titulo: "Carruseles · empresas", resumen: "Para galpones, depósitos, plantas y consorcios",
      intro: {titulo: "Para empresas", lista: [
        "Al que busca el nombre, la cuenta le confirma que existen y con quién trabajaron.",
        "A galpones y depósitos, el argumento económico: la chapa se recupera y se evita el costo de chapas nuevas.",
        "El Niño entra por lo que se moja abajo.",
        "El plastificado va en reserva, más abajo."
      ]},
      items: [
        {k: "E1", tipo: "Empresas · El Niño", titulo: "Si guardás algo bajo un techo de chapa", para: "Galpones, depósitos y plantas", sale: "5C y el folleto de 2013",
          hooks: [["Advertencia (5C)", "Si guardás algo bajo un techo de chapa, esto es para vos."], ["Contraste", "Lo que se moja no es el techo. Es lo que está abajo."], ["Pregunta", "¿Galpón, quincho o depósito con la chapa oxidada? Antes del Niño, mirá esto."]],
          laminas: [
            {t: "Si guardás algo bajo un techo de chapa, esto es para vos.", b: "", img: "Video B 0:02", yt: [SOLMI_YT.B, 2], f: "5C"},
            {t: "Por dónde entra el agua.", b: "La chapa se oxida primero en los tornillos y en las uniones. Por ahí entra.", foto: "chapa-2-antes", img: "Folleto: chapa, antes", f: "5C"},
            {t: "Con el Niño, lo que se moja no es el techo.", b: "Es lo que tenés abajo.", img: "Solo texto, fondo azul, con «El Niño sigue activo hasta el verano, según el Servicio Meteorológico Nacional»", f: "5C · Servicio Meteorológico Nacional"},
            {t: "No hace falta cambiar las chapas.", b: "Frenamos el óxido y protegemos la chapa con plastificación elástica.", img: "Video B 0:13 · el plastificado", yt: [SOLMI_YT.B, 13], f: "5C"},
            {t: "Un techo de chapa, recuperado.", b: "", foto: ["chapa-1-antes", "chapa-1-despues"], img: "Folleto: chapa, antes y después", f: "Folleto 2013"},
            {t: "Sin chapas nuevas.", b: "Se evita el costo de las chapas nuevas y la mano de obra de cambiar un techo.", img: "Solo texto", f: "Folleto 2013"},
            {t: "¿Tu techo de chapa está así?", b: "Escribinos por WhatsApp.", img: "El logo", f: "5C"}
          ],
          caption: "Si guardás algo bajo un techo de chapa, esto es para vos. La chapa se oxida primero en los tornillos y en las uniones, y por ahí entra el agua. Con el Niño activo hasta el verano, lo que se moja es lo que tenés abajo. Frenamos el óxido y protegemos la chapa, sin cambiarla. Escribinos por WhatsApp.",
          confirmar: "¿Trabajan galpones de campo y depósitos? ¿La chapa se oxida primero en tornillos y uniones? El pronóstico se chequea la semana que sale."},
        {k: "E2", tipo: "Empresas", titulo: "No cambies el techo de chapa: recuperalo", para: "Plantas, galpones y edificios con techo de chapa", sale: "1B, 4B y los dos folletos",
          hooks: [["Contracorriente (1B y 4B)", "No cambies el techo de chapa: recuperalo."], ["Número (4B)", "Tres techos de chapa. Ninguno se cambió."], ["Contracorriente (1B)", "Techo de chapa oxidado no quiere decir techo nuevo."]],
          laminas: [
            {t: "No cambies el techo de chapa: recuperalo.", b: "", img: "Solo texto", f: "1B · 4B"},
            {t: "¿Óxido en el techo de chapa?", b: "Antes de cambiar todas las chapas, mirá estos tres techos.", img: "Solo texto", f: "1B y 4B"},
            {t: "Techo 1 de 3", b: "Antes · después", foto: ["chapa-1-antes", "chapa-1-despues"], img: "Folleto: el primer par", f: "Folleto 2013"},
            {t: "Techo 2 de 3", b: "Antes · después", foto: ["chapa-2-antes", "chapa-2-despues"], img: "Folleto: el segundo par", f: "Folleto 2013"},
            {t: "Techo 3 de 3", b: "Antes · después", foto: ["chapa-3-antes", "chapa-3-despues"], img: "Folleto: el tercer par (en el de 2018 está más grande)", f: "Los dos folletos"},
            {t: "Ninguno se cambió.", b: "Se repara lo que haga falta, se frena el óxido y se protege con plastificación elástica, que copia la forma de la chapa.", img: "Video B 0:13", yt: [SOLMI_YT.B, 13], f: "4B · 1B · folleto 2013"},
            {t: "¿Tu techo de chapa está así?", b: "Escribinos por WhatsApp.", img: "El logo", f: "1B"}
          ],
          caption: "Tres techos de chapa, antes y después. Ninguno se cambió: se reparó lo que hacía falta, se frenó el óxido y se protegió la chapa con plastificación elástica. ¿Tu techo de chapa está así? Escribinos por WhatsApp.",
          confirmar: "¿En qué orden van los pasos? El folleto de 2013 dice reparación, pavonizado y plastificación; el video B, curado y pavonizado, impermeabilizado y plastificado. ¿Tienen las fotos en tamaño original?"},
        {k: "E3", tipo: "Empresas", titulo: "Obras", para: "El que busca el nombre antes de llamar", sale: "C2, sin los antes y después de chapa (ahora van en E2)",
          hooks: [["Prueba", "De una cementera a un molino: cuatro obras."], ["Lista", "Fábricas, silos y terrazas. En todo el país."], ["Título (C2)", "Dónde trabajamos."]],
          laminas: [
            {t: "De una cementera a un molino: cuatro obras.", b: "Impermeabilización Elástica Solmi · desde 1889", foto: "cementos-avellaneda", img: "Folleto: Cementos Avellaneda", f: "C2"},
            {t: "¿Con quién trabajaron?", b: "Algunas obras, con sus fotos.", img: "Solo texto", f: "La pregunta del que busca antes de llamar"},
            {t: "1 de 4 · Cementos Avellaneda", b: "Impermeabilización en altura.", foto: "cementos-avellaneda", img: "Folleto", f: "C2"},
            {t: "2 de 4 · Editorial Perfil", b: "Terraza.", foto: "editorial-perfil", img: "Folleto", f: "C2"},
            {t: "3 de 4 · Molinos Cañuelas", b: "Silos.", foto: "molinos-canuelas", img: "Folleto", f: "C2"},
            {t: "4 de 4 · Multigranos", b: "Techo de silos.", foto: "multigranos-silos", img: "Folleto", f: "C2"},
            {t: "También hoteles, edificios y casas.", b: "En todo el país, de Jujuy a Mar del Plata.", img: "Solo texto", f: "C1 · lista de clientes del folleto"},
            {t: "¿Tu techo es el próximo?", b: "Escribinos por WhatsApp.", img: "El logo", f: "C2"}
          ],
          caption: "Fábricas, silos y terrazas, en todo el país. Escribinos por WhatsApp.",
          confirmar: "¿Se puede nombrar a estos cuatro clientes? Si no, va sin nombres: una cementera, una editorial, un molino, una planta de cereales. ¿Tienen las fotos en tamaño original?"},
        {k: "Y3", tipo: "Empresas · del video B", titulo: "Tu techo de chapa, en tres pasos", para: "Galpones, plantas y quinchos", sale: "El video B y el folleto de 2013",
          hooks: [["Proceso (video B)", "Tu techo de chapa se recupera en tres pasos."], ["Advertencia (video B)", "Detené el deterioro de tu techo de chapa."], ["Contracorriente (1B)", "Techo de chapa oxidado no quiere decir techo nuevo."]],
          laminas: [
            {t: "Tu techo de chapa se recupera en tres pasos.", b: "", img: "Video B 0:02", yt: [SOLMI_YT.B, 2], f: "Video B"},
            {t: "1 · Curado y pavonizado", b: "Un freno al óxido y la corrosión.", img: "Video B 0:06", yt: [SOLMI_YT.B, 6], f: "Video B"},
            {t: "2 · Impermeabilizado", b: "Para que no filtre el agua.", img: "Video B 0:10", yt: [SOLMI_YT.B, 10], f: "Video B"},
            {t: "3 · Plastificado", b: "Protege la chapa.", img: "Video B 0:13", yt: [SOLMI_YT.B, 13], f: "Video B"},
            {t: "Sin cambiar las chapas.", b: "Se evita el costo de las chapas nuevas y la mano de obra de cambiar un techo.", img: "Solo texto", f: "Folleto 2013"},
            {t: "Detené el deterioro de tu techo.", b: "", img: "Video B 0:18 · el cartel", yt: [SOLMI_YT.B, 18], f: "Video B"},
            {t: "¿Tu techo de chapa está así?", b: "Escribinos por WhatsApp.", img: "El logo", f: "1B"}
          ],
          caption: "Tu techo de chapa se recupera en tres pasos: curado y pavonizado, un freno al óxido y la corrosión; impermeabilizado, para que no filtre; y plastificado, para protegerla. Sin cambiar las chapas. Escribinos por WhatsApp.",
          confirmar: "¿Siguen siendo estos tres pasos? ¿Tienen el video original? («Protección definitiva», que dice el video, no va: es una promesa.)"}
      ]},
    {id: "RES", n: "RES", titulo: "En reserva · plastificado", resumen: "Listos. Salen cuando definamos cómo se muestran los derivados",
      intro: {titulo: "Por qué en reserva", lista: [
        "Salen de los videos de plastificado de YouTube (2011 y 2012).",
        "La impermeabilización es el tronco; cómo se muestran los derivados lo hablamos con Víctor.",
        "Los videos son de 240 píxeles: sirven para mostrar la prueba en un recuadro."
      ]},
      items: [
        {k: "Y4", tipo: "Reserva · particulares", titulo: "La gota que no entra", para: "Paredes, frentes y piletas", sale: "Los videos de plastificado sobre un auto, una pared y frentes",
          hooks: [["Contraste (video)", "Esta mitad está plastificada. Esta no."], ["Curiosidad", "Mirá qué hace el agua en cada mitad."], ["Pregunta", "¿Humedad en la pared?"]],
          laminas: [
            {t: "Esta mitad está plastificada. Esta no.", b: "", img: "El capó, mitad y mitad", yt: ["rHYZLWd80s0", 11], f: "Video"},
            {t: "Mirá el agua.", b: "Del lado plastificado queda en gotas separadas. Del otro, se junta.", img: "El capó con agua", yt: ["rHYZLWd80s0", 20], f: "Video"},
            {t: "En una pared, igual.", b: "La parte plastificada repele la humedad: el agua no entra. La otra queda húmeda.", img: "La pared", yt: ["3WJaUy4qvlQ", 37], f: "Video"},
            {t: "Transparente.", b: "Protege la superficie y la pintura, y la resalta.", img: "Solo texto", f: "Folleto 2018"},
            {t: "Frentes, paredes, piletas.", b: "", img: "El frente de una radio de San Pedro y una pileta terminada", yt: ["DtMugFKsifs", 14], f: "Los videos · folleto 2018"},
            {t: "¿Humedad en la pared?", b: "Escribinos por WhatsApp.", img: "El logo", f: ""}
          ],
          caption: "Esta mitad está plastificada; esta no. Del lado plastificado el agua queda en gotas y no entra. Plastificado elástico para frentes, paredes y piletas. Escribinos por WhatsApp.",
          confirmar: "¿Cómo se muestra el plastificado? ¿Se puede decir que repele la humedad?"},
        {k: "Y5", tipo: "Reserva · empresas", titulo: "Contra el óxido", para: "Campo, logística y náutica", sale: "Los videos de la batea, el contenedor y el barco, y el folleto de 2018",
          hooks: [["Caso (video)", "Esta batea se la estaba comiendo el óxido."], ["Pregunta", "¿Tus bateas, contenedores o tanques están así?"], ["Causa", "Humedad y fermentación del maíz: así quedó esta batea."]],
          laminas: [
            {t: "Esta batea se la estaba comiendo el óxido.", b: "", img: "La batea corroída", yt: ["w7D0Ar8ZGOw", 10], f: "Video"},
            {t: "Por la humedad y la fermentación del maíz.", b: "Quedó toda degradada, oxidada.", img: "Detalle", yt: ["w7D0Ar8ZGOw", 38], f: "Video"},
            {t: "Se plastifica para salvar lo que queda.", b: "Y que no se siga deteriorando con el tiempo.", img: "La aplicación", yt: ["w7D0Ar8ZGOw", 50], f: "Video"},
            {t: "Contenedores", b: "Plastificado resistente a químicos.", img: "El contenedor", yt: ["DWkz10IswOk", 14], f: "Descripción del video"},
            {t: "Barcos", b: "De la línea de flotación para abajo el agua desliza y no se pegan el musgo ni los bichos. Y se protegen del óxido la quilla y las partes de hierro.", img: "El casco", yt: ["IYQhyx85Na4", 7], f: "Video"},
            {t: "Tanques, cañerías y estructuras", b: "Contra ácidos, vapores, humedad, salitre y fertilizantes.", img: "Folleto 2018: tanques y cañerías", f: "Folleto 2018"},
            {t: "¿Tenés algo que se está oxidando?", b: "Escribinos por WhatsApp.", img: "El logo", f: ""}
          ],
          caption: "Esta batea se la estaba comiendo el óxido, por la humedad y la fermentación del maíz. Se plastifica para salvar lo que queda. Plastificado anticorrosión para bateas, contenedores, barcos, tanques y cañerías. Escribinos por WhatsApp.",
          confirmar: "¿Cómo se muestra el plastificado? ¿Se puede mostrar la batea? ¿«Resistente a químicos» se puede decir así?"},
        {k: "Y6", tipo: "Reserva · empresas", titulo: "Pisos, playones y caminos", para: "Plantas, playones y campos", sale: "Los videos del piso y del camino de tierra",
          hooks: [["Demostración (video)", "Largamos algo pesado y con puntas sobre este piso."], ["Curiosidad", "Un camino de tierra que no levanta tierra."], ["Pregunta", "¿Piso de playón o camino interno?"]],
          laminas: [
            {t: "Largamos algo pesado y con puntas sobre este piso.", b: "", img: "El piso", yt: ["hXP24IKVCzY", 8], f: "Video"},
            {t: "No se rompió.", b: "Es un piso de hormigón plastificado: aguanta los golpes.", img: "El piso después del golpe", yt: ["hXP24IKVCzY", 11], f: "Video y descripción"},
            {t: "Y no resbala.", b: "Se puede hacer rugoso, para que no se deslice la gente.", img: "Solo texto", f: "Video"},
            {t: "Para pisos y playones.", b: "", img: "El piso", yt: ["hXP24IKVCzY", 27], f: "Video"},
            {t: "Caminos de tierra", b: "Plastificado queda firme e impermeable, y no vuela tierra cuando pasan los vehículos.", img: "La franja plastificada", yt: ["M_Hz3me-6B4", 15], f: "Video y descripción"},
            {t: "¿Tenés un piso o un camino así?", b: "Escribinos por WhatsApp.", img: "El logo", f: ""}
          ],
          caption: "Largamos algo pesado y con puntas sobre un piso de hormigón plastificado, y no se rompió. Se puede hacer rugoso para que no resbale. También en caminos de tierra: queda firme y no vuela tierra. Escribinos por WhatsApp.",
          confirmar: "¿Cómo se muestra el plastificado? ¿«Aguanta los golpes» y «no resbala» se pueden decir así?"}
      ]}
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
