import Item from "./Item";
import { Grid } from 'react-loader-spinner';
import styled from "styled-components";

const GridStyle = styled.div`
position: absolute;
top: 50%;
left: 50%;
`
export default function ListItem ({ data, isLoading }) {
    return  isLoading ? (
        <GridStyle>
            <Grid type="Grid" color="#00BFFF"/>
        </GridStyle> 
        ) : (
            <div>
                {data && data.map((item, id) => (
                    <Item key={id} item={item}/>
                
                ))}
            </div>
    )
}


