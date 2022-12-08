import { fetchCmsQuery } from 'contentful/api'
import {
  contactEntryQuery,
  footerEntryQuery,
  projectCollectionQuery,
  studioFreightEntryQuery,
} from 'contentful/queries/home.graphql'
import { Layout } from 'layouts/default'

export default function Home({ studioFreight, footer, contact, projects }) {
  return (
    <Layout
      theme="dark"
      principles={studioFreight.principles}
      studioInfo={{
        phone: studioFreight.phoneNumber,
        email: studioFreight.email,
      }}
      footerLinks={footer.linksCollection.items}
    >
      {console.log(studioFreight)}
      {console.log(footer)}
      {console.log(contact)}
      {console.log(projects)}
      <p>hi</p>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const [{ studioFreight }, { footer }, { contact }, { projectCollection }] =
    await Promise.all([
      fetchCmsQuery(studioFreightEntryQuery, {
        preview,
      }),
      fetchCmsQuery(footerEntryQuery, {
        preview,
      }),
      fetchCmsQuery(contactEntryQuery, {
        preview,
      }),
      fetchCmsQuery(projectCollectionQuery, {
        preview,
      }),
    ])

  return {
    props: {
      studioFreight,
      footer,
      contact,
      projects: projectCollection,
      id: 'home',
    },
    revalidate: 30,
  }
}
