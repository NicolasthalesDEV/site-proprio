"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Tailwind CSS",
  "Git",
  "CI/CD",
  "UI/UX"
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground">
            Sou um desenvolvedor apaixonado com foco em criar soluções elegantes para problemas complexos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden">
              <Image
                src="/fotoPerfil.jpeg"
                alt="Nicolas Thales"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Minha Jornada</h3>
            <p className="text-muted-foreground mb-6">
              Com mais de 2 anos de experiência em desenvolvimento web, trabalhei em uma variedade de projetos, desde
              sites para pequenas empresas até aplicações empresariais de grande escala. Minha abordagem combina
              expertise técnica com um olhar atento para design e experiência do usuário.
            </p>
            <p className="text-muted-foreground mb-8">
              Estou sempre aprendendo e explorando novas tecnologias para me manter na vanguarda do desenvolvimento
              web. Meu objetivo é criar experiências digitais que não sejam apenas funcionais, mas também intuitivas
              e agradáveis de usar.
            </p>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Habilidades Técnicas</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

