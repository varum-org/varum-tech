'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

const LoginForm = () => {
  const buttonRef = useRef<any>()
  const router = useRouter()
  const [isMoving, setIsMoving] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [values, setValues] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setValues({
      ...values,
      [key]: e.target.value,
    })
  }

  const handleLogin = (e: any) => {
    e.preventDefault()
    if (isSuccess) {
      router.push('/')
    }
  }

  useEffect(() => {
    if (values.username === 'varum' && values.password === 'varum') {
      setIsSuccess(true)
    }
  }, [values])

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        if (!isSuccess) {
          buttonRef.current.style.background = '#ff2770'
          buttonRef.current.style.color = '#FFF'
          buttonRef.current.style.transition = 'transform 0.5s ease-in-out'
          if (isMoving) {
            buttonRef.current.style.transform = 'translateX(-100px)'
            setIsMoving(false)
          } else {
            buttonRef.current.style.transform = 'translateX(100px)'
            setIsMoving(true)
          }
        } else {
          buttonRef.current.style.background = '#45f3ff'
          buttonRef.current.style.color = '#000'
          buttonRef.current.style.transform = 'translateX(0)'
        }
      })
      if (isSuccess) {
        buttonRef.current.style.background = '#45f3ff'
        buttonRef.current.style.color = '#000'
        buttonRef.current.style.transform = 'translateX(0)'
      }
    }
  }, [buttonRef, isMoving, isSuccess])

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <span className={styles.borderLine} />
        <form onSubmit={handleLogin}>
          <h2>Sign in</h2>
          <div className={styles.inputBox}>
            <input
              onChange={(e) => handleChange(e, 'username')}
              type="text"
              required
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className={styles.inputBox}>
            <input
              onChange={(e) => handleChange(e, 'password')}
              type="password"
              required
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className={styles.links}>
            <a href="#">Forgot Password</a>
            <a href="#">Sign up</a>
          </div>
          <input ref={buttonRef} type="submit" value="Login" />
        </form>
      </div>
    </main>
  )
}

export default LoginForm
