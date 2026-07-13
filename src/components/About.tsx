/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, 
  Target, 
  Eye, 
  Award, 
  Check, 
  HeartHandshake, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'historia' | 'mision' | 'vision' | 'valores'>('historia');

  const premiumJuicesImg = '/src/assets/images/premium_juices_1783973790247.jpg';
  const artisanalPrepImg = '/src/assets/images/artisanal_prep_1783973801979.jpg';

  const tabContent = {
    historia: {
      title: 'Nuestra Historia',
      subtitle: 'Sembrados con pasión, cultivados con amor.',
      paragraphs: [
        'Jugnatural nació en el corazón de un huerto familiar, de la mano de un grupo de apasionados de la vida saludable que se cansaron de las bebidas industriales llenas de conservadores, azúcares refinados e ingredientes impronunciables.',
        'Comenzamos experimentando en nuestra cocina con una pequeña prensa en frío casera. Al compartir nuestras mezclas con vecinos, deportistas y amigos locales, nos dimos cuenta del enorme vacío en el mercado de bebidas verdaderamente puras que conservaran el sabor auténtico de la fruta recién cortada.',
        'Hoy, Jugnatural es una marca de referencia en nutrición consciente. Seguimos trabajando de la mano con pequeños productores orgánicos locales, garantizando frescura insuperable y sustentabilidad en cada botella que prensamos al momento de tu pedido.'
      ],
      icon: <History className="w-6 h-6" />
    },
    mision: {
      title: 'Nuestra Misión',
      subtitle: 'Democratizar la nutrición viva y honesta.',
      paragraphs: [
        'Nuestra misión es nutrir el cuerpo, revitalizar la mente y refrescar el alma de nuestra comunidad a través de jugos 100% naturales prensados en frío de la más alta calidad.',
        'Buscamos inspirar y facilitar un estilo de vida saludable y equilibrado, demostrando que lo natural es deliciosamente irresistible y que la verdadera salud comienza con elecciones honestas en nuestra alimentación diaria.'
      ],
      icon: <Target className="w-6 h-6" />
    },
    vision: {
      title: 'Nuestra Visión',
      subtitle: 'Liderar el cambio hacia un mañana más verde y saludable.',
      paragraphs: [
        'Ser reconocidos nacionalmente como la empresa líder y más confiable de jugos naturales Cold Press, destacando por nuestra transparencia de ingredientes, innovación sustentable y el respeto absoluto a la naturaleza.',
        'Buscamos expandir nuestra presencia promoviendo hábitos saludables, construyendo una red de bienestar que impacte positivamente a las personas y apoye activamente la economía agrícola sustentable.'
      ],
      icon: <Eye className="w-6 h-6" />
    },
    valores: {
      title: 'Nuestros Valores',
      subtitle: 'La esencia detrás de cada gota que prensamos.',
      paragraphs: [
        'En Jugnatural no tomamos atajos. Nos guiamos por principios sólidos para ofrecerte un producto honesto:',
        '• Honestidad Absoluta: 100% fruta, vegetal y superalimentos. Cero azúcares, cero químicos, cero trucos.',
        '• Sustentabilidad Activa: Apoyamos al comercio local y utilizamos procesos de bajo impacto ambiental con envases reutilizables.',
        '• Pasión por la Excelencia: Cada botella se prepara con precisión artesanal y el máximo rigor higiénico para garantizar frescura y calidad excepcionales.'
      ],
      icon: <Award className="w-6 h-6" />
    }
  };

  const valuesList = [
    { name: 'Integridad', desc: 'Ingredientes puros sin secretos ni atajos.', icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
    { name: 'Calidad Premium', desc: 'Prensado en frío con frutas de temporada seleccionadas.', icon: <Sparkles className="w-5 h-5 text-accent-orange" /> },
    { name: 'Sustentabilidad', desc: 'Comercio justo con pequeños agricultores locales.', icon: <HeartHandshake className="w-5 h-5 text-primary" /> }
  ];

  return (
    <section 
      id="nosotros" 
      className="py-20 lg:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            NUESTRO ORIGEN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-6">
            Creemos en el poder de la nutrición honesta
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto" />
        </div>

        {/* Top Split Block: Pictures & Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photos Grid Left */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative">
            
            <div className="absolute -inset-4 bg-primary/10 rounded-[40px] -z-10 blur-xl pointer-events-none" />

            <div className="col-span-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-[24px] overflow-hidden shadow-xl border-4 border-white dark:border-slate-800"
              >
                <img 
                  src={premiumJuicesImg} 
                  alt="Nuestros jugos de frutas frescas" 
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="col-span-6 col-start-7 -mt-16 relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-[24px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
              >
                <img 
                  src={artisanalPrepImg} 
                  alt="Preparación artesanal de jugos" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="col-span-8 -mt-8">
              <div className="bg-primary p-6 rounded-[24px] text-white shadow-xl flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold leading-tight">Certificación Orgánica</h4>
                  <p className="text-xs text-white/90 font-medium mt-1 leading-relaxed">
                    Nuestros proveedores cumplen con los más altos estándares de agricultura ecológica y comercio justo.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Tab Content Right */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Tabs Selector Navigation */}
            <div className="flex flex-wrap border-b border-gray-200 dark:border-slate-800 mb-8 pb-1">
              {(Object.keys(tabContent) as Array<keyof typeof tabContent>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 pb-4 px-4 font-bold text-xs tracking-wider uppercase border-b-2 transition-all duration-300 focus:outline-none ${
                    activeTab === key
                      ? 'border-primary text-primary font-black'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {tabContent[key].icon}
                  <span>{key}</span>
                </button>
              ))}
            </div>

            {/* Tab Body Panel */}
            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                      {tabContent[activeTab].title}
                    </h3>
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mt-1.5">
                      {tabContent[activeTab].subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {tabContent[activeTab].paragraphs.map((p, index) => (
                      <p 
                        key={index} 
                        className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Values Subpanel */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-100 dark:border-slate-800">
              {valuesList.map((val) => (
                <div key={val.name} className="flex flex-col">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      {val.icon}
                    </div>
                    <span className="text-sm font-black text-slate-900 dark:text-white">
                      {val.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
