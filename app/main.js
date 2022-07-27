import { FoodController } from "./Controllers/FoodController.js";

class App {
  foodController = new FoodController();
}

window["app"] = new App();
