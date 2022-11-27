import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/navbar/Navbar'
import imgdeteste from '../../public/image/livrologo.png'

export default function Home() {
  return (
    <div className={styles.divprincipal}>
      <Head>
        <title>OnLIB | Minhas Vendas</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      </Head>
      <div className={styles.Backgroundimg}>
        <div className={styles.Backgroundimgtop}>
            <Navbar></Navbar>
            <div className={styles.container}>

              <div className="card" style={{width: '100%', marginBottom: '10px', padding: '10px'}}>
                <div className={styles.titulocontainer}>
                  <div style={{display: 'flex'}}>
                    <h1 className={styles.tituloadd}>Saldo:</h1>
                    <h1 className={styles.tituloadd2}>1500 R$</h1>
                  </div>
                  <button type="button" className={styles.botaoadd}>Sacar</button>
                </div>
              </div>

              <table className={styles.contenttable}>
                <thead>
                  <tr>
                    <th>Livro</th>
                    <th>Autor</th>
                    <th>categoria</th>
                    <th>Comprador</th>
                    <th>preço</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nome do livro</td>
                    <td>Joãozinho</td>
                    <td>Terror</td>
                    <td>Guilherme</td>
                    <td>150,00 R$</td>
                  </tr>
                  <tr>
                    <td>Nome do livro</td>
                    <td>Joãozinho</td>
                    <td>Terror</td>
                    <td>Guilherme</td>
                    <td>500,00 R$</td>
                  </tr>
                  <tr>
                    <td>Nome do livro</td>
                    <td>Joãozinho</td>
                    <td>Terror</td>
                    <td>Guilherme</td>
                    <td>200,00 R$</td>
                  </tr>
                  <tr>
                    <td>Nome do livro</td>
                    <td>Joãozinho</td>
                    <td>Terror</td>
                    <td>Guilherme</td>
                    <td>210,00 R$</td>
                  </tr>
                  <tr>
                    <td>Nome do livro</td>
                    <td>Joãozinho</td>
                    <td>Terror</td>
                    <td>Guilherme</td>
                    <td>150,00 R$</td>
                  </tr>
                  <tr>
                    <td>Nome do livro</td>
                    <td>Joãozinho</td>
                    <td>Terror</td>
                    <td>Guilherme</td>
                    <td>180,00 R$</td>
                  </tr>
                  <tr>
                    <td>Nome do livro</td>
                    <td>Joãozinho</td>
                    <td>Terror</td>
                    <td>Guilherme</td>
                    <td>110,00 R$</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
        </div>
      </div>
    </div>
  )
}
