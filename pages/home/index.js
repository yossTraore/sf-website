import cn from 'clsx'
import { ScrollableBox } from 'components/scrollable-box'
import { fetchCmsQuery } from 'contentful/api'
import {
  contactEntryQuery,
  footerEntryQuery,
  projectCollectionQuery,
  studioFreightEntryQuery,
} from 'contentful/queries/home.graphql'
import { Layout } from 'layouts/default'
import s from './home.module.scss'

export default function Home({ studioFreight, footer, contact, projects }) {
  console.log(contact)
  console.log(projects)
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
          <ul>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
          </ul>
        </ScrollableBox>
        <ScrollableBox className={s.projects}>
          <ul>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
          </ul>
        </ScrollableBox>
        <ScrollableBox className={s['project-details']}>
          <ul>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
                facilis delectus animi. Laudantium magnam ducimus accusamus?
                Quam explicabo eveniet ratione ipsum voluptate dignissimos,
                fugit cupiditate enim dolorum nam architecto!
              </p>
            </li>
          </ul>
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
