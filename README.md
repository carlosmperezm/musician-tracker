
# Musician Tracker

This is an application to keep track of songs and musicians.
Allowing to create,update and delete users,songs, and records.

## Install

1. Fork the repo. Follow GitHub instruction on
[how to fork a repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

2. Clone it in your local machine

    ```bash
    git clone <your-forked-repo>
    ```

3. Install dependencies

    ```bash
    npm install
    ```

4. You need a PostgreSql database set up and running.
You can run your DB by local or with a Database Hosting provider.

5. Make sure you get the database connection string so that the application can connect to your database.

6. The Database is up and running but empty. We need to have a few tables created before moving on. To update the database we need the connection string that connects our db.

    ```bash
    node db/populate.js "<your-connection-string>"
    ```

    This script will populate our database with all necessary tables like:
    - A session table (to store the users' sessions and cookies).
    - Users table to store all information we need from the user.
    - Songs table to store all songs the user can manually save.
    - Singers table to keep track all singers the user manually save.
    - Notes table to store all notes. This is necessary since will be used in different tables. ( user does not have to create this table or populate since the app will provide all notes already).
    - Records table to store all singers who singed a song and with what note they did it.

7. Run the app locally

    ```bash
    npm start
    ```

    This will start the server on port 3000 if any is set in the environmental variables `.env` as `PORT`.

8. Access the server by going to `http://localhost:<PORT>`.

> [!NOTE]
> By running the populate script. The app will create a user with the following schema
>
> ```sql
> User (
>   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
>   username VARCHAR ( 255 ),
>   password VARCHAR ( 255 )
> )
> ```
>
> This is important since we need a user already in the database so we can log in therefore the sessions and cookies can be created.

## Environment variables

We should have a `.env` file in our root directory of our project, and it might contain the following variables.

```properties
DB_CONNECTION='<your-db-connection-string>'
PORT=<custom-port> 
SESSION_SIGN="<any-word>"
```

### DB_CONNECTION

Necessary to establish a connection with your database, whether is local or in a hosting provider

This string connection is required also at time of populating the database

### PORT

This is the port where the server is listening. The server has a default port to `3000`. You might want to create this `PORT` in your `.env` if the port 3000 is being used in your system by any other application.

### SESSION_SIGN

This is where express-session look for to sign and validate the cookies and sessions. It does not have to be something special, but it's important toa have in the your `.env` file since can lead errors in the session.

## License

 [The MIT License](https://github.com/carlosmperezm/musician-tracker/tree/auth?tab=License-1-ov-file#)
