import React, { useEffect, useState } from 'react'
import axios from "axios";

export const JavaScripts = () => {
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
      axios
        .get(
          "https://api.github.com/search/repositories?q=stars:%3E1+language:javascript"
        )
        .then((res) => setFetch(res.data.items));
    }, []);
  
    return (
        <div id="container">
        {fetch
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((e) => (
            <div className="box">
                <img id="avatar" src={e.owner.avatar_url} alt="" />
              <h3>{e.name}</h3>
              <h5>{e.language}</h5>
              <div id="span">
                <div>⭐{e.stargazers_count}  Stars</div>
                <div> <img src="icons8-branch-arrow-16.png" alt="" /> {e.forks_count} Fork counts</div>
              </div>
            </div>
          ))}
      </div>
    );
}
