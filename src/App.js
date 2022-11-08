import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getData} from "./features/dataThunk";


const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
}
 
export default App;