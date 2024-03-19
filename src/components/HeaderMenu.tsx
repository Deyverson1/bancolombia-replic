import React, { useState } from "react";
import { XIcon } from "./icons/X";
export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  function handleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <section onClick={handleMenu} className="md:hidden flex items-center gap-1 text-black">
      {!menuOpen
        ? <div className="flex transition-transform duration-1000  ease-in-out delay-200 gap-3">
          <h1>Menú</h1>
          <span className="font-bold w-3 h-3">⋮</span>
        </div>
        : <div className="flex transition-transform duration-1000 ease-in-out delay-200">
          <h1>Cerrar</h1>
          <XIcon/>
        </div>
      }
    </section>
  )
}