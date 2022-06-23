import ButtonNext from 'src/components/home/buttonNext'
import ImageHome from 'src/components/home/image'
import KetHome from 'src/components/home/ket'
import ListHome from 'src/components/home/list'
import Layout from 'src/components/layout'

const Home = () => {
  return (
    <Layout title="Home">
      <section className="mt-14 flex flex-col md:mt-20 md:flex-row">
        <div className="relative flex w-full flex-col">
          <KetHome />
          <ButtonNext />
          <ListHome />
        </div>
        <ImageHome />
      </section>
    </Layout>
  )
}

export default Home
