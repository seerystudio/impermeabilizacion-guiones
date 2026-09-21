/* Guiones · Impermeabilización Elástica Solmi (21/09/2026).
   Cada dato sale del folleto de la empresa, de lo que contestó en el formulario o de lo que dijo Víctor.
   Beat: [tiempo, quién, qué se ve, texto]. El texto se puede cambiar en la página; lo que va [entre corchetes]
   se completa en la obra con el dato real. */
window.GUIONES = {
  titulo: "Techos: los primeros videos y carruseles",
  intro: [
    "Todo apunta a lo mismo: impermeabilizar techos. Cada fila es uno de los cuatro formatos que elegimos en la propuesta: a la izquierda, el video de ejemplo; a la derecha, sus guiones. Más abajo, los carruseles y cómo se vería el perfil.",
    "Los guiones ya están escritos, pero no están cerrados: tocá cualquier texto y cambialo. Lo que cambiás queda marcado en naranja, y «Volver al original» lo deshace. Debajo de cada arranque hay otros para elegir, y podés escribir el tuyo.",
    "Donde dice «Confirmanos» hay un dato que tiene que salir de ustedes antes de grabar. Lo que va [entre corchetes] se completa en la obra, con lo que haya.",
    "Lo que cambiás se guarda solo en este dispositivo. Cuando termines, tocá «Enviar» arriba y mandalo por WhatsApp."
  ],
  reglas: [
    "La palabra es «humedad» y el lugar, el techo: así lo dice la gente cuando escribe.",
    "Sin precios.",
    "Se habla de métodos (la membrana), nunca de otra empresa.",
    "No se promete lo que Solmi no firme: ni plazos ni garantías, hasta que ustedes los definan.",
    "Cómo actúa el producto y cuánto dura lo confirman ustedes antes de publicar.",
    "Los formatos 01 y 02 necesitan a alguien de Solmi hablando a cámara. El 03 y el 04, no."
  ],
  falta: [
    "Quién habla a cámara en los formatos 01 y 02.",
    "El WhatsApp que se publica: el 7352 es el mismo del estudio jurídico.",
    "Si se puede nombrar a los clientes (Cementos Avellaneda, Editorial Perfil, Molinos Cañuelas, Multigranos).",
    "Las fotos de obra originales: las del folleto miden 230 píxeles y no alcanzan para publicar.",
    "Un papel que muestre el 1889: acta, foto de la herrería o nota vieja.",
    "La próxima obra para filmar: dónde y qué día."
  ],
  refs: [
    {
      n: 1, id: "DMI8tnVBJHK",
      formato: "El paso a paso en el techo",
      resumen: "Alguien sube al techo, muestra la falla y la arregla etapa por etapa, hablándole a cámara",
      cuenta: "@juve3dstudio", datos: "80.728 me gusta",
      tags: ["En el techo", "Etapa por etapa", "Habla a cámara"],
      mecanica: [
        "Arranca en el techo, con la falla a la vista: el que tiene la misma grieta en su casa se queda.",
        "Cuenta lo que hace la gente normalmente y después lo que hace él, mientras de fondo se ve el trabajo.",
        "Se adelanta a la duda del que mira («y vos te preguntarás…») y la contesta ahí mismo."
      ],
      guiones: [
        {
          v: "A", tipo: "Idea tuya · va fijado al perfil",
          titulo: "Así es como impermeabilizamos tu techo, paso a paso",
          hooks: [
            ["Tuya", "Así es como impermeabilizamos tu techo, paso a paso."],
            ["Pregunta inducida", "¿Cómo se arregla un techo con humedad sin romper nada? Te lo muestro."],
            ["Contracorriente", "Para sacarle la humedad a un techo no hace falta romperlo. Mirá."],
            ["Transformación", "De esta mancha a un techo sellado. Paso a paso."],
            ["Promesa con tiempo", "Un techo con humedad, de principio a fin, en cuarenta segundos."],
            ["Secreto", "Lo que pasa adentro del techo cuando lo impermeabilizamos."],
            ["Impacto visual", "[Sin hablar] La cámara baja del cielo a la mancha del techo. «Esto se arregla sin romper nada. Mirá.»"],
            ["Vulnerabilidad", "Si ya arreglaste el techo una vez y volvió a filtrar, mirá cómo lo hacemos nosotros."]
          ],
          angulo: "La obra se cuenta mientras pasa: «hoy estamos acá, así está el techo y esto vamos a hacer». Es el fijado «Cómo trabajamos».",
          dur: "≈40 s",
          hook: { quien: "Habla", dice: "Así es como impermeabilizamos tu techo, paso a paso.", placa: "Así impermeabilizamos tu techo · paso a paso" },
          beats: [
            ["0:03", "Habla", "Plano abierto del techo, y después la mancha o la grieta.", "Estamos en [lugar]. Este techo tiene humedad acá."],
            ["0:08", "Habla", "Vos en el techo, sin herramientas de albañil a la vista.", "Lo primero: no vinimos a romper nada. Ni roturas, ni albañiles, ni membrana."],
            ["0:13", "Habla", "El envase del producto, en la mano.", "Este es nuestro producto. Lo fabricamos nosotros, y lo ajustamos a cada techo."],
            ["0:19", "Habla", "Primer plano de la aplicación.", "Lo aplicamos, y entra en el techo mojándolo, como entra el agua."],
            ["0:25", "Habla", "Detalle de la superficie, de cerca.", "En segundos se hace un gel elástico, y sella el techo por dentro."],
            ["0:31", "Habla", "El techo terminado, plano abierto.", "Y así queda."]
          ],
          cta: "Si tenés humedad en el techo, escribinos: el WhatsApp está en el perfil.",
          confirmar: "¿El paso a paso es así en la obra? ¿Hay algo que se haga antes de aplicar (limpiar, revisar, reparar) y que convenga mostrar? ¿Y quién habla?",
          ojo: "Si en la obra hay un paso más, se suma con su propio plano: cada etapa, pocos segundos."
        },
        {
          v: "B", tipo: "Techo de chapa",
          titulo: "Un techo de chapa oxidado se recupera sin cambiar las chapas",
          hooks: [
            ["Contracorriente", "Un techo de chapa oxidado no se cambia. Se recupera."],
            ["Pregunta inducida", "¿Hay que cambiar todas las chapas si el techo está oxidado? Mirá."],
            ["Transformación", "Este techo de chapa estaba así. Te muestro cómo lo recuperamos."],
            ["Advertencia", "Antes de cambiar el techo de chapa, mirá esto."],
            ["Impacto visual", "[Sin hablar] La mano pasa por la chapa y se lleva el óxido. «Esto no se tira.»"],
            ["Error", "El error con un techo de chapa oxidado: cambiarlo entero sin ver si se puede recuperar."]
          ],
          angulo: "Recuperar en vez de reemplazar: el argumento más fuerte en un año de obra frenada, y sin decir un solo precio.",
          dur: "≈35 s",
          hook: { quien: "Habla", dice: "Un techo de chapa oxidado no se cambia. Se recupera. Te muestro cómo." },
          beats: [
            ["0:04", "Habla", "El techo oxidado, plano abierto, y un detalle del óxido.", "Estamos en [lugar]. Este techo tiene [lo que tenga: óxido, filtraciones]."],
            ["0:09", "Habla", "La reparación.", "Primero, reparamos lo que haga falta."],
            ["0:14", "Habla", "El tratamiento sobre la chapa.", "Después lo pavonizamos: eso frena el óxido que ya tiene."],
            ["0:20", "Habla", "La plastificación, de cerca.", "Y al final, la plastificación elástica: una película que copia la forma de la chapa y la protege entera."],
            ["0:28", "Habla", "El techo terminado.", "Las chapas son las mismas. Y ya no filtra."]
          ],
          cta: "Si conocés a alguien con un techo así, mandáselo.",
          confirmar: "¿Los tres pasos se hacen en este orden en cada obra? ¿Y se puede decir «ya no filtra» sobre el techo terminado?",
          ojo: "Las chapas se ven igual: la diferencia se nota en el óxido y en el brillo. Conviene filmar el mismo encuadre antes y después."
        },
        {
          v: "C", tipo: "Membrana vieja",
          titulo: "Un techo con capas de membrana que sigue filtrando",
          hooks: [
            ["Pregunta inducida", "¿Tu techo tiene dos o tres capas de membrana y sigue filtrando? Mirá."],
            ["Contracorriente", "Ponerle otra membrana arriba no arregla la filtración. Te muestro qué hacemos."],
            ["Error", "Cada vez que filtra, otra capa de membrana. Y sigue filtrando."],
            ["Secreto", "Lo que casi nadie sabe: las membranas viejas no hace falta sacarlas."],
            ["Impacto visual", "[Sin hablar] Un corte del borde del techo muestra las capas de membrana, una arriba de la otra. «Así están muchos techos.»"]
          ],
          angulo: "La membrana que se acumula sin arreglar nada. Es el método contra el que compite Solmi, y el más buscado del rubro.",
          dur: "≈35 s",
          hook: { quien: "Habla", dice: "Este techo tiene [N] capas de membrana, y sigue filtrando." },
          beats: [
            ["0:04", "Habla", "Las capas de membrana, de cerca.", "Cada vez que filtraba, alguien le ponía otra membrana arriba."],
            ["0:09", "Habla", "Vos, sin sacar nada.", "No las vamos a sacar."],
            ["0:13", "Habla", "La reparación de la última capa.", "Reparamos la última capa."],
            ["0:18", "Habla", "La plastificación elástica encima.", "Y la protegemos con plastificación elástica, para que no se siga degradando."],
            ["0:25", "Habla", "El techo terminado.", "Sin sumar otra capa. Y sin filtraciones."]
          ],
          cta: "Si tu techo tiene más de una capa de membrana, guardá este video.",
          confirmar: "¿Se puede decir que no hace falta sacar las membranas viejas en todos los casos, o depende del techo?",
          ojo: "Se habla del método, nunca de una marca de membrana."
        }
      ]
    },
    {
      n: 2, id: "DZGVdSgy6wa",
      formato: "La recorrida",
      resumen: "Alguien de Solmi camina el lugar con la cámara y cuenta dónde están, qué se hizo y cómo quedó",
      cuenta: "@revestechargentina", datos: "aplicador, Argentina",
      tags: ["Caminando", "Lugar en pantalla", "Datos de la obra"],
      mecanica: [
        "Abre diciendo dónde están: «Estamos en… y te mostramos cómo trabajamos en una obra real».",
        "Dice qué se usó y cuántos metros se cubrieron: el que chequea antes de llamar busca eso.",
        "Cierra en una frase corta sobre el resultado."
      ],
      guiones: [
        {
          v: "A", tipo: "Idea tuya · presentación · va fijado al perfil",
          titulo: "Quiénes somos: una empresa familiar desde 1889, y al alcance tuyo",
          hooks: [
            ["Tuya, con un cambio", "Una empresa familiar desde 1889. Y al alcance tuyo.", "Tu frase decía «la empresa de impermeabilizantes más antigua del país». Mirá «Confirmanos»."],
            ["Número específico", "Ciento treinta y siete años en el mismo lugar. Te muestro dónde."],
            ["Contraste", "Acá, antes de que existieran los autos, mi familia hacía carruajes. Hoy impermeabilizamos techos."],
            ["Pregunta inducida", "¿Qué hace una familia ciento treinta y siete años en el mismo lugar?"],
            ["Impacto visual", "[Sin hablar] La cámara entra por el portón de Mitre 2250. Placa: «Desde 1889»."],
            ["Secreto", "Lo que pocos saben de este lugar de San Pedro."]
          ],
          angulo: "La presentación, caminando el lugar: Mitre 2250 es la historia. Es el fijado «Quiénes somos».",
          dur: "≈40 s",
          hook: { quien: "Habla", dice: "Somos una empresa familiar desde 1889. Y estamos a tu alcance.", placa: "Impermeabilización Elástica Solmi · desde 1889" },
          beats: [
            ["0:04", "Habla", "La fachada o el portón de Mitre 2250.", "Estamos en San Pedro, en Mitre 2250. Acá mi familia instaló una herrería de carruajes, antes de que existieran los autos."],
            ["0:12", "Habla", "Caminando el taller.", "Seis generaciones después, seguimos en el mismo lugar."],
            ["0:17", "Habla", "Donde se fabrica el producto.", "Hoy impermeabilizamos techos. El producto lo fabricamos nosotros, y lo aplicamos nosotros."],
            ["0:25", "Habla", "Fotos de obra, una detrás de otra.", "Trabajamos en todo el país: de Jujuy a Mar del Plata, en fábricas, hoteles, edificios y casas."],
            ["0:33", "Habla", "Vos a cámara, en el taller.", "Si tenés humedad en el techo, estamos a tu alcance."]
          ],
          cta: "Sin pedido: es la presentación. Termina con el nombre y «Desde 1889» en pantalla.",
          confirmar: "Tu frase original decía «la empresa de impermeabilizantes más antigua del país». No la pudimos comprobar: en 1889 la familia hacía carruajes, no impermeabilizaba, y la empresa familiar más antigua del país es de 1838 (Delfino S.A.). Si tienen algo que lo pruebe, vuelve tu frase. ¿Y el producto se fabrica en Mitre 2250?",
          ojo: "Si lo dice alguien de la familia, «mi familia»; si lo dice otra persona, «la familia Solmi»."
        },
        {
          v: "B", tipo: "Obra terminada",
          titulo: "Una obra terminada, contada en el lugar",
          hooks: [
            ["Transformación", "Estamos en [lugar]. Así estaba este techo, y así quedó."],
            ["Número específico", "[N] metros de techo, sin romper nada. Te muestro."],
            ["Pregunta inducida", "¿Cómo se impermeabiliza un techo de [N] metros sin parar [la fábrica / el hotel / el edificio]?"],
            ["Impacto visual", "[Sin hablar] Dron o plano alto del techo terminado. Placa: «[N] m² · [lugar]»."]
          ],
          angulo: "La obra grande, para el que chequea antes de llamar: dónde, qué se hizo, cuánto y cómo quedó. Se escribe con los datos de esa obra.",
          dur: "≈25 s",
          hook: { quien: "Habla", dice: "Estamos en [lugar] y te mostramos cómo trabajamos en una obra real." },
          beats: [
            ["0:04", "Habla", "Caminando el techo terminado.", "Este techo tenía [el problema]."],
            ["0:09", "Habla", "Detalle de la superficie.", "Aplicamos [impermeabilización elástica / plastificación] en [N] metros cuadrados."],
            ["0:15", "Habla", "Plano abierto.", "Sin romper nada, y sin [parar la fábrica / cerrar el lugar]."],
            ["0:20", "Habla", "Vos a cámara.", "Así quedó."]
          ],
          cta: "Sin pedido: es para el que ya nos está mirando.",
          confirmar: "¿Cuál es la próxima obra que se pueda filmar terminada? ¿Y el dueño deja mostrar el lugar?",
          ojo: "Todo lo que va entre corchetes sale de la obra real. Si no hay dato, la frase se saca."
        }
      ]
    },
    {
      n: 3, id: "C90njrpxSvN",
      formato: "La obra con voz en off",
      resumen: "Imágenes de la aplicación y una voz que explica qué se hace y por qué, con el texto subtitulado",
      cuenta: "@revestechargentina", datos: "3.769 me gusta",
      tags: ["Nadie en cámara", "Voz grabada aparte", "Uno, dos, tres"],
      mecanica: [
        "Abre con una pregunta a la que el que mira contesta que sí: «¿Te imaginás…?».",
        "Enumera: «primero…, segundo…, tercero…». La cuenta hace que se quede hasta el final.",
        "Nadie sale en cámara: se filma la obra y la voz se graba aparte, con el celular."
      ],
      guiones: [
        {
          v: "A", tipo: "El diferencial · va fijado al perfil",
          titulo: "Qué nos diferencia: el producto lo hacemos y lo aplicamos nosotros",
          hooks: [
            ["Contracorriente", "Seguro ya te prometieron que tu techo no iba a filtrar más. Nosotros preferimos mostrártelo."],
            ["Pregunta inducida", "¿Quién hace el producto que te ponen en el techo? Nosotros, sí sabemos."],
            ["Lista", "Tres cosas que nos diferencian. Ninguna es una promesa."],
            ["Contraste", "El producto que te ponemos en el techo lo hicimos nosotros. Y lo ponemos nosotros."],
            ["Impacto visual", "[Sin hablar] El producto sale del taller y aparece en el techo, en un solo corte. «De la fábrica a tu techo.»"],
            ["Número específico", "Seis generaciones de la misma familia. Y el producto, hecho por nosotros."]
          ],
          angulo: "Lo que hacen, dicho en tres cosas, sin adjetivos: fabrican, aplican y están hace seis generaciones. Es el fijado «Qué nos diferencia».",
          dur: "≈35 s",
          hook: { quien: "Voz", dice: "Seguro ya te prometieron que tu techo no iba a filtrar más. Nosotros preferimos mostrártelo." },
          beats: [
            ["0:05", "Voz", "El taller: el producto preparándose.", "Primero: el producto lo fabricamos nosotros. No lo compramos hecho."],
            ["0:11", "Voz", "La misma persona, ahora en el techo.", "Segundo: lo aplicamos nosotros, con nuestra gente. De la fábrica a tu techo, sin nadie en el medio."],
            ["0:19", "Voz", "Detalle de la aplicación.", "Por eso podemos ajustar la fórmula a cada techo."],
            ["0:24", "Voz", "Foto vieja o el frente de Mitre 2250.", "Y tercero: somos la misma familia, en el mismo lugar, desde 1889."],
            ["0:30", "Voz", "Un techo terminado.", "No te prometemos de más. Te mostramos la obra."]
          ],
          cta: "Sin pedido: va fijado. Termina con el logo y «Desde 1889».",
          confirmar: "¿Se puede filmar dónde se fabrica el producto? ¿Y hablamos de garantía o todavía no?",
          ojo: "«Sin nadie en el medio» sale de lo que dijo Víctor: «negocios verticales, desde la producción hasta la aplicación». No se compara con ninguna empresa."
        },
        {
          v: "B", tipo: "Por qué falló lo anterior",
          titulo: "Por qué tu techo sigue filtrando aunque le pusiste membrana",
          hooks: [
            ["Pregunta inducida", "¿Por qué tu techo sigue filtrando aunque le pusiste membrana?"],
            ["Error", "El error que se repite en casi todos los techos que filtran: otra membrana arriba."],
            ["Vulnerabilidad", "Si ya gastaste en una membrana y el techo volvió a filtrar, esto es para vos."],
            ["Contracorriente", "Más capas de membrana no es más protección."],
            ["Impacto visual", "[Sin hablar] Las capas de membrana vieja, una arriba de la otra, en un borde del techo."]
          ],
          angulo: "El que escribe ya probó algo y le volvió a filtrar. Se habla del método, no de una marca.",
          dur: "≈30 s",
          hook: { quien: "Voz", dice: "¿Por qué tu techo sigue filtrando aunque le pusiste membrana?" },
          beats: [
            ["0:04", "Voz", "Un techo con varias capas de membrana.", "Cada vez que filtra, le ponen otra membrana arriba. Las capas se acumulan, y el agua sigue entrando."],
            ["0:12", "Voz", "La aplicación del producto.", "Nuestro producto no es una membrana: entra en el techo mojándolo, como el agua."],
            ["0:18", "Voz", "Detalle, de cerca.", "Y en segundos se hace un gel elástico que lo sella por dentro."],
            ["0:24", "Voz", "Un techo terminado.", "Y si ya tenés capas de membrana, no hace falta sacarlas."]
          ],
          cta: "Mandáselo a alguien que ya le puso tres membranas al techo.",
          confirmar: "¿Se puede decir así cómo actúa el producto? Sale del folleto, pero va publicado.",
          ojo: "Se habla del método, nunca de una marca de membrana."
        }
      ]
    },
    {
      n: 4, id: "DbTIooilYK_",
      formato: "La pieza animada",
      resumen: "Una frase fuerte, imágenes de obra con la gráfica de la marca, una voz que lee y un cierre para consultar",
      cuenta: "@kartonsec", datos: "fabricante, Argentina",
      tags: ["Frase fuerte", "Fotos con gráfica", "Se arma en edición"],
      mecanica: [
        "Arranca con una frase que cualquiera reconoce: «La lluvia no espera».",
        "Las imágenes pasan rápido, con el logo y el texto encima: se entiende sin audio.",
        "Es la única que se puede hacer sin filmar: alcanza con fotos de obra y una voz."
      ],
      guiones: [
        {
          v: "A", tipo: "Antes de las lluvias",
          titulo: "La humedad no avisa",
          hooks: [
            ["Advertencia", "La humedad en el techo no avisa: aparece cuando llueve."],
            ["Pregunta inducida", "¿Cuándo fue la última vez que miraste tu techo?"],
            ["Predicción", "La próxima lluvia fuerte, ¿tu techo aguanta?"],
            ["Impacto visual", "[Sin voz] Una gota cae sobre un piso. Texto: «Después de la lluvia es tarde»."]
          ],
          angulo: "Llegan las lluvias: la pieza que se puede publicar ya, con fotos de archivo, mientras no hay obra filmada.",
          dur: "≈20 s",
          hook: { quien: "Voz", dice: "La humedad en el techo no avisa. Aparece cuando llueve." },
          beats: [
            ["0:04", "Voz", "Fotos de techos de obra, con el logo chico en una esquina.", "Revisá tu techo antes de que lleguen las lluvias."],
            ["0:09", "Voz", "Foto de una aplicación.", "Nosotros lo impermeabilizamos sin romper nada."],
            ["0:14", "Texto", "Placa final: logo, «Desde 1889» y el WhatsApp.", "Impermeabilización Elástica Solmi. Desde 1889."]
          ],
          cta: "Escribinos por WhatsApp: el número está en el perfil.",
          confirmar: "¿Qué número va en la placa final?",
          ojo: "No se nombra ningún pronóstico ni fenómeno del clima: «antes de que lleguen las lluvias» alcanza."
        },
        {
          v: "B", tipo: "Recuperar en vez de cambiar",
          titulo: "No cambies el techo de chapa: recuperalo",
          hooks: [
            ["Contracorriente", "No cambies el techo de chapa. Recuperalo."],
            ["Transformación", "Antes. Después. Sin cambiar las chapas."],
            ["Pregunta inducida", "¿Tu techo de chapa está oxidado? No hace falta cambiarlo."]
          ],
          angulo: "Los tres antes y después de techos de chapa del folleto, animados. Se puede armar ya.",
          dur: "≈20 s",
          hook: { quien: "Voz", dice: "No cambies el techo de chapa. Recuperalo." },
          beats: [
            ["0:03", "Texto", "Antes y después 1, con cortina de izquierda a derecha.", "Antes / después"],
            ["0:07", "Voz", "Antes y después 2.", "Frenamos el óxido y lo protegemos con plastificación elástica."],
            ["0:12", "Voz", "Antes y después 3.", "Sin cambiar las chapas."],
            ["0:16", "Texto", "Placa final: logo y «Desde 1889».", "Impermeabilización Elástica Solmi. Desde 1889."]
          ],
          cta: "Mandáselo a alguien con un techo de chapa.",
          confirmar: "Las fotos del folleto son chicas. ¿Tienen los originales? ¿Y de qué obras son?",
          ojo: "Las fotos están abajo, en el carrusel «Dónde trabajamos»."
        }
      ]
    }
  ]
};

/* Carruseles: cada lámina es [título, bajada, foto (opcional)]. Las fotos salen del folleto (p. 4 y 10). */
window.GUIONES.carruseles = {
  n: 5,
  titulo: "Carruseles",
  resumen: "Tres para arrancar. Cada lámina se puede cambiar: título y texto",
  items: [
    {
      k: "C1", tipo: "Presentación",
      titulo: "Quiénes somos",
      angulo: "Para el que llega al perfil y quiere saber con quién habla. Va en la grilla desde el primer día.",
      laminas: [
        ["Impermeabilización Elástica Solmi", "Seis generaciones. El mismo lugar. Hoy impermeabilizamos tu techo."],
        ["1889, San Pedro", "La familia llegó a la Argentina y, en Mitre 2250, instaló una herrería de carruajes. Todavía no existían los autos."],
        ["Seis generaciones", "La misma familia, sin cortes, en el mismo lugar."],
        ["Qué hacemos", "Impermeabilizamos techos y terrazas. Recuperamos techos de chapa y membranas viejas."],
        ["El producto es nuestro", "Lo fabricamos nosotros y lo aplicamos con nuestra gente. De la fábrica a tu techo, sin nadie en el medio."],
        ["Cómo funciona", "Entra en el techo mojándolo, como el agua. En segundos se hace un gel elástico y lo sella por dentro."],
        ["Sin romper nada", "Sin roturas, sin albañiles, sin polvo ni ruido. Sin membrana, pintura ni brea."],
        ["Obras en todo el país", "De Jujuy a Mar del Plata: fábricas, hoteles, edificios y casas.", "molinos-canuelas"],
        ["¿Humedad en el techo?", "Escribinos. El WhatsApp está en el perfil."]
      ],
      caption: "Somos Impermeabilización Elástica Solmi. Desde 1889, la misma familia en el mismo lugar de San Pedro. Fabricamos nuestro producto y lo aplicamos nosotros, en todo el país.",
      confirmar: "¿Está bien contar lo de la herrería de carruajes y la llegada de la familia? Sale del folleto. ¿Y lo del «gel» se puede publicar así?"
    },
    {
      k: "C2", tipo: "Fotos de obra",
      titulo: "Dónde trabajamos",
      angulo: "Las fotos del folleto, una por lámina. Es la prueba de todo lo demás: el que verifica antes de llamar busca esto.",
      laminas: [
        ["Algunos lugares donde trabajamos", "Impermeabilización Elástica Solmi · desde 1889", "cementos-avellaneda"],
        ["Cementos Avellaneda", "Impermeabilización en altura.", "cementos-avellaneda"],
        ["Editorial Perfil", "Impermeabilización de terraza.", "editorial-perfil"],
        ["Molinos Cañuelas", "Impermeabilización de silos.", "molinos-canuelas"],
        ["Multigranos", "Techo de silos.", "multigranos-silos"],
        ["Techo de chapa · antes", "Recuperación de techo de chapa.", "chapa-1-antes"],
        ["Techo de chapa · después", "Recuperación de techo de chapa.", "chapa-1-despues"],
        ["Techo de chapa · antes", "Recuperación de techo de chapa.", "chapa-3-antes"],
        ["Techo de chapa · después", "Recuperación de techo de chapa.", "chapa-3-despues"],
        ["Obras en todo el país", "Ciudad de Buenos Aires, Gran Buenos Aires, Mar del Plata, Zárate, San Nicolás y Jujuy."]
      ],
      caption: "Algunos de los lugares donde trabajamos. Fábricas, silos, terrazas y techos de chapa, en todo el país.",
      confirmar: "¿Se puede nombrar a Cementos Avellaneda, Editorial Perfil, Molinos Cañuelas y Multigranos? ¿Tienen estas fotos en tamaño original, y de qué año son?"
    },
    {
      k: "C3", tipo: "La técnica, simple",
      titulo: "Tres techos que se arreglan sin romperlos",
      angulo: "Cada uno reconoce su techo en una lámina. Es para guardar: el día que filtra, lo busca.",
      laminas: [
        ["¿Tu techo tiene humedad?", "Tres techos, tres arreglos. Ninguno rompe nada."],
        ["Techo de losa o terraza", "El producto entra mojándolo, como el agua, y lo sella por dentro."],
        ["Techo de chapa oxidado", "No hace falta cambiar las chapas: se repara, se frena el óxido y se protege con plastificación elástica.", "chapa-2-antes"],
        ["Techo con capas de membrana", "No hace falta sacarlas: se repara la última y se protege con plastificación elástica."],
        ["En los tres", "Sin roturas, sin albañiles, sin polvo ni ruido."],
        ["Guardalo", "Para el día que lo necesites. O mandáselo a quien tenga humedad en el techo."]
      ],
      caption: "Losa, chapa o membrana vieja: los tres se arreglan sin romper el techo.",
      confirmar: "¿Los tres arreglos se pueden explicar así? Salen del folleto (p. 3 y 9)."
    }
  ]
};

window.GUIONES.fijados = {
  titulo: "Importante · los 3 videos fijados",
  resumen: "Van fijados arriba de todo en el perfil. Son para el que llega a la cuenta y quiere saber quiénes son antes de escribir",
  items: [
    {
      n: "01", formato: "Quiénes somos",
      contesta: "¿Quiénes son? ¿De dónde salen?",
      ideas: [
        "Desde 1889, la misma familia en Mitre 2250, donde hubo una herrería de carruajes.",
        "Hoy impermeabilizan techos, con un producto que fabrican ustedes.",
        "Tu idea: «al alcance tuyo», que se lea cerca y no como una empresa lejana."
      ],
      pide: "Ya tiene guion: el 2A, en la fila de la recorrida. Necesita a alguien de la familia caminando el lugar."
    },
    {
      n: "02", formato: "Qué nos diferencia",
      contesta: "¿Por qué ustedes y no otro?",
      ideas: [
        "Crean y aplican su propio producto: de la fábrica al techo.",
        "No prometen de más: muestran la obra.",
        "Son la misma familia desde 1889."
      ],
      pide: "Ya tiene guion: el 3A, en la fila de la voz en off. Nadie sale en cámara."
    },
    {
      n: "03", formato: "Cómo trabajamos",
      contesta: "¿Qué pasa si les escribo por el techo?",
      ideas: [
        "Tu idea: «Así es como impermeabilizamos tu techo, paso a paso».",
        "El techo con humedad, la aplicación y cómo queda, en una sola obra.",
        "Es el único de los tres que invita a escribir."
      ],
      pide: "Ya tiene guion: el 1A, en la fila del paso a paso. Se filma en la próxima obra."
    }
  ]
};

/* Perfil de Instagram de ejemplo. Cuenta nueva: todavía no existe. Todo se puede cambiar en la página. */
window.GUIONES.perfil = {
  titulo: "Así se vería el perfil",
  resumen: "Nombre, bio y destacadas. Tocá cualquier cosa del panel de la derecha y cambiá lo que quieras: se guarda en este dispositivo",
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
    "El nombre que eligieron, «Impermeabilización Elástica Solmi», tiene 33 caracteres, e Instagram deja 30. Por eso «Solmi | Impermeabilización»: el nombre es lo que Instagram usa para buscar, y la gente busca «impermeabilización».",
    "El usuario todavía no está reservado: hay que ver si está libre. Otras opciones: solmi.impermeabilizacion, solmi1889.",
    "«Sin romper nada» es la frase de la propuesta. Sale del folleto («sin roturas, albañiles ni polvo»), pero la confirman ustedes antes de publicarla.",
    "El link va al WhatsApp cuando esté definido el número. solmi.com.ar no, por ahora: es de 2018 y mezcla otros proyectos.",
    "Destacadas: obras hechas, los tipos de techo, la historia y cómo consultar. Van con una letra grande hasta tener el logo en vectores.",
    "Los tres de la grilla son los videos fijados: Instagram muestra primero el último que fijás, así que se fijan en orden 03, 02, 01."
  ]
};
