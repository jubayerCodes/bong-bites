const addToStorage = (id) => {
    const storage = getStorage('favorites')

    const exist = storage.find(i => i === id)

    if (!exist) {
        storage.push(id)

        const stringifiedStorage = JSON.stringify(storage)

        localStorage.setItem('favorites', stringifiedStorage)
    }
}

const getStorage = (key) =>{
    const stringifiedStorage = localStorage.getItem(key)

    const storage = JSON.parse(stringifiedStorage)

    if(storage){
        return storage
    } else{
        return []
    }
} 

export { addToStorage, getStorage }