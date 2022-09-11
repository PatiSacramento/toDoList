import { HeaderContainer } from "./styled"
import rocket from "./../../assets/rocket.svg"


export const Header = () => {

    return (
        <HeaderContainer>
            <img src={rocket} />
            <h1>to</h1>
            <h1 purple>do</h1>
        </HeaderContainer>
    )
}