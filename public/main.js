const btn = document.querySelector('.btn');


const data = [];

btn.addEventListener('click', () =>{
    const days = document.querySelector('#date').value;
    const time = document.querySelector('#hours').value;
    const moduleTitle = document.querySelector('#module-title').value;
    const moduleComponent = document.querySelector('#component').value;
    const courseActivity = document.querySelector('#activity').value;
    const lecturerName = document.querySelector('#lecturer').value;
    const courseObservation = document.querySelector('#observation').value;
    
    const dayReport ={
        days,
        time,
        moduleTitle,
        moduleComponent,
        courseActivity,
        lecturerName,
        courseObservation
    }
    data.push(dayReport);
    localStorage.setItem('Report', JSON.stringify(data));
})