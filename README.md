# ggj2022
A vanilla Javascript game I worked on during and after Global Game Jam 2022. I used Three.js for 3D graphics and Webpack for bundling everything.

This project (although unfinished) can give you a shallow, yet quick glimpse on my coding style and git messaging style.

Please have in mind that this was my first time coding a game without using any engines, and I have basically no knowledge in coding games.

Cool files to take a look at:
- src/three.js: The main file. Responsible for importing classes and initialize the code. Since a Global Game Jam game is supposed to be finished within 48 hours, it is loooking quite messy as I had little time to organize everything. Plus, the game was supposed to have a single level with entities generating randomly along the map.
- src/interfaces/controls.js: Adds listeners to keyboard actions.
- src/models/*: Every ES6 class used in the game.
|-- Have you noticed how many of the functions and methods appear to have less than 20 lines in size? I was trying to get my game in a clean code category within the Global Game Jam repository, and one of the requirements was functions and methods SHOULDN'T be longer than 20 lines (or something like that).
|-- In order to attend to that requirement, I was forced to write code in a way I don't like much, such as using inline IFs.
|-- I don't like using inline IFs by the way. :(

Even though it is playable, I wouldn't say it is a pleasant experience since there isn't much to play with.

The idea for this project was based on another game* me and my friends produced back in 2020 for Global Game Jam 2020 @ PUC-PR, Brazil.
*Slippery Surprise https://globalgamejam.org/2020/games/slippery-surprise-6

Basically it is a local 2-player game where both players have to collect cubes of different colors to complete their unfinished buildings. If there is a collision between 2 players, a combat bar appears (I used HTML and CSS for the interface btw), and whoever smashes a key quickier than the enemy wins. By losing, you drop the cube you were carrying, if there was any at all, and you get a "knocked out" status that prevents you from moving for a given time.

Some code reviewing was performed after the Game Jam ended, but almost no functionalities were added as I ran out of time and motivation to keep developing this game after the Jam was over.
