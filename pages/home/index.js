import cn from 'clsx'
import { ScrollableBox } from 'components/scrollable-box'
import { fetchCmsQuery } from 'contentful/api'
import {
  contactEntryQuery,
  footerEntryQuery,
  projectCollectionQuery,
  studioFreightEntryQuery,
} from 'contentful/queries/home.graphql'
import { renderer } from 'contentful/renderer'
import { Layout } from 'layouts/default'
import { useStore } from 'lib/store'
import s from './home.module.scss'

export default function Home({ studioFreight, footer, contact, projects }) {
  const [selectedProject, setSelectedProject] = useStore((state) => [
    state.selectedProject,
    state.setSelectedProject,
  ])

  console.log({ contact })

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
      <section className={cn(s.content, 'layout-grid')}>
        <ScrollableBox className={s.about}>
          {renderer(studioFreight.about)}
        </ScrollableBox>
        <div className={s.projects}>
          <p className="p text-bold text-uppercase text-muted">Projects</p>
          <ScrollableBox className={s.list} infinite>
            <ul>
              {projects.items.map((project) => (
                <li key={project.sys.id}>
                  <button
                    onClick={() => setSelectedProject(project.sys.id)}
                    className={cn(
                      selectedProject === project.sys.id && s.active,
                      s['list-item']
                    )}
                  >
                    <p className="p text-bold text-uppercase">{project.name}</p>
                    <p className="p-xs text-uppercase">{project.industry}</p>
                  </button>
                </li>
              ))}
            </ul>
          </ScrollableBox>
        </div>
        <ScrollableBox className={s['project-details']} infinite>
          {/* {projects.items.filter((project) => project.sys.id === selectedProject).map((project) => (
                // <div key={`${project.sys.id}-details`}>{project.name}</p>
                console.log(project)
                // project.assetsCollection.items.map((asset) => (
                //   <Image key={project.sys.id} src={asset.url} />
                // )
              ))} */}
          {projects.items
            .filter((project) => project.sys.id === selectedProject)
            .map((project) => (
              <p key={`${project.sys.id}-details`} className="p text-uppercase">
                {project.name}
              </p>
            ))}
        </ScrollableBox>
      </section>
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
