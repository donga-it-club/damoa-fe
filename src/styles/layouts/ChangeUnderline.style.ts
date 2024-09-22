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
  font-weight: ${props => (props.title === 'ALL' ? 700 : '')};
  color: ${props => (props.title === 'ALL' ? 'black' : 'rgba(0, 0, 0, 0.3)')};
  border-bottom: ${props => (props.title === 'ALL' ? '2px solid black' : '')};
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
  font-weight: ${props => (props.title === 'RecruitIng' ? 700 : '')};
  color: ${props => (props.title === 'RecruitIng' ? 'black' : 'rgba(0, 0, 0, 0.3)')};
  border-bottom: ${props => (props.title === 'RecruitIng' ? '2px solid black' : '')};
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
  font-weight: ${props => (props.title === 'RecruitDone' ? 700 : '')};
  color: ${props => (props.title === 'RecruitDone' ? 'black' : 'rgba(0, 0, 0, 0.3)')};
  border-bottom: ${props => (props.title === 'RecruitDone' ? '2px solid black' : '')};
`;
