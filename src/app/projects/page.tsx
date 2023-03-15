import styles from './page.module.css'

const ProjectsPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.sectionItem}>
        <label>Login Form</label>
      </section>
      <section className={styles.sectionItem}>
        <label>DogGPT</label>
      </section>
      <section className={styles.sectionItem}>
        <label>Photo Slide</label>
      </section>
    </main>
  )
}

export default ProjectsPage
