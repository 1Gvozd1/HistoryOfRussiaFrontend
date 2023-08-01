import { useNavbar } from "./Navbar/useNavbar";

const PageWrapper = ({ main, navbar }) => {
    useNavbar(navbar);
    return main;
};

export default PageWrapper;
