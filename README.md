
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
    node install
    ```

4. You need a PostgreSql database set up and running.
You can run your DB by local or with a Database Hosting provider.

5. Make sure you have the Database connection string in the environment variables `.env` with the name `DB_CONNECTION` since the app will look for it by this name.

6. The Database is up and running but empty. We need to have a few tables created before moving on.

    ```bash
    node db/populate.js
    ```

    This script will populate our database with all necessary tables like:
    - A session table (to store the users' sessions and cookies).
    - Users table to store all information we need from the user.
    - Songs table to store all songs the user can manually save.
    - Singers table to keep track all singers the user manually save.
    - Notes table to store all notes. This is necessary since will be used in different tables. ( user does not have to create this table or populate since the app will provide all notes already).
    - Records table to store all singers who singed a song and with what note they did it.

    > [!NOTE]
    > We need to manually create a user in the `users` table with plain password (for the moment) since the sign up functionality is no created yet.
    >
    > This is important since we need a user already in the database so we can log in therefore the sessions and cookies can be created.

7. Run the app locally

    ```bash
    npm start
    ```

    This will start the server on port 3000 if any is set in the environmental variables `.env` as `PORT`.

8. Access the server by going to `http://localhost:<PORT>`.

## License
 [The MIT License](https://github.com/carlosmperezm/musician-tracker/tree/auth?tab=License-1-ov-file#)
