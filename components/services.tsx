"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// @ts-ignore
import { Code, Layout, Smartphone, Lightbulb, Rocket, Palette } from "lucide-react"

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Desenvolvimento Web",
    description:
      "Aplicações web personalizadas construídas com frameworks modernos como React e Next.js, focando em desempenho e experiência do usuário.",
  },
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "Desenvolvimento Frontend",
    description:
      "Interfaces de usuário responsivas, acessíveis e visualmente atraentes, que funcionam em todos os dispositivos e navegadores.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Design Mobile-First",
    description:
      "Sites e aplicações projetados com uma abordagem mobile-first para garantir ótimas experiências em todos os dispositivos.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Consultoria Técnica",
    description:
      "Conselhos especializados sobre escolhas tecnológicas, decisões de arquitetura e melhores práticas para seus projetos digitais.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Otimização de Performance",
    description:
      "Melhorando a velocidade e eficiência de sites e aplicações existentes para uma melhor experiência do usuário e SEO.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Design UI/UX",
    description:
      "Criando interfaces de usuário intuitivas, acessíveis e visualmente impressionantes, com foco na experiência do usuário e princípios modernos de design.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Serviços que Ofereço</h2>
          <p className="text-muted-foreground">
            Ofereço uma variedade de serviços de desenvolvimento para ajudar empresas e indivíduos a trazer suas ideias digitais à
            vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

