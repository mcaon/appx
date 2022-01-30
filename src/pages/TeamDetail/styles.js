import styled from 'styled-components/native';

export const TeamInfoView = styled.View`
    elevation: 5;
    background: ${({theme}) => theme.palette.textGrey};
    flex: 1;
    padding: 10px;
`;

export const LogoView = styled.View`
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    background: ${({theme}) => theme.palette.textGrey};
`;

export const TopInfoTeamDetail = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding-right: 20px
`;

export const TextContainer = styled.View`
    padding: 20px;
`;

export const IconContainer = styled.View`
    padding: 20px 0px 0px 20px;
`;

export const TeamDetailsView = styled.View`
    justify-content: center;
    flex-direction: row;
`;

export const TeamName = styled.Text`
    font-size: 30px;
    font-weight: bold;
    padding: 5px;
`;

export const TeamInfoText = styled.Text`
    font-size: 20px;
`;

export const VenueDetaisView = styled.View`
    margin-top: 5px;
    padding: 20px;
`;

export const VenueLabel = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;


