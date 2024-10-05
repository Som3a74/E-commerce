import RegisterForm from './_components/RegisterForm'
import RegisterImg from './_components/registerImg'

export default function page() {

  return (
    <main className="mb-10 lg:mb-0">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4 justify-items-center">

        <RegisterImg />

        <section className="flex items-center justify-center px-8 col-span-12 lg:col-span-7 xl:col-span-6">
          <RegisterForm />
        </section>

      </div>
    </main>
  )
}
