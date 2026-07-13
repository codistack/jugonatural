/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  User, 
  X, 
  BookOpen, 
  Share2, 
  Heart 
} from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLikePost = (e: React.MouseEvent, postId: string) => {
    e.stopPropagation();
    setLikedPosts((prev) => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const handleSharePost = (e: React.MouseEvent, post: BlogPost) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(console.error);
    } else {
      // Fallback: Copy link
      navigator.clipboard.writeText(`${window.location.href}#blog-${post.id}`);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  // Convert markdown-like headers in content into nice JSX blocks
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-lg font-bold text-primary dark:text-primary-light tracking-tight mt-5 mb-2">
            {line.replace('#### ', '')}
          </h4>
        );
      }
      if (line.startsWith('* ')) {
        return (
          <li key={index} className="text-sm text-slate-600 dark:text-slate-300 ml-6 list-disc mb-1 font-medium leading-relaxed">
            {line.replace('* ', '')}
          </li>
        );
      }
      if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
        return (
          <li key={index} className="text-sm text-slate-600 dark:text-slate-300 ml-6 list-decimal mb-1 font-medium leading-relaxed">
            {line.replace(/^\d+\.\s/, '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return <div key={index} className="h-2" />;
      }
      return (
        <p key={index} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <section 
      id="blog" 
      className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            BLOG DE NUTRICIÓN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-4">
            Consejos y Vida Saludable
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto">
            Aprende sobre las propiedades de las frutas, recetas gourmet y hábitos de bienestar recomendados por expertos.
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => {
            const isLiked = likedPosts.includes(post.id);
            return (
              <motion.div
                key={post.id}
                id={`blog-card-${post.id}`}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative flex flex-col group cursor-pointer transition-all duration-300"
                onClick={() => setActivePost(post)}
              >
                {/* Image top */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  
                  {/* Category label */}
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                    {post.category}
                  </span>

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Metadata Row */}
                  <div className="flex items-center space-x-4 text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer Row: Author & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800 mt-auto">
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {post.author.split(' ')[1] ? `${post.author.split(' ')[0]} ${post.author.split(' ')[1]}` : post.author}
                      </span>
                    </div>

                    <div className="inline-flex items-center text-xs font-bold text-primary dark:text-primary-light group-hover:translate-x-1.5 transition-transform duration-300">
                      <span>Leer Más</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Modal: Full Article Reader */}
        <AnimatePresence>
          {activePost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => setActivePost(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-[36px] overflow-hidden max-w-3xl w-full border border-slate-100 dark:border-slate-800 shadow-2xl relative flex flex-col max-h-[85vh]"
              >
                
                {/* Header Photo block */}
                <div className="h-60 sm:h-72 w-full relative bg-slate-100">
                  
                  {/* Close button */}
                  <button
                    onClick={() => setActivePost(null)}
                    className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-100 dark:border-slate-800 shadow-md focus:outline-none transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none" />

                  {/* Category overlay */}
                  <div className="absolute bottom-4 left-6 sm:left-8 z-10">
                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {activePost.category}
                    </span>
                  </div>

                </div>

                {/* Article Body Scrollable area */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-grow">
                  
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {activePost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {activePost.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-3.5 h-3.5 mr-1" />
                      Por {activePost.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
                    {activePost.title}
                  </h2>

                  {/* Styled Markdown content */}
                  <div className="space-y-4">
                    {renderFormattedContent(activePost.content)}
                  </div>

                </div>

                {/* Footer Interactions Bar */}
                <div className="px-6 py-4 sm:px-8 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  
                  {/* Favorite Article toggle */}
                  <button
                    onClick={(e) => toggleLikePost(e, activePost.id)}
                    className={`flex items-center space-x-2 text-xs font-bold py-2 px-3.5 rounded-full border border-slate-200 dark:border-slate-700 focus:outline-none transition-colors ${
                      likedPosts.includes(activePost.id)
                        ? 'bg-rose-50 border-rose-100 text-rose-600 dark:bg-rose-950/20 dark:border-rose-900/40 dark:text-rose-400'
                        : 'bg-white hover:bg-slate-100 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedPosts.includes(activePost.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{likedPosts.includes(activePost.id) ? 'Me Gusta' : 'Guardar Artículo'}</span>
                  </button>

                  {/* Share button */}
                  <button
                    onClick={(e) => handleSharePost(e, activePost)}
                    className="flex items-center space-x-2 text-xs font-bold py-2 px-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 focus:outline-none transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Compartir</span>
                  </button>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
