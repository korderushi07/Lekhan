import { Card } from "@/components/ui/card"

export default function SyntaxSection() {
  const examples = [
    {
      title: "चल घोषणा / Variable Declaration",
      code: `चल नाव = "राहुल"
चल वय = 25
चल पास = सत्य`,
      explanation: "Declare variables using 'चल' keyword, just like 'let' in JavaScript",
    },
    {
      title: "अटी / Conditional Statements",
      code: `जर (वय >= 18) {
  छापा("प्रौढ")
} अन्यथा {
  छापा("अल्पवयीन")
}`,
      explanation: "Use 'जर' (if) and 'अन्यथा' (else) for conditional logic",
    },
    {
      title: "कार्य / Functions",
      code: `कार्य बेरीज(a, b) {
  परत a + b
}
छापा(बेरीज(5, 3))`,
      explanation: "Define functions with 'कार्य' and return values using 'परत'",
    },
  ]

  return (
    null
  )
}
