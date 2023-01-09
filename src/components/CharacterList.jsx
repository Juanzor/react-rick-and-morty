import Character from "./Character";
import { useState, useEffect } from "react";
import NavPage from "./NavPage";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?page=${page}`
            );
            const data = await response.json();
            setCharacters(data.results);
            setLoading(false);
        };

        fetchData();
    }, [page]);

    return (
        <div className="container ">
            <div className="d-flex justify-content-between">
                <NavPage page={page} setPage={setPage} />
                <h5>Pagina : {page}</h5>
                <NavPage page={page} setPage={setPage} next={true} />
            </div>

            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <div className="row">
                    {characters.map((character) => (
                        <div className="col-md-4" key={character.id}>
                            <Character character={character} />
                        </div>
                    ))}
                </div>
            )}
            <div className="d-flex justify-content-between">
                <NavPage page={page} setPage={setPage} />
                <NavPage page={page} setPage={setPage} next={true} />
            </div>
        </div>
    );
};

export default CharacterList;
