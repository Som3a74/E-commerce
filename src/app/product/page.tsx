import AllProducts from './_components/AllProducts';

export default function page({ searchParams }: any) {

  return (
    <main>
      <AllProducts page={searchParams.page} />
    </main>
  )
}