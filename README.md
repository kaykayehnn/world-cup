# Russia World Cup 2018

## Documentation

The main theme of this project is the World Cup in Russia. Match data is provided by [Football-Data](https://www.football-data.org).

Frameworks and technologies used on the backend:
- ExpressJS
- MongoDB for storage
- Redis for caching
- Authentication is implemented through JsonWebTokens.

Frameworks and libraries used on the frontend:
- React for view management
- Redux for state management(also react-redux bindings and redux-thunk middleware)
- Webpack
- Babel
- Moment
- Normalize.css

## Available functionality

Non authenticated users are only presented with a login/register form and credits, mentioning used assets and their artists.
Once a user logs in they get access to the Dashboard, which shows all of the 32 teams in a grid along with their record of wins, draws and losses. There is a team details page, which shows the team's crest and the matches they've competed in, and a match details page, which shows its outcome and available stats, such as half-time score, full-time score, etc. A user can also favourite their supported teams and view only their stats in a concise manner at their profile page.
Administrators have access to a list of all users and can edit them and delete them.

#### General requirements
- [x] At least 3 different dynamic pages (pages like about, contacts, etc. do not count towards that figure)
- [x] Use React.js for the client-side
- [x] Communicate to a remote service (via REST, sockets, GraphQL, or a similar client-server technique)
- [x] Implement authentication and user roles
- [x] Implement client-side routing
- [x] Demonstrate use of programming concepts, specific to the React library: stateless and statefull components, bound forms, synthetic events, etc.
- [x] Brief documentation on the project and project architecture (as .md file)

### Other requirements
- [x] Apply error handling and data validation to avoid crashes when invalid data is entered
- [x] Prevent security exploits (XSS, XSRF, Parameter Tampering, etc.)
- [x] Handle correctly special HTML characters and tags like <script>, line breaks, etc.
- [x] Use a source control system, like GitHub

#### Optional Requirements
- [x] Use responsive design – Bootstrap, MDL, CSS Grids or another method of your choice
- [ ] Nice looking UI, supporting of all modern and old Web browsers
- [ ] Good usability (easy to use UI)

#### Bonuses
- [x] Use a state management library like Flux or Redux
- [x] Deploy the application in a cloud environment
- [ ] Use a file storage cloud API, e.g. Dropbox, Google Drive or other for storing the files
- [x] Connect to an external API, like Google Maps, AccuWeather, etc.
- [x] Use of features of HTML 5 like Geolocation, Local Storage, SVG, Canvas, etc.
- [ ] Anything that is not described in the assignment is a bonus if it has some practical use
