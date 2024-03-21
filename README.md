# react-redux-clss-comp-w-typescript
Course covering React and Redux class components with Typescript

### Pros of using TypeScript with React and Redux class components
- Far easier to avoid extremely common types like incorrect action types
- Gives devs a better overview/understanding of the type of data moving around
- Makes it easier to refactor most things

### Cons
- Neither React nor Redux (especially Redux) have the best type definition files
- The amount of generics we're going to be using is TOO DAMN HIGH
- Lots and lots of imports, just about everything (action creator, action, reducer, store, component) needs to be aware of different types
- Redux is inherently functional in nature, which makes for a really tough integration with TS classes
