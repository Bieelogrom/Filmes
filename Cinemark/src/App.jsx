import { HeaderWrapper, TituloSite, OpcaoSite, DivDireita, ListaFilmes, CapaFilme } from './Estilosos'
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from 'react';

function App() {
  const [filme, setFilme] = useState([])
  const [busca, setBusca] = useState("Brasil")

  
  function fazerBusca(){
    setBusca(prompt("Digite o nome do filme : "))
  }

  useEffect(() => {
    const fetchMovie = async () => {
      const URL = `https://www.omdbapi.com/?s=${busca}&apikey=6a84e2f3`;
      const response = await fetch(URL)
      const finaldata = await response.json()
      // console.log(finaldata.Search)
      setFilme(finaldata.Search)
    }
    fetchMovie()
  }, [busca])

  const listagem = filme.map(film => <CapaFilme capa={film.Poster}></CapaFilme>)


  return (
    <>
      <HeaderWrapper>
        <TituloSite>CINEMARK<span>TM</span></TituloSite>
        <DivDireita onClick={fazerBusca}>
          <IoSearch size={22} color='white' />
          <OpcaoSite>Busca</OpcaoSite>
        </DivDireita>
      </HeaderWrapper>
      <ListaFilmes>
        {listagem}
      </ListaFilmes>
    </>

  )
}


export default App;