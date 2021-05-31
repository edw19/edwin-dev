import Navbar from "../components/header/NavBar";
import Layout from "../components/layout/main-layout";
import Head from 'next/head'

function contacto() {
  return (
    <>
      <Head>
        <title>Edwin Narváez - Contacto</title>
      </Head>
      <Navbar />
      <Layout>
        <h1 className="mt-10 text-4xl font-bold">Envíame un email</h1>
        <form method="post" className="flex flex-col">
            <input type="text" name="client" placeholder="Nombre Completo" />
            <input type="text" name="asunto" placeholder="Asunto" />
            <input type="email" name="email" placeholder="Ingresa tu email" />
            <input type="submit" value="Enviar" />
        </form>
      </Layout>
    </>
  );
}

export default contacto;
