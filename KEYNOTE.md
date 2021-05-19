# Angular basic course

## Keynote

- Introduction to Angular
- Components
- Templates
- Pipes
- Directives
- Services
- Routing
- Forms
- Async
- HTTP

---

## 1. Introduction to Angular

### Reference

- IDE (Integrated Development Environment) https://code.visualstudio.com/
- Angular CLI (Command Line Interface) https://angular.io/cli
- Typescript https://www.typescriptlang.org/
- Angular components https://angular.io/guide/component-overview
- Fonts and Icons https://fonts.google.com/

### Demo

- Creating new project
- IDE setup
- knowing the structure
- Creating new component
- Google Fonts and Icons

### Hands On

- clone this repository: https://github.com/hittten/angular-ecommerce. Run `git clone https://github.com/hittten/angular-ecommerce.git`
- Install dependencies `npm i`
- Move to `./move/to init`
- Start the project `npm start`
- You have to see something like this https://classroom-playground-view.web.app/init
- Create your first component header.
- Try to set up Google fonts and icons

Goal: https://classroom-playground-view.web.app/header

Solution: `./move/to header`

---

## 2. Components

### Reference

- Interpolation https://angular.io/guide/interpolation
- Template expressions https://v13.angular.io/guide/interpolation#template-expressions
- Expression Context https://v13.angular.io/guide/interpolation#expression-context
- NgFor https://angular.io/api/common/NgForOf

### Hands On

- Create `productList` component
- Make a product list with this mock https://gist.github.com/hittten/ce366d076fc5d58fa6b1fcad3ba207a2
- For products descriptions with more than 150 characters, short the text with "..."

Goal: https://classroom-playground-view.web.app/product-list

Solution: `./move/to product-list`

---

## 3. Templates

### Reference

- Property binding https://angular.io/guide/property-binding
- Attribute, class, and style bindings https://angular.io/guide/attribute-binding
- NgClass https://angular.io/api/common/NgClass
- Event binding https://angular.io/guide/event-binding
- Pipes https://angular.io/guide/pipes

### Hands On

- Add an uppercase pipe to product name
- Add the product creation date, before the description and apply a date pipe with 'dd/MM/yy' format
- Add two new icons `view_list` and `view_module`
- Change attributes interpolation for attributes binding
- Use ngClass or class binding for manage `selected` and `grid` classes, you need to implement click event

Goal: https://classroom-playground-view.web.app/gridview-pipes

Solution: `./move/to gridview-pipes`

---

## 4. Custom pipes & directives

### Reference

- Creating pipes for custom data
  transformations https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations
- Inputs https://angular.io/guide/inputs-outputs
- Building an attribute directive https://angular.io/guide/attribute-directives

### Hands On

- Create a euroCurrency pipe and apply to price
- Create a highlight directive and apply to price

Goal: https://classroom-playground-view.web.app/custom-directive-pipes

Solution: `./move/to custom-directive-pipes`

---

## 5. Services

### Reference

- Dependency injection in Angular https://angular.io/guide/dependency-injection

### Hands On

- Refactor product list component to use a product service.

Solution: `./move/to service`

---

## 6. Routing

### Reference

- Router Reference https://angular.io/guide/router-reference
- Inputs & Outputs https://angular.io/guide/inputs-outputs

### Hands On

- Create a `productsPage` component
- Create a `shoppingCartPage` component
- Create routes for `products` and `shopping-cart`
- Update Header menu to navigate to `products` and `shopping-cart`
- Add new services for manages the shopping cart
- Refactor product list component to reuse it for shopping cart

Goal: https://classroom-playground-view.web.app/shopping-cart

Solution: `./move/to shopping-cart`

## 7. Forms

### Reference

- Introduction to forms in Angular https://angular.io/guide/forms-overview
- Reactive forms https://angular.io/guide/reactive-forms

### Hands On

- Goal: https://classroom-playground-view.web.app/forms
- Goal with image: https://classroom-playground-view.web.app/form-file

Solution: `./move/to forms`
Solution with image: `./move/to form-file`

---

## 8. Async

### Reference

- Javascript promises https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
- Observables https://angular.io/guide/observables
- RxJS https://rxjs.dev/
- NgIf https://angular.io/api/common/NgIf

### Hands On

- Make an async simulator for mock data with observables

Goal: https://classroom-playground-view.web.app/fake-http

Solution: `./move/to fake-http`

---

## 9 HTTP

### Reference

- Communicating with backend services using HTTP https://angular.io/guide/http
- Deployment https://angular.io/guide/deployment

### Hands On

- Implement real HTTP services (change ${user} with your name with only letters):
  * API URL: https://us-central1-classroom-playground.cloudfunctions.net
  * products endpoint [GET,POST]: `/products/${user}/`,
  * shoppingCart endpoint [GET,PUT,DELETE]: `/shoppingCart/${user}/`,

Goal: https://classroom-playground.web.app

Solution: `./move/to main`

## 10 what's next

### Reference

- Reinforce knowledge and more: Do the "Tour of Heroes app" https://angular.io/tutorial
- Localizing your app https://angular.io/guide/i18n
- Lazy-loading feature modules https://angular.io/guide/lazy-loading-ngmodules
- Angular service worker https://angular.io/guide/service-worker-intro
- Server-side rendering (SSR) with Angular Universal https://angular.io/guide/universal
