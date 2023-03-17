import Image from 'next/image'
import styles from './page.module.css'

const projects = [
  {
    id: 1,
    path: 'login-form',
    title: 'Login Form',
    image: 'login-form.jpg',
    description: 'A beautiful login form.',
    author: 'Varum',
  },
  {
    id: 2,
    path: 'dog-gpt',
    title: 'DogGPT',
    image: 'ngontumathuat.png',
    description: 'The most advanced AI at the current moment.',
    author: 'Varum',
  },
  {
    id: 3,
    title: 'A Clock',
    image: 'ngontumathuat.png',
    description: 'A real Clock',
    author: 'Varum',
  },
]

const ProjectsPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {projects.map((project) => {
          const {id, path, title, image, description, author} = project
          return (
            <a href={`/projects/${path}`} className={styles.sectionItem} key={id}>
              <div className={styles.image}>
                <Image
                  src={`/${image}`}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.card}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.authorContent}>
                  by
                  <div className={styles.authorIcon}>
                    <Image src="/logo.svg" alt="" width={20} height={20} />
                    <span className={styles.authorName}>arum</span>
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </section>
    </main>
  )
}

export default ProjectsPage
