import { useNavigate, Link } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate(); // Navigate hooks

    const goBack = () => {
        navigate("/a"); // redirect to home page
    }

    return (<div>
        <div>This content is not availabe at the moment</div>
        <button onClick={goBack}>Go Back</button>
        <hr />
        {/* <Link to="/">Go Back</Link> */}
    </div>);
}

export default PageNotFound;