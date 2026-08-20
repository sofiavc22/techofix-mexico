export type PageData = {
  slug: string; title: string; eyebrow: string; description: string; intro: string;
  problems: string[]; process: { title: string; text: string }[]; faqs: { q: string; a: string }[];
};

export const services: Record<string, PageData> = {
  "reparacion-de-techos": {
    slug:"reparacion-de-techos", title:"Reparación de techos en Estado de México", eyebrow:"Soluciones integrales para cualquier cubierta",
    description:"Diagnóstico y reparación integral de techos residenciales, comerciales e industriales en siete municipios del Estado de México.",
    intro:"La reparación integral de un techo comienza al determinar si el daño está limitado a una unión o si afecta varias partes de la cubierta. Techofix revisa el sistema completo: superficie, estructura visible, pendientes, desagües, remates, penetraciones y deterioro acumulado. Así podemos recomendar desde una corrección puntual hasta mantenimiento, sustitución parcial o cambio completo.",
    problems:["Deterioro general y vida útil agotada","Daños combinados en cubierta y sistema pluvial","Secciones deformadas, sueltas o con corrosión","Necesidad de reparación parcial o renovación completa"],
    process:[{title:"Evaluación integral",text:"Revisamos material, extensión del deterioro, accesos, seguridad y funcionamiento del desalojo pluvial."},{title:"Alcance por prioridades",text:"Separamos reparaciones urgentes, trabajos recuperables y secciones que necesitan sustitución."},{title:"Reparación coordinada",text:"Ejecutamos el alcance autorizado procurando conservar las partes del techo que todavía funcionan correctamente."}],
    faqs:[{q:"¿Cuándo conviene reparar y cuándo cambiar el techo?",a:"Depende de la extensión del daño, la edad de la cubierta, las reparaciones anteriores y el costo acumulado de seguir corrigiendo fallas aisladas."},{q:"¿Reparan todo tipo de techos?",a:"Atendemos losas, lámina, teja y diferentes cubiertas residenciales e industriales; la viabilidad se confirma después de revisar material, estructura y acceso."},{q:"¿Pueden dividir el trabajo por etapas?",a:"Sí. Cuando el inmueble y la seguridad lo permiten, priorizamos las áreas críticas y organizamos el resto del proyecto por secciones."}]
  },
  "techos-residenciales": {
    slug:"techos-residenciales", title:"Reparación e impermeabilización de techos residenciales", eyebrow:"Protección profesional para tu hogar",
    description:"Reparación, mantenimiento e impermeabilización de azoteas, losas, lámina y teja para casas y condominios en el Estado de México.",
    intro:"Un techo residencial puede mostrar goteras, manchas, moho, pintura inflada, grietas o impermeabilizante desprendido. Revisamos la cubierta y el daño interior para distinguir entre una reparación localizada, mantenimiento preventivo o impermeabilización completa.",
    problems:["Goteras y humedad dentro de la vivienda","Grietas y fisuras en losas de concreto","Impermeabilizante desprendido o envejecido","Filtraciones en lámina, teja y ampliaciones"],
    process:[{title:"Revisión del hogar",text:"Recibimos fotografías y evaluamos cubierta, puntos críticos y daño interior."},{title:"Propuesta residencial",text:"Explicamos reparación, material, preparación, tiempos y garantía aplicable."},{title:"Ejecución ordenada",text:"Protegemos las áreas acordadas y realizamos el trabajo procurando reducir molestias."}],
    faqs:[{q:"¿Trabajan casas habitadas?",a:"Sí. Acordamos accesos, horarios y zonas de trabajo para reducir molestias y mantener áreas seguras."},{q:"¿Pueden reparar antes de impermeabilizar?",a:"Sí. Las grietas, juntas, pendientes y piezas dañadas deben atenderse antes de aplicar un sistema nuevo."},{q:"¿Atienden condominios?",a:"Sí, coordinamos la revisión con propietarios, administración o responsable de mantenimiento."}]
  },
  "techos-industriales": {
    slug:"techos-industriales", title:"Reparación e impermeabilización de techos industriales", eyebrow:"Continuidad para bodegas y naves",
    description:"Reparación urgente, impermeabilización y mantenimiento preventivo de techos industriales, bodegas y naves en el Estado de México.",
    intro:"Una filtración industrial puede afectar inventario, equipos, tableros, oficinas o continuidad operativa. Revisamos láminas, fijaciones, traslapes, canalones, domos, extractores, remates y bajadas para priorizar el riesgo y planear la intervención.",
    problems:["Filtraciones sobre inventario o maquinaria","Canalones desbordados y bajadas obstruidas","Lámina corroída, perforada o con movimiento","Sellos vencidos en domos, equipos y remates"],
    process:[{title:"Levantamiento técnico",text:"Documentamos áreas críticas, accesos, altura y restricciones de operación."},{title:"Plan por prioridades",text:"Separamos contención urgente, reparación correctiva y mantenimiento programado."},{title:"Trabajo coordinado",text:"Ejecutamos por áreas y horarios acordados con el responsable del inmueble."}],
    faqs:[{q:"¿Atienden reparación de techo industrial urgente?",a:"Sí, recibimos reportes 24/7 y priorizamos riesgos sobre personas, equipos, inventario y operación."},{q:"¿Trabajan sin detener la nave?",a:"La viabilidad depende del proceso, acceso y seguridad; después de revisar proponemos una secuencia por zonas."},{q:"¿Realizan mantenimiento preventivo?",a:"Sí, revisamos cubiertas y proponemos correcciones priorizadas antes de la temporada de lluvias."}]
  },
  "reparacion-de-goteras-y-filtraciones": {
    slug:"reparacion-de-goteras-y-filtraciones", title:"Reparación de goteras y filtraciones", eyebrow:"Detenemos el agua desde su origen",
    description:"Reparamos goteras y filtraciones en techos de concreto, lámina, teja y cubiertas industriales en el Estado de México.",
    intro:"Una mancha en el plafón no siempre señala el punto exacto por donde entra el agua. Revisamos pendientes, grietas, uniones, canalones y elementos que atraviesan la cubierta antes de recomendar una reparación.",
    problems:["Goteras en habitaciones, oficinas o almacenes","Filtraciones que regresan después de impermeabilizar","Fisuras, juntas abiertas y sellos deteriorados","Encharcamientos y pendientes incorrectas"],
    process:[{title:"Localizamos el ingreso",text:"Inspeccionamos la cubierta y las rutas que puede seguir el agua."},{title:"Definimos la reparación",text:"Explicamos qué debe corregirse y entregamos una cotización gratuita."},{title:"Reparamos y comprobamos",text:"Intervenimos el área acordada y entregamos garantía por escrito."}],
    faqs:[{q:"¿Pueden reparar una gotera aunque ya se impermeabilizó?",a:"Sí. Primero determinamos si la filtración proviene del impermeabilizante, una grieta, una junta, una tubería o un problema de pendiente."},{q:"¿La cotización tiene costo?",a:"No. La revisión y cotización inicial son gratuitas dentro de nuestra zona de cobertura."},{q:"¿Atienden filtraciones urgentes?",a:"Sí, recibimos solicitudes de emergencia las 24 horas."}]
  },
  "impermeabilizacion-de-techos": {
    slug:"impermeabilizacion-de-techos", title:"Impermeabilización de techos", eyebrow:"El sistema correcto para cada superficie",
    description:"Impermeabilización profesional de casas, comercios y naves industriales en Coacalco, Tultitlán y ambos Cuautitlán.",
    intro:"La duración de una impermeabilización depende tanto del producto como de la preparación de la superficie. Corregimos fisuras, puntos críticos y pendientes antes de aplicar el sistema recomendado.",
    problems:["Impermeabilización acrílica","Membrana prefabricada","Refuerzo de grietas y juntas","Mantenimiento de cubiertas industriales"],
    process:[{title:"Evaluamos la superficie",text:"Revisamos humedad, fisuras, adherencia y sistema existente."},{title:"Preparamos el techo",text:"Limpiamos y corregimos los puntos necesarios para asegurar la aplicación."},{title:"Aplicamos el sistema",text:"Ejecutamos el trabajo conforme al material y entregamos garantía aplicable."}],
    faqs:[{q:"¿Qué impermeabilizante es mejor?",a:"Depende del material del techo, su estado, exposición y mantenimiento. La inspección permite recomendar el sistema adecuado."},{q:"¿Cuántos años de garantía ofrecen?",a:"La vigencia depende del sistema instalado y se indica por escrito en cada cotización."},{q:"¿Impermeabilizan naves industriales?",a:"Sí, atendemos cubiertas residenciales, comerciales e industriales."}]
  },
  "reparacion-de-techos-de-lamina": {
    slug:"reparacion-de-techos-de-lamina", title:"Reparación de techos de lámina", eyebrow:"Cubiertas seguras y sin filtraciones",
    description:"Reparación y cambio de techos de lámina, traslapes, tornillería, remates y canalones en el Estado de México.",
    intro:"Las filtraciones en lámina suelen aparecer en tornillos, traslapes, uniones, remates o piezas corroídas. Revisamos la cubierta completa para decidir si conviene sellar, sustituir secciones o cambiarla.",
    problems:["Láminas oxidadas o perforadas","Tornillería y sellos deteriorados","Traslapes y remates abiertos","Canalones y bajadas con fugas"],
    process:[{title:"Inspección de cubierta",text:"Identificamos corrosión, movimiento y puntos de ingreso de agua."},{title:"Plan de reparación",text:"Separamos lo que puede recuperarse de lo que necesita sustitución."},{title:"Ejecución segura",text:"Reparamos sin intervenir zonas innecesarias y documentamos el resultado."}],
    faqs:[{q:"¿Cambian solamente las láminas dañadas?",a:"Sí, cuando la estructura y el resto de la cubierta lo permiten podemos realizar un cambio parcial."},{q:"¿Trabajan con naves en operación?",a:"Podemos planear accesos, horarios y áreas de intervención para reducir afectaciones."},{q:"¿También reparan canalones?",a:"Sí, revisamos canalones, bajadas pluviales, uniones y remates."}]
  },
  "reparacion-de-losas-de-concreto": {
    slug:"reparacion-de-losas-de-concreto", title:"Reparación de losas de concreto", eyebrow:"Corregimos grietas antes de cubrirlas",
    description:"Reparación de grietas, fisuras, humedad y filtraciones en losas de concreto para hogares y comercios.",
    intro:"Una fisura puede permitir el paso del agua y deteriorar acabados, instalaciones o elementos de la construcción. Evaluamos el daño visible y el comportamiento de la superficie antes de sellar o impermeabilizar.",
    problems:["Grietas y fisuras visibles","Humedad en plafones y muros","Desprendimientos y zonas deterioradas","Encharcamientos sobre la losa"],
    process:[{title:"Revisión del daño",text:"Evaluamos longitud, apertura, humedad y ubicación de la fisura."},{title:"Preparación y resane",text:"Retiramos material suelto y aplicamos la solución compatible."},{title:"Protección final",text:"Sellamos o impermeabilizamos según lo indicado en la propuesta."}],
    faqs:[{q:"¿Toda grieta es estructural?",a:"No. Existen fisuras superficiales y movimientos más importantes; la revisión inicial ayuda a determinar el siguiente paso."},{q:"¿Se puede reparar sin impermeabilizar toda la azotea?",a:"En algunos casos sí, pero depende del estado del sistema existente y del origen de la filtración."},{q:"¿Trabajan casas habitadas?",a:"Sí. Organizamos el trabajo para mantener el área segura y reducir molestias."}]
  },
  "mantenimiento-de-techos-industriales": {
    slug:"mantenimiento-de-techos-industriales", title:"Mantenimiento de techos industriales", eyebrow:"Prevención para mantener tu operación",
    description:"Mantenimiento preventivo y correctivo de techos, cubiertas y canalones para naves industriales en el norte del Estado de México.",
    intro:"Una cubierta industrial requiere revisar no solamente las láminas: también tornillería, traslapes, remates, domos, extractores, canalones y bajadas. Documentamos los puntos críticos y priorizamos las correcciones.",
    problems:["Inspección y mantenimiento preventivo","Reparación de filtraciones","Cambio parcial o total de cubierta","Canalones, bajadas, domos y remates"],
    process:[{title:"Levantamiento",text:"Revisamos la cubierta y documentamos fallas visibles y puntos vulnerables."},{title:"Plan por prioridades",text:"Ordenamos los trabajos según riesgo, urgencia y operación del inmueble."},{title:"Mantenimiento documentado",text:"Ejecutamos, registramos las áreas atendidas y entregamos recomendaciones."}],
    faqs:[{q:"¿Pueden hacer mantenimiento sin detener la operación?",a:"El plan se adapta a accesos, seguridad y horarios del inmueble; la viabilidad se confirma después de la revisión."},{q:"¿Atienden mantenimientos periódicos?",a:"Sí, podemos plantear revisiones preventivas conforme al tipo y estado de la cubierta."},{q:"¿Cambian cubiertas completas?",a:"Sí, realizamos reemplazos parciales y completos cuando la reparación ya no es conveniente."}]
  },
  "instalacion-y-cambio-de-techos": {
    slug:"instalacion-y-cambio-de-techos", title:"Instalación y cambio de techos", eyebrow:"Una cubierta nueva, instalada correctamente",
    description:"Instalación y reemplazo parcial o completo de techos residenciales, comerciales e industriales.",
    intro:"Instalamos cubiertas nuevas y sustituimos techos deteriorados considerando el uso del inmueble, estructura disponible, desalojo de agua y material más conveniente.",
    problems:["Instalación de cubiertas nuevas","Cambio parcial de secciones dañadas","Sustitución completa de techos","Remates, canalones y bajadas pluviales"],
    process:[{title:"Medición y diagnóstico",text:"Revisamos dimensiones, estructura, accesos y necesidades del inmueble."},{title:"Propuesta de sistema",text:"Definimos material, alcances, tiempos y condiciones de garantía."},{title:"Instalación",text:"Retiramos o instalamos de forma planificada y verificamos terminaciones."}],
    faqs:[{q:"¿Instalan cualquier tipo de techo?",a:"Trabajamos con distintos sistemas residenciales e industriales; la propuesta depende de la estructura y el uso del inmueble."},{q:"¿Retiran el techo anterior?",a:"Podemos incluir desmontaje y retiro cuando el proyecto lo requiera."},{q:"¿La instalación tiene garantía?",a:"Sí, el alcance y la vigencia se especifican por escrito en la cotización."}]
  }
};

const local = (slug:string,title:string,localDetail:string): PageData => ({
  slug, title:`Reparación e impermeabilización de techos en ${title}`, eyebrow:`Servicio local en ${title}`,
  description:`Reparación de techos e impermeabilización en ${title}. ${localDetail} Cotización gratuita y atención de emergencias 24 horas.`,
  intro:`Techofix atiende hogares, comercios y naves industriales en ${title}. Revisamos goteras, filtraciones, losas, láminas, canalones y cubiertas completas para recomendar una solución acorde con el daño real.`,
  problems:["Reparación de goteras y filtraciones","Impermeabilización de azoteas y cubiertas","Reparación y cambio de techos de lámina","Instalación y mantenimiento industrial"],
  process:[{title:"Contacto directo",text:"Llámanos o envía fotografías del problema por WhatsApp."},{title:"Cotización gratuita",text:`Coordinamos una revisión dentro de ${title} y explicamos el trabajo necesario.`},{title:"Trabajo garantizado",text:"Realizamos la reparación acordada y entregamos la garantía aplicable por escrito."}],
  faqs:[{q:`¿Atienden emergencias en ${title}?`,a:"Sí, recibimos solicitudes las 24 horas y confirmamos disponibilidad según ubicación y condiciones del trabajo."},{q:"¿Trabajan casas y naves industriales?",a:"Sí, atendemos inmuebles residenciales, comerciales e industriales."},{q:"¿La cotización es gratuita?",a:"Sí, la inspección y cotización inicial son gratuitas dentro de nuestra cobertura."}]
});

export const areas: Record<string,PageData> = {
  coacalco: local("coacalco","Coacalco","Servicio para casas, condominios, comercios y pequeñas industrias."),
  tultitlan: local("tultitlan","Tultitlán","Cobertura residencial, logística e industrial en distintos sectores del municipio."),
  zumpango: local("zumpango","Zumpango","Atendemos fraccionamientos, comunidades, talleres y bodegas."),
  tultepec: local("tultepec","Tultepec","Servicio para viviendas, locales, talleres autorizados y cubiertas mixtas."),
  cuautitlan: local("cuautitlan","Cuautitlán","Soluciones para viviendas, comercios, parques industriales y centros de distribución."),
  "cuautitlan-izcalli": local("cuautitlan-izcalli","Cuautitlán Izcalli","Atención en fraccionamientos, plazas, oficinas y corredores industriales."),
  tlalnepantla: local("tlalnepantla","Tlalnepantla","Servicio urbano e industrial para fábricas, bodegas, comercios y viviendas.")
};
