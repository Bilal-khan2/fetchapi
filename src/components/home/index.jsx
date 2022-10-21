import { useState,useEffect } from "react";
import Post from "../post";
import axios from "axios";

function Home() {
    const [posts, setPosts]=useState([])
    useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: { q: "Pakistan", freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '3c97ac746bmsh7dccd8a13cb8a63p18bed6jsn1e5ff75525bb',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data.value)
        setPosts(response.data.value)
      }).catch(function (error) {
        console.error(error);
      });
    }, []);

    return (
        <div className="home">
         {
            posts.map((eachPost, i) =>(
              <>
                <Post
                key={i}
                 name={eachPost.provider[0].name}
                     postDes={eachPost.name}
                 postText={eachPost.description} />
              </>
            ))       
         }
        </div>       
    )
}
export default Home;