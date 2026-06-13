import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, Loader2 } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'
import { staggerContainer, staggerItem } from '@/animations/variants'

const FORMSPREE_URL = 'https://formspree.io/f/xxxxxxxx' // 👈 Reemplazá con tu endpoint de Formspree

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        alert('Error al enviar. Intentalo de nuevo.')
        setStatus('idle')
      }
    } catch {
      alert('Error de conexión. Intentalo de nuevo.')
      setStatus('idle')
    }
  }

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="section-container max-w-2xl">
        {/* Header */}
        <SectionReveal className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-border/50 max-w-[60px] flex-1" />
            <span className="font-mono text-muted-foreground text-sm">04.</span>
            <div className="h-px bg-border/50 max-w-[60px] flex-1" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Contacto
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            Si querés trabajar conmigo o simplemente charlar, mandame un mensaje.
          </p>
        </SectionReveal>

        {/* Form */}
        {status === 'sent' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-16 text-center"
          >
            <div className="flex items-center justify-center size-14 rounded-full bg-muted border border-border">
              <Check size={24} className="text-foreground" />
            </div>
            <p className="font-display font-semibold text-lg text-foreground">
              Mensaje enviado
            </p>
            <p className="text-muted-foreground text-sm">
              Gracias por escribirme. Te respondo a la brevedad.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-ghost mt-2"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <motion.div variants={staggerItem} className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground/80"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10"
              />
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground/80"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10"
              />
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/80"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder="Contame de qué se trata..."
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 resize-none"
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-ghost w-full flex items-center justify-center gap-2 py-3"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
