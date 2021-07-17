import Head from "next/head";

function contacto() {
  return (
    <>
      <Head>
        <title>Edwin Narváez - Contacto</title>
      </Head>
      <h1 className="sm:col-span-8 md:col-span-10 text-4xl font-bold text-center">
        Envíame un email
      </h1>
      <form
        method="post"
        className="sm:col-start-2 sm:col-span-6 md:col-start-3 md:col-span-6 mt-6 border shadow-xl rounded-2xl p-5"
      >
        <div className="grid grid-cols-2 gap-y-4">
          <input
            type="text"
            className="py-3 pl-4 mr-2 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-indigo-400 "
            name="client"
            placeholder="Nombre"
            autoComplete="off"
          />
          <input
            type="text"
            className="py-3 pl-4 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-indigo-400  "
            name="client"
            placeholder="Apellido"
            autoComplete="off"
          />
          <input
            type="email"
            className="py-3 col-span-2 pl-4 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-indigo-400  "
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <textarea
            type="text"
            className="py-3 pl-4 col-span-2 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-indigo-400  "
            name="asunto"
            rows="4"
            cols="50"
            placeholder="Ingresa el asunto a tratar"
            autoComplete="off"
          />
          <input
            type="submit"
            className="py-2 col-span-2 rounded-md bg-indigo-500 text-white"
            value="Contactar"
          />
        </div>
      </form>
    </>
  );
}

export default contacto;
