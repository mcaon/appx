import styled from 'styled-components/native';

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

export const LeagueInfo = styled.View`
    justify-content: space-between;
    padding: 20px;
    background: ${({theme}) => theme.palette.textGrey};
`;

export const InfoText = styled.Text`
    padding: 5px;
    font-weight: bold;
`;
