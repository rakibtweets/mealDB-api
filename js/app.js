// calling api

const searchFood = () => {

    const searchField = document.getElementById('search-field')
    const foodName = searchField.value ;
    searchField.value = '';

    // searching api call
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {

    const allMealContainer = document.getElementById('all-meals')
    allMealContainer.textContent = ''

    for (const meal of meals) {

        const div = document.createElement('div')
        div.classList.add('col')

        div.innerHTML = `

        <div onclick="SingleMealData(${meal.idMeal})" class="card h-50">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                ${meal.strInstructions.slice(0,200)}
                </p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    
        `;

        allMealContainer.appendChild(div);
        
    }

}

const SingleMealData = (mealId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleMealDetails(data.meals[0]))
}

const displaySingleMealDetails = (meal) => {
    const singleMealDiv = document.getElementById('single-meal-details')
    const div = document.createElement('div')
    div.classList.add('col','mx-auto')
    singleMealDiv.textContent = ''

     div.innerHTML = `

     <div class="card h-50">
         <img class="img-fluid" src="${meal.strMealThumb}" class="card-img-top" alt="..." />
         <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">
             ${meal.strInstructions.slice(0,200)}
             </p>
             <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
         </div>
     </div>
 
     `;
     singleMealDiv.appendChild(div)

}
