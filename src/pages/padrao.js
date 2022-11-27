import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/navbar/Navbar'

export default function Home() {
  return (
    <div className={styles.divprincipal}>
      <Head>
        <title>OnLIB | Livros Online</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      </Head>
      <div className={styles.Backgroundimg}>
        <div className={styles.Backgroundimgtop}>
            <Navbar></Navbar>
            <div className={styles.container}>
              
            </div>
        </div>
      </div>
    </div>
  )
}
