Implement a basic login page using HTML for a web application.
Server this login page using Express.js on the /login route.
Create a middleware function for authentication in Express.js, which validates user credentials against a hardcoded database.
Define a protected route '/profile' that requires authentication to access. If authenticated, it should display a personalized welcome message.
Additionaly, setup a public route '/' that doesn't require authentication, displaying a generic welcome message.
Ensure that the authentication middleware restricts access to the '/profile' route based on the provided credentials.