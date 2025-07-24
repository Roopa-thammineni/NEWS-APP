
import { useState,useEffect } from 'react';
import './login.css'
import React from 'react'
import Card from './Card'
import Login from './Login';


const Newsapp = () => {
    const [search,setSearch]=useState('India');
    const [newsdata, setNewsData] = useState([]);
    const API_KEY= '21f3cdba534d4621856909e4dbd2edf6';

    const logout=()=>{
        localStorage.removeItem('signup')
        window.location.reload()
    }
    const remove=()=>{
        localStorage.clear()
        window.location.reload()
    }
    useEffect(()=>{
        getData()
    },[])
    const userInput=(e)=>{
        setSearch(e.target.value)

    }
    

    const getData=async()=>{
        const response= await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const jsonData= await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);

    }
     const handleInput=(e)=>{
        console.log(e.target.value)
        setSearch(e.target.value)
     }


    return (
        <div>
            <nav>
                <div>
                    <h1>All Around newsAPP</h1>
                </div>
                <ul>
                    <a>On time news delevery</a>
                    <a>All Trendy news available</a>
                </ul>
                <div className='searchBar'>
                    <input onChange={handleInput} value={search} type='text' placeholder='enter topic'></input>
                    <button onClick={getData}>Search</button>
                </div>
                
                    <button onClick={logout} className='logout'>logout</button>
                     
                    <button onClick={remove} className='delete'>delete</button>
                
                
            </nav>
            <div>
                <p className='head'>Stay update with Trendy news</p>
            </div>

            <div className='categoryBtn'>
                <button onClick={userInput} value='Sports'>Sports</button>
                <button onClick={userInput} value='Politics'>Politics</button>
                <button onClick={userInput} value='Entertainment'>Entertainment</button>
                <button onClick={userInput} value='Health'>Health</button>
                <button onClick={userInput} value='Fitness'>Fitness</button>

            </div>
            <div>
                 {
                    newsdata? <Card data={newsdata}></Card>:null
                 }
            </div>
        </div>
    )
}

export default Newsapp