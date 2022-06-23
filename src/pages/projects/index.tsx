import Layout from 'src/components/layout'
import ListProjects from 'src/components/projects/list'
import KategoriProjects from 'src/components/projects/kategori'

const Projects = () => {
  return (
    <Layout title="Projects">
      <section className="mt-14 flex flex-col items-start justify-start tablet:mt-20 tablet:flex-row tablet:justify-between">
        <KategoriProjects />
        <ListProjects />
      </section>
    </Layout>
  )
}

export default Projects
