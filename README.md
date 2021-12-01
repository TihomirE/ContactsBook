# ContactsBook

Sample Contacts book application

## Tech stack

Angular, NgRx

Store is used to manage apps state with appropriate reducers, actions, effects 

## CI/CD

GitHub Actions are used to help with Project management (simple Kanban board for tracking issues (add, close))
Also there is GitHub Action for running automated tests on main branch update (CI)

CD part is handled with Netlify, pointing to main branch and building and deploying the app on it's update

## Visit deployed site (from CD)

[Contacts Book Netlify](https://contacts-book-dedalus-example.netlify.app/)