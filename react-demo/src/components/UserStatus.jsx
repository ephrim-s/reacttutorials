const UserStatus = ({LoggedIn, isAdmin}) => {
    if (LoggedIn && isAdmin) {
        return <h1>Welcome Admin!</h1>
    } else if (LoggedIn) {
    return <h1>Welcome User!</h1>
    } else {
        return <h1>Please Log In</h1>
    }
}

export default UserStatus;