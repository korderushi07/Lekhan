"use client"

import { useState } from "react"
import MarathiLangEditor from "../marathi-lang-editor"
import ReferenceSection from "./refernce-section"

export default function PlaygroundSection() {
  const [code, setCode] = useState(`चल x = 5
छापा("नमस्कार!", x)`)

 return (
  <section id="playground" className="py-16 bg-[#0b0b0b]">
    {/* Center container */}
    <div className="max-w-7xl mx-auto px-4 space-y-12">

      {/* Heading stays same */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          चला सुरुवात करूया (Playground)
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          येथे तुम्ही स्वतःचा कोड लिहू शकता आणि तो चालवून पाहू शकता.
        </p>
      </div>

      {/* 🔥 PLAYGROUND CARD */}
      <div
        className="
          rounded-2xl
          bg-[#111111]
          border border-white/10
          shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_80px_-30px_rgba(0,0,0,1)]
          overflow-hidden
        "
      >
        <MarathiLangEditor code={code} setCode={setCode} />
      </div>

      {/* Reference section stays below */}
      <ReferenceSection setEditorCode={setCode} />

    </div>
  </section>
)

}
