import React, { useState } from "react"
import { Up } from "./icons/Up";
import { Down } from "./icons/Down";
import { paragraph, paragraph2, paragraph3, paragraph4 } from '../data/footer'
export default function FooterContent() {
  const [isOpen1, setOpen1] = useState(true)
  const [isOpen2, setOpen2] = useState(true)
  const [isOpen3, setOpen3] = useState(true)

  return (
    <>
      <main className="paddingCard border-t-2 text-sm text-white pt-2 md:border-t-0 md:pt-0 w-full">
        <div className="flex justify-between ">
          <h3 className="pb-8">Te puede interesar</h3>
          <div onClick={() => { setOpen1(!isOpen1) }} className="md:hidden">
            {isOpen1
              ? <Down />
              : <Up />
            }
          </div>
        </div>
        {paragraph.map((dato: string, index: number) => (
          <li key={index} className={`${isOpen1 ? 'block' : 'hidden'} pb-4 md:block`}>{dato}</li>
        ))
        }
      </main>
      <div className="paddingCard text-sm text-white w-full border-t-2 pt-2 md:border-t-0 md:pt-0 flex-grow">
        <div className="flex md:block justify-between">
          <h3 className="pb-8 w-full">Legales</h3>
          <div onClick={() => { setOpen2(!isOpen2) }} className="md:hidden">
            {isOpen2
              ? <Down />
              : <Up />
            }
          </div>
        </div>
        {paragraph2.map((dato: string, index: number) => (
          <li key={index} className={`${isOpen2 ? 'block' : 'hidden'} pb-4 md:block`}>{dato}</li>
        ))
        }
      </div>
      <div className="paddingCard text-sm text-white w-full md:pt-12">
        {paragraph3.map((dato: string, index: number) => (
          <li key={index} className={`${isOpen2 ? 'block' : 'hidden'} pb-4 md:block`}>{dato}</li>
        ))
        }
      </div>
      <div className="paddingCard text-sm text-white border-t-2 pt-2 md:border-t-0 md:pt-0 w-full">
        <div className="flex md:block justify-between">
          <h3 className="pb-8 md:pb-8">Contáctanos</h3>
          <div onClick={() => { setOpen3(!isOpen3) }} className="md:hidden">
            {isOpen3
              ? <Down />
              : <Up />
            }
          </div>
        </div>
        {paragraph4.map((dato, index: number) => (
          <li key={index} className={`${isOpen3 ? 'block' : 'hidden'} pb-4 text-sm  md:block`}>{dato}</li>
        ))
        }
      </div>

    </>

  )
}