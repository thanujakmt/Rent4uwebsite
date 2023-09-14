

// let image_1 = document.getElementById('image_1')
// const image_1 = document.querySelector('img_box')
// console.log(image_1)

// image_1.addEventListener('mouseover',()=>{
//     image_1.src= 'client-1-white.png';
//     console.log(image_1)
// })


// image_1.addEventListener('mouseout',()=>{
//     image_1.setAttribute('src','client-1.png')
// })


function menu(){
    // document.getElementById('menu_btn').style.display='block'
    let menu_button = document.getElementById('overlay_content');
    console.log(menu_button.style.display);
    if (menu_button.style.display ==='' || menu_button.style.display ==='none'){
        
        console.log(menu_button)
        menu_button.style.display ='block';
    }
    else if (menu_button.style.display ==='block'){
        menu_button.style.display = 'none';
        console.log(menu_button.style.display);
    }
}  ; 