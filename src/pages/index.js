import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/navbar/Navbar'
import { useRouter } from 'next/router'
// import img from '../../public/image/PokemikioLogo.png'
// import LoginForm from '../Components/LoginForm/LoginForm'

export default function Home() {

  const router = useRouter();

  async function vender(){
    await router.push('/vender');
  }

  async function loja(){
    await router.push('/loja');
  }

  return (
    <div className={styles.divprincipal}>
      <Head>
        <title>OnLIB | Inicio</title>
        <link rel="preconnect" href=""></link>
        
      </Head>
      <div className={styles.Backgroundimg}>
        <div className={styles.Backgroundimgtop}>
            <Navbar></Navbar>
            <div className={styles.containerprincipal}>
              <div className={styles.compraevenda}>
                <h2>Aqui na OnLIB voce pode</h2>
                <h2>comprar e vender seus livros</h2>
                <button onClick={loja}>Comprar</button>
                <button onClick={vender}>Vender</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
