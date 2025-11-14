import { LIST_ARTICLES } from '@/constans/listArticles'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaClock } from 'react-icons/fa'

const ArticleDetail = () => {
  const { slug } = useParams()
  const article = LIST_ARTICLES.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center text-center'>
        <h2 className='text-3xl font-bold text-gray-800'>Artikel Tidak Ditemukan 😔</h2>

        <Link
          to='/'
          className='mt-4 text-blue-600 hover:underline font-medium'
        />
        Kembali ke Beranda
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Mata Air Nusantara</title>
        <meta name='description' content={article.content.slice(0, 160)} />
        <meta name='keywords' content={article.keywords.join(', ')} />
        <meta property='og:title' content={article.title} />
        <meta property='og:description' content={article.content.slice(0, 160)} />
        <meta property='og:type' content='article' />
      </Helmet>

      <section className='bg-gradient-to-b from-blue-50 to-white min-h-screen py-20'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='max-w-4xl mx-auto px-6'>
          <Link
            to="/"
            className='inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-all'
          >
            <FaArrowLeft className='mr-2' /> Kembali ke Beranda
          </Link>

          <header className='text-center mb-10'>
            <h1 className='text-4xl font-bold mb-3 leading-snug text-blue-800'>
              {article.title}
            </h1>
            <p className='flex justify-center items-center gap-2 text-gray-500 text-sm'>
              <FaClock />
              <span>{new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </p>
          </header>

          <article className='bg-white rounded-2xl shadow-md p-8 border border-gray-100 leading-relaxed text-gray-700'>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='whitespace-pre-line text-lg'
            >
              {article.content}
            </motion.p>
          </article>

          <div className='mt-8 flex flex-wrap gap-2'>
            {article.keywords.map((kw, i) => (
              <span
                key={i}
                className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium'
              >
                #{kw}
              </span>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <h4 className='text-lg font-semibold mb-3 text-gray-700'>
              Tertarik menggunakan jasa kami?
            </h4>
            <a
              href='https://wa.me/6287846883117?text=Halo%20Mata%20Air%20Nusantara,%20saya%20tertarik%20dengan%20layanan%20Anda.'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all'
            >
              Konsultasi Gratis via WhatsApp💬
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default ArticleDetail