export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Brand */}
        <div className="text-center space-y-3">
<h2
  className="
    font-['Cinzel_Decorative']
    text-3xl md:text-4xl
    font-bold
    uppercase
    tracking-normal
    text-white
  "
>
  LEKHAN
</h2>




          <p className="text-sm text-muted-foreground">
            मराठी डेव्हलपर्ससाठी प्रेमाने बनवले
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Credits */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-red-500">♥</span> by{" "}
            <span className="text-white font-medium">
              Rushikesh Korde
            </span>
          </p>

          <p className="text-xs text-muted-foreground">
            © 2025 LEKHAN. Building the future of Marathi programming.
          </p>
        </div>

      </div>
    </footer>
  )
}
