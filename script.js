//Save notes app ,in local storage like todo list
let title = document.getElementById("title")
let note = document.getElementById("note")
let delTitle = document.getElementById("delTitle")

function set_note() {                                                       //func to set key and value

    if (title.value && note.value) {
        localStorage.setItem(title.value, note.value);
        alert("Note saved successfully!");
        title.value = "";
        note.value = "";
    } else {
        alert("Both Title and Note are required!");
    }

}
document.getElementById("submit").addEventListener("click", set_note);      //call set note func ,submit button 

function del_note() {                                                       //func to delete key and value

    if (delTitle.value) {
        localStorage.removeItem(delTitle.value);
        alert("Item deleted !!");
        delTitle.value = ""
    } else {
        alert("Please first enter Title you want to delete!");
    }

}
document.getElementById("delete").addEventListener("click", del_note);    //call del note func , delete button

function del_all() {                                                      //func to delete all keys and values
    let condi = confirm("Are you sure you wnat to clear all notes ?")

    if (condi) {
        localStorage.clear()
    } else {
        return 0
    }
};
document.getElementById("clear").addEventListener("click", del_all);    //call del all func , delete button

let isNotesVisible = false;                                            // Track if notes are visible

function view_notes() {                                                //func to view all keys and values
    if (isNotesVisible) {
        // Hide notes
        notesDisplay.innerHTML = "";
        isNotesVisible = false;
    } else {
        // Show notes
        if (localStorage.length === 0) {
            notesDisplay.innerHTML = "<h3>No notes found!</h3>";
        } else {
            let notes = "<h3>Saved Notes:</h3>";
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                notes += `<p><strong>${key}:</strong> ${value}</p>`;
            }
            notesDisplay.innerHTML = notes;
        }
        isNotesVisible = true;
    }
}
document.getElementById("viewNotes").addEventListener("click", view_notes);  //call view notes func , view notes button


//Footer -> fetch weather  

async function fetchWeather() {
    const API_KEY = "d381a69184fa04f6fcd5e66d9e9fd667";
    const CITY_NAME = document.getElementById("cityName").value                                 //loaction 
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        const location = data.name;
        const temperature = data.main.temp;
        const date = new Date();


        document.getElementById("weatherReport").innerText =
            `Location: ${location}, Temp: ${temperature}°C, Date: ${date.toLocaleDateString()}, Time: ${date.toLocaleTimeString()}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherReport").innerText = "Unable to fetch weather data.";
    }
}
// setInterval(fetchWeather, 1000);


// Random PAssword
const char = "Q!@#$RTYCDFp012345%VBNMabcdno67WEGHJKLZ~8UIOPefghijklmAS^&*_+=-X9"
let password = document.getElementById("password")
function gneratePass() {
    let pass = "";
    for (let i = 0; i < 8; i++) {
        pass += char[Math.floor(Math.random() * char.length)]
    }
    return password.value = pass
}
function copyPassword() {
    password.select();
    document.execCommand("copy")
}
