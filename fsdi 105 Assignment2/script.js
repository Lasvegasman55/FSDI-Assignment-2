document.addEventListener('DOMContentLoaded', function() {
    // Salon object literal
    const salon = {
        name: "Happy Paws Salon",
        address: "123 Pet Street",
        phone: "555-555-5555"
    };

    // Pet class constructor
    class Pet {
        constructor(name, age, gender, breed, service, type, color) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.breed = breed;
            this.service = service;
            this.type = type;
            this.color = color;
        }
    }

    // Create pets using the Pet constructor
    const pets = [
        new Pet("Bella", 3, "Female", "Golden Retriever", "Grooming", "Dog", "Golden"),
        new Pet("Max", 5, "Male", "Labrador", "Vaccination", "Dog", "Black"),
        new Pet("Luna", 2, "Female", "Beagle", "Checkup", "Dog", "Brown")
    ];

    // Function to display the total number of pets
    function displayPetCount() {
        const petCount = pets.length;
        if (document.getElementById('pet-count')) {
            document.getElementById('pet-count').innerText = petCount;
        }
    }

    // Function to display a pet in a table row
    function displayRow(pet, index) {
        const petList = document.getElementById('pet-list');
        if (petList) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.type}</td>
                <td>${pet.color}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${index})">Delete</button></td>
            `;
            petList.appendChild(row);
        }
    }

    // Initialize the display functions
    displayPetCount();
    pets.forEach((pet, index) => displayRow(pet, index));

    // Function to register a new pet
    const petForm = document.getElementById('pet-form');
    if (petForm) {
        petForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('pet-name').value;
            const age = parseInt(document.getElementById('pet-age').value);
            const gender = document.getElementById('pet-gender').value;
            const breed = document.getElementById('pet-breed').value;
            const service = document.getElementById('pet-service').value;
        