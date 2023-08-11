import React from 'react'
import { LuConstruction } from 'react-icons/lu'


export default function Footer() {
  return (
    <section className="flex mb-5 bg-yellow-200 blur hover:blur-none transition">
      <h3 className="text-3xl font-medium">Ah! This Section is Still Under Construction.{"  "}</h3>
      <div className="mt-2 pl-3 text-xl">
        <LuConstruction/>
      </div>
    </section>
  )
}
