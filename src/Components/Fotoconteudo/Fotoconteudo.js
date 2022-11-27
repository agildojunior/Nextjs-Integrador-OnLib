import Link from 'next/link'
import img1 from '../../../public/image/galeria/img1.png'
import img2 from '../../../public/image/galeria/img2.png'
import img3 from '../../../public/image/galeria/img3.png'
import Image from 'next/image'
import styles from './Fotoconteudo.module.css'

export default function Fotoconteudo() {
    return(
        <div className={styles.galeria}>
        <Link href="/Pokemons">
            <div className={styles.singlegaleria} >
                <Image width='300px' height='300px' src={img1}/>
                <div className={styles.overflow}></div>
                <div className={styles.conteudo}>
                    <h1 className={styles.conteudoh1}>Pokemons</h1>
                    <p className={styles.conteudop}>Todos os pokemons <br/> por <b>AGILDO JUNIOR</b></p>
                </div>
            </div>
        </Link>
        <Link href="/Tipos">
            <div className={styles.singlegaleria} >
                <Image width='300px' height='300px' src={img2}/>
                <div className={styles.overflow}></div>
                <div className={styles.conteudo}>
                    <h1 className={styles.conteudoh1}>Tipos</h1>
                    <p className={styles.conteudop}>Tabela de tipos <br/> por <b>AGILDO JUNIOR</b></p>
                </div>
            </div>
        </Link>
        <Link href="/Pokebolas">
            <div className={styles.singlegaleria} >
                <Image width='300px' height='300px' src={img3}/>
                <div className={styles.overflow}></div>
                <div className={styles.conteudo}>
                    <h1 className={styles.conteudoh1}>Pokebolas</h1>
                    <p className={styles.conteudop}>Tipos de Pokebolas <br/> por <b>AGILDO JUNIOR</b></p>
                </div>
            </div>
        </Link>
        </div>
    )
}