(function () {
  'use strict';

  var translations = {
    'DISI Global Oaxaca — Diverse Intelligences Summer Institute': 'DISI Global Oaxaca — Instituto de Verano sobre Inteligencias Diversas',
    'About the Event — DISI Global Oaxaca': 'Sobre el evento — DISI Global Oaxaca',
    'Program | DISI Global Oaxaca': 'Programa | DISI Global Oaxaca',
    'Organizing Team | DISI Global Oaxaca': 'Equipo organizador | DISI Global Oaxaca',
    'Venue & Accommodation — DISI Global Oaxaca': 'Sede y alojamiento — DISI Global Oaxaca',
    'Apply | DISI Global Oaxaca': 'Convocatoria | DISI Global Oaxaca',
    'Participants — DISI Global Oaxaca': 'Participantes — DISI Global Oaxaca',
    'Art | DISI Global Oaxaca': 'Arte | DISI Global Oaxaca',
    'Feb–Mar 2027': 'Feb–Mar 2027',
    '15–26 Feb 2027': '15–26 feb 2027',
    'Home': 'Inicio',
    'About the Event': 'Sobre el evento',
    'Program': 'Programa',
    'Organizing Team': 'Equipo organizador',
    'Art': 'Arte',
    'Venue & Stay': 'Sede y estancia',
    'Participants': 'Participantes',
    'Apply': 'Convocatoria',
    'DISI Global · Oaxaca, Mexico': 'DISI Global · Oaxaca, México',
    'Diverse Intelligences': 'Inteligencias Diversas',
    'Summer Institute': 'Instituto de Verano',
    'Collectively exploring the origins, nature, and future of intelligences through the ecological and cultural diversity of Oaxaca, Mexico.': 'Exploramos colectivamente los orígenes, la naturaleza y el futuro de las inteligencias a través de la diversidad ecológica y cultural de Oaxaca, México.',
    'February–March 2027': 'Febrero–marzo de 2027',
    'February 15–26, 2027': '15–26 de febrero de 2027',
    '(exact dates TBA)': '(fechas exactas por anunciar)',
    'Organized by DISI fellows from IIMAS, UNAM': 'Organizado por fellows de DISI del IIMAS, UNAM',
    'Apply to DISI Global Oaxaca': 'Participa en DISI Global Oaxaca',
    'Explore the concept': 'Conoce el concepto',
    'Why Oaxaca': 'Por qué Oaxaca',
    'Situating DISI in a new ecological and cultural context': 'Situar a DISI en un nuevo contexto ecológico y cultural',
    'We aim to recreate the experience of DISI fellows and faculty by bringing it to Oaxaca, a region of extraordinary biological and cultural diversity in Mexico, situating the DISI Global experience in a local context that differs greatly from Scotland, while sharing the same values and practices that define the DISI community.': 'Buscamos recrear la experiencia de fellows y faculty de DISI al traerla a Oaxaca, una región de extraordinaria diversidad biológica y cultural en México. Así, situamos la experiencia DISI Global en un contexto local muy distinto al de Escocia, pero con los mismos valores y prácticas que definen a la comunidad DISI.',
    'Grounded in the long-standing ecological practices of Oaxacan communities, participants will examine how community organization, collective action, linguistic diversity, and agroecological knowledge give rise to embodied, adaptive forms of ecological and situated intelligence — and how these insights can inform context-sensitive, culturally responsive artificial systems and policy frameworks.': 'A partir de las prácticas ecológicas de larga tradición de las comunidades oaxaqueñas, las y los participantes examinarán cómo la organización comunitaria, la acción colectiva, la diversidad lingüística y el conocimiento agroecológico dan lugar a formas corporizadas y adaptativas de inteligencia ecológica y situada, y cómo estas ideas pueden orientar sistemas artificiales y marcos de política sensibles al contexto y a la cultura.',
    'Read the full conceptual framework': 'Lee el marco conceptual completo',
    'Find your way in': 'Encuentra tu forma de participar',
    'Explore the event': 'Explora el evento',
    'Purpose, objectives, and what makes this DISI Global Oaxaca gathering distinct.': 'Propósito, objetivos y aquello que distingue a este encuentro DISI Global Oaxaca.',
    'A first look at the opening day, the rest of the program takes shape with the community.': 'Un primer vistazo al día inaugural; el resto del programa tomará forma con la comunidad.',
    'Meet the organizers and the DISI Global Oaxaca host institution.': 'Conoce al equipo organizador y a la institución anfitriona de DISI Global Oaxaca.',
    "Where we'll gather, and what to know about getting to and staying in Oaxaca.": 'Dónde nos reuniremos y qué necesitas saber para llegar y alojarte en Oaxaca.',
    'Who can apply, what to submit, and how contributions are shaped collectively.': 'Quiénes pueden participar, qué deben enviar y cómo se construirán colectivamente las contribuciones.',
    'Meet the community, and learn about the lifelong DISI alumni network.': 'Conoce a la comunidad y la red permanente de exalumnos de DISI.',
    'Join a collaborative contemporary art process shaped by diverse intelligences and the ecological and cultural context of Oaxaca.': 'Participa en un proceso colaborativo de arte contemporáneo inspirado por las inteligencias diversas y el contexto ecológico y cultural de Oaxaca.',
    'Dates': 'Fechas',
    'Location': 'Lugar',
    'Host': 'Institución anfitriona',
    'Network': 'Red',
    'A community, not an audience': 'Una comunidad, no una audiencia',
    'Built collectively, from the first invitation': 'Construido colectivamente desde la primera invitación',
    'There is a single research project and a single storytelling project, both developed collectively, involving every participant. Everyone takes part in organizing DISI, in its talks and events, and in whatever is built together.': 'Habrá un solo proyecto de investigación y un solo proyecto de narración, ambos desarrollados colectivamente con la participación de todas las personas. Cada integrante participa en la organización de DISI, en sus charlas y actividades, y en todo lo que construimos en conjunto.',
    'Applicants are asked not only to share their interests, but what they can contribute: a talk, a reflection, a discussion table, a guided activity, a workshop or any format that supports collective, conceptual, methodological, technical, or creative exploration.': 'Pedimos a las personas postulantes que compartan no solo sus intereses, sino también lo que pueden aportar: una charla, una reflexión, una mesa de discusión, una actividad guiada, un taller o cualquier formato que favorezca la exploración colectiva, conceptual, metodológica, técnica o creativa.',
    '"How does an intelligent relationship between communities and their environment emerge and evolve within specific ecological and cultural contexts?"': '«¿Cómo emerge y evoluciona una relación inteligente entre las comunidades y su entorno dentro de contextos ecológicos y culturales específicos?»',

    'About the event': 'Sobre el evento',
    'Ecological and situated intelligence, explored in community': 'Inteligencia ecológica y situada, explorada en comunidad',
    'Introduction': 'Introducción',
    'DISI Global Oaxaca aims to bring the DISI experience to Oaxaca, in southeastern Mexico, a region with a rich biological and cultural diversity. In doing so, we aim to situate the DISI experience in a local setting to explore in community ecological and situated intelligence.': 'DISI Global Oaxaca busca llevar la experiencia DISI a Oaxaca, en el sureste de México, una región de gran diversidad biológica y cultural. Con ello queremos situar la experiencia DISI en un entorno local para explorar en comunidad la inteligencia ecológica y situada.',
    'Purpose and objectives': 'Propósito y objetivos',
    'A central question': 'Una pregunta central',
    'How does an intelligent relationship between communities and their environment emerge and evolve within specific ecological and cultural contexts?': '¿Cómo emerge y evoluciona una relación inteligente entre las comunidades y su entorno dentro de contextos ecológicos y culturales específicos?',
    'The cultural and biological diversity in Oaxaca, as well as the relationships local communities have developed with their environment, provide a powerful setting for exploring this question. This DISI Global event will explore the collective dimension of ecological and situated intelligence across biological, social, and artificial systems, creating an immersive DISI experience that highlights diversity and collective action as central to intelligent relationships between communities and their environment.': 'La diversidad cultural y biológica de Oaxaca, así como las relaciones que las comunidades locales han desarrollado con su entorno, ofrecen un escenario privilegiado para explorar esta pregunta. Este evento DISI Global abordará la dimensión colectiva de la inteligencia ecológica y situada en sistemas biológicos, sociales y artificiales, mediante una experiencia inmersiva que reconoce la diversidad y la acción colectiva como elementos centrales de las relaciones inteligentes entre las comunidades y su entorno.',
    'Grounded in the long-standing ecological practices of Oaxacan communities, participants will examine how community organization, collective action, linguistic diversity, and agroecological knowledge give rise to embodied, adaptive forms of ecological and situated intelligence that have sustained collective, adaptive relationships with the local environment — and how these insights can inform the design of context-sensitive and culturally responsive artificial systems and related policy frameworks.': 'A partir de las prácticas ecológicas de larga tradición de las comunidades oaxaqueñas, las y los participantes examinarán cómo la organización comunitaria, la acción colectiva, la diversidad lingüística y el conocimiento agroecológico dan lugar a formas corporizadas y adaptativas de inteligencia ecológica y situada que han sostenido relaciones colectivas y adaptativas con el entorno local. También explorarán cómo estos conocimientos pueden orientar el diseño de sistemas artificiales y marcos de política sensibles al contexto y a la cultura.',
    'Bringing together early-career scholars, senior faculty, activists, and storytellers from biology, anthropology, linguistics, ethnobiology, computer science, agroecology, psychology, the arts, and beyond, the program will be designed to create a DISI community committed to dialogue, experimentation, and intellectual risk-taking.': 'El programa reunirá a investigadores en etapas iniciales de su carrera, faculty, activistas y narradores de la biología, la antropología, la lingüística, la etnobiología, las ciencias de la computación, la agroecología, la psicología, las artes y otras áreas. Su propósito será crear una comunidad DISI comprometida con el diálogo, la experimentación y el riesgo intelectual.',
    'The main aim of this DISI Global event is to co-develop new conceptual and practical frameworks for understanding ecological and situated intelligence, while critically reflecting on their broader societal implications — including the potential for collective, adaptive relationships with local environments, and the replicability of these strategies in other regions of the world with different social and ecological conditions.': 'El objetivo principal de este evento DISI Global es desarrollar conjuntamente nuevos marcos conceptuales y prácticos para comprender la inteligencia ecológica y situada, y reflexionar críticamente sobre sus implicaciones sociales más amplias. Esto incluye el potencial de las relaciones colectivas y adaptativas con los entornos locales y la posibilidad de reproducir estas estrategias en otras regiones del mundo con condiciones sociales y ecológicas distintas.',
    'What makes this DISI special': 'Qué hace especial a este DISI',
    'Five commitments that shape the experience': 'Cinco compromisos que dan forma a la experiencia',
    'Collective intelligence in practice': 'La inteligencia colectiva en la práctica',
    'Collective and situated intelligence will be reflected in every aspect of the event, where learning, creating and proposing will be done as a community of inter-dependent individuals, not as an audience.': 'La inteligencia colectiva y situada se reflejará en todos los aspectos del evento. Aprenderemos, crearemos y propondremos como una comunidad de personas interdependientes, no como una audiencia.',
    'Space for uncertainty': 'Espacio para la incertidumbre',
    'The event offers a space to share and embrace uncertainty, and to explore, together, possible ways of navigating it.': 'El evento ofrece un espacio para compartir y acoger la incertidumbre, y para explorar conjuntamente posibles formas de navegarla.',
    'Situated, together and apart': 'Situados, juntos y a la distancia',
    "We reflect on what it means to be situated in a shared physical context, while recognizing that distance doesn't mean we stop being situated. Rather, we are situated within a broader context. That makes room for different perspectives on the same problem, on things that matter to all of us, and helps us develop a shared understanding.": 'Reflexionamos sobre lo que significa estar situados en un contexto físico compartido, reconociendo que la distancia no implica dejar de estar situados. Más bien, formamos parte de un contexto más amplio. Esto abre espacio a distintas perspectivas sobre un mismo problema, sobre asuntos que nos importan a todas y todos, y nos ayuda a construir una comprensión compartida.',
    'Maintaining the spirit of the DISI community': 'Mantener el espíritu de la comunidad DISI',
    'Building bonds, identities, and meanings; breaking down the barrier of the unfamiliar.': 'Construir vínculos, identidades y significados; derribar la barrera de lo desconocido.',
    'Aligned interests, generously shared': 'Intereses comunes, compartidos con generosidad',
    'We look for strategies to identify shared interests. Local communities hold a clarity that comes from lived experience. Their territories, their lives, their appreciation of life, and their persistence depend on such clarity and an encoded acknowledgement of uncertainty which can generate a disposition to listen, to forage for possibilities, opening space for the exchange of ideas and the identification of aligned interests.': 'Buscamos estrategias para identificar intereses compartidos. Las comunidades locales poseen una claridad que surge de la experiencia vivida. Sus territorios, sus vidas, su aprecio por la vida y su persistencia dependen de esa claridad y de un reconocimiento incorporado de la incertidumbre. Esto puede generar una disposición a escuchar y a buscar posibilidades, abriendo espacio para el intercambio de ideas y la identificación de intereses comunes.',
    'Creation and organization': 'Creación y organización',
    'Built by everyone who participates': 'Construido por todas las personas que participan',
    'There will be a single research project and a single storytelling project. Both will be developed collectively, involving all participants.': 'Habrá un solo proyecto de investigación y un solo proyecto de narración. Ambos se desarrollarán colectivamente con la participación de todas las personas.',
    'Everyone takes part in creating the DISI experience — the talks and events that take place, as well as the development of the project and whatever is built together as storytellers.': 'Todas las personas participan en la creación de la experiencia DISI: en las charlas y actividades, en el desarrollo del proyecto y en aquello que construimos en conjunto como narradores.',
    'In their application, applicants should not only state their interests and project ideas, but also describe what they can contribute to DISI. This contribution need not be a talk, it can be a reflection, a discussion table, a guided activity, a workshop, or any format that contributes to collective exploration: conceptual, methodological, technical, or creative.': 'En su solicitud, las personas postulantes deberán expresar sus intereses e ideas de proyecto y describir lo que pueden aportar a DISI. La contribución no tiene que ser una charla: puede ser una reflexión, una mesa de discusión, una actividad guiada, un taller o cualquier formato que contribuya a la exploración colectiva, ya sea conceptual, metodológica, técnica o creativa.',
    'Personalized invitations will be extended to people who could take part as speakers or storytellers, indicating what we believe they could contribute to the collective creation, while allowing for the possibility of proposing something different.': 'Se enviarán invitaciones personalizadas a personas que puedan participar como ponentes o narradores. En ellas indicaremos lo que creemos que podrían aportar a la creación colectiva, manteniendo abierta la posibilidad de proponer algo diferente.',
    'Local community members are warmly invited to be part of DISI Global Oaxaca through specific activities, conversations, and collaborative work that match their interests, availability, and desired level of involvement.': 'Las y los integrantes de comunidades locales están cordialmente invitados a formar parte de DISI Global Oaxaca mediante actividades específicas, conversaciones y trabajo colaborativo acordes con sus intereses, disponibilidad y nivel de participación deseado.',
    'Ready to be part of it?': '¿Quieres formar parte?',
    'Applications are open to early-career scholars, senior faculty, activists, and storytellers across disciplines.': 'La convocatoria está abierta a investigadores en etapas iniciales de su carrera, faculty, activistas y narradores de distintas disciplinas.',
    'See how to apply': 'Consulta cómo participar',

    'A program built with the community': 'Un programa construido con la comunidad',
    "In keeping with DISI's collective spirit, the program will be further grounded once participants and their proposed contributions are defined. Below is the general program for the opening day. The rest of the program will be co-designed and announced as it develops.": 'De acuerdo con el espíritu colectivo de DISI, el programa se concretará una vez que se definan las y los participantes y sus contribuciones propuestas. A continuación se presenta el programa general del día inaugural. El resto se diseñará colectivamente y se anunciará conforme tome forma.',
    'Day 1': 'Día 1',
    'Arrival & Welcome': 'Llegada y bienvenida',
    'Morning': 'Mañana',
    'Registration & welcome gathering': 'Registro y encuentro de bienvenida',
    'Arrival, registration, and an informal welcome breakfast featuring local Oaxacan food, giving everyone a first chance to meet.': 'Llegada, registro y desayuno informal de bienvenida con comida local oaxaqueña, una primera oportunidad para conocernos.',
    'Mid-morning': 'Media mañana',
    'Opening ceremony': 'Ceremonia inaugural',
    'Welcome remarks from the organizing team and from representatives of local Oaxacan communities, framing the place and context we are gathering in.': 'Palabras de bienvenida del equipo organizador y de representantes de comunidades locales de Oaxaca, para enmarcar el lugar y el contexto de nuestro encuentro.',
    'Late morning': 'Final de la mañana',
    'Keynote: What is DISI Global?': 'Conferencia inaugural: ¿qué es DISI Global?',
    'An introductory talk by the organizers on the DISI network, and on the guiding question of this Oaxaca edition: how does an intelligent relationship between communities and their environment emerge and evolve within specific ecological and cultural contexts?': 'Una charla introductoria del equipo organizador sobre la red DISI y la pregunta que guía esta edición en Oaxaca: ¿cómo emerge y evoluciona una relación inteligente entre las comunidades y su entorno dentro de contextos ecológicos y culturales específicos?',
    'Afternoon': 'Tarde',
    'Community-building activity': 'Actividad para construir comunidad',
    'A guided icebreaker grounded in the DISI pillars, generating bonds, identities, and shared meaning, and breaking down the barrier of the unfamiliar.': 'Una actividad guiada para romper el hielo, basada en los pilares de DISI, que permitirá generar vínculos, identidades y significados compartidos, y derribar la barrera de lo desconocido.',
    'Late afternoon': 'Final de la tarde',
    'Orientation to the collective projects': 'Introducción a los proyectos colectivos',
    "Introduction to the single collective research project and the single collective storytelling project, and to how each participant's proposed contribution fits in.": 'Presentación del proyecto colectivo de investigación, del proyecto colectivo de narración y de la forma en que se integrará la contribución propuesta por cada participante.',
    'Evening': 'Noche',
    'Welcome dinner': 'Cena de bienvenida',
    'A shared meal celebrating Oaxacan cuisine, music, and hospitality, the first of many informal spaces for dialogue.': 'Una comida compartida para celebrar la cocina, la música y la hospitalidad oaxaqueñas, el primero de muchos espacios informales para dialogar.',
    'Days 2 onward': 'Del día 2 en adelante',
    'To be announced': 'Por anunciar',
    'Day 2': 'Día 2',
    'Day 3': 'Día 3',
    'Day 4': 'Día 4',
    'Closing days': 'Días de cierre',
    'Program to be developed collectively and announced closer to the event.': 'El programa se desarrollará colectivamente y se anunciará al acercarse el evento.',
    'Why so open?': '¿Por qué es tan abierto?',
    'As a hallmark of DISI Global Oaxaca, contributions from participants, talks, workshops, discussion tables, and guided activities, will shape most of the program. The schedule will become more concrete once participants and their proposed activities are defined.': 'Como rasgo distintivo de DISI Global Oaxaca, las contribuciones de las y los participantes, charlas, talleres, mesas de discusión y actividades guiadas darán forma a la mayor parte del programa. El calendario se concretará una vez que se definan las personas participantes y sus actividades propuestas.',

    'Organizing team': 'Equipo organizador',
    'Organizers': 'Organizadores',
    'DISI Global Oaxaca is organized by DISI Fellows and Faculty from the Research Institute in Applied Mathematics and Systems (IIMAS), UNAM.': 'DISI Global Oaxaca es organizado por DISI Fellows y DISI Faculty del Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (IIMAS) de la UNAM.',
    'Senior Researcher · DISI Fellow and DISI Faculty': 'Investigador titular · DISI Fellow y DISI Faculty',
    "Gabriel Ramos-Fernández is a full-time Researcher in the Department of Mathematical Modeling of Social Systems at the IIMAS, UNAM. He holds a B.Sc. in Basic Biomedical Research and a Ph.D. in Biology from the University of Pennsylvania, and has held research stays at UNAM's Institute of Physics, the Ecotono Laboratory at the University of Comahue, and the Global Research Centre for Diverse Intelligences at the University of St Andrews. His research focuses on the emergence of global properties in biological and social systems, especially collective information processing, using tools such as social interaction observation, network analysis, mathematical modeling, and simulations. He is also interested in socio-ecological systems and biodiversity conservation.": 'Gabriel Ramos-Fernández es investigador de tiempo completo en el Departamento de Modelación Matemática de Sistemas Sociales del IIMAS, UNAM. Es licenciado en Investigación Biomédica Básica y doctor en Biología por la Universidad de Pennsylvania. Ha realizado estancias de investigación en el Instituto de Física de la UNAM, el Laboratorio Ecotono de la Universidad del Comahue y el Global Research Centre for Diverse Intelligences de la Universidad de St Andrews. Su investigación se centra en la emergencia de propiedades globales en sistemas biológicos y sociales, en particular en el procesamiento colectivo de información, mediante la observación de interacciones sociales, el análisis de redes, la modelación matemática y las simulaciones. También estudia los sistemas socioecológicos y la conservación de la biodiversidad.',
    'Website': 'Sitio web',
    'Email': 'Correo',
    'Postdoctoral Researcher · DISI Fellow': 'Investigadora posdoctoral · DISI Fellow',
    'Sandra Elizabeth Smith Aguilar is a postdoctoral researcher in the Department of Mathematical Modeling of Social Systems at the IIMAS, UNAM. Sandra, is a biologist trained at UNAM, where she also earned a master\'s degree in Marine Sciences and Limnology. She holds a Ph.D. in Conservation and Use of Natural Resources from CIIDIR Oaxaca, Instituto Politécnico Nacional. Her research focuses on animal behavior, including humpback whale song and the social behavior of spider monkeys. Since 2013, she has integrated complex systems approaches and social network analysis into her work. She is a DISI Fellow, and coordinates the Oaxaca activities of the Sociedad de Científicos Anónimos.': 'Sandra Elizabeth Smith Aguilar es investigadora posdoctoral en el Departamento de Modelación Matemática de Sistemas Sociales del IIMAS, UNAM. Estudió Biología en la UNAM, donde también cursó la Maestría en Ciencias del Mar y Limnología. Es doctora en Conservación y Aprovechamiento de Recursos Naturales por el CIIDIR Oaxaca del Instituto Politécnico Nacional. Su investigación se enfoca en la conducta animal, incluido el canto de las ballenas jorobadas y la conducta social de los monos araña. Desde 2013 integra en su trabajo el enfoque de sistemas complejos y el análisis de redes sociales. Es DISI Fellow y coordina las actividades en Oaxaca de la Sociedad de Científicos Anónimos.',
    'Researcher · DISI Fellow': 'Investigadora · DISI Fellow',
    'Alejandra Ciria is a full-time researcher in the Department of Computer Science at the IIMAS, UNAM. She holds a B.Sc. in Psychology, a master\'s degree in Cognitive Sciences, and a Ph.D. in Experimental Psychology. Head of the Embodied Cognition Lab (Laboratorio de Cognición Corporizada, LabCoCo), originally based at the School of Psychology, UNAM, where she was a full-time professor in Cognitive and Behavioral Sciences from 2020 to 2025. The lab integrates multidisciplinary approaches to study how the body and situated action cycles, grounded in the physical properties of the environment, shape cognitive processes in biological and artificial agents. Her research focuses on embodied cognition + artificial intelligence, and the computational modeling of cognitive processes in biological and artificial systems.': 'Alejandra Ciria es investigadora de tiempo completo en el Departamento de Ciencias de la Computación del IIMAS, UNAM. Es licenciada en Psicología, maestra en Ciencias Cognitivas y doctora en Psicología Experimental. Dirige el Laboratorio de Cognición Corporizada (LabCoCo), creado originalmente en la Facultad de Psicología de la UNAM, donde fue profesora de tiempo completo en Ciencias Cognitivas y del Comportamiento de 2020 a 2025. El laboratorio integra enfoques multidisciplinarios para estudiar cómo el cuerpo y los ciclos de acción situada, anclados en las propiedades físicas del entorno, dan forma a los procesos cognitivos en agentes biológicos y artificiales. Su investigación se centra en la cognición corporizada, la inteligencia artificial y el modelado computacional de procesos cognitivos.',
    'Visual Artist': 'Artista visual',
    "Mariana Gullco is an Argentine-Mexican visual artist who lives and works in Mexico City. She studied at UNAM's National School of Visual Arts and Faculty of Philosophy and Letters, and earned a degree in Visual Arts from the University of Guadalajara. Her installations, sculptures, and images use domestic and discarded materials to examine everyday consumption and our relationship with the environment. Her long-term research explores post-industrial nature and the intersections of art, design, and science. She has presented projects in Mexico and internationally and was a member of Mexico's National System of Art Creators from 2010 to 2013 and from 2019 to 2022.": 'Mariana Gullco es una artista visual argentino-mexicana que vive y trabaja en la Ciudad de México. Estudió en la Escuela Nacional de Artes Plásticas y en la Facultad de Filosofía y Letras de la UNAM, y obtuvo la licenciatura en Artes Plásticas y Visuales por la Universidad de Guadalajara. Sus instalaciones, esculturas e imágenes emplean materiales domésticos y desechados para reflexionar sobre el consumo cotidiano y nuestra relación con el ambiente. Su trabajo explora la naturaleza postindustrial y los cruces entre arte, diseño y ciencia. Ha presentado proyectos en México y otros países, y formó parte del Sistema Nacional de Creadores de Arte de 2010 a 2013 y de 2019 a 2022.',
    'Host institution': 'Institución anfitriona',
    'To be announced.': 'Por anunciar.',
    'DISI Global Oaxaca, Mexico.': 'DISI Global Oaxaca, México.',
    'ENES Unidad Oaxaca, UNAM': 'ENES Unidad Oaxaca, UNAM',
    'DISI Global Oaxaca will be hosted at the University Extension Unit of the National School of Higher Studies, Oaxaca Unit.': 'DISI Global Oaxaca tendrá como sede la Unidad de Extensión Universitaria de la Escuela Nacional de Estudios Superiores, Unidad Oaxaca.',
    'About DISI': 'Sobre DISI',
    'The Diverse Intelligences Summer Institute': 'El Instituto de Verano sobre Inteligencias Diversas',
    'DISI is a community-building initiative exploring "the origins, nature, and future of intelligences", diverse manifestations of mind and cognition, of agency and awareness, across species and systems. It brings together early-career scholars and storytellers, deliberately breaking down traditional disciplinary boundaries through transdisciplinary lectures, seminars, projects, meals, and salons.': 'DISI es una iniciativa para construir comunidad que explora «los orígenes, la naturaleza y el futuro de las inteligencias»: distintas manifestaciones de la mente y la cognición, de la agencia y la conciencia, entre especies y sistemas. Reúne a investigadores en etapas iniciales de su carrera y narradores, y rompe deliberadamente las fronteras disciplinarias tradicionales mediante conferencias, seminarios, proyectos, comidas y tertulias transdisciplinarias.',
    "DISI is held annually at the University of St Andrews, Scotland. In 2026, DISI was also held for the first time in the United States, at Hobart and William Smith Colleges in New York's beautiful Finger Lakes region. DISI has also grown a global network of DISI Global events that carry its community-first ethos into new ecological and cultural contexts around the world, of which this Oaxaca edition is one.": 'DISI se celebra anualmente en la Universidad de St Andrews, Escocia. En 2026 se realizó por primera vez en Estados Unidos, en Hobart and William Smith Colleges, en la región de Finger Lakes de Nueva York. DISI también ha creado una red mundial de eventos DISI Global que llevan su espíritu centrado en la comunidad a nuevos contextos ecológicos y culturales; esta edición en Oaxaca forma parte de esa red.',
    'Funders': 'Financiadores',
    'Supporting the DISI network': 'Apoyo a la red DISI',
    "DISI's global programming has been supported by two major funders:": 'El programa global de DISI ha contado con el apoyo de dos financiadores principales:',
    '(2024–present)': '(2024–actualidad)',
    'Funding and sponsorship arrangements specific to DISI Global Oaxaca will be confirmed and updated on this page as the event is organized. Additional sponsorships and partnerships will be added as they are confirmed.': 'Los acuerdos de financiamiento y patrocinio específicos para DISI Global Oaxaca se confirmarán y actualizarán en esta página conforme avance la organización del evento. Se agregarán nuevos patrocinios y colaboraciones a medida que se confirmen.',

    'Venue & accommodation': 'Sede y alojamiento',
    'Gathering in Oaxaca de Juárez': 'Un encuentro en Oaxaca de Juárez',
    'A city of extraordinary biological and cultural diversity in southeastern Mexico, and the setting for this DISI Global event.': 'Una ciudad de extraordinaria diversidad biológica y cultural en el sureste de México, sede de este evento DISI Global.',
    'February 15–26, 2027.': 'Del 15 al 26 de febrero de 2027.',
    'City': 'Ciudad',
    'Oaxaca de Juárez, capital of the state of Oaxaca — its historic center is a UNESCO World Heritage Site, close to the archaeological site of Monte Albán.': 'Oaxaca de Juárez, capital del estado de Oaxaca. Su centro histórico es Patrimonio Mundial de la UNESCO y se encuentra cerca de la zona arqueológica de Monte Albán.',
    'Getting there': 'Cómo llegar',
    'The nearest airport is Xoxocotlán International Airport (OAX), a short drive from the historic center.': 'El aeropuerto más cercano es el Aeropuerto Internacional de Xoxocotlán (OAX), a poca distancia en automóvil del centro histórico.',
    'Venue': 'Sede',
    'Talks, workshops, and collective sessions will take place at the University Extension Unit of the National School of Higher Studies, Oaxaca Unit. Maps, schedules, and detailed access information will be added as event logistics are finalized.': 'Las charlas, talleres y sesiones colectivas se realizarán en la Unidad de Extensión Universitaria de la Escuela Nacional de Estudios Superiores, Unidad Oaxaca. Los mapas, horarios y detalles de acceso se agregarán conforme se concrete la logística del evento.',
    'Accommodation': 'Alojamiento',
    'Recommended accommodation — within walking distance of the historic center where possible — will be shared with accepted participants and posted here as arrangements are confirmed.': 'Las opciones de alojamiento recomendadas, de ser posible a poca distancia a pie del centro histórico, se compartirán con las personas aceptadas y se publicarán aquí conforme se confirmen los acuerdos.',
    'A region of rich diversity': 'Una región de gran diversidad',
    "Oaxaca's biological and cultural diversity — and the relationships its communities have developed with their environment over generations — is central to this DISI Global event. Participants can expect an experience shaped by local ecological knowledge, community organization, linguistic diversity, and agroecological practice, alongside the more conventional elements of an academic gathering.": 'La diversidad biológica y cultural de Oaxaca, junto con las relaciones que sus comunidades han desarrollado con el entorno durante generaciones, es central para este evento DISI Global. Las y los participantes vivirán una experiencia marcada por el conocimiento ecológico local, la organización comunitaria, la diversidad lingüística y la práctica agroecológica, además de los elementos más convencionales de un encuentro académico.',
    'Stay tuned:': 'Mantente al tanto:',
    'accommodation partners, transportation, detailed access, and accessibility information will be updated on this page as the event is organized. Accepted participants will also receive details directly by email.': 'la información sobre opciones de alojamiento, transporte, acceso detallado y accesibilidad se actualizará en esta página conforme avance la organización. Las personas aceptadas también recibirán los detalles directamente por correo electrónico.',

    'DISI Global Oaxaca Fellow Application': 'Convocatoria para DISI Global Oaxaca Fellows',
    'Diverse Intelligences Summer Institute, Global Edition, Oaxaca, México': 'Instituto de Verano sobre Inteligencias Diversas, edición global, Oaxaca, México',
    'DISI Global Oaxaca is seeking researchers and graduate students in fields including, but not limited to, biology, anthropology, linguistics, ethnobiology, computer science, agroecology, psychology, philosophy, sociology, the arts, and activism, who are interested in pursuing interdisciplinary, collaborative research on diverse intelligences, broadly construed, to join us in Oaxaca, México, as DISI Global Fellows from February 15 to 26, 2027.': 'DISI Global Oaxaca convoca a investigadores y estudiantes de posgrado de áreas que incluyen, entre otras, biología, antropología, lingüística, etnobiología, ciencias de la computación, agroecología, psicología, filosofía, sociología, artes y activismo. Buscamos personas interesadas en realizar investigación interdisciplinaria y colaborativa sobre inteligencias diversas, entendidas en un sentido amplio, para acompañarnos en Oaxaca, México, como DISI Global Fellows del 15 al 26 de febrero de 2027.',
    'DISI Global Oaxaca will be hosted by the organizing team in Oaxaca, with institutional support from the Research Institute in Applied Mathematics and Systems (IIMAS), UNAM, for an immersive two-week program. Fellows will take part in a program shaped collectively by the community, including talks, workshops, discussion tables, guided activities, and a shared collective research project and storytelling project.': 'DISI Global Oaxaca será organizado por el equipo coordinador en Oaxaca, con el apoyo institucional del Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (IIMAS) de la UNAM, como un programa inmersivo de dos semanas. Las y los fellows participarán en un programa construido colectivamente por la comunidad, con charlas, talleres, mesas de discusión, actividades guiadas, un proyecto colectivo de investigación y un proyecto colectivo de narración.',
    'In addition to participating as fellows, many participants will be invited to serve as presenters, facilitators, or instructors for sessions and activities, so that the DISI Global Oaxaca community can learn from the expertise and perspectives they bring.': 'Además de participar como fellows, muchas personas serán invitadas a presentar, facilitar o impartir sesiones y actividades, para que la comunidad DISI Global Oaxaca pueda aprender de la experiencia y las perspectivas que aportan.',
    'Mentorship': 'Mentoría',
    'Mentors & hosts': 'Mentores y anfitriones',
    'All DISI Global Fellows will be assigned a mentor (for graduate students, postdocs, and early-career researchers) or a host (for senior faculty), ensuring every participant has a primary point of contact. Junior fellows will have the opportunity for explicit mentorship, organized around one or more goals established in conversation with their mentor.': 'A cada DISI Global Fellow se le asignará un mentor, en el caso de estudiantes de posgrado, posdoctorantes e investigadores en etapas iniciales, o un anfitrión, en el caso de faculty con mayor trayectoria. Así, cada participante tendrá un punto de contacto principal. Las y los fellows junior contarán con una mentoría explícita organizada en torno a una o más metas acordadas con su mentor.',
    'Funding': 'Financiamiento',
    'Travel support': 'Apoyo para viajes',
    'Limited funds are available to help cover travel and participation costs for DISI Global Fellows. Details will be shared with accepted applicants.': 'Se dispone de fondos limitados para contribuir a los gastos de viaje y participación de DISI Global Fellows. Los detalles se compartirán con las personas aceptadas.',
    'Eligibility': 'Elegibilidad',
    'Who can apply': 'Quiénes pueden postularse',
    'Graduate students': 'Estudiantes de posgrado',
    'With interest in fields including biology, anthropology, linguistics, ethnobiology, computer science, agroecology, psychology, philosophy, sociology, the arts, or related areas.': 'Con interés en áreas como biología, antropología, lingüística, etnobiología, ciencias de la computación, agroecología, psicología, filosofía, sociología, artes u otros campos afines.',
    'Early-career researchers': 'Investigadores en etapas iniciales',
    'Pursuing interdisciplinary and collaborative research on diverse intelligences, broadly construed.': 'Que desarrollen investigación interdisciplinaria y colaborativa sobre inteligencias diversas, entendidas en un sentido amplio.',
    'Faculty': 'Personal académico',
    'Senior scholars whose work connects to diverse intelligences, ecological and situated intelligence, or interdisciplinary approaches to biological, social, cultural, or artificial systems.': 'Investigadores con trayectoria cuyo trabajo se relacione con las inteligencias diversas, la inteligencia ecológica y situada, o los enfoques interdisciplinarios de sistemas biológicos, sociales, culturales o artificiales.',
    'Practitioners': 'Profesionales',
    'Professionals and community-based practitioners whose experience can contribute to collaborative research, facilitation, conservation, education, or public engagement.': 'Profesionales y personas con experiencia de trabajo comunitario que puedan contribuir a la investigación colaborativa, la facilitación, la conservación, la educación o la vinculación pública.',
    'Activists': 'Activistas',
    'Activists interested in contributing political, ecological, community-centered, or territorial perspectives to the DISI Global Oaxaca experience.': 'Activistas interesados en aportar perspectivas políticas, ecológicas, comunitarias o territoriales a la experiencia DISI Global Oaxaca.',
    'Artists & storytellers': 'Artistas y narradores',
    'Artists and storytellers interested in creative practices that support collective exploration, public engagement, and shared ways of making sense.': 'Artistas y narradores interesados en prácticas creativas que favorezcan la exploración colectiva, la vinculación pública y las formas compartidas de construir sentido.',
    'To apply': 'Para postularte',
    'Submit the following documentation': 'Envía la siguiente documentación',
    'A current curriculum vitae.': 'Un currículum vitae actualizado.',
    'Letter of interest': 'Carta de interés',
    'A short bio, together with your perspective on collaboration-oriented interests and ideas. Please address:': 'Una semblanza breve junto con tu perspectiva sobre intereses e ideas orientados a la colaboración. Incluye lo siguiente:',
    'What are you most looking forward to at DISI Global Oaxaca?': '¿Qué es lo que más esperas de DISI Global Oaxaca?',
    'What is your expertise? What could you contribute to a collaborative project?': '¿Cuál es tu área de experiencia? ¿Qué podrías aportar a un proyecto colaborativo?',
    'What are you most interested in learning during the event?': '¿Qué te interesa más aprender durante el evento?',
    'Describe one possible collaborative idea or project you would be excited to explore, including its basic objectives and what it would seek to achieve.': 'Describe una posible idea o proyecto colaborativo que te entusiasme explorar, incluidos sus objetivos básicos y lo que buscaría lograr.',
    'Explain how this idea connects with the logic of DISI Global Oaxaca, including ecological and situated intelligence, collective work, and the local context.': 'Explica cómo se relaciona esta idea con la lógica de DISI Global Oaxaca, incluida la inteligencia ecológica y situada, el trabajo colectivo y el contexto local.',
    'Program activities and contributions': 'Actividades y contribuciones al programa',
    "Because the program will be built from participants' proposed activities, describe one or more possible program activities you would like to participate in. Please address:": 'Como el programa se construirá a partir de las actividades propuestas por las y los participantes, describe una o más actividades en las que te gustaría participar. Incluye lo siguiente:',
    'Explain the relevance for DISI Global Oaxaca.': 'Explica su relevancia para DISI Global Oaxaca.',
    "Provide the name of the activity, duration, and materials needed. For example, you might describe a workshop of 4 hours you'd like to lead or participate in.": 'Indica el nombre de la actividad, su duración y los materiales necesarios. Por ejemplo, puedes describir un taller de cuatro horas que te gustaría coordinar o en el que quisieras participar.',
    'Provide complementary information about your proposed contributions, such as relevant references, links, or other supporting materials.': 'Incluye información complementaria sobre tus contribuciones propuestas, como referencias, enlaces u otros materiales de apoyo pertinentes.',
    'Explain how the activity could contribute to co-develop new conceptual and practical frameworks for understanding ecological and situated intelligence.': 'Explica cómo podría contribuir la actividad al desarrollo conjunto de nuevos marcos conceptuales y prácticos para comprender la inteligencia ecológica y situada.',
    'Apply here': 'Postúlate aquí',
    'Application portal link to be added.': 'El enlace al portal de solicitudes se agregará próximamente.',
    'Questions': 'Preguntas',
    'Get in touch': 'Contáctanos',
    'If you have any questions, please reach out to': 'Si tienes alguna pregunta, escríbenos a',

    'The DISI Global Oaxaca community': 'La comunidad DISI Global Oaxaca',
    'Early-career scholars, senior faculty, activists, and storytellers from biology, anthropology, linguistics, ethnobiology, computer science, agroecology, psychology, the arts, and beyond.': 'Investigadores en etapas iniciales, faculty, activistas y narradores de la biología, la antropología, la lingüística, la etnobiología, las ciencias de la computación, la agroecología, la psicología, las artes y otras áreas.',
    'Participant profiles will be published here once applications are reviewed and the DISI Global Oaxaca community is confirmed.': 'Los perfiles de participantes se publicarán aquí una vez revisadas las solicitudes y confirmada la comunidad DISI Global Oaxaca.',
    'Apply to join': 'Postúlate para participar',
    'Beyond the week': 'Más allá del encuentro',
    'The DISI alumni network': 'La red de exalumnos de DISI',
    "Being part of DISI doesn't end when the event does. DISI fosters a lifelong, worldwide network of fellows and faculty members who continue to collaborate, share opportunities, and stay in dialogue well beyond their time together, through year-round programming and community connections.": 'Formar parte de DISI no termina cuando concluye el evento. DISI impulsa una red mundial y permanente de fellows y faculty que continúan colaborando, compartiendo oportunidades y dialogando mucho después del encuentro, mediante actividades a lo largo del año y conexiones comunitarias.',
    'DISI Global Oaxaca fellows will join this broader DISI alumni community, alongside participants from around the world.': 'Las y los fellows de DISI Global Oaxaca se integrarán a esta comunidad más amplia de exalumnos de DISI, junto con participantes de todo el mundo.',
    'Local participation, on your own terms.': 'Participación local según tus intereses.',
    'Members of Oaxacan communities are warmly invited to take part in DISI Global Oaxaca, with no obligation to remain involved beyond what feels meaningful to them. Participation is always a choice.': 'Las y los integrantes de comunidades oaxaqueñas están cordialmente invitados a participar en DISI Global Oaxaca, sin obligación de mantener su participación más allá de lo que les resulte significativo. Participar siempre será una elección.',

    'Art at DISI': 'Arte en DISI',
    'Contemporary art created in collaboration': 'Arte contemporáneo creado en colaboración',
    'We invite artists to bring creative practices into conversation with diverse intelligences, collective inquiry, and the ecological and cultural context of Oaxaca.': 'Invitamos a artistas a poner sus prácticas creativas en diálogo con las inteligencias diversas, la investigación colectiva y el contexto ecológico y cultural de Oaxaca.',
    'Call for artists': 'Convocatoria para artistas',
    'Create, experiment, and think with the DISI community': 'Crear, experimentar y pensar con la comunidad DISI',
    'DISI Global Oaxaca invites artists from different disciplines and stages of their careers to participate in an immersive gathering from February 15 to 26, 2027, at ENES Unidad Oaxaca, UNAM. Artists will work alongside researchers, students, activists, practitioners, and storytellers to explore ecological and situated intelligence through contemporary artistic practice.': 'DISI Global Oaxaca invita a artistas de distintas disciplinas y etapas de trayectoria a participar en un encuentro inmersivo del 15 al 26 de febrero de 2027 en la ENES Unidad Oaxaca, UNAM. Las y los artistas trabajarán junto con investigadores, estudiantes, activistas, profesionales y narradores para explorar la inteligencia ecológica y situada desde la práctica artística contemporánea.',
    'Rather than arriving with a predetermined final product, participants will be encouraged to develop ideas through exchange, experimentation, and collaboration. Artistic processes may respond to the questions that emerge during DISI, to the local context, or to the relationships between biological, social, cultural, and artificial systems.': 'En lugar de llegar con un producto final predeterminado, se invitará a las y los participantes a desarrollar ideas mediante el intercambio, la experimentación y la colaboración. Los procesos artísticos podrán responder a las preguntas que surjan durante DISI, al contexto local o a las relaciones entre sistemas biológicos, sociales, culturales y artificiales.',
    'Ways of participating': 'Formas de participar',
    'Practices that can meet and transform one another': 'Prácticas que pueden encontrarse y transformarse',
    'Collective creation': 'Creación colectiva',
    'Develop work with other participants, allowing different forms of knowledge and practice to shape both the process and its outcomes.': 'Desarrolla obra con otras personas, permitiendo que distintas formas de conocimiento y práctica den forma tanto al proceso como a sus resultados.',
    'Situated practice': 'Práctica situada',
    "Engage carefully with Oaxaca's ecological, social, and cultural context, recognizing that place is not a backdrop but part of the inquiry.": 'Relaciona tu práctica de manera cuidadosa con el contexto ecológico, social y cultural de Oaxaca, reconociendo que el lugar no es un fondo, sino parte de la investigación.',
    'Art, science, and other knowledges': 'Arte, ciencia y otros saberes',
    'Create exchanges across artistic research, science, technology, community knowledge, and forms of lived experience.': 'Propicia intercambios entre la investigación artística, la ciencia, la tecnología, los saberes comunitarios y las distintas formas de experiencia vivida.',
    'Open formats': 'Formatos abiertos',
    'Propose installations, performances, sound or moving-image work, participatory actions, workshops, visual narratives, or other contemporary forms.': 'Propón instalaciones, performance, obra sonora o audiovisual, acciones participativas, talleres, narrativas visuales u otras formas contemporáneas.',
    'What to propose': 'Qué proponer',
    'An idea with room to change': 'Una idea con espacio para transformarse',
    'Applications should describe a question, process, or initial artistic idea that could grow through collaboration during DISI Global Oaxaca. Proposals should explain how the practice connects with ecological or situated intelligence, collective creation, and the context of the gathering.': 'Las solicitudes deberán describir una pregunta, un proceso o una idea artística inicial que pueda crecer mediante la colaboración durante DISI Global Oaxaca. Las propuestas deberán explicar cómo se relaciona la práctica con la inteligencia ecológica o situada, la creación colectiva y el contexto del encuentro.',
    'Please also indicate the format, approximate duration, materials, spatial or technical needs, and possible ways for other participants to become involved.': 'Indica también el formato, la duración aproximada, los materiales, las necesidades espaciales o técnicas y las posibles formas de involucrar a otras personas participantes.',
    'Collaboration is central.': 'La colaboración es central.',
    'The proposal does not need to define a finished artwork. We are interested in practices that remain open to listening, experimentation, shared authorship, and the possibility of becoming something different through the encounter.': 'La propuesta no necesita definir una obra terminada. Nos interesan las prácticas abiertas a la escucha, la experimentación, la autoría compartida y la posibilidad de convertirse en algo diferente a partir del encuentro.',
    'Join the community': 'Únete a la comunidad',
    'Bring your artistic practice to DISI Global Oaxaca': 'Trae tu práctica artística a DISI Global Oaxaca',
    'Artists can apply through the general DISI Global Oaxaca application and describe their proposed contribution in the program activities section.': 'Las y los artistas pueden postularse mediante la convocatoria general de DISI Global Oaxaca y describir su contribución propuesta en la sección de actividades del programa.',

    'February 15–26, 2027 · Oaxaca de Juárez, México': '15–26 de febrero de 2027 · Oaxaca de Juárez, México',
    'Organized by DISI fellows from the Research Institute on Applied Mathematics and Systems (': 'Organizado por DISI fellows del Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (',
    'Organized by DISI fellows and faculty from the Research Institute in Applied Mathematics and Systems (': 'Organizado por DISI fellows y faculty del Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (',
    '), National Autonomous University of Mexico (UNAM).': '), Universidad Nacional Autónoma de México (UNAM).',
    '), UNAM.': '), UNAM.',
    'Contact': 'Contacto',
    'Organizing team: Gabriel Ramos-Fernández, Sandra E. Smith Aguilar, Alejandra Ciria & Mariana Gullco': 'Equipo organizador: Gabriel Ramos-Fernández, Sandra E. Smith Aguilar, Alejandra Ciria y Mariana Gullco',
    'Part of the DISI Network': 'Parte de la red DISI',
    'DISI Global Oaxaca is funded by the': 'DISI Global Oaxaca recibe financiamiento del',
    ', supported by the John Templeton Foundation and Templeton World Charity Foundation.': ', con el apoyo de la John Templeton Foundation y la Templeton World Charity Foundation.',
    'DISI Global Oaxaca is inspired by the': 'DISI Global Oaxaca se inspira en el',
    ', held annually in St Andrews, Scotland, and supported by the John Templeton Foundation and Templeton World Charity Foundation.': ', celebrado anualmente en St Andrews, Escocia, con el apoyo de la John Templeton Foundation y la Templeton World Charity Foundation.',
    ', held annually at the University of St Andrews, Scotland, and supported by the John Templeton Foundation and Templeton World Charity Foundation.': ', celebrado anualmente en la Universidad de St Andrews, Escocia, con el apoyo de la John Templeton Foundation y la Templeton World Charity Foundation.'
  };

  var descriptions = {
    'DISI Global Oaxaca (February 15–26, 2027) explores ecological and situated intelligence across biological, social, and artificial systems, grounded in the cultural and biological diversity of Oaxaca, Mexico.': 'DISI Global Oaxaca (15–26 de febrero de 2027) explora la inteligencia ecológica y situada en sistemas biológicos, sociales y artificiales desde la diversidad cultural y biológica de Oaxaca, México.',
    'The conceptual framework behind DISI Global Oaxaca: purpose, objectives, and what makes this DISI Global event distinct.': 'El marco conceptual de DISI Global Oaxaca: propósito, objetivos y aquello que distingue a este evento DISI Global.',
    'A first look at the DISI Global Oaxaca program, opening day activities, with the rest of the week to be co-designed with the community.': 'Un primer vistazo al programa de DISI Global Oaxaca y a las actividades del día inaugural; el resto se diseñará junto con la comunidad.',
    'Meet the organizing team of DISI Global Oaxaca and learn about the DISI network.': 'Conoce al equipo organizador de DISI Global Oaxaca y descubre la red DISI.',
    'Venue, dates, accommodation, and travel information for DISI Global Oaxaca, February 15–26, 2027.': 'Sede, fechas, alojamiento e información de viaje para DISI Global Oaxaca, del 15 al 26 de febrero de 2027.',
    'How to apply to become a DISI Global Oaxaca Fellow, eligibility, mentorship, application materials, and deadlines.': 'Cómo postularte para ser DISI Global Oaxaca Fellow: elegibilidad, mentoría, documentos y fechas límite.',
    'DISI Global Oaxaca participants — to be announced. Learn about the lifelong DISI alumni network.': 'Participantes de DISI Global Oaxaca, próximamente. Conoce la red permanente de exalumnos de DISI.',
    'An invitation to artists to create contemporary art collaboratively within DISI Global Oaxaca, February 15–26, 2027.': 'Una invitación para crear arte contemporáneo en colaboración en el marco de DISI Global Oaxaca, del 15 al 26 de febrero de 2027.'
  };

  var originals = new WeakMap();
  var attrOriginals = new WeakMap();
  var originalTitle = document.title;

  function rememberText(node) {
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    return originals.get(node);
  }

  function translateTextNode(node, language) {
    var original = rememberText(node);
    var trimmed = original.trim();
    if (!trimmed || !translations[trimmed]) {
      node.nodeValue = original;
      return;
    }
    var leading = original.match(/^\s*/)[0];
    var trailing = original.match(/\s*$/)[0];
    node.nodeValue = language === 'es' ? leading + translations[trimmed] + trailing : original;
  }

  function translateAttributes(language) {
    document.querySelectorAll('[aria-label], [alt]').forEach(function (element) {
      if (!attrOriginals.has(element)) {
        attrOriginals.set(element, {
          ariaLabel: element.getAttribute('aria-label'),
          alt: element.getAttribute('alt')
        });
      }
      var original = attrOriginals.get(element);
      if (original.ariaLabel !== null) {
        if (original.ariaLabel === 'Toggle menu') {
          element.setAttribute('aria-label', language === 'es' ? 'Abrir o cerrar menú' : original.ariaLabel);
        } else {
          element.setAttribute('aria-label', original.ariaLabel);
        }
      }
      if (original.alt !== null) element.setAttribute('alt', original.alt);
    });
  }

  function applyLanguage(language) {
    document.querySelectorAll('body *:not(script):not(style)').forEach(function (element) {
      Array.prototype.forEach.call(element.childNodes, function (node) {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language);
      });
    });

    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      var originalDescription = meta.getAttribute('data-original-content') || meta.getAttribute('content');
      meta.setAttribute('data-original-content', originalDescription);
      meta.setAttribute('content', language === 'es' && descriptions[originalDescription] ? descriptions[originalDescription] : originalDescription);
    }

    document.title = language === 'es' && translations[originalTitle] ? translations[originalTitle] : originalTitle;

    translateAttributes(language);
    document.documentElement.lang = language;
    document.documentElement.setAttribute('data-language', language);
    document.querySelectorAll('.language-switch').forEach(function (button) {
      button.setAttribute('aria-label', language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
      button.setAttribute('title', language === 'es' ? 'Cambiar a inglés' : 'Cambiar a español');
      button.querySelector('[data-lang="en"]').classList.toggle('is-active', language === 'en');
      button.querySelector('[data-lang="es"]').classList.toggle('is-active', language === 'es');
    });
  }

  function createLanguageSwitch() {
    var header = document.querySelector('.header-inner');
    var navToggle = document.querySelector('.nav-toggle');
    if (!header || !navToggle) return;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'language-switch';
    button.innerHTML = '<span data-lang="en">ENG</span><span class="language-divider" aria-hidden="true">/</span><span data-lang="es">ESP</span>';
    button.addEventListener('click', function () {
      var nextLanguage = document.documentElement.lang === 'es' ? 'en' : 'es';
      localStorage.setItem('disi-language', nextLanguage);
      applyLanguage(nextLanguage);
    });
    header.insertBefore(button, navToggle);
  }

  createLanguageSwitch();
  applyLanguage(localStorage.getItem('disi-language') === 'en' ? 'en' : 'es');
})();
