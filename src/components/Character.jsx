const CharacterComponent = ({ character }) => {
    return (
        <div className="text-center p-3 border-5">
            <h3>{character.name}</h3>
            <img className="img-fluid rounded-pill mb-1" src={character.image} alt="" />
            <p >{character.origin.name}</p>
        </div>
    );
};

export default CharacterComponent;
