## Process Street AngularJS + React Test

### How to run it locally

1. Clone repo
1. Run `npm install` or `yarn install`
1. Run `gulp`. Make sure you have gulp installed globally.

The app is also available under: http://process-street.betterworldcode.org

### Tests

`Jest` testing framework has been used for testing (mostly snapshots) of all newly created components.

You can run them with `yarn test` or `npm run test`.

### Article 5-star rating

`Rating` component has been implemented with the data being stored in the `redux` store and persisted using `redux-persist` library.

### Other information

1. `eslint` and `prettier` plugins have been used to improve code consistency.
1. `moment` has been used for easier date/time formatting.
1. `styled-components` has been used for styling of all the new components. Existing styles were preserved as much as possible to make review easier.
1. Inline snapshots has been used in tests which give better control over the snapshot structure and enforce mocking unrelated components. 

### Next steps

Because of the limited time and the willingness to modify just the minimum amount of files so that the code is easier to review, not all the solutions are optimal. Here are some details that could be implemented further:

1. Remove side-effects logic from components and integrate them in `redux-saga`s.
1. Store more article related data in the `redux` store to avoid "prop drilling" and keep the components more independent.
1. `Flow` or `TypeScript` integration for type-checking.