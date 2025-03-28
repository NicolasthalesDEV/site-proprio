"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// @ts-ignore
import { ExternalLink, Github } from "lucide-react"

// Dados de exemplo de projetos
const projectsData = [
  {
    id: 1,
    title: "Porfólio para designer",
    description: "Portfolio desenvolvido com Next.js, criado para exibir os projetos de design de um cliente. O site foi projetado para ser moderno, responsivo e de fácil navegação, destacando as habilidades e trabalhos do cliente de maneira elegante e funcional. Utilizando Next.js, garantimos uma performance otimizada, SEO eficiente e uma experiência fluida em dispositivos móveis e desktops.",
    image: "image1.PNG",
    tags: ["NextJS", "TypeScript", "UI/UX", "Tailwind CSS"],
    liveUrl: "https://karolyne-porfolio.vercel.app/",
    githubUrl: "https://github.com/NicolasthalesDEV/karolyne_porfolio",
    category: "portfolio",
  },
  {
    id: 2,
    title: "Porfólio para designer em Inglês",
    description: "Portfolio desenvolvido com Next.js, criado para exibir os projetos de design de um cliente em inglês. O site foi projetado para ser moderno, responsivo e de fácil navegação, destacando as habilidades e trabalhos do cliente de maneira elegante e funcional. Utilizando Next.js, garantimos uma performance otimizada, SEO eficiente e uma experiência fluida em dispositivos móveis e desktops.",
    image: "image2.PNG",
    tags: ["NextJS", "TypeScript", "UI/UX", "Tailwind CSS"],
    liveUrl: "https://karolyne-portfolio-en.vercel.app/",
    githubUrl: "https://github.com/NicolasthalesDEV/karolyne_portfolio_en",
    category: "portfolio",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "",
    tags: [""],
    liveUrl: "",
    githubUrl: "",
    category: "",
  },
]

// Categorias de filtro
const categories = [
  { value: "all", label: "Todos os Projetos" },
  { value: "portfolio", label: "Portfólios" },
  { value: "landing", label: "Landing Pages" },
  { value: "data", label: "Visualização de Dados" },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
          <p className="text-muted-foreground mb-8">
            Aqui estão alguns dos meus projetos recentes. Cada um foi cuidadosamente elaborado para resolver problemas
            específicos e proporcionar experiências excepcionais para o usuário.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" /> Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" /> Demonstração Ao Vivo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

