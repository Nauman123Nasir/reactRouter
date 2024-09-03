import { useParams } from "react-router-dom"

const User = ()=>{
    const {userId} = useParams();
    return (
        <h1>user {userId}</h1>
    )
}
export default User