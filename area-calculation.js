// to make dynamic sl number, with initial value 0
let count = 0;

// Triangle part
document.getElementById('calculate-triangle-area').addEventListener('click', function(){
    // to make dynamically next sl number
    count = count + 1;

    // calculate triangle area
    const triangleArea = areaCalculator1('triangle-input-1', 'triangle-input-2');

    // append with the area calculation part
    // get the parent, in this case 'aside' is the parent of our targeted div.
    const parent = document.getElementById('container');

    // creating a new div to append
    const newDiv = document.createElement('div');

    // creating the necessary data by innerHTML
    newDiv.innerHTML = `
        <div class="flex gap-2 justify-around items-center text-sm my-2">
            <p>${count}</p>
            <p>Triangle</p>
            <p>${triangleArea}cm<sup>2</sup></p>
            <button id="" class="bg-sky-600 hover:bg-sky-700 p-2 rounded-lg text-white">Convert to m<sup>2</sup></button>
            <button class='delete-btn'><i class="fa-solid fa-xmark"></i></button>
        </div>
    `;
    // appending it to the parent container
    if(triangleArea >= 0){
        parent.appendChild(newDiv);
    }
    else{
        alert('Please input carefully!!');
    }

    // to delete newly appended data
    const deleteItems = document.querySelectorAll('.delete-btn');

    // targeting appended single output by loop
    for(const deleteSingleItem of deleteItems){
        deleteSingleItem.addEventListener('click', function(e){
          e.target.parentNode.parentNode.style.display = 'none';
        })
    }
});


// Rectangle part
document.getElementById('calculate-rectangle-area').addEventListener('click', function(){
    // to make dynamically next sl number
    count = count + 1;

    // calculate rectangle area
    const rectangleArea = areaCalculator2('rectangle-input-1', 'rectangle-input-2');

    // append with the area calculation part
    // get the parent, in this case 'aside' is the parent of our targeted div.
    const parent = document.getElementById('container');

    // creating a new div to append
    const newDiv = document.createElement('div');

    // creating the necessary data by innerHTML
    newDiv.innerHTML = `
        <div class="flex gap-2 justify-around items-center text-sm my-2">
            <p>${count}</p>
            <p>Rectangle</p>
            <p>${rectangleArea}cm<sup>2</sup></p>
            <button id="" class="bg-sky-600 hover:bg-sky-700 p-2 rounded-lg text-white">Convert to m<sup>2</sup></button>
            <button class='delete-btn'><i class="fa-solid fa-xmark"></i></button>
        </div>
    `;
    // appending it to the parent container
    if(rectangleArea >= 0){
        parent.appendChild(newDiv);
    }
    else{
        alert('Please input carefully!!');
    }

    // to delete newly appended data
    const deleteItems = document.querySelectorAll('.delete-btn');
    
    // targeting appended single output by loop
    for(const deleteSingleItem of deleteItems){
        deleteSingleItem.addEventListener('click', function(e){
          e.target.parentNode.parentNode.style.display = 'none';
        })
    }
});


// Parallelogram part
document.getElementById('calculate-parallelogram-area').addEventListener('click', function(){
    // to make dynamically next sl number
    count = count + 1;

    // calculate parallelogram area
    const parallelogramArea = areaCalculator2('parallelogram-input-1', 'parallelogram-input-2');

    // append with the area calculation part
    // get the parent, in this case 'aside' is the parent of our targeted div.
    const parent = document.getElementById('container');

    // creating a new div to append
    const newDiv = document.createElement('div');

    // creating the necessary data by innerHTML
    newDiv.innerHTML = `
        <div class="flex gap-2 justify-around items-center text-sm my-2">
            <p>${count}</p>
            <p>Parallelogram</p>
            <p>${parallelogramArea}cm<sup>2</sup></p>
            <button id="" class="bg-sky-600 hover:bg-sky-700 p-2 rounded-lg text-white">Convert to m<sup>2</sup></button>
            <button class='delete-btn'><i class="fa-solid fa-xmark"></i></button>
        </div>
    `;
    // appending it to the parent container
    if(parallelogramArea >= 0){
        parent.appendChild(newDiv);
    }
    else{
        alert('Please input carefully!!');
    }

    // to delete newly appended data
    const deleteItems = document.querySelectorAll('.delete-btn');
    
    // targeting appended single output by loop
    for(const deleteSingleItem of deleteItems){
        deleteSingleItem.addEventListener('click', function(e){
          e.target.parentNode.parentNode.style.display = 'none';
        })
    }
});


// Rhombus part
document.getElementById('calculate-rhombus-area').addEventListener('click', function(){
    // to make dynamically next sl number
    count = count + 1;

    // calculate rhombus area
    const rhombusArea = areaCalculator1('rhombus-input-1', 'rhombus-input-2');

    // append with the area calculation part
    // get the parent, in this case 'aside' is the parent of our targeted div.
    const parent = document.getElementById('container');

    // creating a new div to append
    const newDiv = document.createElement('div');

    // creating the necessary data by innerHTML
    newDiv.innerHTML = `
        <div class="flex gap-2 justify-around items-center text-sm my-2">
            <p>${count}</p>
            <p>Rhombus</p>
            <p>${rhombusArea}cm<sup>2</sup></p>
            <button id="" class="bg-sky-600 hover:bg-sky-700 p-2 rounded-lg text-white">Convert to m<sup>2</sup></button>
            <button class='delete-btn'><i class="fa-solid fa-xmark"></i></button>
        </div>
    `;
    // appending it to the parent container
    if(rhombusArea >= 0){
        parent.appendChild(newDiv);
    }
    else{
        alert('Please input carefully!!');
    }

    // to delete newly appended data
    const deleteItems = document.querySelectorAll('.delete-btn');
    
    // targeting appended single output by loop
    for(const deleteSingleItem of deleteItems){
        deleteSingleItem.addEventListener('click', function(e){
          e.target.parentNode.parentNode.style.display = 'none';
        })
    }
});


// Pentagon part
document.getElementById('calculate-pentagon-area').addEventListener('click', function(){
    // to make dynamically next sl number
    count = count + 1;

    // calculate pentagon area
    const pentagonArea = areaCalculator1('pentagon-input-1', 'pentagon-input-2');

    // append with the area calculation part
    // get the parent, in this case 'aside' is the parent of our targeted div.
    const parent = document.getElementById('container');

    // creating a new div to append
    const newDiv = document.createElement('div');

    // creating the necessary data by innerHTML
    newDiv.innerHTML = `
        <div class="flex gap-2 justify-around items-center text-sm my-2">
            <p>${count}</p>
            <p>Pentagon</p>
            <p>${pentagonArea}cm<sup>2</sup></p>
            <button id="" class="bg-sky-600 hover:bg-sky-700 p-2 rounded-lg text-white">Convert to m<sup>2</sup></button>
            <button class='delete-btn'><i class="fa-solid fa-xmark"></i></button>
        </div>
    `;
    // appending it to the parent container
    if(pentagonArea >= 0){
        parent.appendChild(newDiv);
    }
    else{
        alert('Please input carefully!!');
    }

    // to delete newly appended data
    const deleteItems = document.querySelectorAll('.delete-btn');
    
    // targeting appended single output by loop
    for(const deleteSingleItem of deleteItems){
        deleteSingleItem.addEventListener('click', function(e){
          e.target.parentNode.parentNode.style.display = 'none';
        })
    }
});


// Ellipsis part
document.getElementById('calculate-ellipsis-area').addEventListener('click', function(){
    // to make dynamically next sl number
    count = count + 1;

    // calculate ellipsis area
    const ellipsisArea = areaCalculator3('ellipsis-input-1', 'ellipsis-input-2');

    // append with the area calculation part
    // get the parent, in this case 'aside' is the parent of our targeted div.
    const parent = document.getElementById('container');

    // creating a new div to append
    const newDiv = document.createElement('div');

    // creating the necessary data by innerHTML
    newDiv.innerHTML = `
        <div class="flex gap-2 justify-around items-center text-sm my-2">
            <p>${count}</p>
            <p>Ellipsis</p>
            <p>${ellipsisArea}cm<sup>2</sup></p>
            <button id="" class="bg-sky-600 hover:bg-sky-700 p-2 rounded-lg text-white">Convert to m<sup>2</sup></button>
            <button class='delete-btn'><i class="fa-solid fa-xmark"></i></button>
        </div>
    `;
    // appending it to the parent container
    if(ellipsisArea >= 0){
        parent.appendChild(newDiv);
    }
    else{
        alert('Please input carefully!!');
    }

    // to delete newly appended data
    const deleteItems = document.querySelectorAll('.delete-btn');
    
    // targeting appended single output by loop
    for(const deleteSingleItem of deleteItems){
        deleteSingleItem.addEventListener('click', function(e){
          e.target.parentNode.parentNode.style.display = 'none';
        })
    }
});


// link attached to blog page
document.getElementById('blog-page').addEventListener('click', function(){
    window.location.href = 'blog.html';
})


