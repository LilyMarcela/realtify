import { Controller } from "@hotwired/stimulus";
import { useDebounce } from "stimulus-use";

export default class extends Controller {
  static debounces = ["filter"];
  static values = { url: String };

  filter(event) {
    const name = event.target.value;
    const url = new URL(this.urlValue);
    url.searchParams.set("name", name);

    fetch(url, {
      method: "GET",
      headers: { Accept: "text/vnd.turbo-stream.html" },
    })
      .then((response) => response.text())
      .then((html) => Turbo.renderStreamMessage(html));
  }
}
