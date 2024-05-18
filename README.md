# Number puzzle

Det här är ett nummerpussel som är byggt med React och för styling har jag använt module CSS.

Det tog ungefär 11 timmar att göra. Jag började med att rendera ut rader och kolumner enligt de angivna talen från `puzzleConfig` filen och jag valde att spara brickorna i en 2D array.

Jag hittade en bra slumpningsmetod som heter [`Fisher–Yates Shuffle`](https://bost.ocks.org/mike/shuffle/). Vad den gör är att istället för att ta en slumpmässig bricka från en array och lägga till i en ny array, så loopar man igenom arrayen man redan har och väljer en slumpmässig bricka. Sedan byter man den valda brickan med en bricka längst bak i arrayen som inte redan har blivit flyttad längst bak. Dock, för att detta skulle fungera med min 2D array, behövde jag först platta till arrayen och sedan formatera om den igen till en 2D array efter slumpningen.

Det jag körde fast på ett tag var att flytta brickorna när man trycker på dem. När man trycker på en bricka börjar koden med att först kolla vilken rad och kolumn den tomma rutan är på, och med det kan man jämföra rad och kolumnindex mellan var man tryckte och den tomma rutan för att se om det går att flytta någon bricka. Om det går, så kollar man om man är före eller efter den tomma rutan för att veta åt vilket håll man ska flytta brickorna. Från början hade jag ett positionsnummer i brickans objekt som jag ändrade på och sedan sorterade raden med positionsnumret. Problemet var att det blev mycket rörig kod och väldigt svårt att göra för brickorna i en kolumn. Efter ett tag kom jag på en mycket bättre lösning som var lättare att förstå och innebar mindre kod. Jag gör helt enkelt liknande som vid slumpningen, jag byter plats på den tomma rutan och brickan som är bredvid den och fortsätter så tills jag har bytt med den sista brickan som är den användaren har tryckt på. Den här delen av koden är självklart den del jag tycker om mest :)

## Installation

```bash
git clone https://github.com/WilliamDavidson-02/n-puzzle.git

cd n-puzzle

npm install

npm run dev
```

## Bygg

```bash
npm run build
```
