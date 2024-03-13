import React, { useState } from "react"
import { Up } from "./icons/Up";
import { Down } from "./icons/Down";
export default function Switch() {
  const [isOpen, setOpen] = useState(false)
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
  function handleClick() {
    setOpen(!isOpen)
  }
  return (
    <>
      <main className="paddingCard border-t-2 pt-2 md:border-t-0 md:pt-0 w-full">
        <div className="flex justify-between text-white">
          <h3 className="pb-8">Te puede interesar</h3>
          <div onClick={handleClick}>
            {isOpen
              ? <Down />
              : <Up />
            }
          </div>
        </div>
        {parrafo.map((dato: string, index: number) => (
          <li key={index} className={`${isOpen ? 'block' : 'hidden'} pb-4 md:block`}>{dato}</li>
        ))
        }
      </main>
      <div
        className="paddingCard w-full border-t-2 pt-2 md:border-t-0 md:pt-0 flex-grow"
      >
        <h3 className="pb-8 w-full">Legales</h3>
        {
          parrafo2.map((dato: string, index: number) => (
            <li key={index} className={`${isOpen ? 'block' : 'hidden'} pb-4 hidden md:block`}>{dato}</li>
          ))
        }
      </div>
      <div className="paddingCard w-full md:pt-12">
        {
          parrafo3.map((dato: string, index: number) => (
            <li key={index} className="pb-4 hidden md:block">{dato}</li>
          ))
        }
      </div>
      <div className="paddingCard border-t-2 pt-2 md:border-t-0 md:pt-0 w-full">
        <h3 className="pb-4 md:pb-8">Contáctanos</h3>
        {
          parrafo4.map((dato, index: number) => (
            <li key={index} className="pb-4 px-2 hidden md:block">{dato}</li>
          ))
        }
      </div>

    </>

  )
}