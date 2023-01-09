import CharacterList from "./components/CharacterList";

const App = () => {
    return (
        <div className="bg-dark text-white pb-5">
            <h1 className=" text-center display-1 py-5">Rick And Morty</h1>
            <CharacterList />
        </div>
    );
};

export default App;
