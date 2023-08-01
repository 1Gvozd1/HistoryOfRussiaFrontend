import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const useNavbar = (navbar) => {
    const { setNavbarContent } = useOutletContext();

    useEffect(() => {
        setNavbarContent(navbar);
    }, [setNavbarContent, navbar]);
};
