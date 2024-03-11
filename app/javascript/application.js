// // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails";
// import { Application } from "@hotwired/stimulus";

// // General Controllers
// // -------------------
// // import all Stimulus controller files under the controllers folder
// import controllers from "./**/*_controller.js";

// // Auxiliary Methods
// // -----------------
// // Infer Stimulus controller name from its file
// function controllerName(defaultName) {
//   const namespaces = [
//     ...new Set(
//       defaultName
//         .split("--")
//         .filter((ns) => !["..", "controllers"].includes(ns))
//     ),
//   ];
//   return namespaces.join("--");
// }

// const application = Application.start();

// // Set flag to true to get debbug information in the web browser console
// application.debug = true;
// window.Stimulus = application;

// controllers.forEach((controller) => {
//   Stimulus.register(controllerName(controller.name), controller.module.default);
// });

import { Application } from "@hotwired/stimulus";
import { Turbo } from "@hotwired/turbo-rails";

import "./controllers";
import "@hotwired/turbo-rails";
import SearchController from "./controllers/searches_controller";
import RealtorsController from "./controllers/realtors_controller";
// Import additional controllers...

window.Turbo = Turbo;
const application = Application.start();

// Register your stimulus controllers
application.register("search", SearchController);
application.register("realtors", RealtorsController);
