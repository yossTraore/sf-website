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
import { getForm } from 'lib/hubspot'
import { useStore } from 'lib/store'
import { useEffect, useState } from 'react'
import shallow from 'zustand/shallow'
import s from './home.module.scss'

export default function Home({ studioFreight, footer, contact, projects }) {
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [selectedProject, setSelectedProject] = useStore(
    (state) => [state.selectedProject, state.setSelectedProject],
    shallow
  )

  useEffect(() => {
    setSelectedProject(projects.items[0])
  }, [])

  return (
    <Layout
      theme="dark"
      principles={studioFreight.principles}
      studioInfo={{
        phone: studioFreight.phoneNumber,
        email: studioFreight.email,
      }}
      contactData={contact}
      footerLinks={footer.linksCollection.items}
    >
      <div className={cn(s.content, 'layout-grid')}>
        <section className={s.about}>
          <p className={cn(s.title, 'p text-bold text-uppercase text-muted')}>
            About
          </p>
          <ScrollableBox className={s.description}>
            {renderer(studioFreight.about)}
          </ScrollableBox>
        </section>
        <section className={s.projects}>
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
        </section>
        <section className={s['project-details']}>
          <div className={s.heading}>
            <p className={cn(s.title, 'p text-bold text-uppercase text-muted')}>
              Project detail
            </p>
            <div className={s.actions}>
              <button
                className="p decorate"
                onClick={() => setShowInfoModal(!showInfoModal)}
              >
                info
              </button>
              <Link href={selectedProject?.link} className="p decorate">
                site
              </Link>
            </div>
          </div>
          <div className={s['details-content']}>
            <ScrollableBox
              infinite
              className={cn(s.images, !showInfoModal && s.visible)}
            >
              {selectedProject?.assetsCollection?.items.map((asset, i) => (
                <ComposableImage key={i} sources={asset.imagesCollection} />
              ))}
            </ScrollableBox>
            <ScrollableBox className={cn(s.info, showInfoModal && s.visible)}>
              <p className={cn(s.description, 'p')}>
                {selectedProject.description}
              </p>
              <div className={s.testimonial}>
                <p
                  className={cn(
                    s.title,
                    'p text-muted text-uppercase text-bold'
                  )}
                >
                  Testimonial
                </p>
                <p className="p">{selectedProject.testimonial}</p>
              </div>
              <div className={s.services}>
                <p
                  className={cn(
                    s.title,
                    'p text-muted text-uppercase text-bold'
                  )}
                >
                  Services
                </p>
                <p className="p text-uppercase">
                  {selectedProject?.services?.map((service, i) =>
                    i === selectedProject.services.length - 1
                      ? service
                      : `${service}, `
                  )}
                </p>
              </div>
              <div className={s.stack}>
                <p
                  className={cn(
                    s.title,
                    'p text-muted text-uppercase text-bold'
                  )}
                >
                  Stack
                </p>
                <p className="p text-uppercase">
                  {selectedProject?.stack?.map((item, i) =>
                    i === selectedProject.stack.length - 1 ? item : `${item}, `
                  )}
                </p>
              </div>
            </ScrollableBox>
          </div>
        </section>
      </div>
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

  contact.form = await getForm(contact.form)

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
