import { useEffect } from "react";
const AddElement = () => {
  useEffect(() => {
    document.body.onload = AddElement;
    const elementOne = document.createElement("h1");
    const text = document.createTextNode("Ruben Andino");
    elementOne.appendChild(text);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(elementOne, currentDiv);
  }, []);
};

export default AddElement;
