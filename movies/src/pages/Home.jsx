// Componente Home
// Importando o  useState e useEffect, pq iremos utilizar
import { useState, useEffect } from "react";

// Criando uma constante que recebe o valor da url da API
const moviesURL = import.meta.env.VITE_API;
// Criando uma constante que recebe o valor da Key que é necessecaria para a utilização da API
const apiKEY = import.meta.env.VITE_API_KEY;

const Home = ()=> {
    // Criando os estados
    const [topMovies, setTopMovies] = useState([])

    // Função assícrona para fazer o fetch na API
    const getTopRatedMovies = async url => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    };

    // Usando o useEffect para ser chamado apenas com a página renderizar
    useEffect( ()=> {

        // Colocando a url da API dentro de uma variável para ser passada como uma "props" dentro da função responsável de fazer o fecth
        const topRateUrl = `${moviesURL}top_rated?${apiKEY}`

        getTopRatedMovies(topRateUrl)
    },[])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
            {topMovies.length > 0 && topMovies.map( movie => <p>{movie.title}</p>)}
            </div>

        </div>
    );
}

export default Home;