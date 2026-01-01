"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Trash2, Terminal, Copy } from "lucide-react"

type MarathiLangEditorProps = {
  code: string
  setCode: (value: string) => void
}

export default function MarathiLangEditor({ code, setCode }: MarathiLangEditorProps) {
  const [output, setOutput] = useState("")

  // ================= TRANSPILER =================
  const transpile = (mrCode: string) => {
    let js = mrCode

    // 1. Hide Strings
    const strings: string[] = []
    js = js.replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, (match) => {
      strings.push(match)
      return `__STR_${strings.length - 1}__`
    })

    // 2. Constants & Booleans
    js = js.replace(/सत्य/g, "true").replace(/असत्य/g, "false")

    // 3. Printing & Functions
    js = js.replace(/छापा\s*\((.*?)\)/g, "__print($1)")
    js = js.replace(/कार्य\s+([\u0900-\u097F\w]+)\s*\((.*?)\)\s*{/g, "function $1($2) {")
    js = js.replace(/परत\s+(.+)/g, "return $1")

    // 4. Loops & Conditionals
    js = js.replace(/साठी\s+चल\s+([\u0900-\u097F\w]+)\s*=\s*(.+?)\s*ते\s*(.+?)\s*{/g, "for (let $1 = $2; $1 <= $3; $1++) {")
    js = js.replace(/जोपर्यंत\s*\((.*?)\)\s*{/g, "while ($1) {")
    js = js.replace(/जर\s*\((.*?)\)\s*{/g, "if ($1) {")
    js = js.replace(/}\s*अन्यथा\s*{/g, "} else {")

    // 5. Variables
    js = js.replace(/चल\s+([\u0900-\u097F\w]+)\s*=\s*(.+)/g, "let $1 = $2")

    // 6. Restore Strings
    strings.forEach((str, i) => {
      js = js.replace(`__STR_${i}__`, str)
    })

    // 7. Safe Semicolon Injection
    return js
      .split("\n")
      .map((line) => {
        const t = line.trim()
        if (t === "" || t.endsWith("{") || t.endsWith("}") || t.endsWith(";")) return t
        return t + ";"
      })
      .join("\n")
  }

  // ================= RUN CODE =================
  const runCode = () => {
    setOutput("")
    try {
      const js = transpile(code)

      const script = `
        const __print = (...args) => {
          setOutput(prev => prev + args.join(" ") + "\\n");
        };
        try {
          ${js}
        } catch (err) {
          setOutput("त्रुटी: " + err.message);
        }
      `

      const execute = new Function("setOutput", script)
      execute(setOutput)
    } catch (e) {
      setOutput("त्रुटी (Transpiler): " + (e as Error).message)
    }
  }

  // ================= HELPERS =================
  const copyCode = () => navigator.clipboard.writeText(code)
  const clearCode = () => setCode("")

  // ================= UI =================
  return (
    <div className="flex flex-row gap-0 h-[600px]">
      {/* Editor */}
      <div className="flex flex-col w-1/2 border-r border-border">
        <div className="flex items-center justify-between px-4 py-3 border-b bg-card">
          <h2 className="text-sm font-medium">संपादन / Code Editor</h2>
          <div className="flex gap-2">
            <Button onClick={copyCode} size="sm" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
            <Button onClick={clearCode} size="sm" variant="ghost">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button onClick={runCode} size="sm" className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
              <Play className="h-4 w-4" />
              चालवा
            </Button>
          </div>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 font-mono text-sm p-4 resize-none focus:outline-none"
          style={{
            fontFamily: `"Noto Sans Devanagari", Consolas, monospace`,
          }}
          spellCheck={false}
        />
      </div>

      {/* Output */}
      <div className="flex flex-col w-1/2">
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-card">
          <Terminal className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium">परिणाम / Output</h2>
        </div>

        <pre className="flex-1 p-4 bg-black text-green-400 font-mono overflow-auto">
          {output || "// परिणाम येथे दिसेल..."}
        </pre>
      </div>
    </div>
  )
}
