"use client";

import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

const contacts = [
  { label: "+250 789 448 107", tel: "+250789448107", whatsapp: "250789448107" },
  { label: "+250 788 720 326", tel: "+250788720326", whatsapp: "250788720326" },
];

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MovingPictures({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const reel = [...images, ...images];

  return (
    <div className="moving-pictures" aria-label="Moving event gallery">
      <motion.div
        className="moving-track"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {reel.map((src, index) => (
          <Image key={`${src}-${index}`} src={src} alt="Inkindi decor Kigali event moment" width={460} height={620} sizes="280px" />
        ))}
      </motion.div>
    </div>
  );
}

export function ContactChooser() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="contact-widget">
      <button className="contact-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        WhatsApp / Call
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="contact-popover"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.22 }}
          >
            <div className="contact-popover-head">
              <p>Choose a number</p>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close contact options">
                Close
              </button>
            </div>
            {contacts.map((contact) => (
              <div className="contact-choice" key={contact.tel}>
                <strong>{contact.label}</strong>
                <span>
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                    WhatsApp
                  </a>
                  <a href={`tel:${contact.tel}`} onClick={() => setOpen(false)}>
                    Call
                  </a>
                </span>
              </div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
