import { Card } from "@/components/ui/card"
import { Languages, Users, Zap, Wrench } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Languages,
      title: "देवनागरी वाक्यरचना",
      subtitle: "Devanagari Syntax",
      description: "Write code using the beautiful Devanagari script with Marathi keywords",
    },
    {
      icon: Users,
      title: "शिकायला सोपे",
      subtitle: "Beginner Friendly",
      description: "Perfect for students and beginners learning to code in their native language",
    },
    {
      icon: Zap,
      title: "ब्राउझरमध्ये चालते",
      subtitle: "Runs in Browser",
      description: "No installation needed - write and execute code directly in your browser",
    },
    {
      icon: Wrench,
      title: "JavaScript आधारित",
      subtitle: "Built with JavaScript Transpiler",
      description: "Powered by a custom transpiler that converts Marathi code to JavaScript",
    },
  ]

  return (
    null
  )
}
