import { Card } from "@/components/ui/card"
import { Heart, Globe, Code2 } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">तत्त्वज्ञान / Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why programming in your mother tongue matters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 space-y-4 bg-card border-border hover:border-orange-600/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-orange-600/10 flex items-center justify-center">
              <Heart className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">मातृभाषेचे महत्त्व</h3>
            <p className="text-muted-foreground leading-relaxed">
              Learning becomes natural when you think and code in the language you dream in. LEKHAN removes the language
              barrier from programming.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-card border-border hover:border-orange-600/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-orange-600/10 flex items-center justify-center">
              <Globe className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Cultural Connection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Programming keywords like <code className="text-orange-600">चल</code>,{" "}
              <code className="text-orange-600">छापा</code>, <code className="text-orange-600">जर</code> make code
              readable and meaningful to Marathi speakers.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-card border-border hover:border-orange-600/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-orange-600/10 flex items-center justify-center">
              <Code2 className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">सुलभ शिक्षण</h3>
            <p className="text-muted-foreground leading-relaxed">
              Beginners can focus on logic and problem-solving without struggling with English keywords and syntax.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
