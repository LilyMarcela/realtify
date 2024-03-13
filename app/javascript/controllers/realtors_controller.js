// app/javascript/controllers/filter_controller.js
import { Controller } from "@hotwired/stimulus";
import { useDebounce } from "stimulus-use";

export default class extends Controller {
  static debounces = ["search"];
  static values = { url: String, minLength: Number };

  connect() {
    useDebounce(this);
    console.log("Search controller connected");
    if (!this.hasMinLengthValue) {
      this.minLengthValue = 3;
    }
  }

  search(event) {
    const searchTerm = event.target.value;

    if (searchTerm.length >= this.minLengthValue) {
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
