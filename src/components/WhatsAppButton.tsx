"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

const WA_NUMBER = "905336531433";

export default function WhatsAppButton() {
  const locale = useLocale() as "tr" | "en";
  const [open, setOpen] = useState(false);

  const options =
    locale === "tr"
      ? [
          {
            label: "Ders bilgisi",
            message: "Merhaba, Ebru dersleri hakkında bilgi alabilir miyim?",
          },
          {
            label: "Online ders",
            message: "Merhaba, online Ebru dersleri hakkında bilgi almak istiyorum.",
          },
          {
            label: "Workshop / Etkinlik",
            message: "Merhaba, workshop ve etkinlikleriniz hakkında bilgi alabilir miyim?",
          },
        ]
      : [
          {
            label: "Class enquiry",
            message: "Hello, I'd like to learn more about your Ebru classes.",
          },
          {
            label: "Online lesson",
            message: "Hello, I'm interested in online Ebru lessons.",
          },
          {
            label: "Workshop / Event",
            message: "Hello, I'd like to learn more about your workshops and events.",
          },
        ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Quick options */}
      <div
        className={`flex flex-col gap-2 transition-all duration-400 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {options.map((opt, i) => (
          <a
            key={i}
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(opt.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(26,26,26,0.10)] border border-[rgba(200,169,106,0.30)] hover:border-[rgba(200,169,106,0.60)] hover:bg-white hover:-translate-y-px text-foreground text-[12px] px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer"
            style={{ letterSpacing: "0.025em", fontWeight: 400 }}
          >
            {opt.label}
          </a>
        ))}
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp"
        className="w-12 h-12 rounded-full shadow-[0_4px_16px_rgba(200,169,106,0.25)] hover:shadow-[0_6px_24px_rgba(200,169,106,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ background: "var(--accent)" }}
      >
        {open ? (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
