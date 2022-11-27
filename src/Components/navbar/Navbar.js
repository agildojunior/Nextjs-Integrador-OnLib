import Link from 'next/link'
import img from '../../../public/image/livrologo.png'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
    return(
            <ul className={styles.navegador}>
                
                <div className={styles.navegadordiv1}>
                    <li className={styles.linavimg}>
                        <a>
                            <Image src={img} width='330px' height='95px'  />
                        </a>
                    </li>
                </div>

                <div className={styles.navegadordiv2}>
                    <li className={styles.linav}>
                        <Link href="/">
                            <a className={styles.anav}>INICIO</a>
                        </Link>
                    </li>
                    <li className={styles.linav}>
                        <Link href="/loja">
                            <a className={styles.anav}>COMPRAR</a>
                        </Link>
                    </li>
                    <li className={styles.linav}>
                        <Link href="/vender">
                            <a className={styles.anav}>VENDER</a>
                        </Link>
                    </li>
                    <li className={styles.linav}>
                        <Link href="/padrao">
                            <a className={styles.anav}>PERFIL</a>
                        </Link>
                    </li>
                    <li className={styles.linav}>
                        <Link href="/login">
                            <a className={styles.anav}>LOGAR</a>
                        </Link>
                    </li>
                </div>
                
            </ul>
    )
}