import Image from 'next/image'
import Loginbg from '../../../../assets/Loginbg.webp'

export default function RegisterImg() {
  return (
    <section className="relative hidden lg:block w-full h-[82vh] lg:col-span-5 xl:col-span-6">
      <Image src={Loginbg} alt='Loginbg' fill className="object-cover" />

      <div className="hidden lg:block absolute bottom-0  p-12">
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Welcome to Squid 🦑</h2>
        <p className="mt-4 leading-relaxed text-white/90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.</p>
      </div>

    </section >
  )
}
