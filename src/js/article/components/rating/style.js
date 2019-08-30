import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 0;
  border: 1px solid #dedede;
  border-radius: 4px;
  display: table;
`;

export const Title = styled.div`
  font-size: 12px;
  background-color: #dedede;
  padding: 0 10px;
  text-align: center;
`;

export const PointBox = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 0 10px;
`;

export const Point = styled.div`
  color: ${({ isActive }) => (isActive ? '#f1c40f' : '#bdc3c7')};
  font-size: 30px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
`;
