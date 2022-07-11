import api from "../api/config";

class getUserLocation {
  static instance = new getUserLocation();

  getLocation() {
    return api.get("https://ipinfo.io?token=7e8587a0998bb7");
  }
}

export default getUserLocation.instance;
