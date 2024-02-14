//lib
import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const PaginateStyled = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  li a {
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    text-align: center;
    color: #ffffff;
    background: #2c60f5;
    opacity: 0.45;
    border-radius: 5px;
    cursor: pointer;
  }
  li + li {
    margin: 0 0 0 26px;
  }
  li.selected a {
    opacity: 1;
  }
  li.next {
    display: none;
  }
  li.previous {
    display: none;
  }
`;
