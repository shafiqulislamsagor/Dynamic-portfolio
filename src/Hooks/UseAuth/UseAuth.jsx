import { useContext } from "react";
import { ContextApi } from "../../Context/ContextApi";

const UseAuth = () => {
    const auth = useContext(ContextApi)
    return auth
};

export default UseAuth;