import AllProducts from './_components/AllProducts';

interface props {
  searchParams: { page: string }
}

export default function page({ searchParams }: props) {

  return (
    <main>
      <AllProducts page={searchParams.page} />
    </main>
  )
}