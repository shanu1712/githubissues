import React from 'react'
import { useState,useEffect } from 'react'
const Issues = () => {
    const [issues,setissues] =useState([])
    const [page,setpage] =useState(1)
    useEffect(()=>{
        fetch("https://api.github.com/repos/facebook/react/issues?state=open&page=' + page")
        .then(response=>response.json()).then(data=>
            setissues(data))
        },[page])

  return (
    <div className='header1' style={{alignItems:"center",textAlign:"center"}}>
      <h1 > Github Issues</h1>
{
    issues.map((ele)=>{
        return (<>

        <li>{`Id is :${ele.id}`}</li>
        <li>{`Repo Url is :${ele.repository_url}`}</li>
        <li>{`Title is :${ele.title}`}</li>
        <li>{`html url is :${ele.html_url}`}</li>
        </>)
    })
}
<div>
        {page > 1 && <button onClick={() => setpage(page - 1)}>Previous Page</button>}
        <button onClick={() => setpage(page + 1)}>Next Page</button>
      </div>
    </div>
  )
}

export default Issues
