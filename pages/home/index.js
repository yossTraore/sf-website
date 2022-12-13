import cn from 'clsx'
import { ComposableImage } from 'components/composable-image'
import { Link } from 'components/link'
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
        <div className={s.about}>
          <p className={cn(s.title, 'p text-bold text-uppercase text-muted')}>
            About
          </p>
          <ScrollableBox className={s.description}>
            {renderer(studioFreight.about)}
          </ScrollableBox>
        </div>
        <div className={s.projects}>
          <p className={cn(s.title, 'p text-bold text-uppercase text-muted')}>
            Projects
          </p>
          <ScrollableBox className={s.list} infinite>
            <ul>
              {projects.items.map((project) => (
                <li key={project.sys.id}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={cn(
                      selectedProject?.sys?.id === project.sys.id && s.active,
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
        <div className={s['project-details']}>
          <div className={s.heading}>
            <p className={cn(s.title, 'p text-bold text-uppercase text-muted')}>
              Project detail
            </p>
            <div className={s.actions}>
              <button className="p decorate">info</button>
              <Link href={selectedProject?.link} className="p decorate">
                site
              </Link>
            </div>
          </div>
          <ScrollableBox infinite>
            {projects.items
              .filter((project) => project.sys.id === selectedProject?.sys?.id)
              .map((project) => (
                <div key={`${project.sys.id}-details`} className={s.images}>
                  {project.assetsCollection.items.map((asset, i) => (
                    <ComposableImage key={i} sources={asset.imagesCollection} />
                  ))}
                </div>
              ))}
          </ScrollableBox>
        </div>
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
