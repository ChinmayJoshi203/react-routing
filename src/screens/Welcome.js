import { Fragment } from "react"
import { Route } from "react-router-dom";

const Welcome=()=>{
    return(
            <div>
                <h2>Welcome</h2>
                <Route path='/welcome/new-user'>
                    <h1>Welcome new user</h1>
                </Route>
            </div>
    )
}

export default Welcome;