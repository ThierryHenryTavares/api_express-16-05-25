export let lista = []

export const setUserToList = (name) => {
    let id = lista.length + 1
    lista.push({id, name})
}

