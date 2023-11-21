import style from '../Styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter(); // Importa y define el router

  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div className="div-3">
              <div className="div-4">
                <div className="column-2">
                <Link href="/InicioSesion">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f492b-bc43-43b5-9844-31e9c1f717e4?apiKey=066a951e6da146a787c64f344598a4a3&"
                    className="img"
                  />
                  </Link>
                </div>
                <div className="column-3">
                <button
                className="div-5"
                onClick={(event) => {
                  event.preventDefault();
                  router.push('/Calendario');
                }}
                 >Calendario
        
                 </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="column-4">
            <div className="div-6">
              <div className="div-7">
                <div className="column-5">
                <button
                className="div-8"
                onClick={(event) => {
                  event.preventDefault();
                  router.push('/contactanos');
                }}
                 >Contactanos
        
                 </button>
                </div>
                <div className="column-6">
                <Link href="/Usuario">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/af3ceae4-fa72-428e-9439-b61faf6b62b7?apiKey=066a951e6da146a787c64f344598a4a3&"
                    className="img-2"
                  />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #4548aa;
        }
        .div-2 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-2 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 53%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-3 {
          margin-top: 17px;
          padding-right: 21px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            margin-top: 40px;
            padding-right: 20px;
          }
        }
        .div-4 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-4 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 34%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .img {
          aspect-ratio: 1.08;
          object-fit: contain;
          object-position: center;
          width: 184px;
          overflow: hidden;
          max-width: 100%;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 66%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-5 {
          color: #000;
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 40px;
          background-color: #e6ddd6;
          width: 80%;
          margin: auto;
          padding: 12px 20px;
          font: 900 30px/47.5px Lexend, -apple-system, Roboto, Helvetica,
            sans-serif
            ;
          
        }
        @media (max-width: 991px) {
          .div-5 {
            white-space: initial;
            margin-top: 40px;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 47%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-6 {
          margin-top: 52px;
          padding-right: 19px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-7 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 76%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-8 {
          color: #000;
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 40px;
          background-color: #e6ddd6;
          width: 80%;
          margin: auto;
          padding: 12px 20px;
          font: 900 30px/47.5px Lexend, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
            margin-top: 40px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 24%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 117px;
          overflow: hidden;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img-2 {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}


export default Header;