/* Maquetado de carruseles (1080 × 1350) e historias (1080 × 1920) de Impermeabilización Elástica Solmi.
   Cada HTML carga sus piezas en window.PIEZAS y este archivo las dibuja. Las imágenes se buscan solas en img/
   con el nombre de su código (img/ia-techo-lluvia.jpg, .png o .webp): guardás la imagen con ese nombre,
   recargás y el diseño la toma. Si no está, queda el recuadro con el código y qué va ahí.
   Marcado del texto: *así* va en Medium · [así] va con la franja azul · \n corta la línea. */

/* El cierre de todas las piezas es «Envianos un mensaje.», sin número a la vista (el usuario, 28/09).
   El número solo vive adentro del sticker de link de las historias. */
const WA_LINK = 'wa.me/5491159547352';
/* Clientes de la cartera: se nombran recién cuando cada uno dé permiso (PENDIENTES #30). */
const MOSTRAR_CLIENTES = false;

/* ── el logo, del SVG que pasó el usuario (Logo Solmi.svg), con fill en currentColor ── */
const LOGO_PATHS = [
 'M193.359 2.11523H294.547C307.391 2.11523 317.906 13.0832 317.906 26.4742V70.5522C317.906 83.9432 307.406 94.9112 294.547 94.9112H193.359C180.516 94.9112 170.016 83.9432 170.016 70.5522V26.4742C170.016 13.0832 180.516 2.11523 193.359 2.11523ZM213.516 28.8022H274.406V68.2402H213.516',
 'M455.922 70.5518H380.531V6.17676H331.812V94.9108C373.828 94.9108 413.281 94.9108 455.922 94.9108',
 'M658.312 96.6459H702.969V8.50488H658.312V96.6459Z',
 'M643.812 6.17713V96.0681H597.422L597.109 44.3181L569.578 97.2241L543.172 97.1931L516.031 42.3651L514.5 96.0681H468.094V6.17713C490.5 6.17713 511.641 5.91113 533.641 5.91113L556.234 63.0051L580.609 6.22413',
 'M147.547 4.91113C147.672 13.2551 147.797 20.5211 147.922 28.8651C117.469 28.1301 85.953 28.4901 55.516 29.2241C55.281 34.0681 56.125 37.4431 55.875 42.2861C84.75 42.5361 113.609 42.7711 142.484 43.0211C160.656 44.1151 161.875 91.8961 142.109 92.0211C98.391 91.8961 54.672 91.7861 10.953 91.6611C11.203 84.3961 11.438 77.1461 11.688 69.8801C45.125 70.3651 78.594 70.8491 112.047 71.3331C112.047 67.5831 112.047 63.8331 112.047 60.0831C82.453 59.4741 52.859 58.8651 23.281 58.2711C4.60898 51.8331 -2.09808e-05 12.3961 25.078 6.36513C65.906 5.88013 106.719 5.38013 147.547 4.91113Z',
 'M343.494 132.021H371.384V126.193H332.618V161.646H371.618V155.818H343.478V146.411H356.618V140.833H343.478L343.494 132.021ZM377.587 150.349V152.005C377.587 162.177 388.744 161.943 401.259 161.943C415.822 161.943 423.353 161.068 423.353 151.115C423.353 142.083 418.603 141.505 401.181 140.849C390.165 140.427 388.728 140.286 388.728 135.927C388.728 132.161 390.478 131.49 401.259 131.49C408.868 131.49 411.368 131.63 411.368 135.458V136.599H422.228V135.458C422.228 126.161 412.806 125.911 401.259 125.911C387.681 125.911 377.868 126.193 377.868 135.927C377.868 146.24 387.525 145.958 399.744 146.427C408.197 146.724 412.494 146.052 412.494 151.115C412.494 155.208 411.15 156.349 401.259 156.349C391.228 156.349 388.431 156.068 388.431 152.005V150.349H377.587ZM430.509 161.646H459.322C476.447 161.646 479.759 155.13 479.759 147.755V139.38C479.759 129.74 473.118 126.193 457.509 126.193H430.509V161.646ZM441.384 155.833V132.021H457.509C465.822 132.021 468.9 133.474 468.9 139.396V147.755C468.9 151.724 466.634 155.833 459.322 155.833H441.384ZM497.79 132.021H525.697V126.193H486.931V161.646H525.915V155.818H497.775V146.411H517.978V140.833H497.775',
 'M732.771 32.356V13.856H740.959C742.584 13.856 743.834 13.981 744.709 14.294C745.584 14.669 746.271 15.231 746.771 16.106C747.271 16.919 747.584 17.856 747.584 18.856C747.584 20.169 747.146 21.294 746.271 22.231C745.459 23.106 744.084 23.669 742.334 23.919C742.959 24.231 743.459 24.544 743.771 24.856C744.521 25.481 745.209 26.356 745.834 27.294L749.084 32.356H745.959L743.521 28.481C742.834 27.419 742.209 26.544 741.771 25.919C741.271 25.356 740.896 24.981 740.521 24.731C740.146 24.481 739.771 24.294 739.396 24.231C739.146 24.169 738.709 24.106 738.021 24.106H735.209V32.356H732.771ZM735.209 21.981H740.459C741.584 21.981 742.459 21.919 743.084 21.669C743.709 21.419 744.209 21.044 744.521 20.544C744.834 20.044 745.021 19.481 745.021 18.856C745.021 18.044 744.709 17.294 744.084 16.731C743.459 16.169 742.459 15.856 741.084 15.856H735.209V21.981Z',
 'M278.243 162.18H305.368C321.493 162.18 324.618 155.492 324.618 147.933V139.396C324.618 129.5 318.368 125.911 303.681 125.911H278.243V162.18ZM288.493 156.253V131.838H303.681C311.493 131.838 314.368 133.36 314.368 139.396V147.933C314.368 152.012 312.243 156.253 305.368 156.253H288.493Z',
 'M638.163 125.911H626.788L611.038 136.668L616.413 140.909L629.225 131.6V161.595H638.163V125.911Z',
 'M690.705 146.1C699.83 146.1 701.017 146.716 701.017 151.236C701.017 155.447 699.83 156.372 690.705 156.372C681.58 156.372 680.392 155.653 680.392 151.236C680.392 147.024 681.455 146.1 690.705 146.1ZM690.705 161.97C703.267 161.97 709.892 161.148 709.892 151.236C709.892 146.819 707.892 144.148 701.517 143.48V143.275C708.08 142.402 709.142 139.782 709.142 135.365C709.142 125.453 699.955 125.914 690.705 125.914C679.142 125.914 672.267 127.044 672.267 135.365C672.267 139.936 673.58 142.299 680.205 143.275V143.48C672.955 144.096 671.455 147.281 671.455 151.236C671.455 161.611 680.08 161.97 690.705 161.97ZM690.705 140.964C683.767 140.964 681.142 140.964 681.142 135.365C681.142 131.821 682.767 131.513 690.705 131.513C697.642 131.513 700.205 131.461 700.205 135.365C700.205 141.22 697.58 140.964 690.705 140.964Z',
 'M752.372 146.1C761.497 146.1 762.685 146.716 762.685 151.236C762.685 155.447 761.497 156.372 752.372 156.372C743.247 156.372 742.06 155.653 742.06 151.236C742.06 147.024 743.122 146.1 752.372 146.1ZM752.372 161.97C764.935 161.97 771.56 161.148 771.56 151.236C771.56 146.819 769.56 144.148 763.185 143.48V143.275C769.747 142.402 770.81 139.782 770.81 135.365C770.81 125.453 761.622 125.914 752.372 125.914C740.81 125.914 733.935 127.044 733.935 135.365C733.935 139.936 735.247 142.299 741.872 143.275V143.48C734.622 144.096 733.122 147.281 733.122 151.236C733.122 161.611 741.747 161.97 752.372 161.97ZM752.372 140.964C745.435 140.964 742.81 140.964 742.81 135.365C742.81 131.821 744.435 131.513 752.372 131.513C759.31 131.513 761.872 131.461 761.872 135.365C761.872 141.22 759.247 140.964 752.372 140.964Z',
 'M813.915 131.51C821.29 131.51 824.102 131.819 824.102 137.109C824.102 141.886 822.477 142.246 813.915 142.246C805.29 142.246 804.102 141.732 804.102 137.109C804.102 131.972 805.29 131.51 813.915 131.51ZM794.79 151.749C794.79 161.765 803.102 161.97 813.915 161.97C825.79 161.97 833.04 160.326 833.04 151.338V141.116C833.04 128.89 830.102 125.911 813.915 125.911C798.915 125.911 795.165 128.274 795.165 137.109C795.165 146.663 801.227 147.793 811.727 147.793C818.04 147.793 821.852 147.177 823.977 144.352H824.102V150.208C824.102 156.269 821.602 156.372 813.915 156.372C806.102 156.372 803.727 156.372 803.727 151.749H794.79Z',
 'M887.408 2.11277L874.284 14.1438H779.312L878.452 70.2908L852.711 97.2568H931.509L940.443 82.9768L950.388 98.3508H1026.77L1010.07 68.5388L1104.99 10.8628H1004.16L992.093 0.98877L887.408 2.11277ZM890.373 9.61577L877.216 21.6788H807.906L890.579 68.4998L870.32 89.7218H927.335L940.338 68.9398L954.488 90.8158H1013.91L999.935 65.8768L1078.08 18.3978H1001.47L989.438 8.55277L890.373 9.61577Z',
 'M762.982 23.091C762.982 35.844 752.643 46.182 739.891 46.182C727.138 46.182 716.8 35.844 716.8 23.091C716.8 10.338 727.138 0 739.891 0C752.643 0 762.982 10.338 762.982 23.091ZM757.956 23.091C757.956 33.068 749.868 41.156 739.891 41.156C729.913 41.156 721.825 33.068 721.825 23.091C721.825 13.114 729.913 5.026 739.891 5.026C749.868 5.026 757.956 13.114 757.956 23.091Z'
];
const MARCA = LOGO_PATHS[12]; // el ícono (el yunque de la herrería de 1889), solo, para el fondo

const svgLogo = () => `<svg viewBox="0 0 1105 163" fill="currentColor" fill-rule="evenodd">${LOGO_PATHS.map(d => `<path d="${d}"/>`).join('')}</svg>`;
const svgMarca = () => `<svg viewBox="779 0 327 99" fill="currentColor" fill-rule="evenodd"><path d="${MARCA}"/></svg>`;
const icoDiag = c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="square"><path d="M6 6l12 12M8 18h10V8"/></svg>`;
const icoDer = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"><path d="M3 12h17M14 6l6 6-6 6"/></svg>`;
const icoTel = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 005 5L15 12l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z"/></svg>`;
const icoCheck = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"><path d="M4 12.5l5 5L20 6.5"/></svg>`;

/* ── catálogo de imágenes: código → [tipo, qué va] ── */
const IMGS = {
  'ia-techo-lluvia':      ['IA', 'Galpón con techo de chapa bajo tormenta'],
  'ia-chapa-tornillos':   ['IA', 'Primer plano: óxido en tornillos y uniones de la chapa'],
  'ia-galpon-adentro':    ['IA', 'Galpón por dentro, con mercadería bajo el techo de chapa'],
  'ia-aplicador-rodillo': ['IA', 'Aplicador con rodillo sobre la chapa · traje blanco, casco azul'],
  'ia-aplicador-mochila': ['IA', 'Aplicador con mochila pulverizadora sobre la chapa'],
  'ia-membrana-rota':     ['IA', 'Terraza con la membrana levantada y agrietada'],
  'ia-cielorraso-mancha': ['IA', 'Cielorraso con mancha de humedad y pintura inflada'],
  'ia-edificio-terraza':  ['IA', 'Terraza de un edificio de departamentos, con un aplicador'],
  'ia-terraza-terminada': ['IA', 'Terraza de una casa, terminada, después de la lluvia'],
  'ia-techo-lejos':       ['IA', 'Techo de chapa de una casa, sacado de lejos con el celular'],
  'chapa1-antes':    ['MEJORAR', 'Folleto 2013 p. 10 · techo 1, antes · ref/chapa1-antes.jpg'],
  'chapa1-despues':  ['MEJORAR', 'Folleto 2013 p. 10 · techo 1, después · ref/chapa1-despues.jpg'],
  'chapa2-antes':    ['MEJORAR', 'Folleto 2013 p. 10 · techo 2, antes · ref/chapa2-antes.jpg'],
  'chapa2-despues':  ['MEJORAR', 'Folleto 2013 p. 10 · techo 2, después · ref/chapa2-despues.jpg'],
  'chapa3-antes':    ['MEJORAR', 'Folleto 2018 p. 4 · techo 3, antes · ref/chapa3-antes.jpg'],
  'chapa3-despues':  ['MEJORAR', 'Folleto 2018 p. 4 · techo 3, después · ref/chapa3-despues.jpg'],
  'membranas-antes':   ['MEJORAR', 'Folleto 2018 p. 4 · membranas acumuladas · ref/membranas-antes.jpg'],
  'membranas-despues': ['MEJORAR', 'Folleto 2018 p. 4 · membranas recuperadas · ref/membranas-despues.jpg'],
  'obra-cementera':  ['MEJORAR', 'Folleto 2013 p. 4 · cementera, trabajo en altura · ref/obra-cementera.jpg'],
  'obra-editorial':  ['MEJORAR', 'Folleto 2013 p. 4 · editorial, terraza · ref/obra-editorial.jpg'],
  'obra-molino':     ['MEJORAR', 'Folleto 2013 p. 4 · molino, silos · ref/obra-molino.jpg'],
  'obra-silos':      ['MEJORAR', 'Folleto 2013 p. 4 · planta de cereales, techo de silos · ref/obra-silos.jpg'],
  'video-a-casita':  ['VIDEO', 'Video A 0:05 · la casita «Sin tratamiento la humedad pasa» · youtu.be/ll7fdX5Ntco'],
  'video-a-bloque':  ['VIDEO', 'Video A 0:09 · el bloque «Con Solmi la humedad no pasa»'],
  'video-a-gel':     ['VIDEO', 'Video A 0:14 · la cuchara que levanta el gel'],
  'real-porton':     ['REAL', 'Foto actual de Mitre 2250 · sin IA: es el lugar de verdad'],
  'real-taller':     ['REAL', 'El taller o donde preparan el producto · sin IA'],
  'y3-aplicador':    ['LISTA', 'La foto de la portada de Víctor']
};

/* ── helpers ── */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fmt = s => esc(s || '').replace(/\*(.+?)\*/gs, '<b>$1</b>').replace(/\[(.+?)\]/gs, '<span class="mk">$1</span>').replace(/\n/g, '<br>');
const wm = st => `<div class="wm" style="${st}">${svgMarca()}</div>`;
const logo = (st, claro) => `<div class="logo${claro ? ' claro' : ''}" style="${st}">${svgLogo()}</div>`;
const flecha = () => `<div class="flecha">${icoDiag('currentColor')}</div>`;
const lab = (txt, azul, ico, fs) => `<div class="lab${azul ? ' azul' : ''}"${fs ? ` style="font-size:${fs}px"` : ''}>${ico === 'tel' ? icoTel : ''}<span>${fmt(txt)}</span>${ico === 'der' ? icoDer : ico === 'diag' ? icoDiag('#D9D9D9') : ''}</div>`;
const cont = (i, n) => n ? `<div class="cont">${i}/${n}</div>` : '';
function ph(id, st, o = {}) {
  const [tipo, desc] = IMGS[id] || ['?', 'imagen sin catalogar'];
  return `<div class="ph${o.tinte ? ' tinte' : ''}" data-img="${id}" style="${st}">
    <div class="in" ${o.pos ? `data-pos="${o.pos}"` : ''}>${o.tinte ? '<div class="sombra"></div>' : ''}</div>
    <div class="tag"><span>${tipo} · ${id}</span><i>${esc(desc)}</i></div>
    ${o.barra ? `<div class="barra" style="${o.barra}"></div>` : ''}
    ${o.lab || ''}
  </div>`;
}
const t = (s, fs, x = '') => s ? `<div class="t" style="font-size:${fs}px;${x}">${fmt(s)}</div>` : '';
const sub = (s, fs, x = '') => s ? `<div class="sub" style="font-size:${fs}px;${x}">${fmt(s)}</div>` : '';
const nota = (s, x = '') => s ? `<div class="nota" style="${x}">${fmt(s)}</div>` : '';
/* filas: numeradas solo si el orden es información (los tres pasos); una lista de cosas para mirar va sin número */
const rows = (arr, fs, num = true) => arr ? `<div class="rows" style="width:100%;font-size:${fs}px">${arr.map((r, i) => `<div class="row">${num ? `<em>0${i + 1}</em>` : ''}<span>${fmt(r)}</span></div>`).join('')}</div>` : '';

/* ════════ carrusel 1080 × 1350 ════════ */
const C = {
  portada(d, i, n, v) {
    /* la foto va en franja vertical de alto completo a la derecha, como la portada de Víctor; el título a la
       izquierda. Pedido del usuario (28/09): foto completa o vertical al costado, nunca horizontal ni en recuadro. */
    return wm('width:1500px;left:-300px;top:820px') +
      logo('left:88px;top:92px;width:290px') +
      `<div class="flujo" style="left:88px;top:0;bottom:0;width:560px;justify-content:center;gap:36px">${lab('Impermeabilización Elástica')}${t(d.ab[v], d.fs || 76, 'line-height:1.06')}${flecha()}</div>` +
      ph(d.img, 'right:0;top:0;width:400px;height:1350px', {barra: 'left:-70px;bottom:150px;width:220px;height:64px', pos: d.pos});
  },
  /* una foto a sangre completa, sin tinte: la usan los antes y después, una lámina cada uno */
  full(d, i, n) {
    return ph(d.img, 'left:0;top:0;width:1080px;height:1350px', {pos: d.pos}) +
      `<div class="flujo" style="left:88px;top:88px;gap:18px">${d.k ? lab(d.k, false, null, 30) : ''}${lab(d.est, d.azul, null, 52)}${d.t ? `<div class="lab" style="font-size:34px;font-weight:300">${fmt(d.t)}</div>` : ''}</div>` +
      (d.k ? '' : cont(i, n));
  },
  /* calcada de la portada de Víctor (rt-01), para que las dos versiones de Y3 no se noten del resto */
  portadaY3(d, i, n, v) {
    return logo('left:56px;top:243px;width:355px') +
      `<div class="flujo" style="left:56px;top:478px;width:470px;gap:44px">${t(d.ab[v], d.fs || 64, 'letter-spacing:-.02em;line-height:1.1')}${flecha()}</div>` +
      ph(d.img, 'left:576px;top:243px;width:504px;height:902px', {barra: 'right:0;bottom:-36px;width:218px;height:68px'});
  },
  /* «panel» ya no es un recuadro: es la franja vertical de alto completo, del lado que diga la lámina */
  panel(d, i, n) { return C.franja({...d, lado: d.lado || 'izq'}, i, n); },
  franja(d, i, n) {
    const der = d.lado !== 'izq';
    return ph(d.img, `${der ? 'right' : 'left'}:0;top:0;width:470px;height:1350px`,
        {barra: `${der ? 'left' : 'right'}:-70px;bottom:150px;width:200px;height:60px`, pos: d.pos}) +
      `<div class="flujo" style="${der ? 'left:88px' : 'left:558px'};top:0;bottom:0;width:${der ? 480 : 450}px;justify-content:center">
        ${t(d.t, d.fs || 70)}${sub(d.b, 40)}${d.lab ? lab(d.lab, false, 'der') : ''}</div>` +
      cont(i, n);
  },
  foto(d, i, n) {
    return ph(d.img, 'left:0;top:0;width:1080px;height:1350px', {tinte: true, pos: d.pos}) +
      `<div class="flujo claro" style="left:88px;bottom:120px;width:904px">${t(d.t, d.fs || 80)}${sub(d.b, 42)}${d.lab ? lab(d.lab, false, 'der') : ''}${nota(d.nota, 'margin-top:6px')}</div>` +
      cont(i, n);
  },
  texto(d, i, n) {
    return wm('width:1500px;left:-120px;bottom:-150px') +
      `<div class="flujo" style="left:88px;top:0;bottom:0;width:904px;justify-content:center">
        ${d.k ? lab(d.k, true) : ''}${t(d.t, d.fs || 88)}${sub(d.b, 40, 'width:860px')}${d.lab ? lab(d.lab, false, 'der') : ''}</div>` +
      nota(d.nota, 'left:88px;bottom:80px;width:900px') + cont(i, n);
  },
  ad(d, i, n) {
    /* antes arriba y después abajo, las dos de borde a borde; el título en la banda gris de arriba */
    return `<div class="flujo" style="left:88px;top:0;height:200px;width:860px;justify-content:center">${d.k ? lab(d.k) : ''}${t(d.t, 54)}</div>` +
      ph(d.a, 'left:0;top:200px;width:1080px;height:575px', {lab: `<div style="position:absolute;left:88px;top:32px">${lab('Antes')}</div>`}) +
      ph(d.d, 'left:0;top:775px;width:1080px;height:575px', {lab: `<div style="position:absolute;left:88px;top:32px">${lab('Después', true)}</div>`, barra: 'right:0;top:-30px;width:220px;height:60px'}) +
      (d.k ? '' : cont(i, n)); // «Techo 1 de 3» ya dice dónde estás: dos contadores juntos sobran
  },
  obra(d, i, n) {
    /* la obra en franja vertical de alto completo, alternando lado; el rubro del otro lado */
    const der = d.lado === 'der';
    return ph(d.img, `${der ? 'right' : 'left'}:0;top:0;width:490px;height:1350px`, {barra: `${der ? 'left' : 'right'}:-70px;bottom:150px;width:200px;height:60px`, pos: d.pos}) +
      `<div class="flujo" style="left:${der ? 88 : 578}px;top:0;bottom:0;width:${der ? 470 : 440}px;justify-content:center;gap:26px">${lab(d.k)}${t(d.t, 80)}${sub(d.b, 42)}${MOSTRAR_CLIENTES && d.cliente ? nota(d.cliente, 'font-size:30px') : ''}</div>`;
  },
  cierre(d, i, n) {
    return wm('width:1500px;right:-600px;top:760px') +
      logo('left:88px;top:92px;width:300px') +
      `<div class="flujo" style="left:88px;top:0;bottom:0;width:904px;justify-content:center;gap:34px">
        ${t(d.t, d.fs || 92)}${sub(`[${d.cta || 'Envianos un mensaje.'}]`, 48, 'font-weight:500')}</div>` +
      nota('Impermeabilización Elástica Solmi · San Pedro, Bs. As.', 'left:88px;bottom:80px;font-size:30px');
  }
};

/* ════════ historia 1080 × 1920 · márgenes seguros: 250 arriba, 310 abajo ════════ */
const zona = d => d.st ? `<div class="zona" style="top:1230px">${esc(d.st)}</div>` : '';
const safe = () => '<div class="safe top"></div><div class="safe bot"></div>';
const S = {
  texto(d, i) {
    /* con sticker, el texto sube y deja libre la franja de 1230 a 1430; sin sticker, va centrado en la zona segura.
       El yunque cambia de lado frame a frame, para que la secuencia no se vea como la misma imagen repetida. */
    const pos = d.st ? 'top:470px' : 'top:250px;bottom:310px;justify-content:center';
    return wm(i % 2 ? 'width:1700px;left:-140px;top:40px' : 'width:1700px;right:-640px;bottom:360px') +
      `<div class="flujo" style="left:88px;${pos};width:904px;gap:36px">${d.k ? lab(d.k, true) : ''}${t(d.t, d.fs || 112)}${sub(d.b, 52, 'width:880px')}${d.lab ? lab(d.lab, false, 'diag') : ''}</div>` +
      (d.logo ? logo('left:88px;top:1500px;width:280px') : '') + nota(d.nota, 'left:88px;top:1500px;width:880px;font-size:32px') + zona(d) + safe();
  },
  dato(d) {
    return wm('width:1700px;left:-140px;top:40px') +
      `<div class="flujo" style="left:88px;top:540px;width:904px;gap:40px">${d.k ? lab(d.k, true) : ''}${t(d.t, d.fs || 280, 'letter-spacing:-.05em;line-height:.9')}${sub(d.b, 64, 'line-height:1.2')}</div>` +
      zona(d) + safe();
  },
  /* la foto siempre vertical: franja de alto completo a la derecha (lado «der») o a la izquierda */
  panel(d) {
    const der = d.lado === 'der';
    return ph(d.img, `${der ? 'right' : 'left'}:0;top:0;width:480px;height:1920px`, {barra: `${der ? 'left' : 'right'}:-70px;bottom:420px;width:200px;height:60px`, pos: d.pos}) +
      `<div class="flujo" style="left:${der ? 88 : 560}px;top:250px;bottom:310px;width:${der ? 452 : 440}px;justify-content:center;gap:30px">${d.k ? lab(d.k, true) : ''}${t(d.t, d.fs || 80)}${sub(d.b, 44)}${rows(d.rows, 46, d.num !== false)}</div>` +
      safe();
  },
  foto(d) {
    return ph(d.img, 'left:0;top:0;width:1080px;height:1920px', {tinte: true, pos: d.pos}) +
      `<div class="flujo claro" style="left:88px;bottom:360px;width:904px">${t(d.t, d.fs || 92)}${sub(d.b, 46)}</div>` + safe();
  },
  full(d) {
    return ph(d.img, 'left:0;top:0;width:1080px;height:1920px', {pos: d.pos}) +
      `<div class="flujo" style="left:88px;top:290px">${lab(d.k, d.azul, null, 52)}</div>` + safe();
  },
  par(d) {
    return `<div class="flujo" style="left:88px;top:290px;width:904px;gap:26px">${t(d.t, d.fs || 84)}${sub(d.b, 44)}</div>` +
      ph(d.a, 'left:0;top:700px;width:536px;height:1220px', {lab: `<div style="position:absolute;left:88px;top:28px">${lab('De lejos')}</div>`, pos: d.posA}) +
      ph(d.d, 'right:0;top:700px;width:536px;height:1220px', {lab: `<div style="position:absolute;left:28px;top:28px">${lab('De cerca', true)}</div>`, barra: 'right:0;top:-30px;width:200px;height:60px'}) +
      safe();
  },
  cierre(d) {
    return wm('width:1700px;left:-140px;top:1180px') +
      logo('left:88px;top:290px;width:320px') +
      `<div class="flujo" style="left:88px;top:560px;width:904px;gap:36px">${t(d.t, d.fs || 100)}${sub(d.b ? `[${d.b}]` : '', 46, 'font-weight:500')}</div>` +
      nota('Impermeabilización Elástica Solmi · San Pedro, Bs. As.', 'left:88px;top:1490px;font-size:32px') +
      zona(d) + safe();
  },
  destacada(d) {
    const azul = d.fondo === 'azul';
    const glifo = d.glifo === 'check' ? `<div style="width:420px;height:420px">${icoCheck.replace('stroke-width="2.4"', 'stroke-width="2.2"')}</div>` : esc(d.glifo);
    return `<div style="inset:0;display:grid;place-items:center;background:${azul ? 'var(--azul)' : 'var(--gris)'};color:${azul ? 'var(--claro)' : 'var(--azul)'};font:500 460px/1 'Roboto';letter-spacing:-.04em">${glifo}</div>` +
      `<div style="left:0;right:0;bottom:430px;text-align:center;font:500 44px 'Roboto';color:${azul ? 'var(--claro)' : 'var(--tinta)'};opacity:.9" class="soloVista">${esc(d.nombre)}</div>` + safe();
  }
};

/* ════════ armado de la página ════════ */
const Q = new URLSearchParams(location.search);
const EXPORT = Q.has('export');
function slideHTML(kind, layout, d, i, n, v, file, bg) {
  const fn = (kind === 's' ? S : C)[layout];
  if (!fn) return `<div class="slide ${kind}">Falta el layout ${layout}</div>`;
  return `<div class="slide ${kind}${bg && bg !== 'gris' ? ' bg-' + bg : ''}" data-file="${file}">${fn(d, i, n, v)}</div>`;
}
/* El fondo alterna gris → azul a lo largo de cada pieza. **Nunca negro** (el usuario, 28/09): el negro queda solo
   para las etiquetas. Las láminas de foto a sangre no cuentan (no se les ve el fondo) y las dos portadas A/B
   llevan el mismo, así la prueba mide solo el título. Una lámina puede fijar el suyo con bg: 'gris' | 'azul'. */
const FONDOS = ['gris', 'azul'];
const A_SANGRE = ['foto', 'full', 'destacada'];
function armar() {
  const piezas = (window.PIEZAS || []).filter(p => !Q.get('solo') || Q.get('solo').split(',').includes(p.id));
  const out = [];
  for (const p of piezas) {
    const kind = p.tipo === 'historia' ? 's' : 'c';
    const W = kind === 's' ? 240 : 300, k = W / 1080, H = (kind === 's' ? 1920 : 1350) * k;
    const frames = [];
    const n = p.frames.length;
    let ciclo = 0;
    p.frames.forEach((f, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      const bg = A_SANGRE.includes(f.l) ? null : (f.bg || FONDOS[ciclo++ % FONDOS.length]);
      if (f.ab) for (const v of Object.keys(f.ab)) frames.push({f, i: idx + 1, v, bg, file: `${p.id}-${num}${v}`, cap: `${num} · portada ${v}`});
      else frames.push({f, i: idx + 1, bg, file: `${p.id}-${num}`, cap: `${num} · ${f.rol || ''}`});
    });
    out.push(`<section class="pieza"><h2><span>${p.id}</span>${esc(p.titulo)}</h2>
      ${p.meta ? `<p class="meta">${p.meta}</p>` : ''}${p.conf ? `<p class="conf">${p.conf}</p>` : ''}
      <div class="fila">${frames.map(x => `<div class="fr" style="width:${W}px"><div class="cap">${x.v ? `<em class="${x.v === 'B' ? 'b' : ''}">${x.v}</em>` : ''}${esc(x.cap)}</div>
        <div class="box" style="width:${W}px;height:${H}px">${slideHTML(kind, x.f.l, x.f, x.i, p.contador === false ? 0 : n, x.v, x.file, x.bg)
          .replace('class="slide', `style="transform:scale(${k})" class="slide`)}</div></div>`).join('')}</div></section>`);
  }
  document.getElementById('piezas').innerHTML = out.join('');
  cargarImagenes();
}
function cargarImagenes() {
  const cache = {};
  const buscar = id => cache[id] || (cache[id] = new Promise(res => {
    const exts = ['jpg', 'png', 'webp', 'jpeg'];
    const probar = k => {
      if (k >= exts.length) return res(null);
      const im = new Image();
      im.onload = () => res(im.src);
      im.onerror = () => probar(k + 1);
      im.src = `img/${id}.${exts[k]}`;
    };
    probar(0);
  }));
  const tareas = [...document.querySelectorAll('.ph[data-img]')].map(async el => {
    const src = await buscar(el.dataset.img);
    if (!src) return;
    const img = document.createElement('img');
    img.src = src;
    const pos = el.querySelector('.in').dataset.pos;
    if (pos) img.style.objectPosition = pos;
    el.querySelector('.in').prepend(img);
    el.classList.add('ok');
  });
  Promise.all(tareas).then(() => document.fonts.ready).then(() => { window.__listo = true; });
}
document.addEventListener('DOMContentLoaded', () => {
  if (EXPORT) document.body.classList.add('export');
  document.querySelectorAll('[data-toggle]').forEach(cb => {
    const cls = cb.dataset.toggle;
    const set = () => document.body.classList.toggle(cls, !cb.checked);
    cb.addEventListener('change', set); set();
  });
  armar();
});
