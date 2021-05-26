# Discord Movie Quizzer
A combination between a Discord Bot and a Website used for Movie-Quizzes for teams.

## Details
### The Website
The Website shows the Video and is only used by the *Quiz-Master*. The *Quiz-Master* streams the website in a Discord channel, so everyone can see it. \
When the *Quiz-Master* clicks on the `Start Quiz Button` on the website, the quiz starts and discord-members can make guesses via the bot! \
If someone guesses right or the video ends, the correct answer will be shown on the website and nobody can make a guess for this video anymore.\
The *Quiz-Master* can click on the `Next Round? Button` to start the next round with the next video.

### Discord Bot
To divide discord members in teams, every member needs to have a corresponding team-discord-role. \
If someone guesses right, the bot checks the roles of this member and give that team with the corresponding role a point.

The Discord Bot can run the following commands (and more like `help` and stuff):
* `guess`: Guess a solution. If it's right, the team in which the user is, gets one point. \
  A suggestion is correct if it matches the correct solution except for two characters
* `score`: View the scores of all teams

## Preparations
* You need [node.js](https://nodejs.org/en/) and [discord.js](https://discord.js.org/#/) installed.
* You need a [Discord API Bot](https://discord.com/developers/applications) with it's token.
* You need a [Discord server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server) on which you can set permissions, so you can invite the bot and give it the following permissions:
  * View Channels
  * Send Massages

## Configuration
1. Rename the configuration file *(/config/config-template.json)* from ```config-template.json``` to ```config.json```
2. Open the configuration file (now `config.json`) and set:
   * The bot's `prefix`
   * The bot's `token`
   * The `admin id's`: Enter a discord user id in quotation marks and separate several with a comma ```[ "<id>", "<id>", ..., "<id>"]```.\
     These are the only users who have the permission to execute the restricted commands `reload` and `cecho`
   * Add teams by editing the team key with the following format:
     ```{ "name": "TEAM_NAME", "id": "DISCORD_ROLE_ID" }```
   * **OPTIONAL**: change `lang` from "en" to "de" for german instead of english language (bot only (soon))
   * **OPTIONAL**: change `port` to change the website port.
   * **OPTIONAL**: change `webside-only` to `true` if you only want to use the website and not the bot. 
     In this case you don't need to fill anything else in `config.json`.
3. Rename the video path file *(/wwwroot/res/video/paths-template.js)* from `paths-template.js` to `paths.js`
4. Insert the videos for the quiz the following:
   * Name the video file like this: `[solution].[mp4/ogg/webm]` and save it into `/wwwroot/res/video/`
   * The videos have to be `.mp4`, `.ogg` or `.webm` files
   * Insert the video names in the `paths.js` file in the list `paths`
   * **OPTIONAL**: set `shuffle` to `true` in the `paths.js` file if you want to randomise the video order
5. Run `npm install`.

## Run
Run `npm start` or `node index.js` in the root folder.\
To reset the game, close the website and restart the program.
