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
        <title>OnLIB | Loja</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      </Head>
      <div className={styles.Backgroundimg}>
        <div className={styles.Backgroundimgtop}>
            <Navbar></Navbar>
            <div className={styles.container}>
            <div className="card" style={{width: '85%', margin: '5px', padding: '10px'}}>
              <div class="container-fluid">
                <form class="d-flex">
                  <input class="form-control shadow-none me-2" type="search" placeholder="Procurar livro" ></input>
                  <button class="btn btn-outline-dark" type="submit">Search</button>
                </form>
              </div>
            </div>


              <div className='row justify-content-center'>


                <div className="card" style={{width: '18rem', margin: '5px'}}>
                  <img src="https://cf.shopee.com.br/file/8a22aa082aa8d189c9e1b94839a897a8" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title" style={{textAlign: 'left'}}>Nome do Livro</h5>
                    <p className="card-text" style={{textAlign: 'left'}}>Nome do livro o melhor livro que voce pode ler na sua vida toda, a historia de Leitinho e a cobra.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{textAlign: 'left'}}>Preço: 50,00 R$</li>
                  </ul>
                  <div className="card-body" style={{textAlign: 'left', alignItems:'left'}}>
                    <button type="button" className="btn btn-outline-dark">Comprar</button>
                  </div>
                </div>

                <div className="card" style={{width: '18rem', margin: '5px'}}>
                  <img src="https://imgs.extra.com.br/2448668/1g.jpg" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title" style={{textAlign: 'left'}}>Nome do Livro</h5>
                    <p className="card-text" style={{textAlign: 'left'}}>Nome do livro o melhor livro que voce pode ler na sua vida toda, a historia de Leitinho e a cobra.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{textAlign: 'left'}}>Preço: 50,00 R$</li>
                  </ul>
                  <div className="card-body" style={{textAlign: 'left', alignItems:'left'}}>
                    <button type="button" className="btn btn-outline-dark">Comprar</button>
                  </div>
                </div>

                <div className="card" style={{width: '18rem', margin: '5px'}}>
                  <img src="https://images-americanas.b2w.io/produtos/132899741/imagens/livro-e-assim-que-acaba/132899741_1_large.jpg" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title" style={{textAlign: 'left'}}>Nome do Livro</h5>
                    <p className="card-text" style={{textAlign: 'left'}}>Nome do livro o melhor livro que voce pode ler na sua vida toda, a historia de Leitinho e a cobra.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{textAlign: 'left'}}>Preço: 50,00 R$</li>
                  </ul>
                  <div className="card-body" style={{textAlign: 'left', alignItems:'left'}}>
                    <button type="button" className="btn btn-outline-dark">Comprar</button>
                  </div>
                </div>

                
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
