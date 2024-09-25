import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 15px 30px;
  background-color: #c0392b; /* Cor de fundo vermelho */
  color: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  margin: 20px auto; /* Centraliza horizontalmente */
  width: 30%; /* Aumenta a largura para 30% */
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    width: 20%; /* Ajusta a largura para 80% em telas menores */
  }
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Mais espaço entre os itens */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px; /* Menos espaço em telas menores */
  }
`;

const MenuItem = styled.li`
  margin: 0;
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 12px 20px;
  border-radius: 5px;
  display: inline-block; /* Ajusta o display para ocupar o espaço certo */
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Cor de hover mais sutil */
    color: #fff;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

class BarraMenu extends React.Component {
  render() {
    return (
      <Nav>
        <MenuList>
          <MenuItem>
            <MenuLink href="/">HOME</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/CadastroCarro">CADASTRO</MenuLink>
          </MenuItem>
        </MenuList>
      </Nav>
    );
  }
}

export default BarraMenu;
