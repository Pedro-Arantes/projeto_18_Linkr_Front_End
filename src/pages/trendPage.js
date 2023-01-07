import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "../components/homePage/homeHeader";
import Timeline from "../components/homePage/timeline";
import TrendsBox from "../components/homePage/trendsBox";
import { useParams } from 'react-router-dom';

export default function TrendPage(){
    const {hashtag} = useParams();
    console.log(hashtag)
    
    return (
        <>
            <HomeHeader/>
            <Content>
                <Timeline/>
                <TrendsBox/>
            </Content>
        </>
    )
}

const Content = styled.div`
    min-height: 100vh;
    background: #333333;
    display:flex;   
    justify-content:center;
`