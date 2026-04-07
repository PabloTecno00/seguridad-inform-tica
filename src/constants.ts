export interface TheorySection {
  id: string;
  title: string;
  content: string;
}

export const THEORY_DOSSIER: TheorySection[] = [
  {
    id: 's1',
    title: '5.1. Seguridad de los dispositivos',
    content: `
      <p>Proteger nuestros dispositivos requiere entender que existen dos tipos de medidas: las que actúan <strong>después</strong> de que ocurra un problema, y las que actúan <strong>antes</strong> de que ocurra.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-3 bg-nexus-accent/5 border border-nexus-accent/20 rounded">
          <h4 class="text-nexus-accent font-bold text-xs mb-2 uppercase">Medidas correctivas</h4>
          <p class="text-xs">Soluciones aplicadas <strong>después</strong> de un incidente. Pueden ser reactivas (respuesta inmediata) o proactivas (evitar repetición). Son costosas y no siempre reparables.</p>
        </div>
        <div class="p-3 bg-nexus-success/5 border border-nexus-success/20 rounded">
          <h4 class="text-nexus-success font-bold text-xs mb-2 uppercase">Medidas preventivas</h4>
          <p class="text-xs">Acciones tomadas <strong>antes</strong> de que surja un problema. Su objetivo es identificar, anticipar y mitigar riesgos. Son más eficaces y seguras.</p>
        </div>
      </div>
      <h4>5.1.1. Medidas preventivas críticas</h4>
      <ul>
        <li><strong>Actualizaciones:</strong> El software desactualizado es la puerta principal de entrada para atacantes. Los parches de seguridad cierran vulnerabilidades conocidas.</li>
        <li><strong>Control de acceso:</strong> PIN, patrones complejos, biometría (huella, cara). El bloqueo automático debe activarse tras pocos minutos.</li>
        <li><strong>Cifrado:</strong> Convierte los datos en ilegibles sin la clave. Protege la información incluso si roban el dispositivo físicamente.</li>
        <li><strong>Gestión de contraseñas:</strong> Deben ser robustas (12+ caracteres, mezcla de tipos) y únicas. Se recomienda usar <strong>Gestores de Contraseñas</strong>.</li>
        <li><strong>2FA (Doble Factor):</strong> Añade una capa extra. Aunque roben tu contraseña, necesitan un código físico (SMS, App, Token).</li>
      </ul>
      <h4>5.1.2. Herramientas esenciales</h4>
      <p>Complementan la prevención: Antivirus (escaneo en tiempo real), Cortafuegos (control de tráfico), VPN (cifrado de conexión en redes públicas) y herramientas Antirrobo (localización y borrado remoto).</p>
    `
  },
  {
    id: 's2',
    title: '5.2. Seguridad de los datos y la identidad',
    content: `
      <p>Nuestra presencia en Internet construye una representación digital de quiénes somos. Gestionarla es vital para nuestra vida personal y profesional.</p>
      <h4>5.2.1. Identidad Digital</h4>
      <p>Es la representación virtual de quién eres: nombre, fotos, perfiles, correos e historial. Se alimenta de la <strong>Huella Digital</strong>.</p>
      <ul>
        <li><strong>Huella Activa:</strong> Lo que publicas conscientemente (posts, fotos).</li>
        <li><strong>Huella Pasiva:</strong> Datos que se recopilan sin que lo sepas (cookies, ubicación, historial de navegación).</li>
      </ul>
      <p class="text-nexus-warning text-xs italic">La huella digital es prácticamente permanente e imposible de borrar por completo.</p>
      <h4>5.2.2. Reputación Digital</h4>
      <p>Es la opinión o prestigio que los demás tienen de ti basándose en tu identidad digital. Las empresas y universidades realizan búsquedas online de candidatos antes de contratarlos.</p>
      <h4>5.2.3. Privacidad en Redes Sociales</h4>
      <ul>
        <li><strong>Perfil Privado:</strong> Limita quién ve tu contenido.</li>
        <li><strong>Principio de Mínimo Privilegio:</strong> Concede a las apps solo los permisos estrictamente necesarios.</li>
        <li><strong>Oversharing:</strong> Compartir demasiado puede dar pistas sobre tu ubicación física o hábitos de vida.</li>
      </ul>
    `
  },
  {
    id: 's3',
    title: '5.3. Salud y Bienestar Digital',
    content: `
      <p>El uso de tecnología impacta directamente en nuestro cuerpo y mente.</p>
      <h4>5.3.1. Salud Física</h4>
      <ul>
        <li><strong>Ergonomía:</strong> Monitor a la altura de los ojos, espalda recta y pies apoyados.</li>
        <li><strong>Fatiga Visual:</strong> Causada por la luz azul y falta de parpadeo. Regla 20-20-20 (cada 20 min, mirar a 20 metros durante 20 seg).</li>
        <li><strong>Luz Azul:</strong> Inhibe la melatonina, alterando el ciclo del sueño. Se recomienda activar filtros nocturnos.</li>
      </ul>
      <h4>5.3.2. Salud Mental</h4>
      <ul>
        <li><strong>FOMO (Fear Of Missing Out):</strong> Ansiedad por no estar conectado y perderse algo.</li>
        <li><strong>Comparación Social:</strong> Las redes muestran versiones "curadas" y editadas de la realidad, afectando la autoestima.</li>
        <li><strong>Hiperconexión:</strong> Genera estrés crónico y dependencia.</li>
      </ul>
    `
  },
  {
    id: 's4',
    title: '5.4. Amenazas y Riesgos en la Red',
    content: `
      <div class="space-y-4">
        <div class="border-l-2 border-nexus-danger pl-3">
          <h4 class="text-nexus-danger font-bold text-sm">Phishing</h4>
          <p class="text-xs">Suplantación de identidad (bancos, servicios) para robar claves. Señal: dominios falsos y urgencia artificial.</p>
        </div>
        <div class="border-l-2 border-nexus-danger pl-3">
          <h4 class="text-nexus-danger font-bold text-sm">Malware / Ransomware</h4>
          <p class="text-xs">Software malicioso. El Ransomware cifra tus archivos y pide un rescate económico.</p>
        </div>
        <div class="border-l-2 border-nexus-danger pl-3">
          <h4 class="text-nexus-danger font-bold text-sm">Ingeniería Social</h4>
          <p class="text-xs">Manipulación psicológica para que reveles secretos. No usa código, usa la confianza.</p>
        </div>
        <div class="border-l-2 border-nexus-danger pl-3">
          <h4 class="text-nexus-danger font-bold text-sm">Ciberacoso / Grooming</h4>
          <p class="text-xs">Hostigamiento digital o manipulación de adultos hacia menores. Son delitos graves.</p>
        </div>
      </div>
    `
  },
  {
    id: 's5',
    title: '5.5. Legislación y Derechos Digitales',
    content: `
      <p>La protección de datos está regulada por leyes estrictas que nos otorgan derechos fundamentales.</p>
      <h4>5.5.1. RGPD y LOPD-GDD</h4>
      <p>El <strong>Reglamento General de Protección de Datos (RGPD)</strong> es la norma europea, y la <strong>LOPD-GDD</strong> es la adaptación española. Ambas protegen nuestra privacidad.</p>
      <h4>5.5.2. Derechos ARCO-POL</h4>
      <ul>
        <li><strong>Acceso:</strong> Saber qué datos tienen de ti.</li>
        <li><strong>Rectificación:</strong> Corregir datos erróneos.</li>
        <li><strong>Cancelación/Supresión:</strong> Solicitar que borren tus datos.</li>
        <li><strong>Oposición:</strong> Negarte a que usen tus datos para ciertos fines.</li>
        <li><strong>Portabilidad:</strong> Llevarte tus datos de un servicio a otro.</li>
        <li><strong>Olvido:</strong> Derecho a que desaparezcan enlaces a información obsoleta o irrelevante en buscadores.</li>
        <li><strong>Limitación:</strong> Restringir el tratamiento de tus datos.</li>
      </ul>
      <h4>5.5.3. Derecho a la Desconexión Digital</h4>
      <p>Derecho de los trabajadores y estudiantes a no responder comunicaciones (correos, mensajes) fuera de su horario lectivo o laboral para garantizar su descanso.</p>
    `
  },
  {
    id: 's6',
    title: '5.6. Seguridad en Redes y Navegación',
    content: `
      <p>Navegar por la red implica exponer datos a través de las conexiones que utilizamos.</p>
      <h4>5.6.1. Protocolos Seguros</h4>
      <p><strong>HTTPS:</strong> El candado verde en la barra de direcciones indica que la conexión entre tu navegador y el servidor está cifrada. Nunca introduzcas datos en sitios solo <strong>HTTP</strong>.</p>
      <h4>5.6.2. Riesgos de Wi-Fi Públicos</h4>
      <p>Las redes abiertas (aeropuertos, cafeterías) pueden ser interceptadas por atacantes ("Man-in-the-Middle"). Evita realizar transacciones bancarias o acceder a cuentas sensibles en estas redes.</p>
      <h4>5.6.3. VPN (Virtual Private Network)</h4>
      <p>Crea un "túnel" cifrado para tu tráfico de Internet, ocultando tu dirección IP y protegiendo tus datos incluso en redes poco seguras.</p>
      <h4>5.6.4. Cookies</h4>
      <p>Pequeños archivos que los sitios web guardan en tu navegador. Pueden ser técnicas (necesarias) o de seguimiento (publicitarias). Es recomendable limpiar las cookies periódicamente.</p>
    `
  },
  {
    id: 's7',
    title: '5.7. Criptografía Básica',
    content: `
      <p>La criptografía es el arte de escribir mensajes cifrados para que solo el destinatario pueda leerlos.</p>
      <h4>5.7.1. Cifrado Simétrico</h4>
      <p>Se usa la misma clave para cifrar y descifrar. Es rápido pero arriesgado si la clave se intercepta.</p>
      <h4>5.7.2. Cifrado Asimétrico (Clave Pública)</h4>
      <p>Usa un par de claves: una <strong>pública</strong> (que todos conocen) para cifrar, y una <strong>privada</strong> (que solo tú tienes) para descifrar. Es la base de la seguridad en Internet.</p>
      <h4>5.7.3. Funciones Hash</h4>
      <p>Algoritmos que convierten cualquier dato en una cadena de caracteres de longitud fija. Son irreversibles. Se usan para verificar la integridad de archivos y almacenar contraseñas de forma segura.</p>
    `
  },
  {
    id: 's8',
    title: '5.8. Ingeniería Social Avanzada',
    content: `
      <p>Los atacantes no siempre hackean sistemas; a menudo "hackean" a las personas.</p>
      <ul>
        <li><strong>Vishing:</strong> Phishing a través de llamadas telefónicas (voz + phishing).</li>
        <li><strong>Smishing:</strong> Phishing a través de mensajes SMS.</li>
        <li><strong>Baiting:</strong> Dejar un USB infectado en un lugar público esperando que alguien lo conecte por curiosidad.</li>
        <li><strong>Quid pro quo:</strong> El atacante ofrece un servicio o beneficio a cambio de información (ej: "te arreglo el PC si me das tu clave").</li>
        <li><strong>Shoulder Surfing:</strong> Mirar por encima del hombro mientras alguien introduce un PIN o contraseña.</li>
      </ul>
    `
  },
  {
    id: 's9',
    title: '5.9. Comercio Electrónico Seguro',
    content: `
      <p>Comprar online requiere verificar la fiabilidad del vendedor y la seguridad del pago.</p>
      <ul>
        <li><strong>Sellos de Confianza:</strong> Logotipos como "Confianza Online" que garantizan buenas prácticas.</li>
        <li><strong>Pasarelas de Pago:</strong> Uso de intermediarios seguros (PayPal, Apple Pay) o tarjetas virtuales de un solo uso.</li>
        <li><strong>Certificados SSL:</strong> Verifica siempre el candado y que la URL coincida con la tienda real.</li>
      </ul>
    `
  },
  {
    id: 's10',
    title: '5.10. Internet de las Cosas (IoT)',
    content: `
      <p>Cualquier objeto conectado (bombillas, cámaras, altavoces) es un ordenador potencial que puede ser hackeado.</p>
      <ul>
        <li><strong>Contraseñas por defecto:</strong> Deben cambiarse inmediatamente tras la compra.</li>
        <li><strong>Segmentación de red:</strong> Es ideal tener los dispositivos IoT en una red Wi-Fi separada de los ordenadores principales.</li>
        <li><strong>Privacidad:</strong> Desactivar micrófonos y cámaras cuando no se usen.</li>
      </ul>
    `
  },
  {
    id: 's11',
    title: '5.11. Inteligencia Artificial y Ética',
    content: `
      <p>La IA trae nuevos retos de veracidad y privacidad.</p>
      <ul>
        <li><strong>Deepfakes:</strong> Vídeos o audios falsos creados con IA que parecen reales. Se usan para desinformar o estafar.</li>
        <li><strong>Sesgos Algorítmicos:</strong> La IA puede heredar prejuicios humanos de los datos con los que se entrena.</li>
        <li><strong>Alucinaciones:</strong> Las IA generativas pueden inventar hechos con total seguridad. Siempre hay que verificar la fuente.</li>
      </ul>
    `
  },
  {
    id: 's12',
    title: '5.12. Propiedad Intelectual y Licencias',
    content: `
      <p>No todo lo que está en Internet es gratis o libre de uso.</p>
      <ul>
        <li><strong>Copyright:</strong> Todos los derechos reservados. Necesitas permiso explícito del autor.</li>
        <li><strong>Creative Commons (CC):</strong> Licencias que permiten compartir bajo ciertas condiciones (atribución, no comercial, etc.).</li>
        <li><strong>Plagio:</strong> Copiar el trabajo de otro y presentarlo como propio es una falta ética y legal grave.</li>
      </ul>
    `
  },
  {
    id: 's13',
    title: '5.13. Ciberactivismo y Ética en la IA',
    content: `
      <p>La tecnología puede ser una herramienta para el cambio social, pero también presenta riesgos éticos.</p>
      <ul>
        <li><strong>Ciberactivismo:</strong> Uso de redes para causas sociales (hashtags, peticiones online).</li>
        <li><strong>Sesgo Algorítmico:</strong> Cuando una IA discrimina por raza, género o edad debido a datos de entrenamiento sesgados.</li>
        <li><strong>Deepfakes:</strong> Vídeos o audios falsos creados con IA para suplantar identidades o desinformar.</li>
      </ul>
    `
  },
  {
    id: 's14',
    title: '5.14. Economía Digital y Criptoactivos',
    content: `
      <p>El dinero digital y las criptomonedas han cambiado la economía, pero requieren precaución extrema.</p>
      <ul>
        <li><strong>Blockchain:</strong> Tecnología de registro descentralizado y seguro.</li>
        <li><strong>Criptomonedas:</strong> Monedas digitales (Bitcoin, Ethereum) volátiles y no reguladas por bancos centrales.</li>
        <li><strong>Estafas Ponzi:</strong> Promesas de rentabilidad alta e irreal para atraer inversores y robar su dinero.</li>
      </ul>
    `
  },
  {
    id: 's15',
    title: '5.15. Sostenibilidad y Brecha Digital',
    content: `
      <p>El impacto de la tecnología no es solo virtual, también es físico y social.</p>
      <ul>
        <li><strong>E-waste:</strong> Residuos electrónicos que contienen metales pesados contaminantes.</li>
        <li><strong>Huella de Carbono:</strong> Los centros de datos consumen enormes cantidades de energía y agua.</li>
        <li><strong>Brecha Digital:</strong> Desigualdad en el acceso a internet y dispositivos por motivos económicos o geográficos.</li>
      </ul>
    `
  },
  {
    id: 's16',
    title: '5.16. Diseño y Manipulación (Dark Patterns)',
    content: `
      <p>No todo el diseño web busca ayudar al usuario; a veces busca engañarlo.</p>
      <ul>
        <li><strong>Patrones Oscuros:</strong> Trucos de diseño para que compres más, te suscribas sin querer o compartas datos.</li>
        <li><strong>Cámaras de Eco:</strong> Algoritmos que solo te muestran lo que ya piensas, reforzando tus prejuicios.</li>
        <li><strong>Accesibilidad:</strong> Diseñar para que personas con discapacidad puedan usar la tecnología.</li>
      </ul>
    `
  },
  {
    id: 's17',
    title: '5.17. El Futuro de la Tecnología',
    content: `
      <p>La computación cuántica y el Internet de los Cuerpos (IoB) están a la vuelta de la esquina.</p>
      <ul>
        <li><strong>Qubits:</strong> Unidades de información cuántica que pueden estar en superposición (0 y 1 a la vez).</li>
        <li><strong>Entrelazamiento:</strong> Propiedad cuántica donde dos partículas están conectadas sin importar la distancia.</li>
        <li><strong>Criptografía Post-Cuántica:</strong> Nuevos métodos de cifrado resistentes a ordenadores cuánticos.</li>
        <li><strong>IoB (Internet of Bodies):</strong> Dispositivos conectados dentro del cuerpo humano para salud o mejora.</li>
      </ul>
    `
  }
];

export interface Challenge {
  id: string;
  title: string;
  topic: string;
  description: string;
  tasks: Task[];
  codeFragment: string;
}

export interface Task {
  id: string;
  type: 'multiple-choice' | 'sorting' | 'spot-the-error' | 'scenario' | 'terminal' | 'pattern' | 'text-input' | 'toggle-grid' | 'slider';
  question: string;
  options?: string[];
  correctAnswer: any;
  explanation: string;
  hint: string;
  data?: any;
}

export const CHALLENGES: Challenge[] = [
  {
    id: 'c1',
    title: 'Módulo 1: Auditoría de Sistemas',
    topic: 'Seguridad de Dispositivos',
    description: 'Como nuevo analista de NEXUS, tu primera misión es asegurar el terminal de un directivo que ha sido comprometido. Debes identificar las brechas de seguridad física y lógica.',
    codeFragment: 'N',
    tasks: [
      {
        id: 't1-1',
        type: 'multiple-choice',
        question: 'El sistema operativo del terminal indica "Versión 12.0.4 (Última actualización: hace 240 días)". ¿Cuál es el procedimiento estándar?',
        options: [
          'Ignorar si el antivirus está activo.',
          'Programar actualización para el fin de semana.',
          'Actualizar de inmediato: los parches de seguridad corrigen vulnerabilidades críticas.',
          'Desinstalar el SO y reinstalarlo de cero.'
        ],
        correctAnswer: 2,
        explanation: 'Las actualizaciones de seguridad son críticas porque cierran "exploits" conocidos que los atacantes usan para entrar sin permiso.',
        hint: 'Busca la sección 5.1.1 del dossier.'
      },
      {
        id: 't1-2',
        type: 'scenario',
        question: 'Encuentras un post-it pegado bajo el teclado con el texto "Admin_2024!". ¿Qué vulnerabilidad representa?',
        options: [
          'Vulnerabilidad de red.',
          'Falta de seguridad física y mala gestión de credenciales.',
          'Ingeniería social inversa.',
          'No es un problema si el despacho tiene llave.'
        ],
        correctAnswer: 1,
        explanation: 'La seguridad física es el primer eslabón. Una contraseña escrita físicamente anula cualquier protección digital.',
        hint: 'Consulta la sección 5.1.1 sobre Control de Acceso.'
      },
      {
        id: 't1-3',
        type: 'multiple-choice',
        question: '¿Cuál de estas es una medida PREVENTIVA en lugar de CORRECTIVA?',
        options: [
          'Restaurar una copia de seguridad tras un virus.',
          'Cambiar el disco duro dañado.',
          'Activar el cifrado de disco antes de usar el equipo.',
          'Formatear el ordenador después de un ataque.'
        ],
        correctAnswer: 2,
        explanation: 'Las medidas preventivas actúan antes del problema para evitarlo o mitigar su impacto.',
        hint: 'Revisa la tabla comparativa en la sección 5.1.'
      },
      {
        id: 't1-4',
        type: 'sorting',
        question: 'Ordena estos elementos de seguridad de "Más Externo/Físico" a "Más Interno/Lógico":',
        options: [
          'Cierre con llave del despacho',
          'Contraseña de usuario',
          'Cifrado de archivos individuales',
          'Bloqueo de pantalla automático'
        ],
        correctAnswer: [0, 3, 1, 2],
        explanation: 'La seguridad debe aplicarse en capas, desde el acceso físico al edificio hasta el cifrado del dato final.',
        hint: 'Piensa en el camino que recorre un atacante desde la calle hasta el archivo.'
      },
      {
        id: 't1-5',
        type: 'multiple-choice',
        question: '¿Qué herramienta monitoriza el tráfico de red para bloquear accesos no autorizados?',
        options: [
          'Antivirus',
          'Cortafuegos (Firewall)',
          'Desfragmentador',
          'Copia de seguridad'
        ],
        correctAnswer: 1,
        explanation: 'El cortafuegos actúa como una barrera entre redes, filtrando el tráfico según reglas de seguridad.',
        hint: 'Sección 5.1.2.'
      }
    ]
  },
  {
    id: 'c2',
    title: 'Módulo 2: Bóveda de Credenciales',
    topic: 'Gestión de Contraseñas',
    description: 'Hemos detectado un intento de fuerza bruta contra el servidor central. Debes fortalecer las políticas de acceso de la compañía.',
    codeFragment: 'E',
    tasks: [
      {
        id: 't2-1',
        type: 'sorting',
        question: 'Ordena estas contraseñas de MENOS SEGURA a MÁS SEGURA:',
        options: [
          '12345678',
          'P@ssw0rd2024',
          'MiPerroSeLlamaToby',
          'C4ballo-Azul-Saltando-99!'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La longitud y la aleatoriedad (frases de paso) son más efectivas que sustituciones simples.',
        hint: 'Consulta la gestión de contraseñas en 5.1.1.'
      },
      {
        id: 't2-2',
        type: 'multiple-choice',
        question: '¿Cuál es la función principal de un Gestor de Contraseñas?',
        options: [
          'Recordar una sola clave para todo.',
          'Generar y almacenar contraseñas robustas y únicas para cada servicio.',
          'Hackear cuentas olvidadas.',
          'Enviar tus claves a la nube sin cifrar.'
        ],
        correctAnswer: 1,
        explanation: 'Un gestor permite tener cientos de claves complejas sin tener que memorizarlas.',
        hint: 'Busca "Gestores de Contraseñas" en 5.1.1.'
      },
      {
        id: 't2-3',
        type: 'pattern',
        question: 'Dibuja el patrón de desbloqueo de emergencia (Secuencia: 1-5-9-8-7):',
        correctAnswer: '15987',
        explanation: 'Los patrones visuales deben ser complejos y no seguir formas predecibles.',
        hint: 'Introduce los números en orden: 1, 5, 9, 8, 7.',
        data: { grid: [1,2,3,4,5,6,7,8,9] }
      },
      {
        id: 't2-4',
        type: 'slider',
        question: 'Ajusta la complejidad de la contraseña maestra: Debe estar al 95% para ser inexpugnable.',
        correctAnswer: 95,
        explanation: 'Las contraseñas maestras deben ser extremadamente complejas para proteger el resto de credenciales.',
        hint: 'Mueve el deslizador al 95%.',
        data: { minLabel: 'DÉBIL', maxLabel: 'FUERTE' }
      },
      {
        id: 't2-5',
        type: 'scenario',
        question: 'Recibes un código 2FA en tu móvil que no has solicitado. ¿Qué significa?',
        options: [
          'Que el sistema está funcionando mal.',
          'Que alguien conoce tu contraseña e intenta entrar en tu cuenta.',
          'Que has ganado un premio.',
          'Que debes introducir el código para ver qué pasa.'
        ],
        correctAnswer: 1,
        explanation: 'Si recibes un código sin pedirlo, es señal de que tu contraseña ha sido comprometida.',
        hint: 'Piensa en la seguridad reactiva.'
      }
    ]
  },
  {
    id: 'c3',
    title: 'Módulo 3: Rastro Digital',
    topic: 'Identidad y Reputación',
    description: 'Un candidato a un puesto directivo afirma tener una "reputación impecable". Investiga su huella digital profunda.',
    codeFragment: 'X',
    tasks: [
      {
        id: 't3-1',
        type: 'multiple-choice',
        question: '¿Qué compone principalmente tu "Huella Digital"?',
        options: [
          'Solo las fotos de Instagram.',
          'Toda la información que dejas al navegar: cookies, registros, comentarios, fotos...',
          'Tu huella dactilar escaneada.',
          'El historial de búsqueda que borras.'
        ],
        correctAnswer: 1,
        explanation: 'La huella digital es el rastro total, activo y pasivo, que generamos.',
        hint: 'Sección 5.2.1.'
      },
      {
        id: 't3-2',
        type: 'scenario',
        question: 'El candidato borró su cuenta de un foro polémico. ¿Ha desaparecido su rastro?',
        options: [
          'Sí, al borrar la cuenta se borra todo.',
          'No, existen archivos históricos, capturas y bases de datos de terceros.',
          'Solo si el foro era privado.',
          'Depende de si usó un alias.'
        ],
        correctAnswer: 1,
        explanation: 'Internet tiene memoria. Una vez publicado, pierdes el control sobre las copias.',
        hint: 'Advertencia en la sección 5.2.1.'
      },
      {
        id: 't3-3',
        type: 'spot-the-error',
        question: 'Analiza este perfil. ¿Qué dato NO debería ser público?',
        options: [
          'Nombre y apellidos.',
          'Experiencia laboral.',
          'Número de teléfono personal y dirección de casa.',
          'Habilidades.'
        ],
        correctAnswer: 2,
        explanation: 'Publicar datos privados facilita el acoso y el robo de identidad.',
        hint: 'Sección 5.2.1.'
      },
      {
        id: 't3-4',
        type: 'toggle-grid',
        question: 'Configura la privacidad: Activa solo los puertos de "Navegación Segura" (P1 y P3) y "Cifrado" (P4). Desactiva el resto.',
        correctAnswer: [true, false, true, true, false, false, false, false],
        explanation: 'Minimizar los puertos abiertos reduce la superficie de ataque.',
        hint: 'Activa P1, P3 y P4. El resto apagados.',
        data: { labels: ['HTTPS', 'FTP', 'DNS', 'SSL', 'TELNET', 'SMTP', 'POP3', 'IMAP'] }
      },
      {
        id: 't3-5',
        type: 'sorting',
        question: 'Ordena estos conceptos de "Más controlable por ti" a "Menos controlable":',
        options: [
          'Un post en tu propio perfil',
          'Un comentario que hiciste en un blog ajeno',
          'Una foto tuya que subió un amigo',
          'Tus datos en una base de datos robada'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'A medida que la información se aleja de tus plataformas, pierdes capacidad de gestión.',
        hint: 'Piensa en quién tiene el botón de "borrar".'
      }
    ]
  },
  {
    id: 'c4',
    title: 'Módulo 4: Muros de Cristal',
    topic: 'Privacidad en Redes',
    description: 'La red social interna de NEXUS ha sido mal configurada. Ajusta los permisos para evitar fugas.',
    codeFragment: 'U',
    tasks: [
      {
        id: 't4-1',
        type: 'scenario',
        question: 'Un empleado publica una foto de su mesa con el plan del próximo producto al fondo. ¿Qué es esto?',
        options: [
          'Marketing viral.',
          'Oversharing involuntario.',
          'Libertad de expresión.',
          'Un error de la cámara.'
        ],
        correctAnswer: 1,
        explanation: 'La privacidad no es solo lo que dices, sino lo que muestras involuntariamente.',
        hint: 'Busca "Oversharing" en 5.2.3.'
      },
      {
        id: 't4-2',
        type: 'multiple-choice',
        question: '¿Qué significa el "Principio de Mínimo Privilegio"?',
        options: [
          'Que las apps deben ser gratis.',
          'Que una app solo debe tener los permisos estrictamente necesarios.',
          'Que los usuarios VIP tienen más derechos.',
          'Que debes dar todos los permisos para que funcione bien.'
        ],
        correctAnswer: 1,
        explanation: 'Limitar permisos reduce la superficie de ataque y protege tu privacidad.',
        hint: 'Sección 5.2.3.'
      },
      {
        id: 't4-3',
        type: 'sorting',
        question: 'Pasos para configurar la privacidad de una cuenta nueva:',
        options: [
          'Poner el perfil en modo "Privado"',
          'Limitar permisos de apps de terceros',
          'Desactivar geolocalización de fotos',
          'Bloquear etiquetas de desconocidos'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Un enfoque por capas asegura la protección desde múltiples ángulos.',
        hint: 'Lista en 5.2.3.'
      },
      {
        id: 't4-4',
        type: 'slider',
        question: 'Calibra el nivel de privacidad de la red: Ajústalo al 85% para bloquear rastreadores sin romper la funcionalidad.',
        correctAnswer: 85,
        explanation: 'Un nivel alto de privacidad protege contra el rastreo masivo de datos.',
        hint: 'Mueve el deslizador hasta el 85%.',
        data: { minLabel: 'PÚBLICO', maxLabel: 'MÁXIMO' }
      },
      {
        id: 't4-5',
        type: 'spot-the-error',
        question: '¿Cuál de estos permisos es SOSPECHOSO para una app de "Calculadora"?',
        options: [
          'Acceso al teclado.',
          'Acceso a la memoria interna.',
          'Acceso a la lista de contactos y micrófono.',
          'Uso de la CPU.'
        ],
        correctAnswer: 2,
        explanation: 'Una calculadora no necesita saber con quién hablas ni escucharte.',
        hint: 'Aplica el mínimo privilegio.'
      }
    ]
  },
  {
    id: 'c5',
    title: 'Módulo 5: El Laberinto Legal',
    topic: 'Legislación y Derechos',
    description: 'NEXUS debe cumplir con la normativa vigente. Audita el cumplimiento legal de la empresa.',
    codeFragment: 'S',
    tasks: [
      {
        id: 't5-1',
        type: 'multiple-choice',
        question: '¿Qué significan las siglas RGPD?',
        options: [
          'Red Global de Protección Digital.',
          'Reglamento General de Protección de Datos.',
          'Registro General de Personas Digitales.',
          'Regla de Gestión de Privacidad Directa.'
        ],
        correctAnswer: 1,
        explanation: 'Es la norma europea que regula la privacidad y protección de datos.',
        hint: 'Sección 5.5.1.'
      },
      {
        id: 't5-2',
        type: 'multiple-choice',
        question: '¿Qué derecho te permite pedir que borren tus datos personales?',
        options: [
          'Derecho de Acceso.',
          'Derecho de Rectificación.',
          'Derecho de Cancelación/Supresión.',
          'Derecho de Portabilidad.'
        ],
        correctAnswer: 2,
        explanation: 'El derecho de supresión permite eliminar datos cuando ya no son necesarios o el consentimiento se retira.',
        hint: 'Derechos ARCO-POL en 5.5.2.'
      },
      {
        id: 't5-3',
        type: 'scenario',
        question: 'Tu jefe te envía un WhatsApp de trabajo un domingo a las 22:00. ¿Qué derecho te ampara?',
        options: [
          'Derecho al olvido.',
          'Derecho a la desconexión digital.',
          'Derecho de oposición.',
          'Derecho a la intimidad.'
        ],
        correctAnswer: 1,
        explanation: 'La desconexión digital garantiza el descanso fuera del horario laboral/lectivo.',
        hint: 'Sección 5.5.3.'
      },
      {
        id: 't5-4',
        type: 'multiple-choice',
        question: '¿Qué es el "Derecho al Olvido"?',
        options: [
          'Derecho a olvidar tus contraseñas.',
          'Derecho a que se eliminen enlaces a información obsoleta en buscadores.',
          'Derecho a no estudiar para los exámenes.',
          'Derecho a borrar el historial del navegador.'
        ],
        correctAnswer: 1,
        explanation: 'Permite que información antigua o irrelevante no aparezca eternamente en los buscadores.',
        hint: 'Sección 5.5.2.'
      },
      {
        id: 't5-5',
        type: 'sorting',
        question: 'Ordena los derechos ARCO-POL por su sigla:',
        options: [
          'Acceso',
          'Rectificación',
          'Cancelación',
          'Oposición'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Es la mnemotecnia clásica para recordar los derechos básicos de protección de datos.',
        hint: 'A-R-C-O.'
      }
    ]
  },
  {
    id: 'c6',
    title: 'Módulo 6: Redes Invisibles',
    topic: 'Seguridad en Redes',
    description: 'Un espía intenta interceptar las comunicaciones de NEXUS. Asegura las conexiones.',
    codeFragment: '-',
    tasks: [
      {
        id: 't6-1',
        type: 'spot-the-error',
        question: '¿Cuál de estas URLs es SEGURA para introducir una tarjeta de crédito?',
        options: [
          'http://mi-banco-seguro.com/login',
          'https://banco-nexus.es/pagos',
          'ftp://transferencias.net/pago',
          'www.pagos-rapidos.com/check'
        ],
        correctAnswer: 1,
        explanation: 'HTTPS indica que la comunicación está cifrada mediante certificados SSL/TLS.',
        hint: 'Busca el candado en 5.6.1.'
      },
      {
        id: 't6-2',
        type: 'multiple-choice',
        question: '¿Qué riesgo corres al usar un Wi-Fi público abierto?',
        options: [
          'Que el móvil se infecte con un virus físico.',
          'Ataques "Man-in-the-Middle" donde interceptan tus datos.',
          'Que la batería se agote en segundos.',
          'No hay riesgo si usas modo incógnito.'
        ],
        correctAnswer: 1,
        explanation: 'En redes abiertas, cualquiera con las herramientas adecuadas puede "escuchar" tu tráfico.',
        hint: 'Sección 5.6.2.'
      },
      {
        id: 't6-3',
        type: 'multiple-choice',
        question: '¿Cómo ayuda una VPN?',
        options: [
          'Aumenta la velocidad de descarga.',
          'Crea un túnel cifrado que protege tus datos e IP.',
          'Limpia los virus del ordenador.',
          'Permite usar Internet sin pagar.'
        ],
        correctAnswer: 1,
        explanation: 'La VPN oculta tu actividad y protege tus datos incluso en redes inseguras.',
        hint: 'Sección 5.6.3.'
      },
      {
        id: 't6-4',
        type: 'scenario',
        question: 'Estás en una cafetería y necesitas entrar en tu correo. ¿Qué haces?',
        options: [
          'Usar el Wi-Fi abierto, es rápido.',
          'Usar tus datos móviles o una VPN sobre el Wi-Fi.',
          'Pedirle el móvil a un desconocido.',
          'No entrar si no hay HTTPS (aunque sea Wi-Fi abierto).'
        ],
        correctAnswer: 1,
        explanation: 'Los datos móviles o una VPN son las únicas formas seguras en entornos públicos.',
        hint: 'Seguridad en redes públicas.'
      },
      {
        id: 't6-5',
        type: 'multiple-choice',
        question: '¿Para qué sirven las "Cookies de seguimiento"?',
        options: [
          'Para recordar tu contraseña.',
          'Para que el sitio cargue más rápido.',
          'Para rastrear tu navegación y mostrarte publicidad personalizada.',
          'Para protegerte de ataques.'
        ],
        correctAnswer: 2,
        explanation: 'Son herramientas de marketing que pueden comprometer tu privacidad al crear perfiles de usuario.',
        hint: 'Sección 5.6.4.'
      }
    ]
  },
  {
    id: 'c7',
    title: 'Módulo 7: El Enigma del Cifrado',
    topic: 'Criptografía',
    description: 'Descifra los mensajes ocultos y protege la información confidencial de NEXUS.',
    codeFragment: 'S',
    tasks: [
      {
        id: 't7-1',
        type: 'multiple-choice',
        question: 'En el cifrado ASIMÉTRICO, ¿qué clave se usa para CIFRAR un mensaje destinado a ti?',
        options: [
          'Tu clave privada.',
          'Tu clave pública.',
          'La clave privada del emisor.',
          'Una clave compartida.'
        ],
        correctAnswer: 1,
        explanation: 'Cualquiera puede cifrar con tu clave pública, pero solo tú puedes descifrar con tu privada.',
        hint: 'Sección 5.7.2.'
      },
      {
        id: 't7-2',
        type: 'multiple-choice',
        question: '¿Cuál es la principal característica de una función HASH?',
        options: [
          'Es reversible.',
          'Es irreversible (unidireccional).',
          'Solo funciona con números.',
          'Requiere una clave secreta.'
        ],
        correctAnswer: 1,
        explanation: 'Un hash genera una firma única pero no permite recuperar el dato original.',
        hint: 'Integridad en 5.7.3.'
      },
      {
        id: 't7-3',
        type: 'sorting',
        question: 'Ordena los pasos del cifrado asimétrico (Emisor envía a Receptor):',
        options: [
          'Emisor obtiene la clave pública del Receptor',
          'Emisor cifra el mensaje con esa clave pública',
          'El mensaje viaja cifrado por la red',
          'Receptor descifra el mensaje con su clave privada'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Este proceso garantiza que solo el poseedor de la clave privada pueda leer el contenido.',
        hint: 'Flujo de claves en 5.7.2.'
      },
      {
        id: 't7-4',
        type: 'multiple-choice',
        question: '¿Por qué las empresas guardan el HASH de tu contraseña y no la contraseña real?',
        options: [
          'Para ahorrar espacio.',
          'Para que si roban la base de datos, no obtengan las contraseñas reales.',
          'Porque es más rápido de procesar.',
          'Por error de programación.'
        ],
        correctAnswer: 1,
        explanation: 'Al guardar el hash, la empresa puede verificar tu clave sin conocerla realmente.',
        hint: 'Uso de hashes en 5.7.3.'
      },
      {
        id: 't7-5',
        type: 'scenario',
        question: 'Quieres enviar un secreto a un amigo usando cifrado SIMÉTRICO. ¿Cuál es el mayor problema?',
        options: [
          'Que el mensaje es muy largo.',
          'Cómo enviarle la clave de forma segura sin que la intercepten.',
          'Que el cifrado simétrico no es seguro.',
          'Que necesitas Internet.'
        ],
        correctAnswer: 1,
        explanation: 'El intercambio de claves es el punto débil del cifrado simétrico.',
        hint: 'Sección 5.7.1.'
      }
    ]
  },
  {
    id: 'c8',
    title: 'Módulo 8: Manipulación Psicológica',
    topic: 'Ingeniería Social',
    description: 'Los atacantes están usando el engaño para entrar en NEXUS. Identifica sus tácticas.',
    codeFragment: 'E',
    tasks: [
      {
        id: 't8-1',
        type: 'multiple-choice',
        question: '¿Qué es el "Vishing"?',
        options: [
          'Phishing visual.',
          'Phishing a través de llamadas de voz.',
          'Un virus que borra vídeos.',
          'Pescar en Internet.'
        ],
        correctAnswer: 1,
        explanation: 'El atacante finge ser alguien de confianza por teléfono para obtener datos.',
        hint: 'Sección 5.8.'
      },
      {
        id: 't8-2',
        type: 'scenario',
        question: 'Encuentras un USB en el parking de la empresa con la etiqueta "Salarios 2026". ¿Qué haces?',
        options: [
          'Conectarlo para ver cuánto gana mi jefe.',
          'Entregarlo al departamento de seguridad sin conectarlo.',
          'Formatearlo y quedármelo.',
          'Dárselo a un compañero.'
        ],
        correctAnswer: 1,
        explanation: 'Es un ataque de "Baiting". El USB probablemente contiene malware.',
        hint: 'Busca "Baiting" en 5.8.'
      },
      {
        id: 't8-3',
        type: 'multiple-choice',
        question: '¿Qué técnica consiste en mirar lo que alguien escribe en su pantalla o teclado?',
        options: [
          'Screening.',
          'Shoulder Surfing.',
          'Spying.',
          'Back-watching.'
        ],
        correctAnswer: 1,
        explanation: 'Es una forma física de ingeniería social muy común en cajeros y transporte público.',
        hint: 'Sección 5.8.'
      },
      {
        id: 't8-4',
        type: 'spot-the-error',
        question: 'Recibes un SMS: "Tu paquete NEXUS está retenido. Paga 1.50€ aquí: bit.ly/3xYz". ¿Qué es esto?',
        options: [
          'Una oferta especial.',
          'Smishing (Phishing por SMS).',
          'Un error de correos.',
          'Publicidad legítima.'
        ],
        correctAnswer: 1,
        explanation: 'Los enlaces cortos y la urgencia por un pago pequeño son señales típicas de Smishing.',
        hint: 'Sección 5.8.'
      },
      {
        id: 't8-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Quid pro quo" en ingeniería social?',
        options: [
          'Un virus latino.',
          'Ofrecer un beneficio o servicio a cambio de información.',
          'Atacar dos veces seguidas.',
          'Un tipo de cifrado.'
        ],
        correctAnswer: 1,
        explanation: 'El atacante se hace pasar por soporte técnico, por ejemplo, para "ayudarte" a cambio de tu clave.',
        hint: 'Sección 5.8.'
      }
    ]
  },
  {
    id: 'c9',
    title: 'Módulo 9: Aguas Infestadas',
    topic: 'Amenazas y Malware',
    description: 'Un ataque coordinado está golpeando NEXUS. Identifica y neutraliza las amenazas.',
    codeFragment: 'C',
    tasks: [
      {
        id: 't9-1',
        type: 'multiple-choice',
        question: '¿Qué diferencia al Ransomware de otros malware?',
        options: [
          'Que es más rápido.',
          'Que cifra tus archivos y pide un rescate.',
          'Que solo afecta a móviles.',
          'Que se borra solo.'
        ],
        correctAnswer: 1,
        explanation: 'El ransomware busca el beneficio económico directo mediante el secuestro de datos.',
        hint: 'Sección 5.4.'
      },
      {
        id: 't9-2',
        type: 'scenario',
        question: 'Tu ordenador empieza a ir muy lento y aparecen anuncios por todas partes. ¿Qué tienes?',
        options: [
          'Un virus troyano.',
          'Adware.',
          'Poca memoria RAM.',
          'Un cortafuegos mal configurado.'
        ],
        correctAnswer: 1,
        explanation: 'El adware es malware diseñado para mostrar publicidad intrusiva.',
        hint: 'Tipos de malware.'
      },
      {
        id: 't9-3',
        type: 'multiple-choice',
        question: '¿Qué es un "Troyano"?',
        options: [
          'Un virus que se multiplica solo.',
          'Malware que se disfraza de software legítimo para engañar al usuario.',
          'Un ataque de denegación de servicio.',
          'Un hardware infectado.'
        ],
        correctAnswer: 1,
        explanation: 'Como el caballo de madera, parece un regalo pero contiene una amenaza en su interior.',
        hint: 'Sección 5.4.'
      },
      {
        id: 't9-4',
        type: 'sorting',
        question: 'Ordena los pasos de un ataque de Phishing típico:',
        options: [
          'Envío masivo de correos alarmantes',
          'Usuario hace clic en enlace falso',
          'Usuario introduce credenciales en web falsa',
          'Atacante roba las credenciales'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'El éxito del phishing depende de la rapidez y la falta de atención del usuario.',
        hint: 'Flujo del engaño.'
      },
      {
        id: 't9-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Grooming"?',
        options: [
          'Un tipo de virus informático.',
          'Manipulación de un adulto hacia un menor con fines de abuso.',
          'Una técnica de marketing digital.',
          'Limpiar el hardware del ordenador.'
        ],
        correctAnswer: 1,
        explanation: 'Es un delito grave que implica ganarse la confianza de un menor para explotarlo.',
        hint: 'Sección 5.4.'
      }
    ]
  },
  {
    id: 'c10',
    title: 'Módulo 10: Equilibrio Vital',
    topic: 'Salud y Bienestar',
    description: 'El equipo de NEXUS está agotado. Diseña el protocolo de bienestar digital.',
    codeFragment: '!',
    tasks: [
      {
        id: 't10-1',
        type: 'multiple-choice',
        question: '¿Qué es la "Luz Azul" y cómo afecta?',
        options: [
          'Es luz relajante.',
          'Luz de pantallas que inhibe la melatonina y altera el sueño.',
          'Señal de Wi-Fi.',
          'Solo afecta a la vista cansada.'
        ],
        correctAnswer: 1,
        explanation: 'El uso de pantallas antes de dormir dificulta el descanso profundo.',
        hint: 'Sección 5.3.1.'
      },
      {
        id: 't10-2',
        type: 'scenario',
        question: 'Un compañero siente ansiedad si no revisa el móvil cada 5 minutos. ¿Qué es?',
        options: [
          'FOMO (Miedo a perderse algo).',
          'Hiperconexión productiva.',
          'Efecto Google.',
          'Cibercondría.'
        ],
        correctAnswer: 0,
        explanation: 'El FOMO genera estrés por la necesidad de estar constantemente conectado.',
        hint: 'Sección 5.3.2.'
      },
      {
        id: 't10-3',
        type: 'sorting',
        question: 'Ordena estas acciones para una desconexión efectiva:',
        options: [
          'Activar modo "No molestar" antes de cenar',
          'Dejar el móvil fuera del dormitorio',
          'Leer un libro físico',
          'Apagar pantallas por completo'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La desconexión gradual prepara al cerebro para el sueño.',
        hint: 'Sección 5.3.2.'
      },
      {
        id: 't10-4',
        type: 'multiple-choice',
        question: '¿Qué es la regla 20-20-20?',
        options: [
          '20 flexiones cada 20 min.',
          'Cada 20 min, mirar a 20 metros durante 20 segundos.',
          '20€ de multa por usar el móvil.',
          'Cargar el móvil al 20%.'
        ],
        correctAnswer: 1,
        explanation: 'Es la técnica para prevenir la fatiga visual digital.',
        hint: 'Sección 5.3.1.'
      },
      {
        id: 't10-5',
        type: 'multiple-choice',
        question: '¿Cuál es la postura ergonómica correcta frente al PC?',
        options: [
          'Monitor por debajo de la línea de los ojos.',
          'Espalda arqueada y pies colgando.',
          'Monitor a la altura de los ojos, espalda recta y pies apoyados.',
          'Tumbado en el sofá con el portátil.'
        ],
        correctAnswer: 2,
        explanation: 'Una buena ergonomía evita lesiones musculares y fatiga a largo plazo.',
        hint: 'Sección 5.3.1.'
      }
    ]
  },
  {
    id: 'c11',
    title: 'Módulo 11: Mercado Digital',
    topic: 'Comercio Electrónico',
    description: 'NEXUS va a lanzar su tienda online. Audita la seguridad de la plataforma de pagos.',
    codeFragment: 'P',
    tasks: [
      {
        id: 't11-1',
        type: 'multiple-choice',
        question: '¿Cuál es el método de pago más seguro para una web desconocida?',
        options: [
          'Transferencia bancaria directa.',
          'Tarjeta de crédito principal.',
          'Tarjeta virtual de un solo uso o PayPal.',
          'Envío de efectivo por correo.'
        ],
        correctAnswer: 2,
        explanation: 'Las tarjetas virtuales limitan el riesgo de robo de fondos si la web es fraudulenta.',
        hint: 'Sección 5.9.'
      },
      {
        id: 't11-2',
        type: 'spot-the-error',
        question: 'Ves una oferta: "iPhone 15 por 99€". La URL es "www.apple-ofertas-locas.biz". ¿Qué haces?',
        options: [
          'Comprarlo rápido antes de que se agote.',
          'Es una estafa obvia: precio irreal y dominio sospechoso.',
          'Introducir mis datos pero no pagar.',
          'Compartirlo con amigos.'
        ],
        correctAnswer: 1,
        explanation: 'Los precios demasiado bajos y los dominios extraños son señales claras de estafa.',
        hint: 'Sección 5.9.'
      },
      {
        id: 't11-3',
        type: 'multiple-choice',
        question: '¿Qué garantiza un sello de "Confianza Online"?',
        options: [
          'Que el producto es el mejor del mercado.',
          'Que la tienda cumple con un código ético y legal de buenas prácticas.',
          'Que el envío es gratis.',
          'Que la web no tiene virus.'
        ],
        correctAnswer: 1,
        explanation: 'Los sellos de confianza indican que la empresa se somete a auditorías de calidad y ética.',
        hint: 'Sección 5.9.'
      },
      {
        id: 't11-4',
        type: 'sorting',
        question: 'Pasos para verificar una tienda online antes de comprar:',
        options: [
          'Buscar opiniones externas de otros usuarios',
          'Verificar que tiene HTTPS y candado',
          'Revisar el aviso legal y datos de la empresa',
          'Comprobar la política de devoluciones'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Una compra segura requiere una investigación previa en múltiples capas.',
        hint: 'Investigación preventiva.'
      },
      {
        id: 't11-5',
        type: 'scenario',
        question: 'Recibes un correo de "Amazon" diciendo que tu cuenta será bloqueada si no confirmas tu tarjeta en 2 horas. ¿Qué haces?',
        options: [
          'Hacer clic en el enlace y poner la tarjeta.',
          'Llamar a Amazon directamente.',
          'Ignorarlo: Amazon nunca pide datos sensibles por correo con urgencia.',
          'Responder al correo pidiendo explicaciones.'
        ],
        correctAnswer: 2,
        explanation: 'La urgencia artificial es la táctica número uno del phishing bancario.',
        hint: 'Phishing en 5.4.'
      }
    ]
  },
  {
    id: 'c12',
    title: 'Módulo 12: Hogar Inteligente',
    topic: 'Seguridad IoT',
    description: 'La domótica de las oficinas de NEXUS está actuando de forma extraña. Revisa los dispositivos conectados.',
    codeFragment: 'R',
    tasks: [
      {
        id: 't11-1',
        type: 'multiple-choice',
        question: '¿Cuál es el mayor riesgo de una cámara de seguridad con la contraseña "admin123"?',
        options: [
          'Que se apague sola.',
          'Que cualquier persona en el mundo pueda ver el vídeo en directo.',
          'Que gaste mucha luz.',
          'Que la imagen se vea borrosa.'
        ],
        correctAnswer: 1,
        explanation: 'Las contraseñas por defecto son la causa principal de hackeos masivos en dispositivos IoT.',
        hint: 'Sección 5.10.'
      },
      {
        id: 't12-2',
        type: 'scenario',
        question: 'Instalas una bombilla inteligente que te pide acceso a tus contactos y ubicación. ¿Qué haces?',
        options: [
          'Dárselo, será para alguna función chula.',
          'Denegar los permisos: una bombilla no necesita tus contactos.',
          'Desinstalar la app y devolver la bombilla.',
          'Solo darle la ubicación.'
        ],
        correctAnswer: 1,
        explanation: 'Aplica el principio de mínimo privilegio: los dispositivos no deben pedir datos que no necesitan.',
        hint: 'Mínimo privilegio en 5.2.3.'
      },
      {
        id: 't12-3',
        type: 'multiple-choice',
        question: '¿Qué es la "Segmentación de Red" en el hogar?',
        options: [
          'Tener dos routers físicos.',
          'Poner los dispositivos IoT en una red Wi-Fi de invitados separada.',
          'Cortar los cables de red.',
          'Poner contraseñas distintas a cada carpeta.'
        ],
        correctAnswer: 1,
        explanation: 'Si un dispositivo IoT es hackeado, la segmentación evita que el atacante llegue a tu ordenador principal.',
        hint: 'Sección 5.10.'
      },
      {
        id: 't12-4',
        type: 'sorting',
        question: 'Ordena las acciones al configurar un nuevo altavoz inteligente:',
        options: [
          'Cambiar la contraseña por defecto',
          'Actualizar el firmware a la última versión',
          'Revisar y limitar los permisos de privacidad',
          'Desactivar el micrófono cuando no se use'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La seguridad en IoT comienza con una configuración inicial robusta.',
        hint: 'Pasos en 5.10.'
      },
      {
        id: 't12-5',
        type: 'multiple-choice',
        question: '¿Por qué es peligroso no actualizar el software de una Smart TV?',
        options: [
          'Porque los colores se ven peor.',
          'Porque puede contener vulnerabilidades que permitan espiar a través del micrófono.',
          'Porque Netflix deja de funcionar.',
          'No es peligroso, las teles no se hackean.'
        ],
        correctAnswer: 1,
        explanation: 'Cualquier dispositivo con conexión a Internet y sensores es un objetivo potencial.',
        hint: 'Actualizaciones en 5.1.1.'
      }
    ]
  },
  {
    id: 'c13',
    title: 'Módulo 13: Espejos Digitales',
    topic: 'IA y Verdad',
    description: 'Un vídeo falso del CEO de NEXUS está circulando por la red. Identifica la manipulación.',
    codeFragment: 'O',
    tasks: [
      {
        id: 't13-1',
        type: 'multiple-choice',
        question: '¿Qué es un "Deepfake"?',
        options: [
          'Un vídeo de muy alta resolución.',
          'Contenido multimedia falso generado mediante IA que imita a personas reales.',
          'Un juego de realidad virtual.',
          'Un tipo de virus que borra fotos.'
        ],
        correctAnswer: 1,
        explanation: 'Los deepfakes usan redes neuronales para suplantar rostros y voces con gran realismo.',
        hint: 'Sección 5.11.'
      },
      {
        id: 't13-2',
        type: 'spot-the-error',
        question: 'Ves un vídeo de un político diciendo algo absurdo. ¿En qué te fijas para saber si es IA?',
        options: [
          'En el color de su corbata.',
          'En parpadeos antinaturales, sombras extrañas en la boca y bordes de la cara difuminados.',
          'En la duración del vídeo.',
          'En si tiene subtítulos.'
        ],
        correctAnswer: 1,
        explanation: 'Las inconsistencias visuales son pistas clave para detectar manipulaciones por IA.',
        hint: 'Sección 5.11.'
      },
      {
        id: 't13-3',
        type: 'multiple-choice',
        question: '¿Qué es una "Alucinación" en una IA como ChatGPT?',
        options: [
          'Cuando la IA se apaga sola.',
          'Cuando la IA inventa datos falsos con total seguridad.',
          'Cuando la IA responde muy rápido.',
          'Cuando la IA usa colores brillantes.'
        ],
        correctAnswer: 1,
        explanation: 'Los modelos de lenguaje pueden generar información plausible pero totalmente falsa.',
        hint: 'Sección 5.11.'
      },
      {
        id: 't13-4',
        type: 'scenario',
        question: 'Una IA te da una solución a un problema matemático complejo. ¿Qué haces?',
        options: [
          'Copiarla directamente, la IA nunca se equivoca.',
          'Verificar los pasos y la lógica, y contrastar con otras fuentes.',
          'Pedirle que lo repita 10 veces.',
          'Ignorarla por completo.'
        ],
        correctAnswer: 1,
        explanation: 'El pensamiento crítico es esencial al trabajar con herramientas de IA.',
        hint: 'Verificación en 5.11.'
      },
      {
        id: 't13-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Sesgo Algorítmico"?',
        options: [
          'Un error de conexión.',
          'Prejuicios en los resultados de una IA debido a datos de entrenamiento no representativos.',
          'Cuando la IA prefiere el color azul.',
          'La velocidad de procesamiento.'
        ],
        correctAnswer: 1,
        explanation: 'Si los datos de entrenamiento son sesgados, la IA repetirá y ampliará esos prejuicios.',
        hint: 'Sección 5.11.'
      }
    ]
  },
  {
    id: 'c14',
    title: 'Módulo 14: Arca de Datos',
    topic: 'Resiliencia y Backups',
    description: 'Un fallo eléctrico ha amenazado los servidores de NEXUS. Implementa el plan de recuperación.',
    codeFragment: 'T',
    tasks: [
      {
        id: 't14-1',
        type: 'multiple-choice',
        question: '¿En qué consiste la regla de backup 3-2-1?',
        options: [
          '3 archivos, 2 carpetas, 1 disco.',
          '3 copias, en 2 soportes distintos, con 1 copia fuera de casa/oficina.',
          'Hacer copia cada 3 días, durante 2 horas, a la 1 de la mañana.',
          '3 personas revisando 2 veces 1 archivo.'
        ],
        correctAnswer: 1,
        explanation: 'Es el estándar de oro para asegurar que los datos nunca se pierdan por completo.',
        hint: 'Estrategia de resiliencia.'
      },
      {
        id: 't14-2',
        type: 'scenario',
        question: 'Tu ordenador se rompe y no tienes copia de seguridad. ¿Qué probabilidad hay de recuperar los datos?',
        options: [
          '100%, los informáticos lo arreglan todo.',
          'Muy baja y muy costosa en laboratorios especializados.',
          'Basta con reiniciarlo.',
          'Los datos se recuperan solos de la nube automáticamente.'
        ],
        correctAnswer: 1,
        explanation: 'Sin copia previa, la recuperación física de un disco dañado es extremadamente difícil.',
        hint: 'Prevención vs Corrección.'
      },
      {
        id: 't14-3',
        type: 'multiple-choice',
        question: '¿Qué ventaja tiene la copia en la Nube (Cloud) frente a un disco externo?',
        options: [
          'Es más barata siempre.',
          'Protege los datos en caso de incendio o robo físico en tu casa.',
          'No necesita Internet.',
          'Es más rápida.'
        ],
        correctAnswer: 1,
        explanation: 'La deslocalización física es clave para la seguridad ante desastres locales.',
        hint: 'Copia fuera de sitio.'
      },
      {
        id: 't14-4',
        type: 'sorting',
        question: 'Ordena los pasos para recuperar tu sistema tras un ataque de Ransomware:',
        options: [
          'Aislar el equipo infectado de la red',
          'Formatear y limpiar el disco duro',
          'Reinstalar el sistema operativo seguro',
          'Restaurar los datos desde la última copia limpia'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Primero hay que detener la infección antes de intentar recuperar nada.',
        hint: 'Protocolo de emergencia.'
      },
      {
        id: 't14-5',
        type: 'multiple-choice',
        question: '¿Cada cuánto tiempo se debe realizar una copia de seguridad?',
        options: [
          'Una vez al año.',
          'Depende de la frecuencia con la que cambien tus datos importantes.',
          'Solo cuando el ordenador avise.',
          'Nunca, si usas Windows 11.'
        ],
        correctAnswer: 1,
        explanation: 'La frecuencia debe ajustarse al valor y volatilidad de tu información.',
        hint: 'Gestión de riesgos.'
      }
    ]
  },
  {
    id: 'c15',
    title: 'Módulo 15: La Burbuja de Filtros',
    topic: 'Algoritmos y Opinión',
    description: 'Los algoritmos de NEXUS están sesgando la información de los empleados. Rompe la burbuja.',
    codeFragment: 'E',
    tasks: [
      {
        id: 't15-1',
        type: 'multiple-choice',
        question: '¿Qué es una "Cámara de Eco" en redes sociales?',
        options: [
          'Un fallo en el sonido de los vídeos.',
          'Un entorno donde solo ves opiniones que refuerzan tus propias creencias.',
          'Un grupo de chat muy grande.',
          'Cuando el algoritmo repite tus posts.'
        ],
        correctAnswer: 1,
        explanation: 'Los algoritmos tienden a mostrarnos lo que nos gusta, aislándonos de ideas diferentes.',
        hint: 'Sección 5.11.'
      },
      {
        id: 't15-2',
        type: 'scenario',
        question: 'Solo ves noticias negativas sobre un tema concreto. ¿Qué deberías hacer?',
        options: [
          'Creerme todo, si sale en mi muro será verdad.',
          'Buscar activamente fuentes con puntos de vista opuestos para contrastar.',
          'Dejar de leer noticias.',
          'Bloquear a quien piense distinto.'
        ],
        correctAnswer: 1,
        explanation: 'La alfabetización mediática requiere buscar la pluralidad de fuentes.',
        hint: 'Romper la burbuja.'
      },
      {
        id: 't15-3',
        type: 'multiple-choice',
        question: '¿Cuál es el objetivo principal de los algoritmos de recomendación?',
        options: [
          'Informarte de forma objetiva.',
          'Maximizar el tiempo que pasas en la plataforma (engagement).',
          'Enseñarte cosas nuevas y difíciles.',
          'Proteger tu salud mental.'
        ],
        correctAnswer: 1,
        explanation: 'Las plataformas ganan dinero con tu atención, por lo que te muestran contenido adictivo.',
        hint: 'Economía de la atención.'
      },
      {
        id: 't15-4',
        type: 'sorting',
        question: 'Ordena estas acciones para "limpiar" tu algoritmo:',
        options: [
          'Borrar el historial de búsqueda y cookies',
          'Seguir a cuentas con intereses diversos',
          'Marcar como "No me interesa" contenido repetitivo',
          'Limitar el tiempo de uso diario'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Tú puedes entrenar al algoritmo para que te sea más útil y menos manipulador.',
        hint: 'Control del usuario.'
      },
      {
        id: 't15-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Clickbait"?',
        options: [
          'Un tipo de virus de ratón.',
          'Titulares sensacionalistas diseñados solo para que hagas clic.',
          'Un juego de clics rápidos.',
          'Configurar el doble clic.'
        ],
        correctAnswer: 1,
        explanation: 'El clickbait usa la curiosidad para llevarte a contenido que a menudo es de baja calidad.',
        hint: 'Tácticas de atención.'
      }
    ]
  },
  {
    id: 'c16',
    title: 'Módulo 16: Propiedad Creativa',
    topic: 'Derechos de Autor',
    description: 'NEXUS ha sido acusado de usar imágenes sin licencia. Regulariza la situación.',
    codeFragment: 'C',
    tasks: [
      {
        id: 't16-1',
        type: 'multiple-choice',
        question: '¿Qué significa el símbolo © (Copyright)?',
        options: [
          'Que puedes copiarlo libremente.',
          'Todos los derechos reservados: necesitas permiso del autor para usarlo.',
          'Que es contenido creado por ordenador.',
          'Que es una copia de seguridad.'
        ],
        correctAnswer: 1,
        explanation: 'Es la protección más restrictiva de la propiedad intelectual.',
        hint: 'Sección 5.12.'
      },
      {
        id: 't16-2',
        type: 'multiple-choice',
        question: '¿Qué permite una licencia Creative Commons "BY" (Atribución)?',
        options: [
          'Usar la obra sin decir de quién es.',
          'Usar la obra siempre que menciones al autor original.',
          'Solo se puede usar en libros.',
          'No permite ningún uso.'
        ],
        correctAnswer: 1,
        explanation: 'La atribución es el requisito básico de casi todas las licencias CC.',
        hint: 'Sección 5.12.'
      },
      {
        id: 't16-3',
        type: 'scenario',
        question: 'Necesitas una imagen para un trabajo escolar. ¿Dónde es mejor buscar?',
        options: [
          'En Google Imágenes y coger la primera que salga.',
          'En bancos de imágenes gratuitos con licencia CC0 o Unsplash.',
          'Hacer una captura de pantalla de una película.',
          'Pedirle a una IA que la copie de un artista famoso.'
        ],
        correctAnswer: 1,
        explanation: 'Usar recursos con licencias libres evita problemas legales y éticos.',
        hint: 'Recursos libres.'
      },
      {
        id: 't16-4',
        type: 'sorting',
        question: 'Ordena estas licencias de "Más Restrictiva" a "Más Libre":',
        options: [
          'Copyright (Todos los derechos)',
          'CC BY-NC-ND (Atribución, No Comercial, Sin Obra Derivada)',
          'CC BY (Atribución)',
          'Dominio Público (Sin restricciones)'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Existen muchos grados de libertad entre el "todo prohibido" y el "todo libre".',
        hint: 'Escala de libertad.'
      },
      {
        id: 't16-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Plagio"?',
        options: [
          'Un tipo de virus.',
          'Copiar una obra o idea ajena y presentarla como propia.',
          'Comprar software legal.',
          'Hacer una crítica de un libro.'
        ],
        correctAnswer: 1,
        explanation: 'El plagio es una violación de los derechos morales del autor y una falta de integridad.',
        hint: 'Sección 5.12.'
      }
    ]
  },
  {
    id: 'c17',
    title: 'Módulo 17: Correo de Alto Riesgo',
    topic: 'Seguridad en Email',
    description: 'La bandeja de entrada de NEXUS está bajo ataque. Filtra los correos peligrosos.',
    codeFragment: 'I',
    tasks: [
      {
        id: 't17-1',
        type: 'spot-the-error',
        question: 'Recibes un correo de "seguridad@n3xus.com" (en lugar de nexus.com). ¿Qué es esto?',
        options: [
          'Un error tipográfico del becario.',
          'Typosquatting: un dominio falso que se parece al real para engañarte.',
          'Una nueva división de la empresa.',
          'Un correo cifrado.'
        ],
        correctAnswer: 1,
        explanation: 'Los atacantes registran dominios similares para que no notes la diferencia a simple vista.',
        hint: 'Sección 5.4.'
      },
      {
        id: 't17-2',
        type: 'multiple-choice',
        question: '¿Qué debes hacer con un archivo adjunto ".exe" de un remitente desconocido?',
        options: [
          'Abrirlo para ver qué es.',
          'Analizarlo con el antivirus y luego abrirlo.',
          'No abrirlo nunca: los ejecutables son la forma más común de transmitir malware.',
          'Reenviarlo a soporte técnico.'
        ],
        correctAnswer: 2,
        explanation: 'Los archivos ejecutables pueden instalar malware en tu sistema en segundos.',
        hint: 'Amenazas en 5.4.'
      },
      {
        id: 't17-3',
        type: 'multiple-choice',
        question: '¿Para qué sirve la "Firma Digital" en un correo?',
        options: [
          'Para que quede más bonito.',
          'Para asegurar la identidad del remitente y que el mensaje no ha sido alterado.',
          'Para que el correo llegue más rápido.',
          'Para ocultar tu dirección IP.'
        ],
        correctAnswer: 1,
        explanation: 'La firma digital usa criptografía para garantizar la autenticidad e integridad.',
        hint: 'Criptografía en 5.7.'
      },
      {
        id: 't17-4',
        type: 'scenario',
        question: 'Un correo te pide que descargues una "Factura Pendiente" en un archivo .zip. ¿Qué haces?',
        options: [
          'Descargarlo, no quiero deber dinero.',
          'Verificar el remitente y, si es dudoso, no descargar nada: los .zip suelen ocultar virus.',
          'Abrirlo solo en el móvil.',
          'Borrar todos mis correos.'
        ],
        correctAnswer: 1,
        explanation: 'Los archivos comprimidos son tácticas clásicas para saltarse los filtros de seguridad básicos.',
        hint: 'Sección 5.4.'
      },
      {
        id: 't17-5',
        type: 'sorting',
        question: 'Pasos para analizar un correo sospechoso:',
        options: [
          'Comprobar la dirección real del remitente (no solo el nombre)',
          'Pasar el ratón sobre los enlaces sin hacer clic para ver la URL real',
          'Buscar faltas de ortografía o lenguaje extraño',
          'Marcar como SPAM y eliminar'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La observación detenida detecta el 90% de los ataques de phishing.',
        hint: 'Análisis visual.'
      }
    ]
  },
  {
    id: 'c18',
    title: 'Módulo 18: Fortaleza Móvil',
    topic: 'Seguridad en Smartphones',
    description: 'Los dispositivos móviles de NEXUS son el eslabón más débil. Asegura los terminales.',
    codeFragment: 'O',
    tasks: [
      {
        id: 't18-1',
        type: 'multiple-choice',
        question: '¿Qué es el "Sideloading"?',
        options: [
          'Cargar el móvil de lado.',
          'Instalar aplicaciones desde fuera de las tiendas oficiales (Play Store/App Store).',
          'Pasar archivos por Bluetooth.',
          'Usar el móvil mientras se carga.'
        ],
        correctAnswer: 1,
        explanation: 'Instalar apps de fuentes desconocidas aumenta drásticamente el riesgo de malware.',
        hint: 'Seguridad en dispositivos.'
      },
      {
        id: 't18-2',
        type: 'scenario',
        question: 'Pierdes el móvil en el transporte público. ¿Qué es lo primero que haces?',
        options: [
          'Llorar y comprar otro.',
          'Usar la herramienta de "Encontrar mi dispositivo" para bloquearlo y borrarlo remotamente.',
          'Esperar a que alguien me llame.',
          'Ir a la tienda de mi operador.'
        ],
        correctAnswer: 1,
        explanation: 'La reacción rápida mediante herramientas de gestión remota protege tus datos.',
        hint: 'Sección 5.1.2.'
      },
      {
        id: 't18-3',
        type: 'multiple-choice',
        question: '¿Por qué es importante revisar los "Permisos de Segundo Plano"?',
        options: [
          'Para que el móvil no se caliente.',
          'Para evitar que apps recojan tu ubicación o datos sin que las estés usando.',
          'Para que las fotos salgan mejor.',
          'No es importante.'
        ],
        correctAnswer: 1,
        explanation: 'Muchas apps espían o consumen datos cuando no las ves.',
        hint: 'Privacidad en 5.2.3.'
      },
      {
        id: 't18-4',
        type: 'sorting',
        question: 'Ordena estos métodos de bloqueo móvil de "Menos Seguro" a "Más Seguro":',
        options: [
          'Sin bloqueo (Deslizar)',
          'Patrón simple (L, Z, Cuadrado)',
          'PIN de 4 dígitos',
          'Biometría + PIN complejo'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La seguridad biométrica combinada con claves fuertes es la mejor defensa física.',
        hint: 'Escala de protección.'
      },
      {
        id: 't18-5',
        type: 'multiple-choice',
        question: '¿Qué riesgo tiene el "Jailbreak" o "Root" en un móvil?',
        options: [
          'Que la pantalla se rompa.',
          'Que se eliminan las protecciones de seguridad del fabricante, facilitando ataques.',
          'Que el móvil va más lento.',
          'Que no puedes hacer llamadas.'
        ],
        correctAnswer: 1,
        explanation: 'Al saltarse las restricciones, también se eliminan los muros que detienen al malware.',
        hint: 'Seguridad del sistema.'
      }
    ]
  },
  {
    id: 'c19',
    title: 'Módulo 19: El Gran Hermano',
    topic: 'Big Data y Privacidad',
    description: 'NEXUS maneja volúmenes masivos de datos. Asegura que no se vulnere la privacidad individual.',
    codeFragment: 'N',
    tasks: [
      {
        id: 't19-1',
        type: 'multiple-choice',
        question: '¿Qué es el "Perfilado de Usuario"?',
        options: [
          'Elegir una foto de perfil.',
          'Crear un modelo detallado de tus gustos y hábitos mediante el análisis de tus datos masivos.',
          'Limpiar tu lista de amigos.',
          'Configurar el nombre de usuario.'
        ],
        correctAnswer: 1,
        explanation: 'Las empresas usan Big Data para predecir tu comportamiento y venderte productos o ideas.',
        hint: 'Identidad digital.'
      },
      {
        id: 't19-2',
        type: 'scenario',
        question: 'Una app gratuita de linterna te pide acceso a tu historial de compras. ¿Cómo se financia?',
        options: [
          'Por amor al arte.',
          'Vendiendo tus datos personales a empresas de publicidad.',
          'Con donaciones anónimas.',
          'No se financia, es gratis.'
        ],
        correctAnswer: 1,
        explanation: '"Si no pagas por el producto, el producto eres tú".',
        hint: 'Monetización de datos.'
      },
      {
        id: 't19-3',
        type: 'multiple-choice',
        question: '¿Qué es la "Anonimización" de datos?',
        options: [
          'Borrar los datos.',
          'Eliminar la posibilidad de identificar a una persona concreta dentro de un conjunto de datos.',
          'Cambiar el nombre por un número.',
          'Cifrar los datos con una clave.'
        ],
        correctAnswer: 1,
        explanation: 'Es un proceso técnico para poder usar datos estadísticos sin vulnerar la privacidad.',
        hint: 'Sección 5.5.'
      },
      {
        id: 't19-4',
        type: 'sorting',
        question: 'Ordena los pasos de la cadena de valor del dato:',
        options: [
          'Recopilación (Sensores, clicks, formularios)',
          'Almacenamiento (Bases de datos masivas)',
          'Procesamiento (Algoritmos de IA)',
          'Acción (Publicidad dirigida, predicciones)'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Tus acciones diarias son la materia prima de una industria multimillonaria.',
        hint: 'Ciclo del dato.'
      },
      {
        id: 't19-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Capitalismo de Vigilancia"?',
        options: [
          'Poner cámaras en las tiendas.',
          'Modelo de negocio basado en la mercantilización de datos personales capturados mediante vigilancia online.',
          'Vender sistemas de seguridad.',
          'Un tipo de criptomoneda.'
        ],
        correctAnswer: 1,
        explanation: 'Describe cómo nuestra experiencia privada se convierte en materia prima para prácticas comerciales.',
        hint: 'Ética digital.'
      }
    ]
  },
  {
    id: 'c20',
    title: 'Módulo 20: Ciudadanía del Futuro',
    topic: 'Ética y Netiqueta',
    description: 'Has llegado al núcleo de NEXUS. Demuestra que eres un ciudadano digital responsable.',
    codeFragment: '!',
    tasks: [
      {
        id: 't20-1',
        type: 'multiple-choice',
        question: '¿Qué es la "Netiqueta"?',
        options: [
          'Una marca de ropa digital.',
          'Conjunto de normas de comportamiento y cortesía en Internet.',
          'La etiqueta de precio de un dominio.',
          'Un tipo de virus de red.'
        ],
        correctAnswer: 1,
        explanation: 'Mantener el respeto y la educación online es fundamental para la convivencia digital.',
        hint: 'Comportamiento en la red.'
      },
      {
        id: 't20-2',
        type: 'scenario',
        question: 'Ves que alguien está sufriendo acoso en un grupo de clase. ¿Qué haces?',
        options: [
          'Reírme también para no ser el raro.',
          'No decir nada, no es mi problema.',
          'Apoyar a la víctima y denunciar el comportamiento a un adulto o a la plataforma.',
          'Salir del grupo sin decir nada.'
        ],
        correctAnswer: 2,
        explanation: 'La responsabilidad digital implica no ser un espectador pasivo ante las injusticias.',
        hint: 'Ética y compromiso.'
      },
      {
        id: 't20-3',
        type: 'multiple-choice',
        question: '¿Qué significa ser un "Ciudadano Digital"?',
        options: [
          'Tener muchos seguidores.',
          'Usar la tecnología de forma crítica, ética, segura y responsable.',
          'Saber programar en 5 lenguajes.',
          'Comprar todo por Amazon.'
        ],
        correctAnswer: 1,
        explanation: 'Va más allá de saber usar herramientas; implica entender su impacto en la sociedad.',
        hint: 'Concepto global.'
      },
      {
        id: 't20-4',
        type: 'sorting',
        question: 'Ordena estas acciones antes de publicar algo en redes:',
        options: [
          '¿Es verdad lo que voy a decir?',
          '¿Es respetuoso o puede herir a alguien?',
          '¿Afecta a mi privacidad o a la de otros?',
          '¿Aporta algo positivo?'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Pensar antes de publicar es la mejor herramienta de seguridad y convivencia.',
        hint: 'Filtros éticos.'
      },
      {
        id: 't20-5',
        type: 'multiple-choice',
        question: '¿Cuál es el objetivo final de la Ciberseguridad?',
        options: [
          'Que nadie pueda usar Internet.',
          'Proteger a las personas, sus datos y sus derechos en el mundo digital.',
          'Ganar mucho dinero hackeando.',
          'Que los ordenadores no se rompan.'
        ],
        correctAnswer: 1,
        explanation: 'La tecnología debe estar al servicio de las personas, garantizando su libertad y seguridad.',
        hint: 'Misión final.'
      }
    ]
  },
  {
    id: 'c21',
    title: 'Módulo 21: El Grito Digital',
    topic: 'Ciberactivismo',
    description: 'Usa el poder de la red para organizar una campaña social legítima y segura.',
    codeFragment: 'S',
    tasks: [
      {
        id: 't21-1',
        type: 'multiple-choice',
        question: '¿Qué es el "Hacktivismo"?',
        options: [
          'Hackear bancos para hacerse rico.',
          'Uso de técnicas de hacking para promover una causa política o social.',
          'Un tipo de videojuego.',
          'Reparar ordenadores antiguos.'
        ],
        correctAnswer: 1,
        explanation: 'Es una forma de protesta digital que busca visibilizar problemas sociales.',
        hint: 'Sección 5.13.'
      },
      {
        id: 't21-2',
        type: 'scenario',
        question: 'Quieres lanzar una campaña contra el plástico. ¿Cuál es la mejor estrategia digital?',
        options: [
          'Insultar a las empresas en sus perfiles.',
          'Crear un hashtag positivo, compartir datos verificados y usar peticiones oficiales.',
          'Hackear la web de un supermercado.',
          'Enviar spam a todos mis contactos.'
        ],
        correctAnswer: 1,
        explanation: 'El ciberactivismo efectivo se basa en la información, la movilización y el respeto.',
        hint: 'Participación responsable.'
      },
      {
        id: 't21-3',
        type: 'multiple-choice',
        question: '¿Qué riesgo tiene el "Slicktivismo" (activismo de sofá)?',
        options: [
          'Que te canses de estar sentado.',
          'Que el apoyo se quede en un simple "like" sin generar cambios reales.',
          'Que se rompa el ratón.',
          'Que te bloqueen la cuenta.'
        ],
        correctAnswer: 1,
        explanation: 'Dar un "like" da una falsa sensación de ayuda sin compromiso real.',
        hint: 'Impacto real.'
      },
      {
        id: 't21-4',
        type: 'sorting',
        question: 'Ordena los pasos para verificar una noticia antes de compartirla:',
        options: [
          'Leer más allá del titular',
          'Comprobar la fuente y el autor',
          'Verificar la fecha (¿es antigua?)',
          'Consultar otros medios fiables'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Combatir las fake news es una responsabilidad del ciudadano digital.',
        hint: 'Filtro de verdad.'
      },
      {
        id: 't21-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Doxing"?',
        options: [
          'Un tipo de perro robot.',
          'Publicar información privada de alguien sin su permiso para acosarlo.',
          'Un formato de archivo de texto.',
          'Actualizar el sistema operativo.'
        ],
        correctAnswer: 1,
        explanation: 'Es una práctica peligrosa e ilegal que vulnera gravemente la privacidad.',
        hint: 'Riesgos en la red.'
      }
    ]
  },
  {
    id: 'c22',
    title: 'Módulo 22: Oro Digital',
    topic: 'Economía y Cripto',
    description: 'NEXUS está invirtiendo en nuevas tecnologías. Evita las estafas financieras.',
    codeFragment: 'Y',
    tasks: [
      {
        id: 't22-1',
        type: 'multiple-choice',
        question: '¿Qué garantiza la seguridad en una red Blockchain?',
        options: [
          'Un banco central.',
          'La descentralización y el consenso entre miles de nodos.',
          'Una contraseña de 20 dígitos.',
          'El gobierno de EE.UU.'
        ],
        correctAnswer: 1,
        explanation: 'Al no haber un punto central, es casi imposible de hackear o manipular.',
        hint: 'Sección 5.14.'
      },
      {
        id: 't22-2',
        type: 'scenario',
        question: 'Un "influencer" promete que si inviertes 100€ en su moneda, tendrás 10.000€ en un mes. ¿Qué es?',
        options: [
          'Una oportunidad única.',
          'Una estafa piramidal o "Rug Pull".',
          'Magia financiera.',
          'Un error de cálculo.'
        ],
        correctAnswer: 1,
        explanation: 'Las promesas de rentabilidad alta sin riesgo son siempre estafas.',
        hint: 'Sentido común financiero.'
      },
      {
        id: 't22-3',
        type: 'multiple-choice',
        question: '¿Qué es un NFT?',
        options: [
          'Un tipo de virus.',
          'Un activo digital único y no intercambiable (como una obra de arte digital).',
          'Una nueva red social.',
          'Un cable de red.'
        ],
        correctAnswer: 1,
        explanation: 'Usa blockchain para certificar la propiedad de un archivo digital único.',
        hint: 'Criptoactivos.'
      },
      {
        id: 't22-4',
        type: 'sorting',
        question: 'Ordena de "Menos Riesgo" a "Más Riesgo" estas formas de guardar dinero:',
        options: [
          'Cuenta bancaria regulada',
          'Inversión en bolsa diversificada',
          'Criptomonedas conocidas (Bitcoin)',
          'Nuevas criptomonedas desconocidas'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'A mayor promesa de beneficio, mayor es el riesgo de pérdida total.',
        hint: 'Escala de riesgo.'
      },
      {
        id: 't22-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Phishing de Criptomonedas"?',
        options: [
          'Pescar Bitcoins en el mar.',
          'Robar las "semillas" o claves privadas de tu billetera digital mediante engaños.',
          'Un tipo de minería.',
          'Comprar barato.'
        ],
        correctAnswer: 1,
        explanation: 'Si alguien obtiene tu "frase semilla", tiene acceso total a tu dinero para siempre.',
        hint: 'Seguridad en billeteras.'
      }
    ]
  },
  {
    id: 'c23',
    title: 'Módulo 23: El Túnel Invisible',
    topic: 'Privacidad Avanzada',
    description: 'NEXUS necesita enviar datos ultra-secretos. Configura el anonimato total.',
    codeFragment: 'S',
    tasks: [
      {
        id: 't23-1',
        type: 'multiple-choice',
        question: '¿Qué hace realmente una VPN?',
        options: [
          'Aumenta la velocidad de internet.',
          'Crea un túnel cifrado entre tu dispositivo e internet, ocultando tu IP real.',
          'Limpia los virus del ordenador.',
          'Permite descargar juegos gratis.'
        ],
        correctAnswer: 1,
        explanation: 'Es vital para usar Wi-Fi públicas de forma segura.',
        hint: 'Sección 5.7.'
      },
      {
        id: 't23-2',
        type: 'scenario',
        question: 'Quieres navegar sin que Google guarde cada click. ¿Qué buscador usas?',
        options: [
          'Google en modo incógnito.',
          'DuckDuckGo o Brave Search.',
          'Bing.',
          'Yahoo.'
        ],
        correctAnswer: 1,
        explanation: 'Estos buscadores no rastrean tu actividad ni crean perfiles de usuario.',
        hint: 'Privacidad activa.'
      },
      {
        id: 't23-3',
        type: 'multiple-choice',
        question: '¿Qué es la red "Tor"?',
        options: [
          'Una red para descargar películas.',
          'Una red de voluntarios que encamina el tráfico por tres capas de cifrado para el anonimato.',
          'El sistema operativo de los hackers.',
          'Un tipo de cable submarino.'
        ],
        correctAnswer: 1,
        explanation: 'Permite el anonimato extremo, usado por periodistas y activistas en países con censura.',
        hint: 'Anonimato por capas.'
      },
      {
        id: 't23-4',
        type: 'sorting',
        question: 'Ordena de "Menos Privado" a "Más Privado" estas apps de mensajería:',
        options: [
          'SMS tradicionales',
          'WhatsApp (Cifrado pero con metadatos)',
          'Signal (Cifrado total y sin metadatos)',
          'Mensajería por red Tor'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'No todas las apps "cifradas" protegen igual tu privacidad.',
        hint: 'Escala de privacidad.'
      },
      {
        id: 't23-5',
        type: 'multiple-choice',
        question: '¿Qué son los "Metadatos" de una foto?',
        options: [
          'Los colores de la imagen.',
          'Información oculta como la fecha, hora, modelo de cámara y ubicación GPS.',
          'El nombre del archivo.',
          'La resolución en píxeles.'
        ],
        correctAnswer: 1,
        explanation: 'Una simple foto puede revelar dónde vives si no borras los metadatos.',
        hint: 'Información invisible.'
      }
    ]
  },
  {
    id: 'c24',
    title: 'Módulo 24: Oficina en la Nube',
    topic: 'Teletrabajo y Colaboración',
    description: 'NEXUS ha pasado al trabajo remoto. Asegura la colaboración a distancia.',
    codeFragment: 'T',
    tasks: [
      {
        id: 't24-1',
        type: 'multiple-choice',
        question: '¿Cuál es el mayor riesgo de trabajar en una cafetería?',
        options: [
          'Que el café esté frío.',
          'El "Visual Hacking" (alguien mirando tu pantalla) y las redes Wi-Fi abiertas.',
          'Que no haya enchufes.',
          'Que el ruido no te deje concentrar.'
        ],
        correctAnswer: 1,
        explanation: 'La seguridad física y de red son críticas fuera de la oficina.',
        hint: 'Entornos públicos.'
      },
      {
        id: 't24-2',
        type: 'scenario',
        question: 'Debes compartir un documento confidencial con un compañero. ¿Cómo lo haces?',
        options: [
          'Enviarlo por correo normal.',
          'Subirlo a un enlace público de Drive.',
          'Usar una carpeta compartida con permisos específicos y contraseña.',
          'Publicarlo en el grupo de WhatsApp.'
        ],
        correctAnswer: 2,
        explanation: 'El control de acceso (quién puede ver qué) es la base de la colaboración segura.',
        hint: 'Gestión de permisos.'
      },
      {
        id: 't24-3',
        type: 'multiple-choice',
        question: '¿Qué es el "Shadow IT"?',
        options: [
          'Software pirata.',
          'Uso de aplicaciones no autorizadas por la empresa para trabajar (ej: usar Telegram personal para datos de trabajo).',
          'Programar de noche.',
          'Un virus que se oculta en las sombras.'
        ],
        correctAnswer: 1,
        explanation: 'Usar apps personales para trabajo crea brechas de seguridad incontrolables.',
        hint: 'Riesgos corporativos.'
      },
      {
        id: 't24-4',
        type: 'sorting',
        question: 'Ordena los pasos para una videoconferencia segura:',
        options: [
          'Poner contraseña a la reunión',
          'Habilitar la "Sala de espera"',
          'Verificar la identidad de los asistentes',
          'Bloquear la reunión una vez estén todos'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Evita el "Zoombombing" o intrusos en tus reuniones.',
        hint: 'Protocolo de reunión.'
      },
      {
        id: 't24-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Derecho a la Desconexión Digital"?',
        options: [
          'Que se rompa el router.',
          'Derecho a no responder mensajes de trabajo fuera del horario laboral.',
          'Poder apagar el móvil en el cine.',
          'No tener internet en vacaciones.'
        ],
        correctAnswer: 1,
        explanation: 'Es fundamental para la salud mental y el equilibrio vida-trabajo.',
        hint: 'Salud laboral.'
      }
    ]
  },
  {
    id: 'c25',
    title: 'Módulo 25: Huellas en la Arena',
    topic: 'Forense Digital',
    description: 'Alguien ha intentado entrar en NEXUS. Sigue el rastro de migas de pan.',
    codeFragment: 'E',
    tasks: [
      {
        id: 't25-1',
        type: 'multiple-choice',
        question: '¿Qué es un "Log" o registro de sistema?',
        options: [
          'Un trozo de madera digital.',
          'Un archivo que anota cada acción, error o acceso que ocurre en un sistema.',
          'Una contraseña antigua.',
          'Un tipo de virus.'
        ],
        correctAnswer: 1,
        explanation: 'Los logs son la "caja negra" que permite saber qué pasó tras un incidente.',
        hint: 'Rastros del sistema.'
      },
      {
        id: 't25-2',
        type: 'scenario',
        question: 'Recibes una imagen de un sospechoso. ¿Cómo sabes dónde se hizo?',
        options: [
          'Mirando el color del cielo.',
          'Analizando los datos EXIF (metadatos) de la imagen.',
          'Preguntando en redes sociales.',
          'No se puede saber.'
        ],
        correctAnswer: 1,
        explanation: 'Los datos EXIF suelen guardar las coordenadas GPS exactas.',
        hint: 'Información oculta.'
      },
      {
        id: 't25-3',
        type: 'multiple-choice',
        question: '¿Qué significa que un archivo ha sido "borrado" en un disco duro normal?',
        options: [
          'Que ha desaparecido para siempre.',
          'Que el sistema marca ese espacio como "disponible", pero los datos siguen ahí hasta que se escriba encima.',
          'Que se ha enviado a la nube.',
          'Que se ha cifrado.'
        ],
        correctAnswer: 1,
        explanation: 'Por eso se pueden recuperar archivos borrados si no se hace un "borrado seguro".',
        hint: 'Persistencia de datos.'
      },
      {
        id: 't25-4',
        type: 'sorting',
        question: 'Ordena los pasos de una investigación forense:',
        options: [
          'Preservar la escena (no tocar nada)',
          'Adquisición (copiar los datos sin alterarlos)',
          'Análisis (buscar pruebas)',
          'Presentación de resultados'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La integridad de la prueba es lo más importante en un juicio.',
        hint: 'Cadena de custodia.'
      },
      {
        id: 't25-5',
        type: 'multiple-choice',
        question: '¿Qué es la "Cadena de Custodia"?',
        options: [
          'Una cadena de oro para el servidor.',
          'Registro que garantiza que la prueba digital no ha sido manipulada desde su recogida.',
          'Un tipo de cifrado en cadena.',
          'La lista de sospechosos.'
        ],
        correctAnswer: 1,
        explanation: 'Sin ella, las pruebas digitales no tienen valor legal.',
        hint: 'Validez legal.'
      }
    ]
  },
  {
    id: 'c26',
    title: 'Módulo 26: Planeta Binario',
    topic: 'Impacto Ambiental',
    description: 'La infraestructura de NEXUS consume mucha energía. Hazla sostenible.',
    codeFragment: 'M',
    tasks: [
      {
        id: 't26-1',
        type: 'multiple-choice',
        question: '¿Qué es el "E-waste"?',
        options: [
          'Correo basura.',
          'Residuos electrónicos (móviles, PCs, cables) que acaban en vertederos.',
          'Energía desperdiciada.',
          'Un virus que borra archivos.'
        ],
        correctAnswer: 1,
        explanation: 'Es la basura que más rápido crece en el mundo y es muy contaminante.',
        hint: 'Sección 5.15.'
      },
      {
        id: 't26-2',
        type: 'scenario',
        question: '¿Qué acción individual reduce más tu huella de carbono digital?',
        options: [
          'Borrar correos antiguos (que ocupan espacio en servidores).',
          'Alargar la vida de tus dispositivos y no cambiarlos cada año.',
          'Usar el modo oscuro.',
          'Apagar el router por la noche.'
        ],
        correctAnswer: 1,
        explanation: 'Fabricar un móvil nuevo consume muchísima más energía que usarlo durante años.',
        hint: 'Consumo responsable.'
      },
      {
        id: 't26-3',
        type: 'multiple-choice',
        question: '¿Por qué los Centros de Datos contaminan?',
        options: [
          'Porque hacen mucho ruido.',
          'Por su enorme consumo eléctrico y la necesidad de agua para refrigerar los servidores.',
          'Porque usan papel.',
          'No contaminan, son digitales.'
        ],
        correctAnswer: 1,
        explanation: 'Internet tiene una presencia física masiva que requiere recursos naturales.',
        hint: 'Infraestructura física.'
      },
      {
        id: 't26-4',
        type: 'sorting',
        question: 'Ordena estas acciones de más a menos ecológicas:',
        options: [
          'Reparar un dispositivo roto',
          'Comprar uno de segunda mano',
          'Reciclarlo en un punto limpio',
          'Tirarlo a la basura normal'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La economía circular es clave en la tecnología.',
        hint: 'Las 3 Rs.'
      },
      {
        id: 't26-5',
        type: 'multiple-choice',
        question: '¿Qué es la "Obsolescencia Programada"?',
        options: [
          'Cuando un programa se vuelve viejo.',
          'Diseñar productos para que fallen o queden obsoletos tras un tiempo, obligando a comprar nuevos.',
          'Un error de programación.',
          'Actualizar el software.'
        ],
        correctAnswer: 1,
        explanation: 'Es una práctica poco ética que genera toneladas de basura innecesaria.',
        hint: 'Consumo y diseño.'
      }
    ]
  },
  {
    id: 'c27',
    title: 'Módulo 27: Puertas Abiertas',
    topic: 'Accesibilidad',
    description: 'NEXUS debe ser para todos. Elimina las barreras digitales.',
    codeFragment: '!',
    tasks: [
      {
        id: 't27-1',
        type: 'multiple-choice',
        question: '¿Qué es la "Accesibilidad Web"?',
        options: [
          'Que internet sea barato.',
          'Diseñar webs para que personas con cualquier discapacidad puedan usarlas.',
          'Tener buena cobertura Wi-Fi.',
          'Que la web cargue rápido.'
        ],
        correctAnswer: 1,
        explanation: 'Es un derecho fundamental para la inclusión en la sociedad digital.',
        hint: 'Sección 5.16.'
      },
      {
        id: 't27-2',
        type: 'scenario',
        question: '¿Cómo ayudas a una persona ciega a "leer" una imagen en tu web?',
        options: [
          'Poniendo la imagen muy grande.',
          'Añadiendo un texto alternativo (Alt Text) descriptivo.',
          'Poniendo un audio que diga "esto es una foto".',
          'No se puede.'
        ],
        correctAnswer: 1,
        explanation: 'Los lectores de pantalla leen el texto alternativo para explicar la imagen.',
        hint: 'Diseño inclusivo.'
      },
      {
        id: 't27-3',
        type: 'multiple-choice',
        question: '¿Por qué es importante el contraste de color?',
        options: [
          'Para que la web sea más bonita.',
          'Para que personas con baja visión o daltonismo puedan leer el contenido.',
          'Para ahorrar batería.',
          'Para que no se canse la vista.'
        ],
        correctAnswer: 1,
        explanation: 'Un buen contraste es la base de la legibilidad universal.',
        hint: 'Legibilidad.'
      },
      {
        id: 't27-4',
        type: 'sorting',
        question: 'Ordena los elementos de una web de más a menos accesibles:',
        options: [
          'Texto claro con etiquetas estructurales',
          'Vídeo con subtítulos y audiodescripción',
          'Imagen con texto alternativo',
          'Botón que solo es un icono sin nombre'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'El diseño universal beneficia a todos, no solo a personas con discapacidad.',
        hint: 'Jerarquía de acceso.'
      },
      {
        id: 't27-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Diseño Universal"?',
        options: [
          'Diseñar para todo el universo.',
          'Crear productos que sean utilizables por el mayor número de personas posible sin necesidad de adaptación.',
          'Un estilo de diseño moderno.',
          'Diseñar solo para expertos.'
        ],
        correctAnswer: 1,
        explanation: 'Si algo es fácil de usar para alguien con dificultades, es más fácil para todos.',
        hint: 'Concepto de diseño.'
      }
    ]
  },
  {
    id: 'c28',
    title: 'Módulo 28: El Laberinto del Engaño',
    topic: 'Patrones Oscuros',
    description: 'Detecta los trucos psicológicos que NEXUS (y otros) usan para manipularte.',
    codeFragment: 'A',
    tasks: [
      {
        id: 't28-1',
        type: 'multiple-choice',
        question: '¿Qué es un "Dark Pattern" (Patrón Oscuro)?',
        options: [
          'Un modo oscuro para la vista.',
          'Interfaces diseñadas para engañar a los usuarios y que hagan cosas que no quieren.',
          'Un virus que oscurece la pantalla.',
          'Programar sin luz.'
        ],
        correctAnswer: 1,
        explanation: 'Buscan el beneficio de la empresa a costa de la libertad del usuario.',
        hint: 'Sección 5.16.'
      },
      {
        id: 't28-2',
        type: 'scenario',
        question: 'Intentas darte de baja y el botón es gris pequeño, mientras que el de "quedarse" es verde gigante. ¿Qué es?',
        options: [
          'Un error de diseño.',
          'Confirmshaming / Roach Motel (fácil entrar, difícil salir).',
          'Una sugerencia amable.',
          'Optimización visual.'
        ],
        correctAnswer: 1,
        explanation: 'Es una técnica para dificultar que canceles un servicio.',
        hint: 'Trampas de diseño.'
      },
      {
        id: 't28-3',
        type: 'multiple-choice',
        question: '¿Qué es el "Scarcity Pattern" (Falsa Escasez)?',
        options: [
          'Que no hay internet.',
          'Poner mensajes como "¡Solo queda 1 unidad!" para meterte prisa y que compres sin pensar.',
          'Un tipo de ahorro.',
          'Cuando se acaba la batería.'
        ],
        correctAnswer: 1,
        explanation: 'Crea una urgencia artificial para anular tu capacidad crítica.',
        hint: 'Manipulación de tiempo.'
      },
      {
        id: 't28-4',
        type: 'sorting',
        question: 'Ordena estos trucos de manipulación de "Menos Agresivo" a "Más Agresivo":',
        options: [
          'Sugerencia de productos similares',
          'Añadir productos al carrito sin permiso',
          'Dificultar la cancelación de una suscripción',
          'Cargos ocultos al final de la compra'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La ética en el diseño (UX) es fundamental para la confianza del usuario.',
        hint: 'Escala de engaño.'
      },
      {
        id: 't28-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Bait and Switch"?',
        options: [
          'Pescar y cambiar el cebo.',
          'Cuando el usuario busca una cosa pero el diseño le lleva a otra distinta e indeseada.',
          'Un tipo de interruptor.',
          'Cambiar la contraseña.'
        ],
        correctAnswer: 1,
        explanation: 'Es como una trampa donde crees que haces A pero acabas haciendo B.',
        hint: 'Engaño directo.'
      }
    ]
  },
  {
    id: 'c29',
    title: 'Módulo 29: Salto Cuántico',
    topic: 'Futuro de la Tecnología',
    description: 'NEXUS está investigando el futuro. Prepárate para la computación cuántica.',
    codeFragment: 'P',
    tasks: [
      {
        id: 't29-1',
        type: 'multiple-choice',
        question: '¿Qué es un "Qubit"?',
        options: [
          'Un bit que puede ser 0 y 1 al mismo tiempo gracias a la física cuántica.',
          'Un bit muy rápido.',
          'Un virus del futuro.',
          'Una moneda digital.'
        ],
        correctAnswer: 0,
        explanation: 'Es la unidad básica de la computación cuántica, permitiendo cálculos masivos.',
        hint: 'Conceptos cuánticos.'
      },
      {
        id: 't29-2',
        type: 'scenario',
        question: '¿Por qué la computación cuántica es una amenaza para la seguridad actual?',
        options: [
          'Porque gasta mucha luz.',
          'Porque podría romper casi todos los sistemas de cifrado actuales en segundos.',
          'Porque los ordenadores explotarían.',
          'No es una amenaza.'
        ],
        correctAnswer: 1,
        explanation: 'Obligará a crear la "Criptografía Post-Cuántica".',
        hint: 'Impacto en seguridad.'
      },
      {
        id: 't29-3',
        type: 'multiple-choice',
        question: '¿Qué es la "Singularidad Tecnológica"?',
        options: [
          'Cuando solo hay un ordenador en el mundo.',
          'Punto hipotético donde la IA supera a la inteligencia humana y el progreso es incontrolable.',
          'Un error de sistema.',
          'El fin de internet.'
        ],
        correctAnswer: 1,
        explanation: 'Es un concepto teórico sobre el futuro de la inteligencia artificial.',
        hint: 'IA avanzada.'
      },
      {
        id: 't29-4',
        type: 'sorting',
        question: 'Ordena estas eras tecnológicas cronológicamente:',
        options: [
          'Era de las calculadoras mecánicas',
          'Era de los transistores y el silicio',
          'Era de la Inteligencia Artificial masiva',
          'Era de la Computación Cuántica práctica'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Estamos viviendo la transición hacia la tercera era.',
        hint: 'Línea del tiempo.'
      },
      {
        id: 't29-5',
        type: 'multiple-choice',
        question: '¿Qué es el "Internet de los Cuerpos" (IoB)?',
        options: [
          'Internet para cadáveres.',
          'Dispositivos conectados implantados o dentro del cuerpo humano (marcapasos, chips).',
          'Una red social de fitness.',
          'Ropa inteligente.'
        ],
        correctAnswer: 1,
        explanation: 'Plantea retos éticos y de seguridad extremos sobre nuestra propia biología.',
        hint: 'Bio-tecnología.'
      }
    ]
  },
  {
    id: 'c30',
    title: 'Módulo 30: El Puente Final',
    topic: 'Brecha Digital Global',
    description: 'Último paso. Asegura que el conocimiento de NEXUS llegue a todo el mundo.',
    codeFragment: '!',
    tasks: [
      {
        id: 't30-1',
        type: 'multiple-choice',
        question: '¿Qué es la "Brecha Digital"?',
        options: [
          'Un agujero en el cable de fibra.',
          'Desigualdad en el acceso, uso o impacto de las tecnologías entre diferentes grupos sociales.',
          'Cuando se cae internet en todo el mundo.',
          'Un tipo de firewall.'
        ],
        correctAnswer: 1,
        explanation: 'No tener internet hoy significa estar excluido de la educación, el trabajo y la cultura.',
        hint: 'Sección 5.15.'
      },
      {
        id: 't30-2',
        type: 'scenario',
        question: '¿Cómo afecta la brecha digital a la educación?',
        options: [
          'No afecta, todos tienen libros.',
          'Los alumnos sin internet o dispositivos tienen menos oportunidades de aprendizaje y recursos.',
          'Hace que los alumnos lean más.',
          'Solo afecta a los videojuegos.'
        ],
        correctAnswer: 1,
        explanation: 'Se convierte en una brecha de conocimiento y oportunidades futuras.',
        hint: 'Impacto social.'
      },
      {
        id: 't30-3',
        type: 'multiple-choice',
        question: '¿Qué es el "Software Libre"?',
        options: [
          'Software que no cuesta dinero.',
          'Software que respeta la libertad de los usuarios para usarlo, estudiarlo, compartirlo y mejorarlo.',
          'Software que no tiene virus.',
          'Software que se descarga solo.'
        ],
        correctAnswer: 1,
        explanation: 'Es una herramienta clave para cerrar la brecha digital y fomentar la soberanía tecnológica.',
        hint: 'Libertad digital.'
      },
      {
        id: 't30-4',
        type: 'sorting',
        question: 'Ordena los niveles de la brecha digital de "Básico" a "Avanzado":',
        options: [
          'Brecha de Acceso (Tener internet y PC)',
          'Brecha de Uso (Saber usar las herramientas)',
          'Brecha de Calidad (Saber discernir información)',
          'Brecha de Creación (Poder generar tecnología)'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'No basta con tener conexión; hay que saber usarla para mejorar la vida.',
        hint: 'Niveles de brecha.'
      },
      {
        id: 't30-5',
        type: 'multiple-choice',
        question: '¿Cuál es el mayor reto de la humanidad en la era digital?',
        options: [
          'Que el Wi-Fi llegue a Marte.',
          'Garantizar que la tecnología sea un derecho humano universal y no un privilegio.',
          'Hacer móviles más finos.',
          'Que la IA haga los deberes por nosotros.'
        ],
        correctAnswer: 1,
        explanation: 'La tecnología debe ser una herramienta de igualdad, no de división.',
        hint: 'Reflexión final.'
      }
    ]
  },
  {
    id: 'c31',
    title: 'Módulo 31: Control de Tráfico',
    topic: 'Seguridad Perimetral',
    description: 'El tráfico de la red está saturado. Configura los filtros para permitir solo conexiones legítimas.',
    codeFragment: 'N',
    tasks: [
      {
        id: 't31-1',
        type: 'toggle-grid',
        question: 'Filtro de Puertos: Activa solo los puertos impares (P1, P3, P5, P7) para desviar el ataque.',
        correctAnswer: [true, false, true, false, true, false, true, false],
        explanation: 'Alternar puertos es una técnica básica de ofuscación de servicios.',
        hint: 'Activa 1, 3, 5 y 7.',
        data: { labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'] }
      },
      {
        id: 't31-2',
        type: 'slider',
        question: 'Sensibilidad del IDS: Ajústalo al 72% para detectar intrusos sin generar falsos positivos.',
        correctAnswer: 72,
        explanation: 'Un IDS demasiado sensible bloquea a usuarios legítimos; uno poco sensible deja pasar ataques.',
        hint: 'Busca el punto exacto: 72%.',
        data: { minLabel: 'BAJA', maxLabel: 'ALTA' }
      },
      {
        id: 't31-3',
        type: 'sorting',
        question: 'Ordena el protocolo de respuesta ante una intrusión detectada:',
        options: [
          'Aislar el sistema afectado',
          'Identificar el origen del ataque',
          'Notificar al equipo de seguridad',
          'Restaurar desde copia limpia'
        ],
        correctAnswer: [2, 0, 1, 3],
        explanation: 'La comunicación y el aislamiento son los primeros pasos críticos.',
        hint: 'Primero avisa, luego corta la conexión.'
      },
      {
        id: 't31-4',
        type: 'toggle-grid',
        question: 'Bloqueo Geográfico: Bloquea las regiones sospechosas (R2, R4, R6, R8).',
        correctAnswer: [false, true, false, true, false, true, false, true],
        explanation: 'El geobloqueo ayuda a mitigar ataques dirigidos desde regiones específicas.',
        hint: 'Marca las pares: 2, 4, 6 y 8.',
        data: { labels: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'] }
      },
      {
        id: 't31-5',
        type: 'slider',
        question: 'Ancho de Banda de Emergencia: Limita el tráfico al 15% para evitar el colapso del servidor.',
        correctAnswer: 15,
        explanation: 'El "throttling" permite mantener servicios mínimos durante un ataque DDoS.',
        hint: 'Bájalo hasta el 15%.',
        data: { minLabel: '100%', maxLabel: '0%' }
      }
    ]
  },
  {
    id: 'c32',
    title: 'Módulo 32: Guardián del Puerto',
    topic: 'Firewall Maestro',
    description: 'Configura el firewall de NEXUS para bloquear el tráfico no deseado.',
    codeFragment: 'E',
    tasks: [
      {
        id: 't32-1',
        type: 'toggle-grid',
        question: 'Bloquea los puertos pares (P2, P4) para detener el ataque.',
        data: { toggleCount: 4 },
        correctAnswer: [false, true, false, true],
        explanation: 'Los puertos pares suelen ser el objetivo de este malware específico.',
        hint: 'Activa solo P2 y P4.'
      },
      {
        id: 't32-2',
        type: 'toggle-grid',
        question: 'Configuración de seguridad máxima: Activa todos los puertos impares.',
        data: { toggleCount: 8 },
        correctAnswer: [true, false, true, false, true, false, true, false],
        explanation: 'La segmentación por puertos impares dificulta el escaneo secuencial.',
        hint: 'P1, P3, P5, P7.'
      },
      {
        id: 't32-3',
        type: 'toggle-grid',
        question: 'Patrón de defensa "Espejo": Activa los extremos (P1, P8).',
        data: { toggleCount: 8 },
        correctAnswer: [true, false, false, false, false, false, false, true],
        explanation: 'Protege las fronteras de la red.',
        hint: 'Solo el primero y el último.'
      },
      {
        id: 't32-4',
        type: 'toggle-grid',
        question: 'Protocolo de Emergencia: Activa los 4 puertos centrales.',
        data: { toggleCount: 8 },
        correctAnswer: [false, false, true, true, true, true, false, false],
        explanation: 'Concentra el tráfico en el núcleo seguro.',
        hint: 'P3, P4, P5, P6.'
      },
      {
        id: 't32-5',
        type: 'toggle-grid',
        question: 'Bloqueo Total: Activa todos los puertos para revisión.',
        data: { toggleCount: 4 },
        correctAnswer: [true, true, true, true],
        explanation: 'El modo de inspección profunda requiere todos los puertos activos.',
        hint: 'Enciende todos.'
      }
    ]
  },
  {
    id: 'c33',
    title: 'Módulo 33: Calibración IoT',
    topic: 'Sensores Inteligentes',
    description: 'Ajusta la sensibilidad de los sensores de NEXUS para evitar falsas alarmas.',
    codeFragment: 'X',
    tasks: [
      {
        id: 't33-1',
        type: 'slider',
        question: 'Ajusta la sensibilidad del sensor de movimiento al 75%.',
        data: { minLabel: 'BAJA', maxLabel: 'ALTA', initialSlider: 20 },
        correctAnswer: 75,
        explanation: 'Un 75% es el equilibrio ideal para detectar humanos sin saltar por mascotas.',
        hint: 'Mueve el deslizador hasta el 75.'
      },
      {
        id: 't33-2',
        type: 'slider',
        question: 'Calibra el termostato inteligente al nivel crítico del 92%.',
        data: { minLabel: 'FRÍO', maxLabel: 'CALOR', initialSlider: 50 },
        correctAnswer: 92,
        explanation: 'A este nivel se activan los protocolos de refrigeración de emergencia.',
        hint: 'Casi al máximo.'
      },
      {
        id: 't33-3',
        type: 'slider',
        question: 'Ajusta el brillo de las cámaras de seguridad al 33% para visión nocturna.',
        data: { minLabel: 'OSCURO', maxLabel: 'BRILLANTE', initialSlider: 80 },
        correctAnswer: 33,
        explanation: 'El 33% optimiza el sensor infrarrojo.',
        hint: 'Un tercio del total.'
      },
      {
        id: 't33-4',
        type: 'slider',
        question: 'Nivel de cifrado de red IoT: Establece en el 100% (AES-256).',
        data: { minLabel: 'DÉBIL', maxLabel: 'FUERTE', initialSlider: 10 },
        correctAnswer: 100,
        explanation: 'En NEXUS no aceptamos menos del 100% de seguridad.',
        hint: 'Todo a la derecha.'
      },
      {
        id: 't33-5',
        type: 'slider',
        question: 'Ajusta el volumen de la alarma de intrusión al 50%.',
        data: { minLabel: 'SILENCIO', maxLabel: 'MÁXIMO', initialSlider: 100 },
        correctAnswer: 50,
        explanation: 'El 50% es suficiente para alertar sin causar daños auditivos.',
        hint: 'Justo en el medio.'
      }
    ]
  },
  {
    id: 'c34',
    title: 'Módulo 34: Ojo de Halcón',
    topic: 'Detección de Deepfakes',
    description: 'Analiza las imágenes y detecta las manipulaciones por IA.',
    codeFragment: 'U',
    tasks: [
      {
        id: 't34-1',
        type: 'spot-the-error',
        question: 'Analiza esta imagen generada por IA. ¿Cuál es el error más común en las manos?',
        options: [
          'Tienen 5 dedos perfectos.',
          'Tienen dedos extra o deformados.',
          'Son de color azul.',
          'No tienen uñas.'
        ],
        correctAnswer: 1,
        explanation: 'Las IAs actuales aún tienen dificultades para renderizar manos humanas anatómicamente correctas.',
        hint: 'Cuenta los dedos.'
      },
      {
        id: 't34-2',
        type: 'slider',
        question: 'Filtro Anti-Deepfake: Ajusta la sensibilidad de detección al 88% para capturar artefactos visuales.',
        correctAnswer: 88,
        explanation: 'Un nivel alto de análisis permite detectar inconsistencias en el parpadeo y la piel.',
        hint: 'Mueve el deslizador al 88%.',
        data: { minLabel: 'BÁSICO', maxLabel: 'FORENSE' }
      },
      {
        id: 't34-3',
        type: 'toggle-grid',
        question: 'Detección de Artefactos: Marca las zonas donde la IA suele fallar (Z1, Z3, Z4, Z7).',
        correctAnswer: [true, false, true, true, false, false, true, false],
        explanation: 'Los fondos, el pelo y los accesorios suelen tener errores de renderizado.',
        hint: 'Marca 1, 3, 4 y 7.',
        data: { labels: ['Z1: Ojos', 'Z2: Nariz', 'Z3: Orejas', 'Z4: Fondo', 'Z5: Ropa', 'Z6: Boca', 'Z7: Pelo', 'Z8: Cuello'] }
      },
      {
        id: 't34-4',
        type: 'sorting',
        question: 'Pasos para verificar la autenticidad de un vídeo:',
        options: [
          'Analizar el parpadeo del sujeto',
          'Buscar metadatos de la cámara',
          'Comprobar la sincronía de los labios',
          'Usar una herramienta de detección de IA'
        ],
        correctAnswer: [0, 2, 1, 3],
        explanation: 'El análisis visual directo suele ser el primer paso antes de usar herramientas técnicas.',
        hint: 'Empieza por lo más obvio: los ojos.'
      },
      {
        id: 't34-5',
        type: 'slider',
        question: 'Nivel de Confianza: Si el vídeo tiene una confianza menor al 20%, márcalo como FALSO.',
        correctAnswer: 20,
        explanation: 'Los umbrales de confianza ayudan a automatizar la moderación de contenido.',
        hint: 'Ponlo en 20%.',
        data: { minLabel: 'CIERTO', maxLabel: 'FALSO' }
      }
    ]
  },
  {
    id: 'c35',
    title: 'Módulo 35: Filtro de Datos',
    topic: 'Análisis de Tráfico',
    description: 'Intercepta y bloquea las conexiones sospechosas en la red de NEXUS.',
    codeFragment: 'S',
    tasks: [
      {
        id: 't35-1',
        type: 'toggle-grid',
        question: 'Bloquea los nodos impares para filtrar el tráfico de bots.',
        data: { toggleCount: 4 },
        correctAnswer: [true, false, true, false],
        explanation: 'Los bots están usando los canales 1 y 3.',
        hint: 'P1 y P3.'
      },
      {
        id: 't35-2',
        type: 'toggle-grid',
        question: 'Activa el "Escudo en Cruz": P2, P3, P6, P7.',
        data: { toggleCount: 8 },
        correctAnswer: [false, true, true, false, false, true, true, false],
        explanation: 'Esta configuración crea una barrera lógica en el centro del flujo.',
        hint: 'Los dos del medio de cada fila de 4.'
      },
      {
        id: 't35-3',
        type: 'toggle-grid',
        question: 'Modo "Aislado": Apaga todos los puertos.',
        data: { toggleCount: 4 },
        correctAnswer: [false, false, false, false],
        explanation: 'En caso de brecha total, el aislamiento es la única opción.',
        hint: 'Todos apagados.'
      },
      {
        id: 't35-4',
        type: 'toggle-grid',
        question: 'Patrón "Binario": 10101010.',
        data: { toggleCount: 8 },
        correctAnswer: [true, false, true, false, true, false, true, false],
        explanation: 'Alternar puertos confunde a los sniffers de red.',
        hint: 'Uno sí, uno no.'
      },
      {
        id: 't35-5',
        type: 'toggle-grid',
        question: 'Activa solo los puertos de las esquinas.',
        data: { toggleCount: 4 },
        correctAnswer: [true, false, false, true],
        explanation: 'Mantiene las conexiones mínimas de mantenimiento.',
        hint: 'P1 y P4.'
      }
    ]
  },
  {
    id: 'c36',
    title: 'Módulo 36: Enigma Cuántico',
    topic: 'Criptografía del Futuro',
    description: 'NEXUS está probando el cifrado post-cuántico. Resuelve los entrelazamientos.',
    codeFragment: '-',
    tasks: [
      {
        id: 't36-1',
        type: 'toggle-grid',
        question: 'Entrelazamiento Cuántico: Activa los Qubits en estado de superposición (Q1, Q2, Q5, Q6).',
        correctAnswer: [true, true, false, false, true, true, false, false],
        explanation: 'El entrelazamiento permite que dos partículas compartan el mismo estado.',
        hint: 'Activa los dos primeros y los dos del medio (5 y 6).',
        data: { labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'] }
      },
      {
        id: 't36-2',
        type: 'slider',
        question: 'Estabilidad del Criostato: Ajusta la temperatura a 15 mK (miliKelvin) para evitar la decoherencia.',
        correctAnswer: 15,
        explanation: 'Los ordenadores cuánticos necesitan temperaturas cercanas al cero absoluto.',
        hint: 'Bájalo hasta el 15.',
        data: { minLabel: '300K', maxLabel: '0K' }
      },
      {
        id: 't36-3',
        type: 'sorting',
        question: 'Ordena las unidades de información de menor a mayor capacidad de procesamiento paralelo:',
        options: [
          'Bit clásico (0 o 1)',
          'Byte (8 bits)',
          'Qubit (Superposición)',
          'Registro Cuántico (N Qubits)'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'La potencia cuántica crece exponencialmente con cada qubit añadido.',
        hint: 'De lo más simple a lo más complejo.'
      },
      {
        id: 't36-4',
        type: 'toggle-grid',
        question: 'Corrección de Errores: Activa los nodos de paridad cuántica (N2, N4, N6, N8).',
        correctAnswer: [false, true, false, true, false, true, false, true],
        explanation: 'La corrección de errores es el mayor reto de la computación cuántica actual.',
        hint: 'Marca los pares.',
        data: { labels: ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8'] }
      },
      {
        id: 't36-5',
        type: 'slider',
        question: 'Probabilidad de Colapso: Ajusta el observador para que la probabilidad sea del 50%.',
        correctAnswer: 50,
        explanation: 'Al observar un qubit, su estado colapsa a un valor definido (0 o 1).',
        hint: 'Justo en el centro.',
        data: { minLabel: '0%', maxLabel: '100%' }
      }
    ]
  },
  {
    id: 'c37',
    title: 'Módulo 37: Escudo de Identidad',
    topic: 'Gestión de Privacidad',
    description: 'Ajusta los niveles de exposición de tu identidad digital en NEXUS.',
    codeFragment: 'M',
    tasks: [
      {
        id: 't37-1',
        type: 'slider',
        question: 'Nivel de privacidad en Redes Sociales: Ajusta al 100% (Solo amigos).',
        data: { minLabel: 'PÚBLICO', maxLabel: 'PRIVADO', initialSlider: 50 },
        correctAnswer: 100,
        explanation: 'Tus datos solo deben ser visibles para personas de confianza.',
        hint: 'Máxima privacidad.'
      },
      {
        id: 't37-2',
        type: 'slider',
        question: 'Aceptación de Cookies: Ajusta al 0% (Solo técnicas).',
        data: { minLabel: 'TODAS', maxLabel: 'MÍNIMAS', initialSlider: 100 },
        correctAnswer: 0,
        explanation: 'Rechazar cookies de rastreo protege tu navegación.',
        hint: 'Mueve a la izquierda.'
      },
      {
        id: 't37-3',
        type: 'slider',
        question: 'Transparencia de Datos: Ajusta al 85%.',
        data: { minLabel: 'OPACO', maxLabel: 'CLARO', initialSlider: 20 },
        correctAnswer: 85,
        explanation: 'Las empresas deben ser transparentes sobre qué datos recogen.',
        hint: 'Casi al final.'
      },
      {
        id: 't37-4',
        type: 'slider',
        question: 'Nivel de Anonimato: Ajusta al 99%.',
        data: { minLabel: 'IDENTIFICADO', maxLabel: 'ANÓNIMO', initialSlider: 10 },
        correctAnswer: 99,
        explanation: 'El anonimato es un derecho en la red.',
        hint: 'Casi al máximo.'
      },
      {
        id: 't37-5',
        type: 'slider',
        question: 'Seguridad de Contraseña: Ajusta al 100%.',
        data: { minLabel: 'DÉBIL', maxLabel: 'ROBUSTA', initialSlider: 40 },
        correctAnswer: 100,
        explanation: 'Usa mayúsculas, minúsculas, números y símbolos.',
        hint: 'Máxima fuerza.'
      }
    ]
  },
  {
    id: 'c38',
    title: 'Módulo 38: Respuesta Rápida',
    topic: 'Gestión de Incidentes',
    description: 'Un virus se propaga por NEXUS. Aísla los sistemas afectados.',
    codeFragment: 'A',
    tasks: [
      {
        id: 't38-1',
        type: 'toggle-grid',
        question: 'Aísla los nodos infectados: P1 y P3.',
        data: { toggleCount: 4 },
        correctAnswer: [true, false, true, false],
        explanation: 'Activar el aislamiento en esos puertos detiene la propagación.',
        hint: 'P1 y P3.'
      },
      {
        id: 't38-2',
        type: 'toggle-grid',
        question: 'Protocolo de Desinfección: Activa P2, P4, P6, P8.',
        data: { toggleCount: 8 },
        correctAnswer: [false, true, false, true, false, true, false, true],
        explanation: 'Limpia los canales secundarios.',
        hint: 'Todos los pares.'
      },
      {
        id: 't38-3',
        type: 'toggle-grid',
        question: 'Cierre de Emergencia: Activa P1, P2, P3.',
        data: { toggleCount: 4 },
        correctAnswer: [true, true, true, false],
        explanation: 'Bloquea la entrada principal.',
        hint: 'Los tres primeros.'
      },
      {
        id: 't38-4',
        type: 'toggle-grid',
        question: 'Reinicio de Red: Activa solo P5.',
        data: { toggleCount: 8 },
        correctAnswer: [false, false, false, false, true, false, false, false],
        explanation: 'El puerto 5 es el canal de recuperación.',
        hint: 'Solo el quinto.'
      },
      {
        id: 't38-5',
        type: 'toggle-grid',
        question: 'Verificación Final: Activa todos los puertos.',
        data: { toggleCount: 4 },
        correctAnswer: [true, true, true, true],
        explanation: 'Comprueba que todo el sistema está limpio.',
        hint: 'Todos encendidos.'
      }
    ]
  },
  {
    id: 'c39',
    title: 'Módulo 39: Auditor de Red',
    topic: 'Ciberseguridad Proactiva',
    description: 'Busca vulnerabilidades en NEXUS antes que los atacantes.',
    codeFragment: 'E',
    tasks: [
      {
        id: 't39-1',
        type: 'toggle-grid',
        question: 'Escaneo de Puertos: Identifica los puertos abiertos por defecto en un servidor web (P80, P443).',
        correctAnswer: [true, false, true, false, false, false, false, false],
        explanation: 'Los puertos 80 (HTTP) y 443 (HTTPS) son los más comunes.',
        hint: 'Marca el primero y el tercero.',
        data: { labels: ['P80', 'P21', 'P443', 'P22', 'P23', 'P25', 'P110', 'P143'] }
      },
      {
        id: 't39-2',
        type: 'slider',
        question: 'Nivel de Escaneo: Ajusta la agresividad de Nmap al nivel 4 (T4) para un equilibrio entre velocidad y sigilo.',
        correctAnswer: 4,
        explanation: 'Los niveles de temporización (T0-T5) afectan a la detección por parte de firewalls.',
        hint: 'Mueve el deslizador al 4.',
        data: { minLabel: 'SIGILOSO', maxLabel: 'AGRESIVO' }
      },
      {
        id: 't39-3',
        type: 'sorting',
        question: 'Pasos de una Auditoría de Seguridad (Pentesting):',
        options: [
          'Reconocimiento y recolección de datos',
          'Análisis de vulnerabilidades',
          'Explotación (Acceso)',
          'Elaboración de informe'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Un pentesting sigue una metodología rigurosa para asegurar que no se omite nada.',
        hint: 'Primero mira, luego analiza, luego entra.'
      },
      {
        id: 't39-4',
        type: 'toggle-grid',
        question: 'Vulnerabilidades Críticas: Selecciona las que permiten ejecución de código remoto (RCE, SQLi).',
        correctAnswer: [true, true, false, false, false, false, false, false],
        explanation: 'RCE y SQL Injection son de las vulnerabilidades más peligrosas.',
        hint: 'Marca las dos primeras.',
        data: { labels: ['RCE', 'SQLi', 'XSS', 'CSRF', 'LFI', 'RFI', 'IDOR', 'MITM'] }
      },
      {
        id: 't39-5',
        type: 'slider',
        question: 'Prioridad de Parcheo: Una vulnerabilidad con CVSS de 9.8 debe tener prioridad máxima.',
        correctAnswer: 98,
        explanation: 'El sistema CVSS puntúa la gravedad de las vulnerabilidades de 0 a 10.',
        hint: 'Súbelo casi al máximo (98).',
        data: { minLabel: 'BAJA', maxLabel: 'CRÍTICA' }
      }
    ]
  },
  {
    id: 'c40',
    title: 'Módulo 40: El Núcleo Nexus',
    topic: 'Acceso Final',
    description: 'Has llegado al final. Introduce la secuencia maestra para desbloquear el sistema.',
    codeFragment: 'S',
    tasks: [
      {
        id: 't40-1',
        type: 'pattern',
        question: 'Secuencia Maestra de Inicio: 1-5-9-3-7',
        data: { grid: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
        correctAnswer: '15937',
        explanation: 'Secuencia de arranque del núcleo.',
        hint: 'Sigue el orden: 1, 5, 9, 3, 7.'
      },
      {
        id: 't40-2',
        type: 'slider',
        question: 'Potencia del Núcleo: Ajústala al 100% para la secuencia de ignición.',
        correctAnswer: 100,
        explanation: 'Energía máxima alcanzada.',
        hint: 'Todo a la derecha.',
        data: { minLabel: '0%', maxLabel: '100%' }
      },
      {
        id: 't40-3',
        type: 'toggle-grid',
        question: 'Abre todas las compuertas de datos.',
        data: { labels: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'] },
        correctAnswer: [true, true, true, true, true, true, true, true],
        explanation: 'Acceso total concedido.',
        hint: 'Todos los interruptores activos.'
      },
      {
        id: 't40-4',
        type: 'slider',
        question: 'Sincronización final: Ajusta al 100%.',
        data: { minLabel: '0%', maxLabel: '100%' },
        correctAnswer: 100,
        explanation: 'Sincronización completada.',
        hint: 'Todo a la derecha.'
      },
      {
        id: 't40-5',
        type: 'sorting',
        question: 'Última comprobación: Ordena los protocolos de cierre:',
        options: [
          'Verificar integridad de datos',
          'Cerrar sesión de administrador',
          'Activar cortafuegos maestro',
          'Desconectar terminal de acceso'
        ],
        correctAnswer: [0, 2, 1, 3],
        explanation: '¡BIENVENIDO AL NÚCLEO, ANALISTA ÉLITE!',
        hint: 'Primero los datos, luego la seguridad, luego sales.'
      }
    ]
  }
];
