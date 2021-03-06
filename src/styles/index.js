import styled from 'styled-components/native';

export const LogoView = styled.View`
    padding: 10px;
`;

export const PageTitle = styled.Text`
    color: ${({theme}) => theme.palette.textSecondary};
    font-size: 25px;
    font-family: NeogreyMedium;
`;

export const TopBar = styled.View`
    flex: 1;
    background: ${({theme}) => theme.palette.backGround};
    elevation: 4;
`;

export const ButtonPrimary = styled.View`
    padding: 10px;
    align-items: center;
    border-radius: 30px;
    width: 100%;
    elevation: 3;
    background: ${({theme}) => theme.palette.logo};
`;

export const ButtonSecondary = styled.View`
    margin-top: 10px;
    padding: 10px;
    padding-left: 20px;
    align-items: center;
    border-radius: 30px;
    width: 100%;
    elevation: 3;
    background: ${({theme}) => theme.palette.backGroundSecondary};
    color: #FFF;
    max-height: 50px;
`;

export const ButtonTextPrimary = styled.Text`
    font-family: Roboto;
    color: ${({theme}) => theme.palette.text};
    font-size: 20px;
`;

export const ButtonTextSecondary = styled.Text`
    font-family: Roboto;
    color: ${({theme}) => theme.palette.textSecondary};
    background: ${({theme}) => theme.palette.backGroundSecondary};
    font-size: 20px;
    margin-left: 15px
`;

export const Container = styled.View`
    flex-direction: row;
    background: ${({theme}) => theme.palette.backGround};
    margin-bottom: 10px;
`;

export const AppXScroll = styled.ScrollView`
    background: ${({theme}) => theme.palette.backGround};
    height: 100%;
`;

export const ScrollPage = styled.View`
    flex: 2;
`;

export const BottomBar = styled.View`
    flex: 1;
    background: ${({theme}) => theme.palette.backGround};
`;

export const Footer = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex: 1;
    padding: 15px 20px 15px 20px;
`;

export const TextContainer = styled.View`
    padding: 20px;
`;

export const TopInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px
`;

export const AppXInnerScrollView = styled.View`
    margin-top: 5px;
`;

export const TeamButtonsScroll = styled.View`
    flex: 9;
    flex-direction: row;
    padding: 10px;
    background: ${({theme}) => theme.palette.backGround};
    justify-content: center;
`;

export const ButtonView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    elevation: 4;
    background: ${({theme}) => theme.palette.textGrey};
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 2px;
    height: 70px;
    border-radius: 20px;
`;

export const ButtonTouchable = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 2px;
    height: 70px;
    width: 100px;
    border-radius: 20px;
`;

export const EventDescriptionView = styled.View`
    flex: 4;
`;

export const EventTitleLabel = styled.Text`
    color: ${({theme}) => theme.palette.textSecondary};
    font-weight: bold;
    font-size: 17px;
`;

export const ButtonTextView = styled.View`
    flex-direction: row;
    justify-content: center;
`;
