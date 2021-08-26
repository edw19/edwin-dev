import Footer from "../components/layout/footer";
import Head from "next/head";

function Acerca() {
  return (
    <>
      <Head>
        <title>Edwin Narváez - Acerca de mi</title>
      </Head>
      <h1 className="text-4xl text-center sm:col-start-2 sm:col-span-6 md:col-start-2 md:col-span-8 lg:col-start-3 font-bold mt-4">
        Acerca de mi
      </h1>
      <div className="sm:col-start-3 sm:col-span-5 md:col-start-3 md:col-span-6 lg:col-start-4">
        <p className="mt-5">
          ¡Hola! soy Edwin, desarrollar aplicaciones que nos faciliten el
          trabajo ha sido uno de mis principales objetivos al aprender
          programación, me enfoco en resolver problemas a través de software de
          cálidad.
        </p>
        <p className="mt-5">
          Estudié en la UNIVERSIDAD POLITÉCNICA ESTATAL DEL CARCHI (UPEC) donde
          terminé mis estudios y obtuve mi título como Ingeniero en Informática.
        </p>
        <p>
          Actualmente estoy trabajando en Lessa una aplicación creada por mi y
          que esta enfocada en facilitar el proceso de ventas agregando la
          funcionalidad de facturación electronica para Ecuador.
        </p>
        <Footer />
      </div>
    </>
  );
}

export default Acerca;
