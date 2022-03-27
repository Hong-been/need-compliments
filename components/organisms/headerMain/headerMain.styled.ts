import styled from "styled-components";
const ICON_SIZE = 28;

export const Header = styled.header`
width: 100%;
height: 70px;
display: flex;
align-items: center;
padding:10px 0 0 15px;
background-color: ${props => props.theme.colors.black};
position: sticky; 
top:0;
z-index: 1;
`;

export const NavPart = styled.div`
align-items: center;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
  > *{
    margin-left: 10px;
  }
`;

export const More = styled.div`
@media screen and (max-width: ${props => props.theme.media.md}px){
  visibility: hidden;
}
`;

export const NavItem = styled.a`
text-decoration: none;
font-size: 1rem;
padding: 10px 20px;
border-radius: 3px;
color: ${props => props.theme.colors["gray-200"]};
cursor: pointer;
&:hover, &:focus{
  color: ${props => props.theme.colors.goals.mediunslateblue};
}
`;

export const Icon = styled.button`
  width:${ICON_SIZE}px;
  height:${ICON_SIZE}px;
  padding:2px;
  cursor: pointer;
  &:hover, &:focus{
  color: ${props => props.theme.colors.goals.mediunslateblue};
}
`;

export const MenuIcon = styled(Icon)`
margin-right: 10px;
`;
