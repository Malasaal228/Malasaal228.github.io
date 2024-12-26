const dateFromInput = document.getElementById('date-from');
const dateToInput = document.getElementById('date-to');
const calendarContainer = document.querySelector('.calendar-container');
const calendarButtons = document.querySelectorAll('.date-input-calendar-btn');
const statusFilterContainer = document.querySelector('.status-filter');
const statusOptionsContainer = document.querySelector('.status-options-container');
const statusSelect = document.getElementById('order-status')

document.addEventListener('click', (e) => {

    if(dateFromInput.contains(e.target) || dateToInput.contains(e.target) ||
        calendarButtons[0].contains(e.target) || calendarButtons[1].contains(e.target)
    ){
        calendarContainer.style.display = 'flex';
    } else if(!calendarContainer.contains(e.target)){
        calendarContainer.style.display = 'none'
    }

    if(statusFilterContainer.contains(e.target)) {
        statusOptionsContainer.style.display = 'flex';
    } else if (!statusOptionsContainer.contains(e.target)){
        statusOptionsContainer.style.display = 'none';
    }
});

statusOptionsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('status-option')){
       statusSelect.value = e.target.innerText.toLowerCase();
    }
});

const generateDays = () => {
  const dayContainer = document.querySelector('.calendar-grid');
  const daysInMonth = 30;
  for(let i = 1; i <= daysInMonth; i++){
    let dayNumber = document.createElement('span');
    dayNumber.classList.add('day-number');
      dayNumber.innerText = i;
       dayContainer.append(dayNumber)
  }
};

generateDays()

const colors = ['#ffffff', '#ff5733', '#33ff57', '#3357ff', '#ff33a6', '#33ffd5', '#f0e68c', '#ff8c69'];
let currentTheme = 0;

document.getElementById('themeButton').addEventListener('click', function() {
currentTheme = (currentTheme + 1) % colors.length;
document.body.style.backgroundColor = colors[currentTheme];
document.body.style.color = (currentTheme % 2 === 0) ? '#000' : '#fff';
});

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('checkbox');
    const root = document.body;
  
      // Функция для применения темы
    function applyTheme(isDark) {
          root.classList.toggle('dark-theme', !isDark);
      }
     // Функция для сохранения темы в localStorage
     function saveTheme(isDark) {
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
  
    // Функция для загрузки темы из localStorage
    function loadTheme() {
          const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          themeSwitcher.checked = false;
            applyTheme(false);
        } else {
              themeSwitcher.checked = true;
           applyTheme(true);
         }
     }
    // Загружаем тему при загрузке страницы
    loadTheme();
        // Добавляем слушатель на change
  themeSwitcher.addEventListener('change', () => {
       if (themeSwitcher.checked) {
          applyTheme(true);
            saveTheme(false)
      } else {
          applyTheme(false);
           saveTheme(true)
          }
   });
     const dateFromInput = document.getElementById('date-from');
      const dateToInput = document.getElementById('date-to');
      const calendarContainer = document.querySelector('.calendar-container');
      const calendarButtons = document.querySelectorAll('.date-input-calendar-btn');
      const statusFilterContainer = document.querySelector('.status-filter');
      const statusOptionsContainer = document.querySelector('.status-options-container');
      const statusSelect = document.getElementById('order-status');
     // Функция которая прячет и показывает выпадающие списки у кнопок "действия", "Все даты" и "Фильтр"
  
      document.addEventListener('click', (e) => {
  
          if(dateFromInput.contains(e.target) || dateToInput.contains(e.target) ||
              calendarButtons[0].contains(e.target) || calendarButtons[1].contains(e.target)
          ){
              calendarContainer.style.display = 'flex';
          } else if(!calendarContainer.contains(e.target)){
              calendarContainer.style.display = 'none'
          }
  
          if(statusFilterContainer.contains(e.target)) {
              statusOptionsContainer.style.display = 'flex';
          } else if (!statusOptionsContainer.contains(e.target)){
              statusOptionsContainer.style.display = 'none';
          }
      });
  
      statusOptionsContainer.addEventListener('click', (e) => {
          if(e.target.classList.contains('status-option')){
              statusSelect.value = e.target.innerText.toLowerCase();
          }
      });
    const generateDays = () => {
      const dayContainer = document.querySelector('.calendar-grid');
      const daysInMonth = 30;
      for(let i = 1; i <= daysInMonth; i++){
        let dayNumber = document.createElement('span');
      dayNumber.classList.add('day-number');
          dayNumber.innerText = i;
           dayContainer.append(dayNumber)
       }
     };
  
    generateDays()
       const colors = ['#ffffff', '#ff5733', '#33ff57', '#3357ff', '#ff33a6', '#33ffd5', '#f0e68c', '#ff8c69'];
       let currentTheme = 0;
  
    document.getElementById('themeButton').addEventListener('click', function() {
    currentTheme = (currentTheme + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentTheme];
    document.body.style.color = (currentTheme % 2 === 0) ? '#000' : '#fff';
   });
      document.getElementById('uploadButton').addEventListener('click', function() {
      document.getElementById('fileInput').click();
   });
  
    document.getElementById('fileInput').addEventListener('change', function(event) {
      const files = event.target.files;
    const fileList = document.getElementById('fileList');
       fileList.innerHTML = '';
        for (let i = 0; i < files.length; i++) {
          const fileItem = document.createElement('div');
          fileItem.textContent = files[i].name;
            fileList.appendChild(fileItem);
      }
      });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const dateFromInput = document.getElementById('date-from');
    const dateToInput = document.getElementById('date-to');
    const calendarContainer = document.querySelector('.calendar-container');
    const calendarButtons = document.querySelectorAll('.date-input-calendar-btn');
    const statusFilterContainer = document.querySelector('.status-filter');
    const statusOptionsContainer = document.querySelector('.status-options-container');
    const statusSelect = document.getElementById('order-status');
   const themeSwitcher = document.getElementById('checkbox');
    const root = document.body;

   // Функция для применения темы
  function applyTheme(isDark) {
        root.classList.toggle('dark-theme', !isDark);
    }
   // Функция для сохранения темы в localStorage
   function saveTheme(isDark) {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

  // Функция для загрузки темы из localStorage
  function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeSwitcher.checked = false;
          applyTheme(false);
      } else {
            themeSwitcher.checked = true;
         applyTheme(true);
       }
   }
  // Загружаем тему при загрузке страницы
    loadTheme();
    document.addEventListener('click', (e) => {

        if(dateFromInput.contains(e.target) || dateToInput.contains(e.target) ||
            calendarButtons[0].contains(e.target) || calendarButtons[1].contains(e.target)
        ){
            calendarContainer.style.display = 'flex';
        } else if(!calendarContainer.contains(e.target)){
            calendarContainer.style.display = 'none'
        }

        if(statusFilterContainer.contains(e.target)) {
            statusOptionsContainer.style.display = 'flex';
        } else if (!statusOptionsContainer.contains(e.target)){
            statusOptionsContainer.style.display = 'none';
        }
    });

    statusOptionsContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('status-option')){
            statusSelect.value = e.target.innerText.toLowerCase();
        }
    });
 const generateDays = () => {
        const dayContainer = document.querySelector('.calendar-grid');
    const daysInMonth = 30;
     for(let i = 1; i <= daysInMonth; i++){
            let dayNumber = document.createElement('span');
            dayNumber.classList.add('day-number');
            dayNumber.innerText = i;
            dayContainer.append(dayNumber)
        }
    };
  generateDays();
    const colors = ['#ffffff', '#ff5733', '#33ff57', '#3357ff', '#ff33a6', '#33ffd5', '#f0e68c', '#ff8c69'];
    let currentTheme = 0;

    document.getElementById('themeButton').addEventListener('click', function() {
    currentTheme = (currentTheme + 1) % colors.length;
       root.style.backgroundColor = colors[currentTheme];
        root.style.color = (currentTheme % 2 === 0) ? '#000' : '#fff';
   });

    document.getElementById('uploadButton').addEventListener('click', function() {
         document.getElementById('fileInput').click();
   });

   document.getElementById('fileInput').addEventListener('change', function(event) {
        const files = event.target.files;
          const fileList = document.getElementById('fileList');
          fileList.innerHTML = '';
         for (let i = 0; i < files.length; i++) {
         const fileItem = document.createElement('div');
           fileItem.textContent = files[i].name;
            fileList.appendChild(fileItem);
     }
    });
      // Добавляем слушатель на change
    themeSwitcher.addEventListener('change', () => {
       if (themeSwitcher.checked) {
          applyTheme(true);
            saveTheme(false)
      } else {
          applyTheme(false);
        saveTheme(true)
      }
    });
});