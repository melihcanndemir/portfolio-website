import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  // İletişim detaylarını liste olarak tutuyoruz
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "contact@example.com",
      description: "7/24 email desteği",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      details: "+90 (555) 123 45 67",
      description: "Pazartesi-Cuma 9:00-18:00",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Konum",
      details: "İstanbul, Türkiye",
      description: "Kadıköy",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gray-200 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            İletişim
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Benimle İletişime Geçin
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Projeleriniz veya işbirliği fırsatları için benimle iletişime
            geçebilirsiniz.
          </p>
        </div>

        {/* İletişim Kartları */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800
                         rounded-2xl p-8 text-center shadow-sm ring-1
                         ring-gray-200 dark:ring-gray-700
                         transition-colors duration-300"
            >
              {/* Kart ikonu */}
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center
                              rounded-full bg-indigo-600 dark:bg-indigo-500"
              >
                {React.cloneElement(item.icon, {
                  className: "h-6 w-6 text-white",
                })}
              </div>

              {/* Başlık ve açıklamalar */}
              <h3
                className="mt-6 text-sm font-semibold leading-7
                             text-gray-900 dark:text-white"
              >
                {item.title}
              </h3>
              <p className="mt-1 text-base leading-6 text-gray-600 dark:text-gray-300">
                {item.details}
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* İletişim Formu */}
        <div
          className="mx-auto mt-16 max-w-2xl rounded-2xl bg-white dark:bg-gray-800
                     p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700
                     transition-colors duration-300"
        >
          <form className="space-y-6">
            {/* Ad Soyad */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6
                           text-gray-900 dark:text-white"
              >
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                placeholder="Adınız Soyadınız"
                className="block w-full rounded-lg border-0 py-2 px-4
                           text-gray-900 dark:text-white shadow-sm ring-1
                           ring-inset ring-gray-300 dark:ring-gray-700
                           placeholder:text-gray-400 focus:ring-2
                           focus:ring-inset focus:ring-indigo-600
                           dark:focus:ring-indigo-500 bg-white dark:bg-gray-800
                           transition-colors duration-300"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6
                           text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="ornek@email.com"
                className="block w-full rounded-lg border-0 py-2 px-4
                           text-gray-900 dark:text-white shadow-sm ring-1
                           ring-inset ring-gray-300 dark:ring-gray-700
                           placeholder:text-gray-400 focus:ring-2
                           focus:ring-inset focus:ring-indigo-600
                           dark:focus:ring-indigo-500 bg-white dark:bg-gray-800
                           transition-colors duration-300"
              />
            </div>

            {/* Mesaj */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6
                           text-gray-900 dark:text-white"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Mesajınız..."
                className="block w-full rounded-lg border-0 py-2 px-4
                           text-gray-900 dark:text-white shadow-sm ring-1
                           ring-inset ring-gray-300 dark:ring-gray-700
                           placeholder:text-gray-400 focus:ring-2
                           focus:ring-inset focus:ring-indigo-600
                           dark:focus:ring-indigo-500 bg-white dark:bg-gray-800
                           transition-colors duration-300"
              />
            </div>

            {/* Gönder Butonu */}
            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 dark:bg-indigo-500
                           px-4 py-3 text-sm font-semibold text-white shadow-sm
                           hover:bg-indigo-500 dark:hover:bg-indigo-400
                           focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                           transition-colors duration-300"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
