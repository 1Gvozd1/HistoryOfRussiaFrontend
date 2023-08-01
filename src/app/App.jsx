import AuthService from "api/service/AuthService";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./Hooks/Context";

import { AppRoutes } from "./Routes/AppRoutes";
import { GlobalTheme } from "./Theme/GlobalTheme";

function App() {
    const [user, setUser] = useState(null);

    const verification = async () => {
        try {
            const { data } = await AuthService.verification();

            if (
                data?.roles[0] == "USER" &&
                localStorage.getItem("moderator") == "true"
            ) {
                data.roles[0] = "MODERATOR";
            }
            console.log(data);
            setUser(data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    useEffect(() => {
        verification();
    }, []);

    return (
        <Context.Provider
            value={{
                user,
                setUser,
            }}
        >
            <BrowserRouter>
                <GlobalTheme>
                    <AppRoutes />
                </GlobalTheme>
            </BrowserRouter>
        </Context.Provider>
    );
}
export default App;
