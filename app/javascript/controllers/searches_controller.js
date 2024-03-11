// app/javascript/controllers/filter_controller.js
import { Controller } from "@hotwired/stimulus";
import { useDebounce } from "stimulus-use";

export default class extends Controller {
  unread() {
    console.log("Unread Function");
  }
  static debounces = ["search"];
  static targets = ["first_name", "last_name"];
  static values = { url: String, minLength: Number };

  connect() {
    console.log("Search controller connected");
  }

  search(event) {
    console.log("Event triggered", event);

    event.preventDefault();

    const searchTerm = event.target.value.toLowerCase();
    const minLength = 3;

    console.log("hwdoidjocjdoihcjos", {
      a: this.minLength,
      b: searchTerm.length,
    });
    if (searchTerm.length >= minLength) {
      console.log(`Performing search for: ${searchTerm}`);

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
          console.log("barbarbar", html);
          Turbo.renderStreamMessage(html);
        });
    }
  }
}
