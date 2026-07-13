/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Category, Testimonial, BlogPost, FAQ, Promotion, GalleryItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'detox',
    name: 'Jugos Detox',
    description: 'Depura tu organismo, elimina toxinas y siéntete ligero.',
    icon: 'Leaf'
  },
  {
    id: 'tropicales',
    name: 'Jugos Tropicales',
    description: 'Sabor exótico y refrescante directo del trópico a tu vaso.',
    icon: 'Sun'
  },
  {
    id: 'energeticos',
    name: 'Jugos Energéticos',
    description: 'La inyección natural de vitalidad para tu día a día sin químicos.',
    icon: 'Zap'
  },
  {
    id: 'antioxidantes',
    name: 'Jugos Antioxidantes',
    description: 'Protege tus células, rejuvenece tu piel y fortalece defensas.',
    icon: 'ShieldAlert'
  },
  {
    id: 'proteicos',
    name: 'Jugos Proteicos',
    description: 'Ideales para después de entrenar, recupera fuerza de forma natural.',
    icon: 'Dumbbell'
  },
  {
    id: 'tradicionales',
    name: 'Jugos Tradicionales',
    description: 'Los clásicos que nunca fallan con la frescura de Jugnatural.',
    icon: 'Sparkles'
  },
  {
    id: 'batidos',
    name: 'Batidos Naturales',
    description: 'Textura cremosa y nutrición completa a base de frutas seleccionadas.',
    icon: 'Milk'
  },
  {
    id: 'smoothies',
    name: 'Smoothies',
    description: 'Deliciosas mezclas heladas perfectas para cualquier hora.',
    icon: 'IceCream'
  }
];

export const PRODUCTS: Product[] = [
  // Detox
  {
    id: 'detox-green-power',
    name: 'Green Power Detox',
    description: 'Nuestra firma verde. Una poderosa mezcla alcalinizante y depurativa que revitaliza tu sistema digestivo.',
    ingredients: ['Apio', 'Espinaca orgánica', 'Manzana verde', 'Pepino', 'Limón', 'Jengibre fresco'],
    benefits: ['Mejora la digestión', 'Efecto diurético', 'Alto en clorofila', 'Aporta energía limpia'],
    price: 4.99,
    category: 'detox',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caaec?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    isPopular: true
  },
  {
    id: 'detox-pure-purple',
    name: 'Pure Purple',
    description: 'Color vibrante y poder desintoxicante. La remolacha activa la circulación y limpia el hígado de forma natural.',
    ingredients: ['Remolacha (Betabel)', 'Zanahoria', 'Manzana roja', 'Jengibre', 'Limón'],
    benefits: ['Limpia el hígado', 'Oxigena la sangre', 'Regula la presión arterial', 'Rico en hierro'],
    price: 4.75,
    category: 'detox',
    image: 'https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?q=80&w=600&auto=format&fit=crop',
    rating: 4.7
  },

  // Tropicales
  {
    id: 'trop-passion-sunset',
    name: 'Passion Sunset',
    description: 'Un viaje directo al paraíso. Sabor intensamente dulce y cítrico con un toque refrescante de menta.',
    ingredients: ['Maracuyá (Fruta de la pasión)', 'Mango Kent', 'Piña miel', 'Menta fresca'],
    benefits: ['Alto contenido de vitamina C', 'Propiedades digestivas', 'Combate el estrés', 'Sabor inigualable'],
    price: 5.25,
    category: 'tropicales',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ec82a897?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    isPopular: true
  },
  {
    id: 'trop-coco-pineapple',
    name: 'Coco-Pine Paradise',
    description: 'La combinación perfecta para rehidratar el cuerpo bajo el sol. Frescura pura y electrolitos naturales.',
    ingredients: ['Agua de coco fresca', 'Piña miel', 'Hierbabuena', 'Toque de lima'],
    benefits: ['Hidratación extrema', 'Electrolitos naturales', 'Antiinflamatorio', 'Refrescante inmediato'],
    price: 5.50,
    category: 'tropicales',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600&auto=format&fit=crop',
    rating: 4.6
  },

  // Energéticos
  {
    id: 'energy-citrus-burst',
    name: 'Citrus Burst',
    description: 'Enciende tu día con un shot masivo de energía cítrica. Ideal para antes de una jornada activa.',
    ingredients: ['Naranja recién exprimida', 'Zanahoria fresca', 'Cúrcuma orgánica', 'Jengibre', 'Toque de pimienta negra para absorción'],
    benefits: ['Aumento de energía natural', 'Refuerza el sistema inmunológico', 'Poderoso antiinflamatorio', 'Brillo para la piel'],
    price: 4.50,
    category: 'energeticos',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    isPopular: true
  },
  {
    id: 'energy-matcha-boost',
    name: 'Matcha Green Boost',
    description: 'Limpio, enfocado y duradero. La combinación de frutas con té matcha japonés te mantendrá concentrado por horas.',
    ingredients: ['Té Matcha grado ceremonial', 'Manzana verde', 'Pepino', 'Espinaca', 'Menta', 'Limón'],
    benefits: ['Energía constante sin bajones', 'Mejora el enfoque mental', 'Rico en L-teanina', 'Termogénico natural'],
    price: 5.99,
    category: 'energeticos',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop',
    rating: 4.8
  },

  // Antioxidantes
  {
    id: 'antiox-berry-fountain',
    name: 'Berry Fountain',
    description: 'Una fuente inagotable de juventud celular. Cargado con los mejores frutos rojos del bosque cultivados localmente.',
    ingredients: ['Arándanos azules', 'Frambuesas', 'Fresas silvestres', 'Manzana roja', 'Granada'],
    benefits: ['Combate radicales libres', 'Mejora salud cardiovascular', 'Excelente para la memoria', 'Salud de la piel mejorada'],
    price: 5.75,
    category: 'antioxidantes',
    image: 'https://images.unsplash.com/photo-1589733901241-5e5148e8809c?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    isPopular: true
  },

  // Proteicos
  {
    id: 'prot-banana-peanut',
    name: 'Banana Peanut Recovery',
    description: 'Nutrición densa para recuperación muscular. Con proteína vegetal pura y un sabor indulgente y natural.',
    ingredients: ['Plátano maduro', 'Mantequilla de maní 100% natural', 'Leche de almendras sin azúcar', 'Avena integral', 'Proteína de guisante aislada'],
    benefits: ['20g de proteína vegetal', 'Recuperación muscular rápida', 'Saciante y energético', 'Rico en potasio y grasas saludables'],
    price: 6.25,
    category: 'proteicos',
    image: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?q=80&w=600&auto=format&fit=crop',
    rating: 4.7
  },

  // Tradicionales
  {
    id: 'trad-fresh-orange',
    name: 'Naranja Clásica Premium',
    description: 'El clásico atemporal preparado al momento. Exprimido justo antes de empacar para conservar toda la vitamina C intacta.',
    ingredients: ['Naranjas 100% seleccionadas de temporada'],
    benefits: ['Absolutamente fresco', 'Rico en Vitamina C natural', 'Sabor dulce y equilibrado', 'Sin agua añadida'],
    price: 3.50,
    category: 'tradicionales',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 'trad-carrot-orange',
    name: 'Zanahoria & Naranja',
    description: 'El dúo dinámico de toda la vida. Delicioso, dulce y lleno de betacarotenos para una salud visual y dermatológica excelente.',
    ingredients: ['Zanahoria de huerto', 'Naranja recién exprimida'],
    benefits: ['Alto en vitamina A (betacarotenos)', 'Salud ocular', 'Protección solar natural para la piel', 'Sabor refrescante y dulce'],
    price: 3.99,
    category: 'tradicionales',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=600&auto=format&fit=crop',
    rating: 4.7
  },

  // Batidos
  {
    id: 'batido-strawberry-banana',
    name: 'Strawberry Fields Cream',
    description: 'Batido clásico, cremoso y lleno de felicidad. Elaborado con leche vegetal artesanal de almendras y frutas en su punto óptimo.',
    ingredients: ['Fresas maduras', 'Plátano', 'Leche de almendras artesanal', 'Miel de agave orgánica'],
    benefits: ['Excelente merienda saludable', 'Rico en antioxidantes', 'Amigable con el estómago', 'Apto para veganos'],
    price: 5.50,
    category: 'batidos',
    image: 'https://images.unsplash.com/photo-1553530979-fcd3e3c0d291?q=80&w=600&auto=format&fit=crop',
    rating: 4.8
  },

  // Smoothies
  {
    id: 'smoothie-acai-bowl-glass',
    name: 'Super Acai Frosty',
    description: 'El rey de los superalimentos en una mezcla súper helada y crujiente. Sensación refrescante premium.',
    ingredients: ['Açai orgánico de la Amazonía', 'Arándanos', 'Leche de avena', 'Toque de granola crujiente por encima'],
    benefits: ['Súper antioxidante', 'Saciante y energético', 'Rico en omegas saludables', 'Sabor gourmet'],
    price: 6.50,
    category: 'smoothies',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    isPopular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sofía Rodríguez',
    role: 'Deportista y Nutrióloga',
    review: '¡Los jugos de Jugnatural son simplemente espectaculares! El Green Power Detox me ha cambiado las mañanas. Me encanta que realmente se note la frescura de los ingredientes cortados al momento.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Alejandro Gómez',
    role: 'Emprendedor tecnológico',
    review: 'Hago mis pedidos por WhatsApp para la oficina todas las tardes. El de Citrus Burst me da esa dosis de energía limpia que necesito para la segunda mitad del día, sin azúcar añadida ni bajones.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Valeria Mendoza',
    role: 'Entrenadora de Fitness',
    review: 'Recomiendo Jugnatural a todos mis alumnos. El Banana Peanut Recovery es perfecto para el post-entrenamiento. Proteína real, limpia y deliciosa. El servicio de entrega es súper rápido.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&auto=format&fit=crop'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Los jugos realmente no llevan conservantes ni azúcar añadida?',
    answer: 'Exactamente. Todos nuestros jugos son 100% naturales, elaborados exclusivamente a partir de frutas y verduras frescas seleccionadas a mano. No añadimos azúcares refinados, conservantes, colorantes, saborizantes ni agua (excepto en recetas específicas que requieren base de agua de coco o leches vegetales).'
  },
  {
    id: 'faq-2',
    question: '¿Qué significa que se preparan "al momento"?',
    answer: 'Significa que las frutas y verduras no se exprimen ni se procesan con antelación. Cuando realizas tu pedido, nuestro personal selecciona la fruta de la estación, la lava con agua purificada y la procesa en nuestras prensas en frío (Cold Press) de inmediato, sellando la botella al instante para conservar el 100% de los nutrientes.'
  },
  {
    id: 'faq-3',
    question: '¿Cuánto tiempo duran los jugos una vez entregados?',
    answer: 'Al ser jugos completamente vivos y sin conservantes, recomendamos consumirlos inmediatamente o mantenerlos refrigerados (entre 2°C y 6°C) por un máximo de 48 horas. Agítalos bien antes de tomar.'
  },
  {
    id: 'faq-4',
    question: '¿Cómo funciona la entrega a domicilio?',
    answer: 'Entregamos en toda la zona metropolitana en menos de 45 minutos. Los jugos viajan en bolsas térmicas con hielo para mantener la cadena de frío intacta. También puedes comprar directamente por nuestro sitio web y coordinar el envío express vía WhatsApp.'
  },
  {
    id: 'faq-5',
    question: '¿Ofrecen planes mensuales o programas de desintoxicación?',
    answer: '¡Sí! Contamos con planes Detox de 1, 3 y 5 días que incluyen una guía de nutrición y 6 jugos seleccionados por día. Contáctanos por WhatsApp o correo para diseñarte un plan a tu medida.'
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-1',
    title: 'Combo Detox Total',
    subtitle: 'Lleva 4 botellas de Green Power Detox y paga solo 3. ¡Inicia tu semana ligero!',
    discount: '25% DESCUENTO',
    code: 'DETOX25',
    bannerColor: 'bg-emerald-600',
    textColor: 'text-white'
  },
  {
    id: 'promo-2',
    title: 'Envío Gratis los Fines de Semana',
    subtitle: 'En la compra de $200 MXN / $15 USD o más, te lo enviamos gratis a tu casa.',
    discount: 'ENVÍO GRATIS',
    code: 'ENVIOFRESH',
    bannerColor: 'bg-amber-500',
    textColor: 'text-slate-900'
  },
  {
    id: 'promo-3',
    title: 'Energy Booster Pack',
    subtitle: 'Combina Citrus Burst + Matcha Boost y obtén un descuento automático para encender tu rutina.',
    discount: '15% OFF',
    code: 'ENERGY15',
    bannerColor: 'bg-orange-600',
    textColor: 'text-white'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    src: 'https://images.unsplash.com/photo-1610970881699-44a5587caaec?q=80&w=800&auto=format&fit=crop',
    alt: 'Green detox juice assembly',
    caption: 'Ingredientes verdes frescos listos para la extracción',
    category: 'Ingredientes'
  },
  {
    id: 'g-2',
    src: 'https://images.unsplash.com/photo-1595981267035-7b04ec82a897?q=80&w=800&auto=format&fit=crop',
    alt: 'Passion fruit juice poured in glass',
    caption: 'Nuestros cítricos son exprimidos en frío al instante',
    category: 'Proceso'
  },
  {
    id: 'g-3',
    src: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop',
    alt: 'Vibrant organic fruits on standard surface',
    caption: 'Frutas orgánicas seleccionadas de agricultores locales',
    category: 'Calidad'
  },
  {
    id: 'g-4',
    src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
    alt: 'Citrus juice splashing',
    caption: 'La frescura del trópico servida en un vaso de cristal',
    category: 'Estilo'
  },
  {
    id: 'g-5',
    src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop',
    alt: 'Pouring fresh juice with berries',
    caption: 'Recetas de autor desarrolladas por nutricionistas certificados',
    category: 'Proceso'
  },
  {
    id: 'g-6',
    src: 'https://images.unsplash.com/photo-1589733901241-5e5148e8809c?q=80&w=800&auto=format&fit=crop',
    alt: 'Fresh organic berries close up',
    caption: 'Antioxidantes de bosque para fortalecer tu salud celular',
    category: 'Ingredientes'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Los increíbles beneficios de la extracción en frío (Cold Press)',
    excerpt: '¿Sabías que la licuadora tradicional oxida los nutrientes de las frutas? Descubre por qué la tecnología Cold Press conserva el 100% de las vitaminas.',
    content: `La extracción en frío, o **Cold Press**, es un método de extracción que utiliza una prensa hidráulica para exprimir suavemente el jugo de las frutas y verduras. A diferencia de las licuadoras tradicionales (centrífugas) que utilizan cuchillas metálicas a alta velocidad, el método Cold Press no genera calor ni introduce oxígeno de forma violenta.

### ¿Por qué elegir Cold Press?

1. **Conservación de Nutrientes**: Al no generar calor, las enzimas, vitaminas y minerales sensibles al calor se mantienen intactas en su estado natural.
2. **Sin Oxidación**: El jugo conserva su color brillante y sus propiedades activas por mucho más tiempo, sin separarse en capas de inmediato.
3. **Mayor Concentración**: Obtienes un jugo mucho más puro, suave al paladar y con una absorción casi instantánea en el torrente sanguíneo.
4. **Digestión Eficiente**: Al separar la fibra insoluble, tu cuerpo absorbe los nutrientes en menos de 15 minutos sin gastar energía metabólica en la digestión.

En **Jugnatural**, utilizamos exclusivamente tecnología Cold Press certificada de grado industrial. Cada vaso de jugo es un concentrado puro de vitalidad celular listo para nutrirte.`,
    category: 'Salud',
    date: 'Julio 10, 2026',
    readTime: '4 min de lectura',
    author: 'Dra. Elena Ruiz (Nutrióloga)',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'blog-2',
    title: 'Guía práctica: Cómo hacer una terapia de jugos Detox de 3 días',
    excerpt: 'Depura tu cuerpo de forma segura. Te enseñamos los pasos clave para realizar una desintoxicación saludable y sin pasar hambre.',
    content: `Realizar un programa Detox de 3 días es una excelente manera de resetear tu sistema digestivo, recuperar energía mental y eliminar la inflamación provocada por alimentos ultraprocesados.

### Pasos para un Detox exitoso:

#### 1. Preparación previa (2 días antes)
Evita el café, las bebidas alcohólicas, el azúcar refinado y la carne roja. Comienza a consumir ensaladas frescas, sopas de verduras y bebe al menos 2 litros de agua pura al día.

#### 2. Durante los 3 días de terapia
* **8:00 AM**: Consume un jugo verde alcalinizante potente (como nuestro *Green Power Detox*).
* **11:00 AM**: Apoya tu energía con un shot cítrico (como *Citrus Burst*).
* **2:00 PM**: Toma un jugo nutritivo y remineralizante (como *Pure Purple*).
* **5:00 PM**: Rehidrátate con agua de coco o frutas tropicales digestivas (como *Coco-Pine Paradise*).
* **8:00 PM**: Cierra el día con un batido verde ligero o un smoothie rico en antioxidantes.

#### 3. Salida del Detox (2 días después)
Introduce alimentos sólidos de manera gradual. Comienza con piña o papaya por la mañana, caldos calientes y vegetales al vapor por la noche. No satures tu estómago de inmediato.

Recuerda escuchar a tu cuerpo. Una terapia Detox bien hecha te dejará una sensación inigualable de ligereza y lucidez.`,
    category: 'Nutrición',
    date: 'Julio 05, 2026',
    readTime: '6 min de lectura',
    author: 'Chef Carlos Santana (Especialista Raw Food)',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caaec?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'blog-3',
    title: 'Superalimentos esenciales para potenciar tus defensas este invierno',
    excerpt: 'Cúrcuma, jengibre, espirulina... Te contamos cuáles son los superalimentos clave que deberías añadir a tus batidos diarios.',
    content: `Los superalimentos son ingredientes naturales que poseen una densidad de nutrientes extraordinariamente alta. Añadirlos a tus bebidas es una de las formas más fáciles y deliciosas de blindar tus defensas.

### Los indispensables en Jugnatural:

* **El Jengibre**: Un potente antibacteriano, antivírico y analgésico natural. Excelente para calmar el tracto digestivo y dar un toque picante delicioso.
* **La Cúrcuma**: Contiene curcumina, un compuesto activo con increíbles propiedades antiinflamatorias y antioxidantes. Siempre la combinamos con naranja y un toque de pimienta negra para multiplicar por 2000% su absorción.
* **Las Semillas de Chía**: Cargadas de fibra soluble que mejora la microbiota, ácidos grasos Omega-3 y proteínas que aportan consistencia y saciedad.
* **El Açai**: La superfruta antioxidante del Amazonas por excelencia, que combate el envejecimiento celular precoz y apoya la salud cardiovascular.

Descubre todas estas joyas nutricionales integradas perfectamente en nuestro menú de Jugnatural y empieza a sentir la diferencia desde el primer día.`,
    category: 'Superalimentos',
    date: 'Junio 28, 2026',
    readTime: '5 min de lectura',
    author: 'Lic. Mariana Cruz (Fitoterapeuta)',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop'
  }
];

export const STATS = [
  { value: 12500, label: 'Clientes Satisfechos', suffix: '+' },
  { value: 342000, label: 'Jugos Vendidos', suffix: ' L' },
  { value: 18, label: 'Frutas Utilizadas', suffix: ' Variedades' },
  { value: 98.7, label: 'Entregas a Tiempo', suffix: '%' }
];

export const BENEFITS = [
  {
    id: 'b-1',
    title: '100% Natural',
    description: 'Elaborado únicamente con frutas y verduras frescas. Nada artificial.',
    icon: 'Apple'
  },
  {
    id: 'b-2',
    title: 'Sin Conservantes',
    description: 'Libre de aditivos, químicos, colorantes o azúcares refinados.',
    icon: 'Sparkles'
  },
  {
    id: 'b-3',
    title: 'Preparación al Momento',
    description: 'Prensado en frío justo cuando haces tu pedido para conservar todo el poder nutricional.',
    icon: 'Clock'
  },
  {
    id: 'b-4',
    title: 'Frutas de Temporada',
    description: 'Selección premium directo de huertos orgánicos de productores locales.',
    icon: 'Citrus'
  },
  {
    id: 'b-5',
    title: 'Vitaminas Intactas',
    description: 'La tecnología Cold Press evita el calentamiento, manteniendo vivas las vitaminas.',
    icon: 'HeartPulse'
  },
  {
    id: 'b-6',
    title: 'Ingredientes Selectos',
    description: 'Cada ingrediente se lava, desinfecta y dosifica de acuerdo a recetas profesionales.',
    icon: 'CheckCircle'
  }
];
