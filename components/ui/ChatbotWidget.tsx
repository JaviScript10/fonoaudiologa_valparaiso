"use client";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";

type Message = {
  id: number;
  type: "bot" | "user";
  text: string;
  time: string;
  options?: { label: string; value: string }[];
};

const initialMessages: Message[] = [
  {
    id: 1,
    type: "bot",
    text: `¡Hola! 👋 Soy la asistente virtual de **Cinthya López**, fonoaudióloga en Valparaíso. ¿En qué puedo ayudarte hoy?`,
    time: new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" }),
    options: [
      { label: "📅 Agendar una cita", value: "agendar" },
      { label: "💰 Consultar precios", value: "precios" },
      { label: "🏥 Ver servicios", value: "servicios" },
      { label: "❓ Información general", value: "info" },
    ],
  },
];

const botResponses: Record<string, { text: string; options?: { label: string; value: string }[]; whatsapp?: string }> = {
  agendar: {
    text: "¡Perfecto! Para agendar tu cita con Cinthya, te conectaré directamente con ella por WhatsApp. Indica en el mensaje:\n\n1️⃣ Tu nombre completo\n2️⃣ Motivo de consulta\n3️⃣ Horario de preferencia\n\n¿Hacemos eso ahora? 😊",
    options: [
      { label: "✅ Sí, ir a WhatsApp", value: "whatsapp_agendar" },
      { label: "🔙 Volver al inicio", value: "inicio" },
    ],
  },
  precios: {
    text: "Los precios varían según el tipo de servicio y evaluación. Para darte información precisa y actualizada, lo mejor es consultar directamente con Cinthya.\n\n💬 ¿Te gustaría preguntar por WhatsApp?",
    options: [
      { label: "✅ Consultar por WhatsApp", value: "whatsapp_precios" },
      { label: "🔙 Volver al inicio", value: "inicio" },
    ],
  },
  servicios: {
    text: "Cinthya ofrece los siguientes servicios especializados:\n\n🧒 Lenguaje Infantil\n🌱 Estimulación Temprana\n🗣️ Habla y Articulación\n🤝 Adultos Mayores\n👂 Limpieza de Oído\n🎙️ Terapia de Voz\n\n¿Te interesa alguno en particular?",
    options: [
      { label: "📅 Agendar cita", value: "agendar" },
      { label: "💰 Ver precios", value: "precios" },
      { label: "🔙 Volver al inicio", value: "inicio" },
    ],
  },
  info: {
    text: "Cinthya López Suazo es fonoaudióloga titulada de la Universidad de Playa Ancha, con consulta en Valparaíso. Atiende niños, jóvenes y adultos en trastornos del lenguaje, habla y voz. 🎓\n\n¿Quieres contactarla directamente?",
    options: [
      { label: "✅ Sí, contactar ahora", value: "whatsapp_info" },
      { label: "📅 Agendar cita", value: "agendar" },
      { label: "🔙 Volver al inicio", value: "inicio" },
    ],
  },
  whatsapp_agendar: {
    text: "¡Genial! Te estoy redirigiendo a WhatsApp para agendar tu cita. Recuerda indicar tu nombre y motivo de consulta. ¡Hasta pronto! 👋",
    whatsapp: `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20quisiera%20agendar%20una%20cita%20de%20fonoaudiología.%20Mi%20nombre%20es%3A%20`,
  },
  whatsapp_precios: {
    text: "Te redirigiendo a WhatsApp para consultar precios. ¡Cinthya te responderá a la brevedad! 😊",
    whatsapp: `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20quisiera%20consultar%20sobre%20los%20precios%20de%20tus%20servicios%20de%20fonoaudiología.`,
  },
  whatsapp_info: {
    text: "¡Perfecto! Te conecto con Cinthya por WhatsApp ahora mismo. ¡Hasta pronto! 😊",
    whatsapp: `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20me%20gustaría%20obtener%20más%20información%20sobre%20tus%20servicios%20de%20fonoaudiología.`,
  },
  inicio: {
    text: "¡Claro! ¿En qué más puedo ayudarte? 😊",
    options: [
      { label: "📅 Agendar una cita", value: "agendar" },
      { label: "💰 Consultar precios", value: "precios" },
      { label: "🏥 Ver servicios", value: "servicios" },
      { label: "❓ Información general", value: "info" },
    ],
  },
};

function formatText(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i} className="block">
      {line.split(/\*\*(.*?)\*\*/).map((part, j) =>
        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
      )}
    </span>
  ));
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOption = (value: string, label: string) => {
    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      text: label,
      time: new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = botResponses[value];
      if (response) {
        const botMessage: Message = {
          id: Date.now() + 1,
          type: "bot",
          text: response.text,
          time: new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" }),
          options: response.options,
        };
        setIsTyping(false);
        setMessages((prev) => [...prev, botMessage]);

        if (response.whatsapp) {
          setTimeout(() => {
            window.open(response.whatsapp, "_blank", "noopener,noreferrer");
          }, 1500);
        }
      }
    }, 1200);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setHasUnread(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50" role="complementary" aria-label="Asistente virtual">
      {/* Chat Window */}
      <div
        className={`chatbot-widget ${isOpen ? "chatbot-visible" : "chatbot-hidden"} mb-3`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-teal-600 p-4 flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
              C
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-primary-600" />
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">Asistente de Cinthya</p>
            <p className="text-primary-200 text-xs">Fonoaudióloga · Valparaíso 🌊</p>
          </div>
          <button
            onClick={toggleChat}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          className="bg-slate-50 p-4 h-80 overflow-y-auto space-y-4"
          role="log"
          aria-live="polite"
          aria-label="Mensajes del chat"
        >
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} gap-2`}>
              {msg.type === "bot" && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                  C
                </div>
              )}
              <div className="max-w-[85%]">
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.type === "bot"
                      ? "bg-white text-slate-800 shadow-sm rounded-tl-none"
                      : "bg-primary-600 text-white rounded-tr-none"
                  }`}
                >
                  {formatText(msg.text)}
                </div>
                <p className={`text-xs text-slate-400 mt-1 ${msg.type === "user" ? "text-right" : ""}`}>
                  {msg.time}
                </p>
                {msg.options && (
                  <div className="mt-2 space-y-1.5">
                    {msg.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleOption(opt.value, opt.label)}
                        className="w-full text-left px-3 py-2 text-xs font-medium bg-white hover:bg-primary-50 border border-primary-200 hover:border-primary-400 text-primary-700 rounded-xl transition-all duration-200 hover:shadow-sm"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                C
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                <div className="flex gap-1.5 items-center h-4">
                  <div className="typing-dot w-2 h-2 rounded-full bg-slate-400" />
                  <div className="typing-dot w-2 h-2 rounded-full bg-slate-400" />
                  <div className="typing-dot w-2 h-2 rounded-full bg-slate-400" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <div className="bg-white px-4 py-3 border-t border-slate-100 flex items-center justify-between">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-green-600 font-medium hover:text-green-700 transition-colors"
            aria-label="Contactar directamente por WhatsApp"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ir a WhatsApp directo
          </a>
          <p className="text-xs text-slate-400">Respuesta inmediata</p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ml-auto ${
          isOpen
            ? "bg-slate-700 hover:bg-slate-800 text-white"
            : "bg-primary-600 hover:bg-primary-700 text-white"
        }`}
        aria-label={isOpen ? "Cerrar asistente virtual" : "Abrir asistente virtual"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {hasUnread && (
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse-slow" aria-label="Mensaje nuevo" />
            )}
          </div>
        )}
      </button>
    </div>
  );
}
