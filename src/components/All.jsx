import axios from "axios";
import React, { useEffect, useState } from "react";

export const All = () => {
  const [fetch, setFetch] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:all?_page=${page}&_limit=${limit}`
      )
      .then((res) => setFetch(res.data.items));
  }, [page]);

  //   const handelPageChanging = (page) => setPage(page)

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
              <div>⭐{e.stargazers_count} Stars</div>
              <div>
                {" "}
                <img src="icons8-branch-arrow-16.png" alt="" /> {e.forks_count}{" "}
                Fork counts
              </div>
            </div>
          </div>
        ))}
      <div>
        {/* <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button onClick={() => setPage(page + 1)}>NEXT</button> */}

        <button
          onClick={() => {
            if (page == 1) {
              setPage(page);
            } else {
              setPage(page - 1);
            }
          }}
          disabled={page == 1}
        //   colorScheme="blue"
        >
          Prev
        </button>

        <button
          onClick={() => {
            let totalpage = fetch.length + 1;
            if (page > totalpage) {
              return;
            } else {
              setPage(page + 1);
            }
          }}
          disabled={page > fetch.length + 1}
        //   colorScheme="blue"
        >
          Next
        </button>
      </div>
    </div>
  );
};
