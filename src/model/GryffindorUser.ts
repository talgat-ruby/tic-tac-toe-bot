import User from "./User.ts";

class GryffindorUser extends User {
  constructor() {
    super("Gryffindor", "/assets/gryffindor.webp");
  }
}

export default GryffindorUser;
