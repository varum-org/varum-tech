import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const varumTech = 'https://varum.tech'
const varumTechProject = 'https://varum.tech/projects'
const varumStore = 'https://varum.store'
const varumNgontu = 'https://ngontumathuat.com'
const tiktok = 'https://www.tiktok.com/@varum.tech'
const facebook = 'https://www.facebook.com/varum.tech'
const community = 'https://www.facebook.com/groups/441834957370096'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to&nbsp;
          <code className={styles.code}>varum.tech</code>
        </p>
        <div>
          <a href={varumTech} target="_blank" rel="noopener noreferrer">
            By Varum
            <Image
              src="/logo.svg"
              alt="Varum Logo"
              className={styles.varumLogo}
              width={25}
              height={25}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/varum.svg"
          alt="Varum Logo"
          width={160}
          height={80}
          priority
        />
        <div className={styles.tech}>TECH</div>
      </div>

      <div className={styles.iconContainer}>
        <a href={tiktok} target={'_blank'} style={{ display: 'flex' }}>
          <Image
            src="/tiktok.svg"
            width={40}
            height={40}
            alt="Varum Tiktok"
            className={styles.socialIcon}
          />
        </a>
        <a href={facebook} target={'_blank'} style={{ display: 'flex' }}>
          <Image
            src="/facebook.svg"
            width={40}
            height={40}
            alt="Varum Facebook"
            className={styles.socialIcon}
          />
        </a>
        <a href={community} target={'_blank'} style={{ display: 'flex' }}>
          <Image
            src="/group.svg"
            width={40}
            height={40}
            alt="Varum Community"
            className={styles.socialIcon}
          />
        </a>
      </div>

      <div className={styles.grid}>
        <a
          href={varumStore}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Store <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Everything you need is just a template.
          </p>
        </a>

        <a
          href={varumNgontu}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Community <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Blog, news and community</p>
        </a>

        <a
          href={varumTechProject}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Projects <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Varum Projects</p>
        </a>
      </div>
    </main>
  )
}
