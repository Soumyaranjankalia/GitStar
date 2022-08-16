import React, { useEffect, useState } from 'react'
import axios from "axios";

export const Css = () => {
    const [fetch, setFetch] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
      axios
        .get(
          "https://api.github.com/search/repositories?q=stars:%3E1+language:css"
        )
        .then((res) => setFetch(res.data.items));
    }, []);
  
    return (
        
        <>
    
        <div id="container">
          {fetch
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map((e) => (
              <div className="box" key={e.id} > <a href={e.owner.html_url}>
                <img id="avatar" src={e.owner.avatar_url} alt="" />
                <h3>{e.name}</h3>
                <h5>{e.language}</h5>
                <div id="span">
                  <div>⭐{e.stargazers_count} Stars</div>
                  <div>
                    {" "}
                    <img src="icons8-branch-arrow-16.png" alt="" /> {e.forks_count}{" "}
                    Fork counts
                  </div>
                </div>
                </a>
              </div>
    
            ))}
          <div>
            {/* <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              PREV
            </button>
            <button onClick={() => setPage(page + 1)}>NEXT</button> */}
    
            <button onClick={() => {setPage(page-1)}} disabled={page == 1}>
              Prev
            </button>
    
            <button onClick={() => {setPage(page+1)}} disabled={page > fetch.length + 1}>
              Next
            </button>
          </div>
        </div>
        </>
      );
}
