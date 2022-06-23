import ContactKet from 'src/components/contact/ket'
import ContactSugiharto from 'src/components/contact/sugiharto'
import Layout from 'src/components/layout'

const Contact = () => {
  return (
    <Layout title="Contact">
      <section className="mt-14 flex flex-col justify-between md:mt-20 md:flex-row">
        <ContactKet />
        <ContactSugiharto />
      </section>
    </Layout>
  )
}

export default Contact
