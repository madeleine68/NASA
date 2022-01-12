import styled, { keyframes } from "styled-components";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { RiFileCopyLine } from 'react-icons/ri';
import { bounce } from 'react-animations';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const ItemStyled = styled.div`
display: flex;
flex-direction: column;
margin: 3vw auto;
padding: 3vw;
width: 75%;
background-color: #F3F1F5;
border: solid 3px rgb(205, 199, 199);
border-radius:2%;
transform: translateZ(0);
transition: transform 0.25s ease-out;
:hover {
    transform: scale(1.03);`

const HeadStyled = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
`    

const Images = styled.img`
width:100%;
height: 500px;
border-radius:2%;
`
const Button = styled.a`
display: flex;
justify-content: space-evenly;
align-items: center;
border-radius: 5px;
padding: 0.5vw;
margin: 0.5vw 1vw;
width: 10vw;
background: #F0D9FF;
color: #7F7C82;
border: 2px solid #BFA2DB;
cursor: pointer;
font-size: 2vw;
`
const Bounce = styled.div`
animation: 2s ${keyframes`${bounce}`} infinite;
`
const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const CopyStyle = styled.div`
cursor: grab;
`

export default function Item ({ item }) {
    const [like, setLike] = useState(false);
    
    const handleLike = () => {
        setLike(!like);
    }
    const handleShare = () => {
        navigator.clipboard.writeText(item.url)
        toast("Image url copied to clipboard!");
    }
      
    return (
        <ItemStyled>
            <>
                <HeadStyled>
                    <h1>{item.title}</h1> 
                    <p>{item.date}</p>
                </HeadStyled> 
                <Images src={item.url} alt={item.title}/>
                <p>{item.explanation}</p>
                <Footer>
                    <Button onClick={handleLike}>
                            {like && <FaHeart />}
                        <Bounce> 
                            {!like && <FaRegHeart />}
                        </Bounce>
                    </Button>
                    <CopyStyle>
                        <RiFileCopyLine onClick={handleShare} size={32}/> 
                    </CopyStyle>
                </Footer>   
            </>
            
        </ItemStyled>
    )
}