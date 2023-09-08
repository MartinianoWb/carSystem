// @ts-nocheck
const url = "https://64ef7b6b219b3e2873c48fa2.mockapi.io/users"



export async function getUsers(user, password) {
    console.log(user, password)
    const response = await fetch(url)
    try {
        const data = await response.json()
        const userValidate = data.find((item) => item.name === user && item.password === password)
        return userValidate
    } catch (error) {
        return (error)
    }
}

export async function createUser(user) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })

    try {
        const data = await response.json()
        return data
    } catch (error) {
        return (error)
    }
}


