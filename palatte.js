document.getElementById("travellers-class").addEventListener("click", () => {
    document.getElementById("traveller-modal").style.display = "block";
  });
  
  document.querySelector(".apply").addEventListener("click", () => {
    const adults = document.getElementById("adults").textContent;
    const children = document.getElementById("children").textContent;
    const infants = document.getElementById("infants").textContent;
    const selectedClass = document.querySelector(".class-option.active").textContent;
  
    document.getElementById("travellers-class").textContent = `${adults} Traveller(s) - ${selectedClass}`;
    document.getElementById("traveller-modal").style.display = "none";
  });
  
  document.querySelectorAll(".increment, .decrement").forEach(button => {
    button.addEventListener("click", () => {
      const counter = button.parentElement.querySelector("span");
      let value = parseInt(counter.textContent);
      if (button.classList.contains("increment")) value++;
      if (button.classList.contains("decrement") && value > 0) value--;
      counter.textContent = value;
    });
  });
  
  document.querySelectorAll(".class-option").forEach(option => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".class-option").forEach(opt => opt.classList.remove("active"));
      option.classList.add("active");
    });
  });
  