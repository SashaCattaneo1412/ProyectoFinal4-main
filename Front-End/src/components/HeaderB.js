import style from '../Styles/HeaderB.module.css';
import Link from 'next/link';
import Image from 'next/image'
const HeaderB = () => {
  return (
    <header className={style.header}>
       <div className="contenedor">
       <div className={style.barra}>
        <Link href="/">
          <Image width={180} height={150} src="/Image/LOGO1.png" alt="Imagen Logo" />
        </Link>
        <h1 className={style.title}> BIENVENIDO A PILL-DRILL</h1>
         </div>
        
       </div> 
    </header>
  )
}

export default HeaderB




