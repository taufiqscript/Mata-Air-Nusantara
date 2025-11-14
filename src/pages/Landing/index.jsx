"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { LIST_HARGA } from "@/constans/listHarga"
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaBars, FaStar, FaTimes, FaWhatsapp } from "react-icons/fa"
import { useEffect, useState } from "react"
import Portofolio from "@/components/Portofolio/Portofolio"
import { Helmet } from "react-helmet"
import { LIST_SERVICES } from "@/constans/listServices"
import { LIST_TESTIMONIAL } from "@/constans/listTestimonial"
import { LIST_WHYUS } from "@/constans/listWhyUs"
import Article from "@/components/Article/Article"
import VideoSection from "@/components/VideoSection/VideoSection"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Landing = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openPricing, setOpenPricing] = useState(false)
    const [nama, setNama] = useState("")
    const [telepon, setTelepon] = useState("")
    const [pesan, setPesan] = useState("")
    const [error, setError] = useState(false)

    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 140])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleMessageWA = () => {
        if (!nama || !telepon || !pesan) {
            setError(true)
            return
        }

        setError(false)

        const text = `Halo Mata Air Nusantara! %0A
        Nama: ${nama}%0A
        Telepon: ${telepon}%0A
        Pesan: ${pesan}`
        window.open(`https://wa.me/6287846883117?text=${text}`, "_blank")
    }

    return (
        <>
            <Helmet>
                <title>Jasa Bor Air dan Sumur Bor Profesional di Bekasi | Mata Air Nusantara</title>
                <link rel="canonical" href="https://mataairnusantara.com/" />

                <meta
                    name="description"
                    content="Mata Air Nusantara melayani jasa bor air dan sumur bor terdekat di Bekasi, Jakarta, Depok, Tangerang, dan sekitarnya. Tim profesional, hasil dijamin, survei & konsultasi gratis!"
                />
                <meta
                    name="keywords"
                    content="jasa bor air, jasa sumur bor, jasa bor air terdekat, jasa pengeboran air, jasa pengeboran air bersih, jasa sumur bor Bekasi, Mata Air Nusantara"
                />

                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17697096371"></script>
                <script>
                    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17697096371');
    `}
                </script>

                <meta name="author" content="Mata Air Nusantara" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jasa Bor Air & Sumur Bor Profesional di Bekasi | Mata Air Nusantara" />
                <meta
                    property="og:description"
                    content="Jasa bor air dan sumur bor terpercaya untuk wilayah Bekasi, Jakarta, Depok, Tangerang, dan sekitarnya. Konsultasi & survei gratis!"
                />
                <meta property="og:url" content="https://mataairnusantara.com/" />
                <meta property="og:image" content="https://mataairnusantara.com/logo.webp" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Jasa Bor Air & Sumur Bor Profesional | Mata Air Nusantara" />
                <meta
                    name="twitter:description"
                    content="Mata Air Nusantara melayani jasa bor air dan sumur bor profesional di Bekasi & sekitarnya. Survei gratis, hasil dijamin!"
                />
                <meta name="twitter:image" content="https://mataairnusantara.com/logo.webp" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Mata Air Nusantara",
                        "image": "https://mataairnusantara.com/logo.webp",
                        "telephone": "+6287846883117",
                        "priceRange": "Rp200.000 - Rp5.000.000",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Jl. Masjid Ps. Kecapi Gg. Masjid 06 No.68A",
                            "addressLocality": "Jatiwarna, Pondok Melati",
                            "addressRegion": "Kota Bekasi",
                            "postalCode": "17415",
                            "addressCountry": "ID"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -6.30650016,
                            "longitude": 106.93286036
                        },
                        "url": "https://mataairnusantara.com",
                        "areaServed": ["Bekasi", "Jakarta", "Depok", "Tangerang", "Bogor"],
                        "openingHours": "Mo-Su 00:00-23:59"
                    })}
                </script>
            </Helmet>
            <div
                style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
                className="relative min-h-screen text-gray-800">
                {/* HEADER */}
                <header
                    className={`fixed top-0 left-0 w-full z-50 duration-300 transition-all ${scrolled
                        ?
                        "bg-white/30 shadow backdrop-blur"
                        :
                        "bg-white border-b-gray-300/80 border-b-2"
                        }`}>
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-2 flex justify-between items-center">
                        <div className="flex items-center gap-6 sm:gap-8">
                            <img
                                src="/Mata Air Nusantara Logo.webp"
                                alt="Logo"
                                loading="lazy"
                                onClick={() => location.replace('/')}
                                className="h-12 sm:h-14 md:h-18 w-auto object-contain hover:scale-105 cursor-pointer transition-transform"
                            />
                            <div className="hidden md:flex gap-6 text-base lg:text-lg font-semibold text-gray-700">
                                <a href="#home" className="hover:text-blue-600 transition-colors">Beranda</a>
                                <a href="#services" className="hover:text-blue-600 transition-colors">Layanan</a>
                                <a href="#portofolio" className="hover:text-blue-600 transition-colors">Portofolio</a>
                                <a href="#article" className="hover:text-blue-600 transition-colors">Artikel</a>
                                <a href="#contact" className="hover:text-blue-600 transition-colors">Kontak</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://wa.me/6287846883117"
                                target="_blank"
                                rel="noreferrer"
                                className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-teal-400 text-white px-4 md:px-5 py-2 rounded-lg font-semibold shadow-md hover:opacity-95"
                            >
                                Dapatkan Penawaran
                            </a>
                            <button
                                className="md:hidden p-2 rounded-md bg-white/40 hover:bg-white/60 shadow"
                                onClick={() => setMobileOpen(v => !v)}
                                aria-label="menu"
                            >
                                {mobileOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </nav>

                    <div
                        className={`md:hidden transition-all origin-top ${mobileOpen ? "max-h-[370px]" : "max-h-0 overflow-hidden"} bg-white/95 border-t`}
                    >
                        <ul className="flex flex-col gap-3 px-6 py-4 text-lg font-medium">
                            {["Beranda", "Layanan", "Portofolio", "Artikel", "Kontak"].map((m, i) => (
                                <li key={i} className="py-2 border-b last:border-b-0">

                                    <a
                                        href={
                                            i === 0 ? '#home' :
                                                i === 1 ? '#services' :
                                                    i === 2 ? '#portofolio' :
                                                        i === 3 ? '#article' :
                                                            i === 4 ? '#contact' :
                                                                ''
                                        }
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-2 text-gray-700 hover:text-blue-600"
                                    >
                                        {m}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>

                {/* HERO */}
                <main id="home" className="pt-24 sm:pt-28">
                    <section
                        className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden">
                        <motion.div
                            style={{ y }}
                            className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-sky-400 opacity-95"
                        />
                        <svg className="pointer-events-none absolute right-0 -top-24 opacity-30 w-96" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(300,300)">{/* decorative blob */}
                                <path d="M120,-160C150,-120,170,-80,168,-42C166,-4,142,31,117,66C92,101,64,137,27,156C-10,175,-55,178,-88,156C-121,134,-141,87,-164,34C-187,-19,-213,-80,-195,-120C-177,-160,-115,-180,-65,-197C-16,-214,19,-228,66,-212C113,-196,91,-200,120,-160Z" fill="#ffffff" />
                            </g>
                        </svg>

                        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 w-full flex flex-col-reverse lg:flex-row items-center gap-10">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="w-full lg:w-1/2 text-white text-center lg:text-left"
                            >
                                <h1
                                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg leading-tight"
                                >
                                    Jasa Bor Air dan Sumur Bor Profesional di Bekasi & Jabodetabek
                                </h1>
                                <p
                                    className="text-white/90 text-base sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                    variants={fadeUp}
                                >
                                    Kami melayani jasa pengeboran air bersih untuk rumah, kantor, pabrik, dan gedung.
                                    Tim kami berpengalaman menangani berbagai proyek sumur bor di wilayah Bekasi, Jakarta, Depok, dan sekitarnya.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                    <a
                                        href="https://wa.me/6287846883117?text=Halo%20Mata%20Air%20Nusantara,%20saya%20ingin%20memesan%20jasa%20sumur%20bor."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg text-base justify-center"
                                    >
                                        <FaWhatsapp />
                                        Konsultasi via WA
                                    </a>
                                    <a
                                        href="#portofolio"
                                        className="inline-flex items-center justify-center border border-white/30 px-5 py-3 rounded-xl text-white/95 hover:bg-white/10 text-base"
                                    >
                                        Lihat Portofolio
                                    </a>
                                </div>

                                <div
                                    className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
                                >
                                    <div className="flex items-center justify-center gap-3 bg-yellow-300/90 px-4 py-3 rounded-lg w-full sm:w-[220px]">
                                        <BsFillTelephoneFill className="text-black text-xl" />
                                        <div>
                                            <div className="text-md text-black font-semibold">Hubungi Kami</div>
                                            <div className="font-bold text-md text-black">0878-4688-3117</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-white/80 text-center sm:text-left pb-2 md:pb-0">
                                        Layanan area : <br />Bekasi, Jakarta, Depok, Tangerang
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.9 }}
                                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                            >
                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="max-w-xs sm:max-w-md lg:max-w-xl w-full"
                                >
                                    <img
                                        src="/people.webp"
                                        alt="Tim Profesional"
                                        loading="lazy"
                                        className="w-full object-contain drop-shadow-lg"
                                    />
                                </motion.div>

                            </motion.div>
                        </div>
                    </section>

                    {/* LAYANAN UNGGULAN */}
                    <section id="services" className="pt-12 sm:pt-16 md:pt-20 pb-12 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                            <motion.h3
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                className="text-3xl font-bold text-gray-800 text-center mb-10">
                                Layanan Unggulan Kami
                            </motion.h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {LIST_SERVICES.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ translateY: -8 }}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        className="bg-gradient-to-tr from-white to-sky-50 border border-gray-100 p-6 rounded-2xl shadow-sm max-w-sm mx-auto"
                                    >
                                        <img src={item.img} alt={item.title} loading="lazy" className="w-14 h-14 sm:w-16 sm:h-16 mb-4 mx-auto lg:mx-0" />
                                        <h4 className="font-semibold text-lg text-gray-800 text-center lg:text-left">{item.title}</h4>
                                        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* MENGAPA MEMILIH KAMI */}
                    <section className="pt-12 sm:pt-16 md:pt-20 pb-12 bg-gradient-to-b from-sky-50 to-white">
                        <div
                            className="max-w-7xl mx-auto px-6"
                        >
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeUp}
                                className="text-3xl font-bold text-gray-800 mb-8 text-center">
                                Mengapa Memilih Kami?
                            </motion.h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {LIST_WHYUS.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ translateY: -6 }}
                                        variants={fadeUp}
                                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                                    >
                                        <img src={item.img} alt={item.title} loading="lazy" className="w-16 h-16 mx-auto mb-4" />
                                        <h5 className="font-semibold">{item.title}</h5>
                                        <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="pt-12 sm:pt-16 md:pt-20 pb-12">
                        <div className="max-w-7xl mx-auto px-6">
                            <motion.div
                                initial="hidden"
                                variants={fadeUp}
                                whileInView="visible"
                                className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-white font-bold text-2xl md:text-3xl leading-snug">
                                        Butuh Estimasi Biaya?
                                    </h3>
                                    <p className="mt-2 text-white/90 max-w-xl">
                                        Estimasi awal tergantung pada kedalaman dan kondisi tanah. Kami menyediakan survei lapangan gratis untuk menentukan biaya final.
                                    </p>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto text-center md:text-left">
                                    <a
                                        href="https://wa.me/6287846883117"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-white hover:bg-gray-100/90 text-blue-700 px-5 py-3 rounded-xl font-semibold"
                                    >
                                        Konsultasi & Survei
                                    </a>
                                    <a
                                        onClick={() => setOpenPricing(!openPricing)}
                                        className="border border-white/30 hover:bg-white/10 px-5 py-3 rounded-xl cursor-pointer"
                                    >
                                        Lihat Harga
                                    </a>
                                </div>
                            </motion.div>

                            <AnimatePresence>
                                {openPricing && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {LIST_HARGA.map((p, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                                whileHover={{ scale: 1.03, translateY: -4 }}
                                                className="bg-sky-50 p-5 my-4 rounded-xl border border-gray-100 shadow-sm"
                                            >
                                                <p className="font-semibold">{p.title}</p>
                                                <p className="font-bold text-green-500">Bisa Nego</p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </section>

                    <Portofolio />
                    <VideoSection />
                    <Article />

                    {/*TESTIMONIAL*/}
                    <section className="pt-12 sm:pt-16 md:pt-20 pb-12 bg-sky-50">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            className="max-w-7xl mx-auto px-6">
                            <h4 className="text-3xl font-bold text-center mb-8">Apa Kata Pelanggan</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {LIST_TESTIMONIAL.map((item, i) => (
                                    <motion.blockquote
                                        key={i}
                                        whileHover={{ translateY: -6 }}
                                        className="grid grid-row-2 gap-4 bg-green-100 p-6 rounded-2xl shadow-sm"
                                    >
                                        <p className="text-gray-700 italic leading-loose font-semibold">
                                            {item.quote}
                                        </p>

                                        <footer className="mt-4 font-semibold text-blue-700">
                                            <div className="flex gap-0.5 text-yellow-500 mb-2">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                            -- {item.name}, {item.location}
                                        </footer>
                                    </motion.blockquote>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    <section id="contact" className="pt-12 sm:pt-16 md:pt-20 pb-12 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">
                                    Kontak Kami
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Jl. Masjid Ps. Kecapi Gg. Masjid 06 No.68A, RT.003/RW.004, Jatiwarna, Kec. Pd. Melati, Kota Bks, Jawa Barat 17415
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <BsFillTelephoneFill />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Telephone</div>
                                        <div className="font-semibold">0878-4688-3117</div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <iframe
                                        title="map"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.6739339380265!2d106.93286036!3d-6.30650016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993f67a070f33%3A0xf91615aceca5c4eb!2sMajlis%20Iyyaka%20Na&#39;budu!5e0!3m2!1sid!2sid!4v1761116232619!5m2!1sid!2sid"
                                        width="100%"
                                        height="100%"
                                        loading="lazy"
                                        className="rounded-lg border"
                                    />
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold my-3">Kirim Pesan</h4>
                                    <form
                                        className="grid grid-cols-1 gap-3"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <input
                                            aria-label="Nama"
                                            placeholder="Nama"
                                            className={`p-3 rounded-lg border ${!nama && error ? "border border-red-500 bg-red-50" : "border-gray-300"}`}
                                            value={nama}
                                            onChange={(e) => {
                                                setNama(e.target.value)
                                                if (error) setError(false)
                                            }}
                                        />
                                        {!nama && error && (
                                            <span className="text-red-500 text-sm mt-2">Nama wajib diisi</span>
                                        )}

                                        <input
                                            aria-label="Telepon"
                                            placeholder="Telepon"
                                            className={`p-3 rounded-lg border ${!telepon && error ? "border border-red-500 bg-red-50" : "border-gray-300"}`}
                                            value={telepon}
                                            onChange={(e) => {
                                                setTelepon(e.target.value)
                                                if (error) setError(false)
                                            }}
                                        />
                                        {!telepon && error && (
                                            <span className="text-red-500 text-sm mt-2">Nomor Telepon wajib diisi</span>
                                        )}

                                        <textarea
                                            aria-label="Pesan"
                                            placeholder="Pesan Singkat"
                                            rows={5}
                                            className={`p-3 rounded-lg border ${!pesan && error ? "border border-red-500 bg-red-50" : "border-gray-300"}`}
                                            value={pesan}
                                            onChange={(e) => {
                                                setPesan(e.target.value)
                                                if (error) setError(false)
                                            }}
                                        />
                                        {!pesan && error && (
                                            <span className="text-red-500 text-sm mt-2">Pesan tidak boleh kosong</span>
                                        )}

                                        <div>
                                            <button
                                                type="button"
                                                onClick={handleMessageWA}
                                                className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg"
                                            >
                                                Kirim via WA
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>

                {/* FOOTER */}
                <footer className="bg-blue-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-sm opacity-90">
                            © {new Date().getFullYear()} Mata Air Nusantara. Semua hak dilindungi.
                        </p>
                    </div>
                </footer>

                <a
                    href="https://wa.me/6287846883117?text=Halo%20Mata%20Air%20Nusantara,%20saya%20ingin%20memesan%20jasa%20sumur%20bor."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-3 md:bottom-6 right-3 md:right-6 z-50">
                    <div
                        className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 shadow-lg flex items-center justify-center text-white text-lg md:text-2xl">
                        <FaWhatsapp />
                    </div>
                </a>
            </div>
        </>
    )
}

export default Landing
