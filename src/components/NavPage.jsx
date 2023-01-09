const NavPage = ({ page, setPage, next }) => {
    return (
        <header className="d-flex justify-content-between alig-items-center">
            <button
                className="btn btn-primary btn-sm"
                onClick={() => (next ? setPage(++page) : setPage(page - 1))}
            >
                {next ? "Siguiente" : "Atras"}
            </button>
        </header>
    );
};

export default NavPage;
