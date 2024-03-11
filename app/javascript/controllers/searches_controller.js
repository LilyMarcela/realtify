// app/javascript/controllers/filter_controller.js
import { Controller } from "@hotwired/stimulus";
import { useDebounce } from "stimulus-use";

export default class extends Controller {
  unread() {
    console.log("Unread Function");
  }
  static debounces = ["search"];
  static targets = ["first_name", "last_name"];
  static values = { url: String };

  connect() {
    useDebounce(this);

    console.log("Search controller connected");
    console.log("fofofofofofo", this.element);
  }

  search(event) {
    console.log("Event triggered", event);
    console.log("URL value", this.urlValue);
    console.log("fofofofofofo", event.target.value);

    const searchTerm = event.target.value.toLowerCase();

    const query = event.target.value;
    const url = new URL(this.urlValue);
    url.searchParams.set("query", query);

    fetch(url, {
      headers: {
        Accept: "text/vnd.turbo-stream.html",
      },
    })
      .then((response) => response.text())
      .then((html) => {
        console.log("barbarbar", html); // Check the Turbo Stream response
        Turbo.renderStreamMessage(html);
      });
  }
}
