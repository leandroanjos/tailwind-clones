import Head from "next/head";

const MenuItem = function ({ label, divider }) {
    return (
        <li className="text-white font-sans font-semibold text-base leading-tight hover:text-green-500">
            { divider ? "|" : label}
        </li>
    )
}

export default function Spotify() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>TailWind Clones - Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full font-sans">
          <div className="flex flex-row bg-black items-center justify-between px-16 py-5">
            <img src="img/spotify-logo-branca-white.png" className="w-25 h-10" />
            <ul className="flex flex-row gap-8">
                  <MenuItem label="Premium" />
                  <MenuItem label="Suporte" />
                  <MenuItem label="Baixar" />
                  <MenuItem divider={true} />
                  <MenuItem label="Inscrever-se" />
                  <MenuItem label="Entrar" />
              </ul>
          </div>
          <div className="flex flex-col items-center bg-blue-800 p-36 text-green-400 gap-20">
              <p className="text-9xl font-black">Escutar muda</p>
              <p className="text-9xl font-black">tudo</p>
              <div className="flex flex-col items-center gap-10">
                  <div>
                <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
                </div>
                <div>
                <button className="rounded-3xl bg-green-400 text-blue-700 uppercase px-8 py-2 top-5">
                    Baixe o Spotify Free
                </button>
                </div>
              </div>
              
          </div>

          
          <div className="flex flex-row bg-black items-baseline justify-between px-16 py-20">
            <img src="img/spotify-logo-branca-white.png" className="w-25 h-10" />
            <div className="flex flex-row gap-20">
                <ul className="flex flex-col gap-6">
                    <li className="text-gray-300 font-sans font-semibold text-base leading-tight">EMPRESA</li>
                    <MenuItem label="Sobre" />
                    <MenuItem label="Empregos"/>
                    <MenuItem label="For the Record"/>
                </ul>
                

                <ul className="flex flex-col gap-6">
                    <li className="text-gray-300 font-sans font-semibold text-base leading-tight">COMUNIDADES</li>
                    <MenuItem label="Para artistas" />
                    <MenuItem label="Desenvolvedores" />
                    <MenuItem label="Publicidade" />
                    <MenuItem label="Investidores" />
                    <MenuItem label="Fornecedores" />
                    <li></li>
                </ul>


                <ul className="flex flex-col gap-6">
                    <li className="text-gray-300 font-sans font-semibold text-base leading-tight">LINKS ÚTEIS</li>
                    <MenuItem label="Suporte"/>
                    <MenuItem label="Player da Web" />
                    <MenuItem label="Aplicativo móvel grátis" />
                </ul>
            </div>
            <div>
                <ul className="flex flex-row gap-2 text-white">
                    <li>Insta</li>
                    <li>Twitter</li>
                    <li>Face</li>
                </ul>
            </div>
          </div>
      </main>
    </div>
  )
}