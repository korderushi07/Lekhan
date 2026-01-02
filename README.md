# लेखन (Lekhan)

**लेखन (Lekhan)** is a modern, web-based programming environment that allows users to write logic using the Marathi language. It is a just a concept designed to demonstrate the power of Marathi in the world of software engineering. It moves beyond simple translation to explore a native-first logic system, where the syntax feels as natural as spoken words.

🔗 **Project Link:** https://lekhan-marathi-code-editor.vercel.app/ 

---

## The Transpilation Engine (Marathi to JS)
Instead of building a full-scale compiler from scratch, Lekhan uses a Transpiler approach. This works through a series of complex Regular Expressions (Regex) that scan the Marathi text for specific keywords and map them to their JavaScript equivalents:

String Preservation: Before any translation happens, the engine identifies and "hides" text inside quotes (like "नमस्कार") so that words inside the strings aren't accidentally converted into code.

**● Keyword Mapping**: It replaces Marathi commands with JavaScript syntax (e.g., छापा becomes console.log, and चल becomes let).

**● Logic Reconstruction**: It handles structural elements like functions (कार्य), loops (साठी), and conditionals (जर...अन्यथा).

**● Semicolon Insertion**: Since Marathi doesn't naturally use semicolons, a custom post-processing function adds them to the generated JavaScript to ensure the code is valid for execution.

---

## 🛠️ Tech Stack

* **Frontend**: React.js.
* **Styling**: Custom CSS3 with CSS Variables for theme management.
* **Engine**: Custom JavaScript Transpiler.
* **Fonts**: Noto Sans Devanagari for high-clarity rendering.

---

## 📝 Syntax Guide

| Marathi Keyword | JavaScript Equivalent | Usage Example |
| --- | --- | --- |
| `चल` | `let` | `चल संख्या = १०` |
| `छापा` | `console.log` | `छापा("नमस्कार")` |
| `जर ... अन्यथा` | `if ... else` | `जर (क्ष > ५) { ... } अन्यथा { ... }` |
| `कार्य` | `function` | `कार्य बेरीज(अ, ब) { ... }` |
| `परत` | `return` | `परत अ + ब` |
| `साठी` | `for loop` | `साठी चल इ = १ ते १० { ... }` |

---

## 🚀 Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/lekhan.git

```


2. **Install Dependencies**:
```bash
npm install

```


3. **Run the App**:
```bash
npm start

```



---

## 💡 Why Lekhan?

We believe that **Digital Sovereignty** begins with language. By removing the English language barrier, we empower students and creators from every corner of Maharashtra to master logic and computer science in their mother tongue. **Lekhan** (Writing) represents the power of creation through our own words.

> *"भाषेचा अभिमान बाळगा, तंत्रज्ञानात क्रांती घडवा!"* (Take pride in your language, create a revolution in technology!).

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add more Marathi keywords or improve the UI patterns, please feel free to open a Pull Request.

---

Made with ❤️ by **Rushikesh Korde**

