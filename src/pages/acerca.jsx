import Footer from "../components/layout/footer";
import Head from 'next/head'

function Acerca() {
  return (
    <>
    <Head>
        <title>Edwin Narváez - Acerca de</title>
      </Head>
        <h1 className="text-4xl font-bold mt-10">Acerca de mi</h1>
        <p className="mt-5">
          ¡Hola! Soy Edwin 👋. Soy desarrollador front-end y Actualmente estoy
          trabajando en Sales System aplicación creada por mi y que esta
          enfocada en sistematizar el proceso de ventas en Ecuador.
        </p>
        <p className="mt-5">
          Estudié en la UNIVERSIDAD POLITÉCNICA ESTATAL DEL CARCHI (UPEC) donde
          terminé mis estudios y obtube mi titulo como Ingeniero en Informática.
        </p>
      <Footer />
    </>
  );
}

export default Acerca;
