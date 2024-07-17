import "./industry.css";
import { LiaHospitalSolid } from "react-icons/lia";
import { RiRestaurant2Line } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { LiaNotesMedicalSolid } from "react-icons/lia";

export default function Industry() {
  return (
    <ul className="industry-list">
      <li className="industry-list-item">
        <LiaHospitalSolid className="list-icon" />
        <span>Beauty and Personal Care</span>
      </li>
      <li className="industry-list-item">
        <RiRestaurant2Line className="list-icon" />
        <span>Quick Service Restaurants</span>
      </li>
      <li className="industry-list-item">
        <IoFastFoodOutline className="list-icon" />
        <span>Food and Beverages</span>
      </li>
      <li className="industry-list-item">
        <IoShirtOutline className="list-icon" />
        Apparel and Accessories
      </li>
      <li className="industry-list-item">
        <LiaNotesMedicalSolid className="list-icon" />
        <span>Pharmaceuticals</span>
      </li>
    </ul>
  );
}
