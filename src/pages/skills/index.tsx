import Layout from 'src/components/layout'
import KetSkills from 'src/components/skills/ket'
import ListSkills from 'src/components/skills/list'

const Skills = () => {
  return (
    <Layout title="Skills">
      <section className="mt-14 flex flex-col justify-between tablet:mt-20">
        <KetSkills />
        <ListSkills />
      </section>
    </Layout>
  )
}

export default Skills
