export type PageData = {
  slug: string; title: string; eyebrow: string; description: string; intro: string;
  problems: string[]; process: { title: string; text: string }[]; faqs: { q: string; a: string }[];
};

export const services: Record<string, PageData> = {
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

const local = (slug:string,title:string): PageData => ({
  slug, title:`Reparación de techos en ${title}`, eyebrow:`Servicio local en ${title}`,
  description:`Reparación, instalación e impermeabilización de techos residenciales e industriales en ${title}, Estado de México. Cotización gratuita y emergencias 24 horas.`,
  intro:`Techofix atiende hogares, comercios y naves industriales en ${title}. Revisamos goteras, filtraciones, losas, láminas, canalones y cubiertas completas para recomendar una solución acorde con el daño real.`,
  problems:["Reparación de goteras y filtraciones","Impermeabilización de azoteas y cubiertas","Reparación y cambio de techos de lámina","Instalación y mantenimiento industrial"],
  process:[{title:"Contacto directo",text:"Llámanos o envía fotografías del problema por WhatsApp."},{title:"Cotización gratuita",text:`Coordinamos una revisión dentro de ${title} y explicamos el trabajo necesario.`},{title:"Trabajo garantizado",text:"Realizamos la reparación acordada y entregamos la garantía aplicable por escrito."}],
  faqs:[{q:`¿Atienden emergencias en ${title}?`,a:"Sí, recibimos solicitudes las 24 horas y confirmamos disponibilidad según ubicación y condiciones del trabajo."},{q:"¿Trabajan casas y naves industriales?",a:"Sí, atendemos inmuebles residenciales, comerciales e industriales."},{q:"¿La cotización es gratuita?",a:"Sí, la inspección y cotización inicial son gratuitas dentro de nuestra cobertura."}]
});

export const areas: Record<string,PageData> = {
  coacalco: local("coacalco","Coacalco"), tultitlan: local("tultitlan","Tultitlán"),
  cuautitlan: local("cuautitlan","Cuautitlán"), "cuautitlan-izcalli": local("cuautitlan-izcalli","Cuautitlán Izcalli")
};
