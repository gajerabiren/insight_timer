// let left = 1;
// let right = 4;

// function show() {

//     for (i = left; i <= right; i++) {
//         document.getElementById('image' + i).style.display = 'block';
//     }
// }

// function moveleft() {

//     if (left <= 1 && right <= 5) {
//         document.getElementById('image' + left).style.display = 'none';
//         left += 1;
//         right += 1;

//         for (i = left; i <= right; i++) {
//             document.getElementById('image' + i).style.display = 'block';
//         }
//     } else 
//     return;

// }


// function moveright() {

//     if (left >= 1 && right >= 5) {
//         document.getElementById('image' + right).style.display = 'none';
//         left -= 1;
//         right -= 1;

//         for (i = left; i <= right; i++) {
//             document.getElementById('image' + i).style.display = 'block';
//         }
//     } else 
//     return;

// }

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:18,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        2560:{
            items:5
        }
    }
})