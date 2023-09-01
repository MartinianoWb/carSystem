// @ts-nocheck
const url = "https://64ef7b6b219b3e2873c48fa2.mockapi.io/partesAuto"



export async function getAllParts() {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getPartById(id) {
    const response = await fetch(`${url}`)
    const data = await response.json()
    const part = data.find((part) => part.id === id)
    return part
}