class Game
{
    constructor(name, minPlayers, maxPlayers, aveTimeinMin, tags, image)
    {
        this.name = name;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.time = aveTimeinMin;
        this.tags = tags;
        this.image = image
    }
}
export default Game