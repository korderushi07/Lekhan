"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-orange-950/5 dark:to-orange-950/10" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground tracking-tight">LEKHAN</h1>

        <p className="text-2xl md:text-3xl text-orange-600 dark:text-orange-400 font-medium">
          देवनागरी लिपीत लिहिलेली प्रोग्रामिंग भाषा
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Write code in your mother tongue. LEKHAN brings programming to Marathi speakers with a syntax that feels
          natural and intuitive.
        </p>

        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
          आपल्या मातृभाषेत कोड लिहा. प्रोग्रामिंग आता मराठीत!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={() => scrollToSection("playground")}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg gap-2"
          >
            Try Lekhan IDE
            <ArrowRight className="h-5 w-5" />
          </Button>

          <Button
            onClick={() => scrollToSection("reference")}
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg gap-2 border-orange-600/50 hover:bg-orange-600/10 bg-transparent"
          >
            <BookOpen className="h-5 w-5" />
            Learn the Syntax
          </Button>
        </div>
      </div>
    </section>
  )
}
