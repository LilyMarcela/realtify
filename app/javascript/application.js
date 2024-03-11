import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "stimulus/esbuild-helpers";

window.Stimulus = Application.start();
console.log("fofofofofof");
const context = require.context("../controllers", true, /\.js$/);
Stimulus.load(definitionsFromContext(context));
