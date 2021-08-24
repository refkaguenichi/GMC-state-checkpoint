import { Component } from "react";
import "./Profile.css";
class Profile extends Component {
  state = {
    fullName: "Refka GUENICHI",
    bio: "My name is Refka Guenichi. I am a web developer, my aim is to create and maintain websites. I am excited to join a strong and leader strucutre in the software engineering filed and realise new challenges.",
    imgSrc: (
      <img className="image" src="/assets/Refka-Photo.jpg" alt="profile" />
    ),
    profession: "Web developer",
  };

  render() {
    return (
      <div className="profile">
        <span>{this.state.imgSrc}</span>
        <p>
          <span>Fullname: </span>
          {this.state.fullName}
        </p>
        <p>
          <span>Bio: </span>
          {this.state.bio}
        </p>
        <p>
          <span>Profession: </span>
          {this.state.profession}
        </p>
      </div>
    );
  }
}

export default Profile;
