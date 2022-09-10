import { HeaderContainer, RocketImage, Title, TitleContainer } from "./styled"
import rocket from "./../../assets/rocket.svg"


export const Header = () => {

    return (
        <HeaderContainer>
            <TitleContainer>
                <RocketImage src={rocket} />
                <Title>to</Title>
                <Title purple>do</Title>
            </TitleContainer>
        </HeaderContainer>
    )
}