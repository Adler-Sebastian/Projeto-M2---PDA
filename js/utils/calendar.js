document.addEventListener("DOMContentLoaded", function() {
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    const currentMonthYear = document.getElementById("currentMonthYear");
    const daysContainer = document.querySelector(".days");
    const daysOfWeekContainer = document.querySelector(".days-week");
  
    let currentDate = new Date();
    let selectedDates = new Set(); // Conjunto para armazenar as datas selecionadas
  
    function renderCalendar() {
      currentMonthYear.textContent = currentDate.toLocaleString("default", { month: "long" }) + " " + currentDate.getFullYear();
      daysContainer.innerHTML = "";
      daysOfWeekContainer.innerHTML = "";
  
      const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
  
      daysOfWeek.forEach(day => {
        const dayOfWeek = document.createElement("div");
        dayOfWeek.textContent = day;
        daysOfWeekContainer.appendChild(dayOfWeek);
      });
  
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
      for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        daysContainer.appendChild(emptyDay);
      }
  
      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;
        daysContainer.appendChild(day);
  
        // Marcar o dia atual
        if (currentDate.getFullYear() === new Date().getFullYear() && currentDate.getMonth() === new Date().getMonth() && i === new Date().getDate()) {
          day.classList.add("today");
        }
  
        // Adicionar classe 'selected' aos dias selecionados
        if (selectedDates.has(i)) {
          day.classList.add("selected");
        }
  
        // Adicionar evento de clique para selecionar/desselecionar o dia
        day.addEventListener("click", function() {
          if (selectedDates.has(i)) {
            selectedDates.delete(i);
            day.classList.remove("selected");
          } else {
            selectedDates.add(i);
            day.classList.add("selected");
          }
        });
      }
    }
  
    renderCalendar();
  
    prevMonthBtn.addEventListener("click", function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });
  
    nextMonthBtn.addEventListener("click", function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });
  });
  