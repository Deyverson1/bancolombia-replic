
import { useState } from "react"
import { UserSearch } from "./icons/UserSearch"
import { XIcon } from "./icons/X.tsx"
import { UserHelpData } from "../data/UserHelp.ts"

export default function UserHelp() {
  const [menuOpen, setMenuOpen] = useState(true)
  function handleUser() {
    setMenuOpen(!menuOpen)
  }
  return (
    <section >
      <section className={`${menuOpen ? 'hidden' : 'block'} bg-black bg-opacity-80 w-screen h-screen fixed z-10 top-0 bottom-0`}>
        <main className="fixed flex justify-end flex-col gap-2 right-6 bottom-24 z-30">
          {UserHelpData.map((data, index) => (
            <section className="flex justify-end items-center gap-6 text-white text-md">
              <h1>{data.title}</h1>
              <div className="rounded-full text-gray-800 bg-white p-4 ">
                <data.icon />
              </div>
            </section>
          ))}
        </main>
      </section>
      <div onClick={handleUser} className="fixed z-10 bottom-3 md:bottom-6 right-6  rounded-full bg-white p-3 border-4 border-yellow-400">
        {menuOpen
          ? <UserSearch />
          : <XIcon />}
      </div>
    </section>
  )
}