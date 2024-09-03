// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const githubData = useLoaderData();
    // const [githubData, setGitHubData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/nauman123nasir').then(resp => resp.json()).then(resp => setGitHubData(resp) )
    // }, []);
  return (
    
      <div className="text-center m-4 p-4 text-3xl text-white bg-gray-500">
        Github Followers {githubData.followers}
        <img src={githubData.avatar_url} alt="" />
      </div>
  )
}

export default Github;

export const getGitHubDataLoader = async () =>{
    const response  = await fetch('https://api.github.com/users/nauman123nasir');
    return response.json();
}