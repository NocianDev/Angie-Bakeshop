import React, { type JSX } from "react";
import { motion } from "framer-motion";

type Dessert = {
  id: number;
  name: string;
  desc: string;
  price: string;
  image?: string; // ahora opcional: ruta a la imagen (puede ser /images/archivo.jpg o una URL externa)
};

const desserts: Dessert[] = [
  { id: 1, name: "Pateles", desc: "Porciones individuales y grandes", price: "$800", image: "/images/Menu5.jpg" },
  { id: 2, name: "Donas y variedad de pan", desc: "Base crujiente y topping casero", price: "$60", image: "/images/Menu6.jpg" },
  { id: 3, name: "Pays", desc: "Costra crujiente y relleno dulce", price: "$120", image: "/images/Menu7.jpg" },
  { id: 4, name: "Cupcackes", desc: "Caseros y deliciosos", price: "$100", image: "/images/Menu8.jpg" },
];

export default function App(): JSX.Element {
  const placeholderDataUrl =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23fff'/><text x='50%' y='50%' font-size='20' text-anchor='middle' fill='%23888'>Imagen no disponible</text></svg>";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-50 text-gray-800 antialiased">
      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo placeholder: put your logo image at /public/images/logo.png or change the src */}
          <img
            src="/images/Logo.jpg"
            alt="Angie Bakeshop Mty Logo"
            className="w-14 h-14 rounded-2xl shadow-md object-cover bg-white p-1"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='100%' height='100%' fill='%23fff'/><text x='50%' y='55%' font-size='10' text-anchor='middle' fill='%23888'>Logo</text></svg>";
            }}
          />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Angie Bakeshop <span className="text-rose-600">Mty</span>
            </h1>
            <p className="text-xs text-gray-600">Pastelería artesanal · Repostería creativa</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#conocenos" className="hover:text-rose-600">
            Conócenos
          </a>
          <a href="#menu" className="hover:text-rose-600">
            Menú
          </a>
          <a href="#ubicacion" className="hover:text-rose-600">
            Ubicación
          </a>
          <a href="#contacto" className="px-4 py-2 bg-rose-600 text-white rounded-lg shadow hover:opacity-95">
            Ordena
          </a>
        </nav>

        <div className="md:hidden">
          <button className="p-2 rounded-lg bg-white shadow">☰</button>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="py-8">
            <p className="text-sm uppercase text-rose-500 font-semibold tracking-wide">Hecho con amor en Monterrey</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3">Delicias caseras para endulzar tu día</h2>
            <p className="mt-4 text-gray-600">
              Tartas, pasteles, macarons y postres por encargo. Repostería fina con ingredientes de calidad y detalles personalizados.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#menu" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-2xl shadow-lg font-semibold hover:scale-105 transform transition">
                Ver menú
              </a>
              <a href="#contacto" className="inline-block px-6 py-3 bg-white rounded-2xl shadow font-semibold">
                Contacto
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="https://www.instagram.com/" label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.1.1 1.7.2 2.1.4.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.3 1 .4 2.1.1 1.1.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.1-.2 1.7-.4 2.1-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .3-2.1.4-1.1.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.1-.1-1.7-.2-2.1-.4-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.3-1-.4-2.1C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.1.2-1.7.4-2.1.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.3 2.1-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7.1.1 6 .2 5.1.4 4.3.7c-.9.3-1.6.8-2.3 1.5C1.4 3 1 3.8.7 4.7.4 5.6.2 6.5.1 7.6 0 8.8 0 9.2 0 12.5s0 3.7.1 4.9c.1 1.1.3 2 .6 2.9.3.9.7 1.7 1.4 2.4.7.7 1.5 1.1 2.4 1.4.9.3 1.8.5 2.9.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.1-.1 2-.3 2.9-.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.1-1.5 1.4-2.4.3-.9.5-1.8.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.1-.3-2-.6-2.9-.3-.9-.7-1.7-1.4-2.4C20.6.9 19.8.5 18.9.2c-.9-.3-1.8-.5-2.9-.6C15.7 0 15.3 0 12 0z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/" label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 4.9 3.6 8.9 8.2 9.8v-6.9H7.9v-2.9h2.3V9.8c0-2.3 1.4-3.6 3.4-3.6.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3v1.6h2.3l-.4 2.9h-1.9v6.9C18.4 20.9 22 16.9 22 12z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://wa.me/52" label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20.5 3.5A11.9 11.9 0 0012 1C6.5 1 2 5.5 2 11c0 2 .5 3.9 1.4 5.6L2 23l6.7-1.4c1.6.7 3.3 1.1 5.3 1.1 5.5 0 10-4.5 10-10 0-3.1-1.3-6-3.5-8.2zM12 20.1c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-4 .9.9-3.9-.2-.3A8.1 8.1 0 014 11c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
                </svg>
              </SocialIcon>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/Hero2.jpg"
                alt="Postres Angie Bakeshop"
                className="w-full h-80 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = "/images/Hero2.jpg";
                }}
              />
            </div>

            <motion.div whileHover={{ y: -6 }} className="absolute -bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg w-48">
              <p className="text-xs text-gray-500">Oferta del mes</p>
              <p className="font-semibold">Variedad de postres con tematica navideña</p>
            </motion.div>
          </motion.div>
        </section>

        {/* CONÓCENOS */}
        <section id="conocenos" className="mt-20 bg-white rounded-3xl p-8 shadow-md">
          <h3 className="text-2xl font-bold">Conócenos</h3>
          <p className="mt-3 text-gray-600">
            Somos Angie Bakeshop Mty, una pastelería artesanal ubicada en Monterrey. Nos especializamos en postres con recetas caseras y decoración personalizada para
            eventos. Cada pedido se prepara con ingredientes frescos y mucho cariño.
          </p>
        </section>

        {/* MENU */}
        <section id="menu" className="mt-10">
          <h3 className="text-2xl font-bold mb-6">Menú destacado</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {desserts.map((d, i) => (
              <motion.article
                key={d.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                {/* ahora mostramos imagen cuando exista */}
                <div className="h-40 rounded-xl overflow-hidden bg-gray-50">
                  <img
                    src={d.image ?? placeholderDataUrl}
                    alt={d.name}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      e.currentTarget.src = placeholderDataUrl;
                    }}
                  />
                </div>

                <h4 className="mt-4 font-semibold">{d.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{d.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold">{d.price}</span>
                  <button className="px-3 py-1 bg-rose-600 text-white rounded-lg text-sm">Pedir</button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold">Ubicación</h3>
            <p className="mt-2 text-gray-600">Visítanos en Monterrey. Reemplaza el iframe con tu dirección exacta si lo deseas.</p>

            <div className="mt-4 rounded-xl overflow-hidden border">
              <iframe
                title="Angie Bakeshop Mty - mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4281271393606!2d-100.2903458!3d25.7564188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662950ee345e2fb%3A0xccc68dd0ee9a4da3!2sAngie%20Bakeshop%20Mty!5e0!3m2!1ses-419!2smx!4v1765321990617!5m2!1ses-419!2smx"
                className="w-full h-64"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 text-sm text-gray-600">Horario: Lun - Sab 9:00 - 19:00</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold">Contacto rápido</h3>
            <form id="contacto" className="mt-4 flex flex-col gap-3">
              <input className="border rounded-lg p-3" placeholder="Tu nombre" />
              <input className="border rounded-lg p-3" placeholder="Teléfono o email" />
              <textarea className="border rounded-lg p-3" rows={4} placeholder="¿Qué te gustaría pedir?" />
              <div className="flex gap-3">
                <button type="button" className="px-4 py-2 bg-rose-600 text-white rounded-lg">
                  Enviar
                </button>
                <button type="reset" className="px-4 py-2 bg-gray-100 rounded-lg">
                  Limpiar
                </button>
              </div>
            </form>

            <div className="mt-6 text-sm text-gray-500">También puedes escribirnos por WhatsApp o Instagram para pedidos y cotizaciones.</div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-14 mb-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Angie Bakeshop Mty · Todos los derechos reservados</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-rose-600">Términos</a>
            <a href="#" className="hover:text-rose-600">Privacidad</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SocialIcon({ children, href, label }: { children: React.ReactNode; href: string; label?: string }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="bg-white p-3 rounded-xl shadow cursor-pointer flex items-center justify-center" aria-label={label}>
      <span className="text-rose-600 w-5 h-5">{children}</span>
    </motion.a>
  );
}


