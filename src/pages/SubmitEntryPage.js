import SideBar from '../components/SideBar'
import React from 'react'
import '../styles/SubmitEntryStyle.css'

function submitEntryPage() {
    

// Might watch this video to learn to upload images
// VIDEO HERE --> https://www.youtube.com/watch?v=cOHRCtHkCS0

    // const image_input = document.querySelector("#image-input");
    // image_input.addEventListener("change", function () {
    //     const reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //         const uploaded_image = reader.result;
    //         document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    //     });
    //     reader.readAsDataURL(this.files[0]);
    // });

    return (
        <>
            <SideBar />
            <div class="input-pokemon">
                <input placeholder="Pokemon's Name" class="inputter"/>
                <input placeholder="Pokemon's Region" class="inputter"/>
                <input placeholder="Where did you catch your Pokemon?" class="inputter"/>
                <input placeholder="What is you Pokemon's Gender?" class="inputter"/>
            </div>
            <div class="type-selector-box">
                <select for="pokemon-type-one">
                    <option value="null">Type 1</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="flying">Flying</option>
                    <option value="fighting">Fighting</option>
                    <option value="poison">Poison</option>
                    <option value="electric">Electric</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                </select>
                <select for="pokemon-type-two">
                    <option value="null">Type 2</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="flying">Flying</option>
                    <option value="fighting">Fighting</option>
                    <option value="poison">Poison</option>
                    <option value="electric">Electric</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                </select>
            </div>
            <h1>What kind of food does your Pokemon like?</h1>
            <select for="food-one">
                <option value="null">Food #1</option>
                <option value="cupcakes"> cupcakes</option>
                <option value="acorns">acorns</option>
                <option value="mushrooms">mushrooms</option>
                <option value="corn">corn</option>
                <option value="carrots">carrots</option>
                <option value="onions">onions</option>
                <option value="herbs">herbs</option>
                <option value="radishes">radishes</option>
                <option value="apples">apples</option>
                <option value="bananas">bananas</option>
            </select>

            <select for="food-two">
                <option value="null">Food #2</option>
                <option value="cupcakes"> cupcakes</option>
                <option value="acorns">acorns</option>
                <option value="mushrooms">mushrooms</option>
                <option value="corn">corn</option>
                <option value="carrots">carrots</option>
                <option value="onions">onions</option>
                <option value="herbs">herbs</option>
                <option value="radishes">radishes</option>
                <option value="apples">apples</option>
                <option value="bananas">bananas</option>
            </select>

            <select for="food-three">
                <option value="null">Food #3</option>
                <option value="cupcakes"> cupcakes</option>
                <option value="acorns">acorns</option>
                <option value="mushrooms">mushrooms</option>
                <option value="corn">corn</option>
                <option value="carrots">carrots</option>
                <option value="onions">onions</option>
                <option value="herbs">herbs</option>
                <option value="radishes">radishes</option>
                <option value="apples">apples</option>
                <option value="bananas">bananas</option>
            </select>
            <br />

            <button onClick={alertFunction}>Submit</button>

            <br />

            <input type="file" id="image-input" accept="image/png, image/jpg" />
            <div id="display-image"> </div>
        </>
    )
    function alertFunction() {
        alert("You just clicked the button")
    }
}

export default submitEntryPage;