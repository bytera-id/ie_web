import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MoveDown,
  LayoutTemplate,
  Gem,
  ShieldCheck,
  Instagram,
  Mail,
  Music2,
  Apple, // <-- Ikon Baru
  Play, // <-- Ikon Baru
} from "lucide-react";

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Data untuk navigasi
const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about-us-section", label: "About Us" },
  { href: "#portfolio-section", label: "Portfolio" },
  { href: "#features-section", label: "Why Us" },
  { href: "#catalog-section", label: "Catalogue" },
];

// Data untuk kartu statistik
const stats = [
  { value: "6+", label: "Tahun Pengalaman" },
  { value: "500+", label: "Project" },
  { value: "10+", label: "Kota Terjangkau" },
];

// Data untuk galeri portofolio
const finalPortfolioItems = [
  {
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1227&auto=format&fit=crop",
    alt: "Ruang tamu minimalis dengan TV dan sofa modern",
    location: "Jakarta Utara",
    client: "MR. NATAHAN",
    size: "52",
  },
  {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1287&auto=format&fit=crop",
    alt: "Ruang makan modern dengan lampu gantung",
    location: "Jakarta Selatan",
    client: "MRS. ADELINE",
    size: "74",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1170&auto=format&fit=crop",
    alt: "Kamar tidur dengan perapian modern",
    location: "Tangerang",
    client: "BINTORO CORP",
    size: "120",
  },
  {
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1171&auto=format&fit=crop",
    alt: "Ruang makan dan dapur dengan partisi kaca",
    location: "Bekasi",
    client: "MR. HENDRAWAN",
    size: "60",
  },
  {
    src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1287&auto=format&fit=crop",
    alt: "Desain walk-in closet kayu yang elegan",
    location: "Jakarta Pusat",
    client: "MRS. DIANA",
    size: "45",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1287&auto=format&fit=crop",
    alt: "Desain dapur modern dengan kabinet warna sage green",
    location: "Depok",
    client: "FAMILY SUHARTO",
    size: "88",
  },
];

// Data untuk fitur keunggulan
const features = [
  {
    icon: LayoutTemplate,
    title: "Desain & Furniture Custom",
    description:
      "Semua dibuat sesuai ukuran, gaya, dan kebutuhan, sehingga ruang terasa pas dan personal.",
  },
  {
    icon: Gem,
    title: "Material Premium & Finishing Elegan",
    description:
      "Menggunakan HPL, Taco, cat duco, hardware soft-close, dan lighting modern untuk hasil kuat sekaligus mewah.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi & Layanan After-Sales",
    description:
      "Setiap proyek dilengkapi garansi pemasangan dan hardware, plus dukungan after-sales yang responsif.",
  },
];

// Data untuk katalog produk
const catalogItems = [
  {
    title: "WARDROBE SET",
    imageSrc:
      "https://images.unsplash.com/photo-1629078691371-2c83d139c986?q=80&w=1170&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    title: "KITCHEN SET",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    title: "WALKING CLOSET",
    imageSrc:
      "https://images.unsplash.com/photo-1560598613-2ffd99a32c28?q=80&w=1287&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    title: "CUSTOM DIPAN (BEDFRAME)",
    imageSrc:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop",
    colSpan: "md:col-span-3",
  },
  {
    title: "MASTER BEDROOM",
    imageSrc:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1180&auto=format&fit=crop",
    colSpan: "md:col-span-3",
  },
];

// Data untuk footer
const footerLinks = {
  menu: [
    { href: "#", label: "Home Page" },
    { href: "#about-us-section", label: "About Us" },
    { href: "#catalog-section", label: "Catalogue" },
    { href: "#portfolio-section", label: "Portfolio" },
    { href: "#features-section", label: "Keunggulan" },
  ],
  socials: [
    {
      href: "https://www.instagram.com/interioreksterior.id/",
      icon: Instagram,
    },
    { href: "interioreksterior.id@gmail.com", icon: Mail },
    { href: "https://www.tiktok.com/@interioreksterior.id", icon: Music2 },
  ],
};

const Homepage = () => {
  useGSAP(() => {
    // --- 1. Animasi Hero ---
    gsap
      .timeline({ defaults: { duration: 1, ease: "power2.out" } })
      .from("#header", { y: -100, opacity: 0 })
      .from("#hero-title", { y: 50, opacity: 0 }, "-=0.5")
      .from("#hero-subtitle", { y: 30, opacity: 0 }, "-=0.7")
      .from("#scroll-btn", { opacity: 0, scale: 0.8 }, "-=0.5");

    // --- 2. Animasi About Us ---
    gsap.from("#stats-card", {
      scrollTrigger: { trigger: "#stats-container", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
    });
    gsap.from("#about-content > div", {
      scrollTrigger: { trigger: "#about-content", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
    });

    // --- 3. Animasi Portfolio ---
    gsap.from("#portfolio-header > div", {
      scrollTrigger: { trigger: "#portfolio-header", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
    });
    gsap.from("#portfolio-card", {
      scrollTrigger: { trigger: "#portfolio-gallery", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
    });

    // --- 4. Animasi Features Section ---
    gsap.from("#features-header > *", {
      scrollTrigger: { trigger: "#features-header", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
    });
    gsap.from("#feature-card", {
      scrollTrigger: { trigger: "#features-grid", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
    });

    // --- 5. Animasi Catalog Section ---
    gsap.from("#catalog-header > div", {
      scrollTrigger: { trigger: "#catalog-header", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
    });
    gsap.from("#catalog-card", {
      scrollTrigger: { trigger: "#catalog-grid", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.15,
    });

    // --- 6. Animasi App Promo (BARU) ---
    gsap.from("#app-promo-content > *", {
      scrollTrigger: { trigger: "#app-promo-section", start: "top 85%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
    });
    gsap.from("#app-promo-image", {
      scrollTrigger: { trigger: "#app-promo-section", start: "top 85%" },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power2.out",
    });

    // --- 7. Animasi CTA & Footer ---
    gsap.from("#cta-card", {
      scrollTrigger: { trigger: "#cta-card", start: "top 90%" },
      opacity: 0,
      y: 50,
      duration: 1,
    });
    gsap.from("#main-footer > div", {
      scrollTrigger: { trigger: "#main-footer", start: "top 95%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="bg-white">
      {/* ======================= */}
      {/* BAGIAN 1: HERO          */}
      {/* ======================= */}
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col">
          <header
            id="header"
            className="absolute left-0 right-0 top-0 z-20 px-4 py-3 pt-5 sm:px-10 md:px-20"
          >
            <div className="mx-auto max-w-7xl rounded-full bg-white/90 px-6 py-3 shadow-md backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="public/images/logo.png"
                    alt="Interior Logo"
                    className="h-10 w-15 rounded-full"
                  />
                </a>
                <nav className="hidden lg:flex">
                  <ul className="flex items-center gap-8">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="font-medium text-gray-700 transition hover:text-black"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Button className="hidden rounded-full bg-gray-900 px-6 text-white hover:bg-gray-700 lg:block">
                  <a href="https://wa.me/62895403691133?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20desain%20interior%20%26%20custom%20furniture.%20Boleh%20saya%20konsultasi%20lebih%20lanjut%3F%20Terima%20kasih."
                  target="_blank"
                  rel="noopener noreferrer">Contact</a>
                </Button>
              </div>
            </div>
          </header>
          <main className="relative flex min-h-screen flex-col items-center justify-center text-center text-white">
            {/* HERO CONTENT */}
            <div className="px-4">
              <h1
                id="hero-title"
                className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
              >
                Wujudkan Rumah & <br />
                Furniture Impianmu.
              </h1>

              <p
                id="hero-subtitle"
                className="mx-auto mt-6 max-w-2xl text-base text-gray-200 md:text-lg"
              >
                Spesialis desain interior & custom furniture dengan kualitas
                premium, detail presisi, dan hasil elegan.
              </p>

              {/* CTA BUTTON */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/62895403691133?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20desain%20interior%20%26%20custom%20furniture.%20Boleh%20saya%20konsultasi%20lebih%20lanjut%3F%20Terima%20kasih."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                >
                  Hubungi Kami
                </a>

                <a
                  href="#portfolio-section"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
                >
                  Lihat Portfolio
                </a>
              </div>
            </div>

            {/* SCROLL BUTTON */}
            <footer className="absolute bottom-6 flex w-full items-center justify-center">
              <a
                id="scroll-btn"
                href="#about-us-section"
                className="group flex flex-col items-center gap-2 text-white"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                  <MoveDown className="h-6 w-6 animate-bounce" />
                </div>
                <span className="text-xs font-semibold tracking-widest opacity-80">
                  SCROLL
                </span>
              </a>
            </footer>
          </main>
        </div>
      </div>

      {/* ======================= */}
      {/* BAGIAN 2: ABOUT US      */}
      {/* ======================= */}
      <section id="about-us-section" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            id="stats-container"
            className="grid grid-cols-1 gap-8 text-center md:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                id="stats-card"
                key={stat.label}
                className="rounded-lg bg-[#F5F1E8] p-8"
              >
                <p className="text-4xl font-bold text-gray-900 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div
            id="about-content"
            className="mt-24 grid grid-cols-1 items-start gap-12 lg:mt-28 lg:grid-cols-2 lg:gap-20"
          >
            <div>
              <p className="font-semibold uppercase tracking-wide text-[#E09A57]">
                About Us
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Tentang Interior dan Exterior
              </h2>
            </div>
            <div className="lg:mt-4">
              <p className="text-base leading-7 text-gray-600">
                PT Rumah Interior Eksterior Furniture adalah perusahaan yang
                berfokus pada desain interior, eksterior, dan pembuatan
                furniture custom. Kami hadir untuk membantu setiap orang
                mewujudkan rumah impian yang tidak hanya indah secara visual,
                tetapi juga nyaman, fungsional, dan sesuai gaya hidup.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Dengan pengalaman bertahun-tahun di industri interior &
                konstruksi, kami memahami bahwa setiap ruang memiliki karakter
                unik dan setiap klien punya kebutuhan yang berbeda.
              </p>
              <Button className="mt-8 rounded-full bg-gray-900 px-6 py-3 text-white hover:bg-gray-700">
                See More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* BAGIAN 3: PORTFOLIO     */}
      {/* ======================= */}
      <section id="portfolio-section" className="bg-[#F5F1E8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            id="portfolio-header"
            className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2"
          >
            <div>
              <p className="font-semibold uppercase tracking-wide text-[#E09A57]">
                Portofolio
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Portofolio Kami
              </h2>
            </div>
            <p className="text-base leading-7 text-gray-600 lg:mt-4">
              Setiap ruang punya cerita. Inilah sebagian hasil karya kami dalam
              mewujudkan rumah, apartemen, dan ruang kerja yang lebih indah,
              fungsional, dan sesuai gaya hidup klien.
            </p>
          </div>

          <div
            id="portfolio-gallery"
            className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
          >
            {finalPortfolioItems.map((item) => (
              <div
                id="portfolio-card"
                key={item.alt}
                className="group relative"
              >
                <div className="h-80 w-full overflow-hidden rounded-2xl">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <a
                    href="#"
                    className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
                  >
                    <ArrowRight className="h-6 w-6 text-gray-800" />
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">{item.location}</p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {item.client} &bull; {item.size}m
                    <sup className="-top-2">2</sup>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* BAGIAN 4: KEUNGGULAN    */}
      {/* ======================= */}
      <section id="features-section" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#F5F1E8] px-6 py-16 sm:p-24">
            <div
              id="features-header"
              className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div>
                <p className="font-semibold uppercase tracking-wide text-[#E09A57]">
                  Keunggulan
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Kenapa Memilih Kami?
                </h2>
              </div>
              <p className="text-base leading-7 text-gray-600 lg:mt-4">
                Kami percaya rumah dan furniture bukan sekadar tampilan, tapi
                bagian dari gaya hidup. Dengan pengalaman, material berkualitas,
                dan layanan menyeluruh, kami hadir memberikan hasil yang elegan,
                fungsional, dan sesuai harapan Anda.
              </p>
            </div>
            <div
              id="features-grid"
              className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    id="feature-card"
                    key={feature.title}
                    className="rounded-2xl border border-gray-300/70 bg-white/50 p-8 shadow-sm"
                  >
                    <Icon className="h-9 w-9 text-gray-800" strokeWidth={1.5} />
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* BAGIAN 5: KATALOG       */}
      {/* ======================= */}
      <section id="catalog-section" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            id="catalog-header"
            className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2"
          >
            <div>
              <p className="font-semibold uppercase tracking-wide text-[#E09A57]">
                Catalogue
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Catalog Produk
              </h2>
            </div>
            <p className="text-base leading-7 text-gray-600 lg:mt-4">
              Temukan berbagai pilihan desain interior & furniture custom yang
              bisa disesuaikan dengan kebutuhan dan gaya rumah Anda. Dari
              wardrobe, kitchen set, hingga master bedroom, semua dirancang
              dengan detail presisi dan material berkualitas.
            </p>
          </div>

          <div
            id="catalog-grid"
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-6"
          >
            {catalogItems.map((item) => (
              <div
                id="catalog-card"
                key={item.title}
                className={`group relative h-96 overflow-hidden rounded-2xl ${item.colSpan}`}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <a
                    href="#"
                    className="mt-4 inline-flex w-fit items-center gap-2 border-b border-white/60 pb-1 text-sm font-semibold transition-all hover:border-white"
                  >
                    See More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================== */}
      {/* BAGIAN 6: PROMOSI APLIKASI (BARU) */}
      {/* ================================== */}
      <section id="app-promo-section" className="bg-[#F5F1E8]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
            {/* Kiri: Teks & Tombol Download */}
            <div id="app-promo-content">
              <p className="font-semibold uppercase tracking-wide text-[#E09A57]">
                Mobile App
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Desain & Lacak Proyek Lebih Mudah
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Unduh aplikasi kami untuk mendapatkan inspirasi desain
                eksklusif, berkonsultasi langsung dengan desainer, dan lacak
                progres proyek Anda secara real-time. Semua dalam genggaman
                Anda.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 rounded-lg bg-gray-900 px-5 py-3 text-white transition hover:bg-gray-700"
                >
                  <Apple className="h-7 w-7" />
                  <div className="text-left">
                    <p className="text-xs">Download on the</p>
                    <p className="-mt-1 text-xl font-semibold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 rounded-lg bg-gray-900 px-5 py-3 text-white transition hover:bg-gray-700"
                >
                  <Play className="h-7 w-7" />
                  <div className="text-left">
                    <p className="text-xs">GET IT ON</p>
                    <p className="-mt-1 text-xl font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Kanan: Gambar Mockup HP */}
            <div className="flex justify-center lg:justify-end">
              <img
                id="app-promo-image"
                className="w-[280px] rounded-[40px] shadow-2xl ring-8 ring-gray-900"
                src="public/images/hp.png?q=80&w=987&auto=format&fit=crop"
                alt="App mockup on a phone"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* BAGIAN 7: CTA           */}
      {/* ======================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            id="cta-card"
            className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-20 text-white shadow-2xl sm:px-16 sm:py-24"
          >
            <div className="relative z-10 flex flex-col items-center gap-12 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Siap Wujudkan
                  <br />
                  Rumah Impian Anda?
                </h2>
              </div>
              <Button
  asChild
  size="lg"
  className="group w-full shrink-0 rounded-full bg-[#E09A57] px-8 py-7 text-base font-bold text-gray-900 hover:bg-[#E09A57]/90 sm:w-auto"
>
  <a
    href="https://wa.me/62895403691133?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20desain%20interior%20%26%20custom%20furniture.%20Boleh%20saya%20konsultasi%20lebih%20lanjut%3F%20Terima%20kasih."
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-row items-center justify-center gap-2"
  >
    <span>Hubungi Kami</span>
    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
  </a>
</Button>

            </div>
            <div className="absolute bottom-0 right-6 top-0 hidden w-1/3 items-center justify-center opacity-20 lg:flex">
              <div className="flex -space-x-16">
                <div className="h-40 w-40 rounded-full border-4 border-gray-700 bg-gray-800 shadow-2xl" />
                <div className="h-40 w-40 rounded-full border-4 border-gray-700 bg-gray-800 shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* BAGIAN 8: FOOTER        */}
      {/* ======================= */}
      <footer id="main-footer" className="pb-8 pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <a href="#" className="flex items-center gap-2">
                <img
                  src="public/images/logo.png"
                  alt="Interior Logo"
                  className="h-10 w-15 rounded-full"
                />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
                PT Rumah Interior Eksterior Furniture - Spesialis desain
                interior, eksterior, dan custom furniture berkualitas untuk
                mewujudkan rumah impian Anda.
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <h3 className="text-sm font-semibold text-gray-900">Min Menu</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerLinks.menu.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Information Contact
              </h3>
              <p className="mt-6 text-sm leading-6 text-gray-600">
                Kp.awas paningal, RT.02/RW.09, Pagelaran, Kec. Ciomas, Kabupaten
                Bogor, Jawa Barat 16610
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <Button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {footerLinks.socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{Icon.displayName}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
              &copy; 2025 Interior and exterior. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
