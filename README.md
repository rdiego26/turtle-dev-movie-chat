# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Considerations / Next Steps
Treating the project as a real project and taking into account delivering value to the final customer in an incremental way, I believe that this version could be an initial version to get feedback from the customer and deliver the next versions of the project, below some considerations:
- The JSON content is quite large, so I put it as a mock place but the next step would be to create a backend to serve this information in a paginated way
- I had problems with using the Firebase SDK but would plan to implement it in another version of the application to use the real time DB functionality for a better user experience
- The database is public (not ideal), as I mentioned earlier about creating a backend layer I would implement a relational database (Postgres for example)
- Implement some CI / CD mechanism. It can even be with Netlify or with AWS tools (code build, code pipeline, S3)
