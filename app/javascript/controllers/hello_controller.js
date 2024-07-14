import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.element.textContent = "Click Me!";
  }

  handleClick() {
    this.element.textContent = "Poop!";
  }
}
