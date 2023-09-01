// @ts-ignore
const url = "https://64ef7b6b219b3e2873c48fa2.mockapi.io/users"


// @ts-ignore

export async function getUsers(user, password) {
    console.log(user, password)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    // @ts-ignore
    const userValidate = data.find((item) => item.name === user && item.password === password)
    return userValidate
}

