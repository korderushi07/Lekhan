"use client"

import { Copy, ArrowDownToLine } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  setEditorCode: (code: string) => void
}

const referencePrograms = [
  {
    title: "साधा मुद्रण प्रोग्राम",
    description: "हा कोड साधा मुद्रण प्रोग्राम कसा वापरायचा ते दाखवतो.",
    code: `चल x = 10
छापा("नमस्कार!", x)`,
  },
  {
    title: "अट तपासणी",
    description: "हा कोड अटी (if–else) कशा वापरायच्या ते दाखवतो.",
    code: `चल x = 5
जर (x > 3) {
  छापा("मोठा")
} अन्यथा {
  छापा("लहान")
}`,
  },
  {
    title: "कार्य आणि परत",
    description: "हा कोड कार्य (function) आणि परत मूल्य कसे द्यायचे ते दाखवतो.",
    code: `कार्य बेरीज(a, b) {
  परत a + b
}

छापा("उत्तर:", बेरीज(10, 20))`,
  },
  {
    title: "साठी लूप",
    description: "हा कोड साठी (for loop) वापरून पुनरावृत्ती कशी करायची ते दाखवतो.",
    code: `साठी चल i = 1 ते 5 {
  छापा("मोजणी:", i)
}`,
  },
  {
    title: "जोपर्यंत लूप",
    description: "हा कोड जोपर्यंत (while loop) वापरून पुनरावृत्ती कशी करायची ते दाखवतो.",
    code: `चल x = 1
जोपर्यंत (x <= 5) {
  छापा("संख्या:", x)
  x = x + 1
}`,
  },
  {
    title: "पाढा तयार करणे",
    description: "साठी लूप वापरून ५ चा पाढा तयार करण्याचा प्रोग्राम.",
    code: `चल पाढा = 5
साठी चल i = 1 ते 10 {
  छापा(पाढा, "*", i, "=", पाढा * i)
}`,
  },
  {
    title: "सम-विषम तपासणी",
    description: "दिलेली संख्या सम आहे की विषम हे शोधण्याचा प्रोग्राम.",
    code: `चल संख्या = 15
जर (संख्या % 2 == 0) {
  छापा(संख्या, "ही सम संख्या आहे.")
} अन्यथा {
  छापा(संख्या, "ही विषम संख्या आहे.")
}`,
  },
  {
    title: "सर्वात मोठी संख्या",
    description: "दिलेल्या दोन संख्यांमधून सर्वात मोठी संख्या शोधण्याचा प्रोग्राम.",
    code: `चल अ = 25
चल ब = 40
जर (अ > ब) {
  छापा("सर्वात मोठी संख्या:", अ)
} अन्यथा {
  छापा("सर्वात मोठी संख्या:", ब)
}`,
  },
  {
    title: "फॅक्टोरियल (Factorial)",
    description: "दिलेल्या संख्येचा फॅक्टोरियल काढण्याचा प्रोग्राम.",
    code: `कार्य फॅक्टोरियल(n) {
  जर (n <= 1) { परत 1 }
  परत n * फॅक्टोरियल(n - 1)
}

छापा("५ चा फॅक्टोरियल:", फॅक्टोरियल(5))`,
  },
]

export default function ReferenceSection({ setEditorCode }: Props) {
  const copyCode = async (code: string) => {
    await navigator.clipboard.writeText(code)
  }

  return (
    <section id="reference" className="mt-20 space-y-10">
      {/* CENTERED HEADING */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight">संदर्भ कोड उदाहरणे</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">मराठी प्रोग्रामिंग भाषा समजण्यासाठी तयार उदाहरणे</p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {referencePrograms.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-full rounded-2xl border bg-card/50 backdrop-blur-sm p-6 shadow-lg space-y-5 transition-all hover:shadow-orange-500/10"
          >
            {/* TITLE */}
            <div>
              <h3 className="text-xl font-bold text-orange-400">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 min-h-[40px]">{item.description}</p>
            </div>

            {/* CODE BLOCK */}
            <pre className="flex-grow bg-black/80 text-white text-sm p-5 rounded-xl overflow-x-auto font-mono leading-relaxed border border-white/5 min-h-[140px]">
              {item.code}
            </pre>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-auto pt-2">
              <Button size="sm" variant="secondary" onClick={() => copyCode(item.code)}>
                <Copy className="h-4 w-4 mr-1" />
              </Button>

              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => {
                  setEditorCode(item.code)
                  const playground = document.getElementById("playground")
                  if (playground) {
                    playground.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <ArrowDownToLine className="h-4 w-4 mr-1" />
                एडिटर मध्ये टाका
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
