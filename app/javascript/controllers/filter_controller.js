import { Controller } from "@hotwired/stimulus";
import { useDebounce } from "stimulus-use";

export default class extends Controller {
  connect() {
    console.log("Example controller connected");
  }
  static debounces = ["filter"];
  static values = { url: String };

  filter(event) {
    console.log("blehbleh bleh");
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
