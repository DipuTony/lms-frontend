import { useEffect } from "react"
import { useState } from "react"

export default function AuthIndex() {

    const [login, setLogin] = useState()

    let token = localStorage.getItem("token")
    let userType = localStorage.getItem("UserType")
    let loginStatus = localStorage.getItem("LoginStatus")

    let user;

    // useEffect(() => {

        if (userType === "Student") {
            user = 1;
        } else if (userType === "SuperAdmin") {
            user = 9;
        } else {
            user = 0;
        }
    // }, [userType])


    if (loginStatus == "true") {

        let AuthIndex1 = { isLogedIn: true, userIs: user, bearerHeader: token }
        return AuthIndex1;
    } else {
        let AuthIndex1 = { isLogedIn: false, userIs: false, bearerHeader: false }
        return AuthIndex1;
    }

}