import Layout from 'src/components/layout'
import OverviewKet from 'src/components/overview/ket'
import SugihartoOverview from 'src/components/overview/sugihartoOverview'

const Overview = () => {
  return (
    <Layout title="Overview">
      <section className="mt-14 flex justify-center tablet:max-w-[90%] tablet:justify-between tablet:text-justify">
        <OverviewKet />
        <SugihartoOverview />
      </section>
    </Layout>
  )
}

export default Overview
