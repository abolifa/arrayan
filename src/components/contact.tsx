import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("... جاري الإرسال");

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("to", "info@arryanalraqi.com.ly");
    formData.append("subject", "New Contact Message");

    try {
      const res = await fetch("https://eratech.com.ly/send-form.php", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      if (text.includes("OK")) {
        setStatus("تم الإرسال بنجاح");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("حدث خطأ أثناء الإرسال");
      }
    } catch {
      setStatus("تعذّر الإرسال");
    }
  };

  return (
    <section id="contact" className="w-full py-32 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-green-900"
      >
        تواصل معنا
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-1 bg-orange-500 mx-auto mt-4 mb-20 rounded-full"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          <div className="p-10 rounded-3xl bg-white/90 shadow-[0_0_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-start gap-6">
            <div className="flex items-center  gap-3 text-green-900 font-bold text-xl">
              <Mail className="w-6 h-6 text-orange-600" />
              info@arryanalraqi.com.ly
            </div>
            <div className="flex items-center gap-3 text-green-900 font-bold text-xl">
              <Phone className="w-6 h-6 text-orange-600" />
              <span dir="ltr">+218 91 218 6060</span>
            </div>
            <div className="flex items-center gap-3 text-green-900 font-bold text-xl">
              <MapPin className="w-6 h-6 text-orange-600" />
              كرزاز - مصراتة - ليبيا
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg w-full h-[300px]">
            <iframe
              src="https://www.google.com/maps?q=32.34071337602598,15.094383880615041(شركة الريان الراقي)&z=16&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSend}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="p-10 bg-white/90 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col gap-6"
        >
          <input
            name="name"
            placeholder="الاسم"
            required
            className="w-full border border-gray-300 rounded-xl py-3 px-4 text-lg focus:border-green-600 outline-none"
          />
          <input
            name="email"
            placeholder="البريد الإلكتروني"
            required
            className="w-full border border-gray-300 rounded-xl py-3 px-4 text-lg focus:border-green-600 outline-none"
          />
          <input
            name="phone"
            placeholder="رقم الهاتف"
            className="w-full border border-gray-300 rounded-xl py-3 px-4 text-lg focus:border-green-600 outline-none"
          />
          <textarea
            name="message"
            placeholder="رسالتك"
            required
            className="w-full min-h-[140px] border border-gray-300 rounded-xl py-3 px-4 text-lg resize-none focus:border-green-600 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl transition-all duration-300"
          >
            إرسال
          </button>

          <p className="text-center text-lg text-green-700">{status}</p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
