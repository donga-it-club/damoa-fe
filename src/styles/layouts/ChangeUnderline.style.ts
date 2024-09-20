import styled from 'styled-components';

export const PageButtonAll = styled.button`
  display: inline-block;
  width: 100px;
  padding: 10px;
  border: none;
  background: 'white';

  text-align: center;
  font-size: 17px;

  cursor: pointer;
  font-weight: ${props => (props.title === '전체' ? 700 : '')};
  color: ${props => (props.title === '전체' ? 'black' : 'rgba(0, 0, 0, 0.3)')};
  border-bottom: ${props => (props.title === '전체' ? '2px solid black' : '')};
`;

export const PageButtonIng = styled.button`
  display: inline-block;
  width: 100px;
  padding: 10px;
  border: none;
  background: 'white';

  text-align: center;
  font-size: 17px;

  cursor: pointer;
  font-weight: ${props => (props.title === '모집중' ? 700 : '')};
  color: ${props => (props.title === '모집중' ? 'black' : 'rgba(0, 0, 0, 0.3)')};
  border-bottom: ${props => (props.title === '모집중' ? '2px solid black' : '')};
`;

export const PageButtonDone = styled.button`
  display: inline-block;
  width: 100px;
  padding: 10px;
  border: none;
  background: 'white';

  text-align: center;
  font-size: 17px;

  cursor: pointer;
  font-weight: ${props => (props.title === '모집 완료' ? 700 : '')};
  color: ${props => (props.title === '모집 완료' ? 'black' : 'rgba(0, 0, 0, 0.3)')};
  border-bottom: ${props => (props.title === '모집 완료' ? '2px solid black' : '')};
`;
