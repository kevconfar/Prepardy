User stories


---APP---

As a player, when I start the game, I should be able to see the GAMEBOARD, SCOREBOARD so that I can play the game

Acceptance criteria:

 --Displays GAMEBOARD (use testdata.js)
    -Includes CATEGORIES (with correct info), each displays CATEGORY
    -CATEGORY by default should list CLUES with their $ value
 --Displays SCOREBOARD
    -Should default to $0

---GAMEBOARD---

As a player, I want to click on a CLUE (e.g. $200) so that I can view the question(CLUE) and try to answer it

Acceptance criteria:

 --Replaces GAMEBOARD with CLUE question when ($)CLUE is clicked
    -Displays RESPONSE
    -Displays SCOREBOARD
    -RESPONSE
      -Should show a response input
      -Should switch back to GAMEBOARD when reponse is submitted
    -GAMEBOARD
      -After submitting a response: does not show CLUE dollar value when displaying CATEGORIES

As a player, I want to get scored on the answer that I submit, so that I know how I am doing

Acceptance criteria:

 -RESPONSE
    -Should submit response when user hits the enter key
    -Should switch back to GAMEBOARD when reponse is submitted
    -GAMEBOARD does not show CLUE dollar value when displaying CATEGORIES
    -Displays SCOREBOARD
    -Updates score after response based on correct / incorrect answer

As a player, I want my CLUES to be sourced from an external API, so that I always have the newest questions

Acceptance criteria:

 -GAMEBOARD
    -Displays CATEGORIES and CLUES 
    -Gets CATEGORY ids, and CLUES for each category id


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
