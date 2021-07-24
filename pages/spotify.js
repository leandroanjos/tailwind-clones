import Head from "next/head";
import { Icon } from '@iconify/react'
import facebookWithCircle from '@iconify-icons/entypo-social/facebook-with-circle'
import twitterWithCircle from '@iconify-icons/entypo-social/twitter-with-circle'
import instagramWithCircle from '@iconify-icons/entypo-social/instagram-with-circle'




const TextLabel = function ({ label }) {
    return (
        <span className="text-white font-sans font-semibold text-base leading-tight">
            { label }
        </span>
    )
}

const TextLink = function ({ label }) {
    return (
        <TextLabel label={
            <span className="hover:text-green-500">
                {label}
            </span>
        } />
    )
}

const TextHeader = function ({ label }) {
    return (
        <TextLabel label={
            <span className="text-gray-300">
                {label}
            </span>
        } />
    )
}

const SocialIcon = function ({ icon }) {
    return (
        <Icon icon={icon}  className="w-12 h-12 fill-current text-gray-600 hover:text-green-400"/>
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
            <img src="images/spotify/spotify-logo-branca-white.png" className="w-25 h-10" />
            <div className="invisible gap-8 md:visible md:flex md:flex-row">
                <TextLink label="Premium" />
                <TextLink label="Suporte" />
                <TextLink label="Baixar" />
                <TextLabel label="|" />
                <TextLink label="Inscrever-se" />
                <TextLink label="Entrar" />
            </div>
          </div>
          <div className="flex flex-col items-center bg-blue-800 p-36 text-green-400 gap-20">
              <p className="text-9xl font-black">Escutar muda</p>
              <p className="text-9xl font-black">tudo</p>
              <div className="flex flex-col items-center gap-10">
                  <div>
                <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
                </div>
                <div>
                <button className="rounded-3xl bg-green-400 text-blue-700 uppercase px-8 py-2 top-5 hover:scale-110">
                    Baixe o Spotify Free
                </button>
                </div>
              </div>
              
          </div>

          
          <div className="flex flex-col bg-black items-baseline justify-between px-16 py-20 gap-10 md:flex-row">
            <img src="images/spotify/spotify-logo-branca-white.png" className="w-25 h-10" />
            <div className="flex flex-col gap-20 md:flex-row">
                <div className="flex flex-col gap-6">
                    <TextHeader label="EMPRESA" />
                    <TextLink label="Sobre" />
                    <TextLink label="Empregos"/>
                    <TextLink label="For the Record"/>
                </div>
                

                <div className="flex flex-col gap-6">
                    <TextHeader label="COMUNIDADES" />
                    <TextLink label="Para artistas" />
                    <TextLink label="Desenvolvedores" />
                    <TextLink label="Publicidade" />
                    <TextLink label="Investidores" />
                    <TextLink label="Fornecedores" />
                    <li></li>
                </div>


                <div className="flex flex-col gap-6">
                    <TextHeader label="LINKS ÚTEIS" />
                    <TextLink label="Suporte"/>
                    <TextLink label="Player da Web" />
                    <TextLink label="Aplicativo móvel grátis" />
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-2">
                    <SocialIcon icon={twitterWithCircle} />
                    <SocialIcon icon={instagramWithCircle} />
                    <SocialIcon icon={facebookWithCircle}/>
                </div>
            </div>
          </div>
      </main>
    </div>
  )
}