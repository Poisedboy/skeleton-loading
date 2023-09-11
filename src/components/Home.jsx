import { useEffect, useState } from "react"
import { UserCard } from "./UserCard"
import { CardSkeleton } from "./CardSkeleton"

export const Home = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => {
            setUsers(users)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <h1 style={{ marginBottom: '35px' }}>DEMOSTRATING SKELETON LOADER</h1>
            <h2 style={{ marginBottom: '35px' }}>USERS</h2>
            <div className="user-container">
                {isLoading && <CardSkeleton cards={8} />}
                {users.map(user => (
                    <UserCard user={user} key={user.id} />
                ))}
            </div>
        </>
    )
}
