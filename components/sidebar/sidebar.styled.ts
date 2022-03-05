import styled from "styled-components";

export const Header = styled.div`
  justify-content: flex-end;
`;

export const SettingIcon = styled.div`
  width:28px;
  height:28px;
  padding:2px;
  margin: 10px;
  cursor: pointer;
`;

export const MenuOverlay = styled.div`
  z-index: 10;
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.5);
  transition: all 0.2s ease-in-out;
  
  &.show{
    opacity: 1;
    visibility: visible;
  }
  &.hidden{
    opacity: 0;
    visibility: hidden;
  }
`;

export const MenuContents = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top:0;
  left:100%;
  width: 280px;
  height:100%;
  background-color: ${props => props.theme.colors["gray-800"]};
  transition: all 0.2s ease-in-out;
  
  &.show{
    visibility: visible;
    transform:translateX(-100%);
  }
  &.hidden{
    visibility: hidden;
    transform: translateX(0%);
  }
`;

export const Profile = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Goals = styled.div`
  flex-direction: column;
  padding: 0 20px;
`;

export const GoalsTitle = styled.div`
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  padding: 20px 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
`;

export const GoalsContents = styled.ul`
  > * {
    margin-bottom: 10px;
  }
`;

export const ArrowIcon=styled.div`
  width:20px;
  height:20px;
  cursor: pointer;
`;

export const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 10px;
`;

export const Email = styled.div`
  font-size: 0.8rem;
  margin-bottom: 20px;
`;

export const FriendList = styled.div`
  margin: 20px 0;
  cursor: pointer;
`;

export const Friend = styled.div`
  font-size: 1rem;
  margin-right: 10px;
`;