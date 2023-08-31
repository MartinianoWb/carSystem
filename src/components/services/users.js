// @ts-ignore
const url = "https://64ef7b6b219b3e2873c48fa2.mockapi.io/users"


// @ts-ignore

export async function getUsers(user, password) {
    const response = await fetch(url)
    const data = await response.json()
    // @ts-ignore
    const filter = data.find((user) => {
        if (user.name === user && user.password === password) {
            return user
        }
    })
    return filter
}

