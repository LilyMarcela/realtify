// app/javascript/controllers/realtors_controller.js
import { Controller } from "@hotwired/stimulus";
import { useDebounce } from "stimulus-use";

export default class extends Controller {
  static debounces = ["search"];
  static values = { url: String, minLength: Number };
  static targets = ["link"];

  connect() {
    useDebounce(this);
    console.log("Search controller connected");
    if (!this.hasMinLengthValue) {
      this.minLengthValue = 3;
    }
  }

  update(event) {
    const url = new URL(this.linkTarget.href);
    const params = url.searchParams;

    // Example of toggling the 'order' parameter
    params.set("order", params.get("order") === "asc" ? "desc" : "asc");

    // Update the href with the new URL
    this.linkTarget.href = url.toString();
  }

  search(event) {
    const searchTerm = event.target.value;

    if (searchTerm.length >= this.minLengthValue || searchTerm.length === 0) {
      const url = new URL(this.urlValue);
      url.searchParams.set("query", searchTerm);

      fetch(url, {
        headers: { Accept: "text/vnd.turbo-stream.html" },
      })
        .then((response) => response.text())
        .then((html) => Turbo.renderStreamMessage(html))
        .catch((error) => console.error("Failed to search:", error));
    }
  }
}
