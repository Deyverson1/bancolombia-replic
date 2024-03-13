import React, { useState } from "react"
import { Up } from "./icons/Up";
import { Down } from "./icons/Down";
export default function Switch() {
  const [isOpen1, setOpen1] = useState(true)
  const [isOpen2, setOpen2] = useState(true)
  const [isOpen3, setOpen3] = useState(true)

  const parrafo = [
    "Acerca de nosotros",
    "Trabaja con nosotros",
    "Grupo Bancolombia",
    "Centro de Ayuda",
    "Canales",
    "Puntos de atención",
    "Accesibilidad",
  ];
  const parrafo2 = [
    "Gobierno Corporativo",
    "SARLAFT",
    "Protección de datos",
    "Términos y Condiciones de uso",
    "Proceso licitatorio seguros 2023-2025",
    "Tarifas",
    "Autorización para tratamiento de datos personales",
  ];
  const parrafo3 = [
    "Transparencia y Acceso a la Información",
    "Atención al Consumidor Financiero",
    "Defensor del Consumidor Financiero",
    "notificacijudicial@bancolom bia.com.co",
  ];
  const parrafo4 = [
    "Contáctanos",
    "Carrera 48 # 26 - 85 Medellín – Colombia",
    "Bogotá +57 (601) 343 0000",
    "Medellín +57 (604) 510 9000",
    "Línea gratuita resto del país: 01 8000 9 12345",
    "Línea ética 01 8000 524499",
  ];

  return (
    <>
      <main className="paddingCard border-t-2 text-white pt-2 md:border-t-0 md:pt-0 w-full">
        <div className="flex justify-between ">
          <h3 className="pb-8">Te puede interesar</h3>
          <div onClick={() => { setOpen1(!isOpen1) }} className="md:hidden">
            {isOpen1
              ? <Down />
              : <Up />
            }
          </div>
        </div>
        {parrafo.map((dato: string, index: number) => (
          <li key={index} className={`${isOpen1 ? 'block' : 'hidden'} pb-4 md:block`}>{dato}</li>
        ))
        }
      </main>
      <div className="paddingCard  text-white w-full border-t-2 pt-2 md:border-t-0 md:pt-0 flex-grow">
        <div className="flex md:block justify-between">
          <h3 className="pb-8 w-full">Legales</h3>
          <div onClick={() => { setOpen2(!isOpen2) }} className="md:hidden">
            {isOpen2
              ? <Down />
              : <Up />
            }
          </div>
        </div>
        {parrafo2.map((dato: string, index: number) => (
          <li key={index} className={`${isOpen2 ? 'block' : 'hidden'} pb-4 md:block`}>{dato}</li>
        ))
        }
      </div>
      <div className="paddingCard text-white w-full md:pt-12">
        {parrafo3.map((dato: string, index: number) => (
          <li key={index} className={`${isOpen2 ? 'block' : 'hidden'} pb-4 md:block`}>{dato}</li>
        ))
        }
      </div>
      <div className="paddingCard text-white border-t-2 pt-2 md:border-t-0 md:pt-0 w-full">
        <div className="flex md:block justify-between">
          <h3 className="pb-4 md:pb-8">Contáctanos</h3>
          <div onClick={() => { setOpen3(!isOpen3) }} className="md:hidden">
            {isOpen3
              ? <Down />
              : <Up />
            }
          </div>
        </div>
        {parrafo4.map((dato, index: number) => (
            <li key={index} className={`${isOpen3 ? 'block' : 'hidden'} pb-4  md:block`}>{dato}</li>
          ))
        }
      </div>

    </>

  )
}