import styled from 'styled-components';

export const Touchable = styled.span`
    cursor: pointer;
    margin: 0 2px;
    color: #5CB85C;

    &:hover {
        color: #3d8b3d;
        text-decoration: underline;
    }
`;

export const ButtonBox = styled.div`
    display: inline-block;
    margin: 0 2px;
`;
