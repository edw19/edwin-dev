import Footer from "../components/layout/footer";
import Head from "next/head";

function Acerca() {
  return (
    <>
      <Head>
        <title>Edwin Narváez - Acerca de mi</title>
      </Head>
      <h1 className="text-4xl font-bold mt-4">Acerca de mi</h1>
      <p className="mt-5">
        ¡Hola! soy Edwin. Me gusto el mundo del desarrollo debido a que es un
        mundo apacionante y nos da la capacidad de resolver problemas a través
        de software de cálidad
      </p>
      <p className="mt-5">
        Estudié en la UNIVERSIDAD POLITÉCNICA ESTATAL DEL CARCHI (UPEC) donde
        terminé mis estudios y obtube mi titulo como Ingeniero en Informática.
      </p>
      <p>
        Actualmente estoy trabajando en Lessa una aplicación creada por mi y que
        esta enfocada en facilitar el proceso de ventas agregando la
        funcionalidad de facturación electronica para Ecuador.
      </p>
      <Footer />
    </>
  );
}

export default Acerca;
