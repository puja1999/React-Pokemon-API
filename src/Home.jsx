import React, {  useEffect, useState } from 'react';
import axios from "axios";

const Home = () =>{
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() =>{ // useEffect is used do this after render
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name)
            setMoves(res.data.moves.length);
        }
        getData();
    });

    return(
        <>
        <h1> You choose <span style={{ color: "red" }}span> {num} value </span></h1>
        <h1> I am  <span style={{ color: "red" }}span> {name} </span></h1>
        <h1> I have <span style={{ color: "red" }}span> {moves}  </span></h1>

        <select value={num} onChange={(e) =>{
            setNum(e.target.value);
        }}>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="25">25</option>
        </select>
        </>
    )
}

export default Home;