import styled from 'styled-components'

export const Title = styled.h1`
    max-width: ${({ mw }) => mw || 320}px;
    font-weight: bold;
    text-align: ${({ align }) => align || 'center'};
    font-size: ${({ ft }) => ft || 24}px;
    line-height: ${({ lh }) => lh || 22}px;
    margin-left: ${({ ml }) => ml || 0}px;
    color: black;

    @media (max-width: 420px) {
        max-width: 300px;
        font-size: 18px;
    }
`

export const Subtitle = styled.h3`
    max-width: ${({ mw }) => mw || 320}px;
    text-align: ${({ align }) => align || 'center'};
    font-size: ${({ ft }) => ft || 16}px;
    font-weight: 500;
    margin: 0px;
    padding: 0px;
    margin-bottom: ${({ mb }) => mb || 38}px;


    @media (max-width: 420px) {
        max-width: 300px;
        font-size: 12px;
        margin-bottom: ${({ mb }) => mb || 14}px;
    }
`

export const SmallText = styled.span`
    text-align: ${({ align }) => align || 'center'};
    font-size: ${({ ft }) => ft || 16}px;
    font-weight: ${({ fw }) => fw || 500};
    margin-bottom: ${({ mb }) => mb || 0}px;
`
