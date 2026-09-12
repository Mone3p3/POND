
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>
                Página No Encontrada
            </h1>
            <Link to={"/"}>
                <button>
                    Volver
                </button>
            </Link>
        </div>
    )
}

export default NotFoundPage;