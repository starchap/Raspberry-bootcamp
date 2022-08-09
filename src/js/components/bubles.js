import styled from "styled-components"
import React from 'react'
import {MdCancel} from 'react-icons/md'

const StyledBuble = styled.div`
    border: 1px solid #eeeeeeee;
    border-radius: 5px;
    width: fit-content;
    padding: 5px 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    margin:2px;
    
    svg {
        padding: 2px 2px 2px 10px;
        transition-duration: .2s;
    }
    &:hover{
        svg{
            transform: scale(1.2);
        }
    }
`

const Bubles = ({children, removable}) =>{
    return <StyledBuble>{children} {removable && <MdCancel/>}</StyledBuble>
}
export default Bubles