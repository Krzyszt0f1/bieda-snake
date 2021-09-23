const loadHighScore = () => {
    try {
        const serializedHighScore = window.sessionStorage.getItem('highScore')
        if (serializedHighScore === null) {
            return undefined
        }
        return JSON.parse(serializedHighScore)
    } catch (err) {
        console.error(err)
        return undefined
    }
}

const saveHighScore = (score) => {
    try {
        const serializedHighScore = JSON.stringify(score)
        window.sessionStorage.setItem('highScore', serializedHighScore)
    } catch (err) {
        console.error(err)
        return undefined
    }
}