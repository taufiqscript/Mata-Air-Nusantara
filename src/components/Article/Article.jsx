import { LIST_ARTICLES } from '@/constans/listArticles'
import React from 'react'
import { motion } from 'framer-motion'
import CarouselLayout from '@/layouts/CarouselLayout'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Article = () => {
    const navigate = useNavigate()

    const screenWidth = window.innerWidth

    return (
        <section id='article' className='pt-12 sm:pt-16 md:pt-20 pb-12 bg-gradient-to-b from-sky-50 to-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-10'>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-4'>
                    Artikel & Seputar Air Bersih
                </motion.h3>
                <p className='text-center text-gray-600 mb-6 md:mb-12 max-w-2xl mx-auto'>
                    Temukan informasi bermanfaat seputar pengeboran air, perawatan pompa, dan tips menjaga kualitas air bersih di rumah Anda 💧
                </p>

                <CarouselLayout>
                    {LIST_ARTICLES.map((item, index) => (
                        <div
                            key={index}
                            className='flex-shrink-0 flex justify-center items-center w-full snap-center'
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                exit={{ opacity: 0, scale: 0 }}
                                className='w-full md:w-[70%] md:h-[70%] bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300'>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-full h-[50%] object-cover rounded-2xl mb-4 md:mb-6 transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,150,255,0.15)]'
                                />

                                <h4 className='text-xl md:text-3xl font-bold mb-2 md:mb-4 text-blue-800 leading-snug'>
                                    {item.title}
                                </h4>
                                <p className='text-gray-700 text-sm md:text-lg leading-relaxed mb-4 md:mb-6'>
                                    {screenWidth < 640 ? item.content.slice(0, 85) : item.content.slice(0, 190)}...
                                </p>
                                <a
                                    onClick={() => navigate(`/artikel/${item.slug}`)}
                                    className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer font-semibold transition-all text-sm md:text-base'
                                >
                                    Baca Selengkapnya <FaArrowRight className='text-sm mt-0.5' />
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </CarouselLayout>
            </div>
        </section>
    )
}

export default Article