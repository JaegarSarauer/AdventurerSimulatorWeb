# AdventurerSimulatorWeb
The WebGL, full project of AdventurerSimulator, Android version.

### Project Structure
The structure of this project is designed to sepeate the game and engine of the project into two easily seperate-able projects for future use by other developers, or myself.

The body following will explain the project structure of the engine and the game.

##### Engine
Begins in the directory src/engine/
*[Engine.js]* The entry point of the engine. The game will be able to access the Engine const class (singleton), and access all engine managers from within.
 - **[const]** 
   - *[struct.js]* Object structures. The engine and game will utilize Objects only when storing data within classes or when sending data. 
 - **[input]**  
 
 - **[manager]**  
   - **[internal]**  
 - **[scene]**  
 - **[ui]**  
 - **[update]**  
 - **[const]**  

### Setup
In CLI run:
```
npm install
```

### Running in Development
```
npm start
```

### Building
```
npm build
```