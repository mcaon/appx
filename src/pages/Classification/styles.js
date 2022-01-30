import styled from 'styled-components/native';

export const LeagueInfo = styled.View`
    justify-content: space-between;
    padding: 20px;
    background: ${({theme}) => theme.palette.textGrey};
`;

export const InfoText = styled.Text`
    padding: 5px;
    font-weight: bold;
`;
