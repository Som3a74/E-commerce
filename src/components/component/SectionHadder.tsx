import Link from 'next/link'

type props = {
  text: String,
  linkText: String,
  link: String,
  show: boolean
}
export default function SectionHadder({ text, linkText, link, show }: props) {
  return (
    <div className='mt-10'>
      <div className='flex justify-between items-center'>
        <h2 className='text-4xl font-bold'>{text}</h2>
        {show &&
          <Link href={`${link}`} className='hidden sm:block font-medium relative group overflow-hidden'>
            {linkText + ` >>`}
            <span className="absolute bottom-0 left-0 w-full block h-[2px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300"></span>
          </Link>
        }
      </div>
      <div className='w-full h-[2px] bg-gray-200 mt-3 mb-10'></div>
    </div>
  )
}