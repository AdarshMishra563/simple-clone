import { useParams } from "react-router-dom";

function User(){
    const {userid} =useParams()
    return(
        <>
        <div className="bg-pink-500 text-2xl p-4 w-screen">User {userid}</div>
       </>
    )
}
export default User