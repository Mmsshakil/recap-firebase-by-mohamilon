import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);

    return (
        <div>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;