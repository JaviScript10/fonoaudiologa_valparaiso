"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const services = [
  "Lenguaje Infantil",
  "Estimulación Temprana",
  "Habla y Articulación",
  "Adultos Mayores",
  "Limpieza de Oído",
  "Terapia de Voz",
  "Otro / Consulta general",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const whatsappFallback = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hola Cinthya! Mi nombre es ${formData.name}. ${formData.message}`
  )}`;

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-xl text-slate-900 mb-2">¡Mensaje enviado!</h3>
        <p className="text-slate-600 mb-6">
          Cinthya revisará tu mensaje y te contactará pronto. También puedes escribirle por WhatsApp para una respuesta más rápida.
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20también%20te%20envié%20un%20formulario%20de%20contacto.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
        >
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto" className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Nombre completo <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ej: María González"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors ${
            errors.name ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50 hover:border-slate-300"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-600 mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors ${
            errors.email ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50 hover:border-slate-300"
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-600 mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
          Teléfono / WhatsApp
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+56 9 XXXX XXXX"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
          Servicio de interés
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors"
        >
          <option value="">Selecciona un servicio...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Mensaje <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntame brevemente en qué puedo ayudarte..."
          rows={4}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors resize-none ${
            errors.message ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50 hover:border-slate-300"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600 mt-1" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Error status */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700" role="alert">
          Hubo un error al enviar el formulario. Por favor,{" "}
          <a href={whatsappFallback} target="_blank" rel="noopener noreferrer" className="underline font-medium">
            escríbeme por WhatsApp
          </a>{" "}
          directamente.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-200 disabled:cursor-not-allowed"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </button>

      <p className="text-xs text-center text-slate-400">
        O escríbeme directamente por{" "}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold hover:underline"
        >
          WhatsApp
        </a>{" "}
        para una respuesta más rápida.
      </p>
    </form>
  );
}
