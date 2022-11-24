// Materialized Navbar 
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
// });

// Image Slider
const project1LeftArrow = document.getElementById("left-arrow")
const project1RightArrow = document.getElementById("right-arrow")

const project2leftArrow = document.getElementById("left-arrow")
const project2$ightArrow = document.getElementById("right-arrow")

const projectOneImages = [
    "img/facility443/01.jpg",
    "img/facility443/02.jpg",
    "img/facility443/03.jpg",
    "img/facility443/04.jpg",
    "img/facility443/05.jpg",
    "img/facility443/06.jpg",
    "img/facility443/07.jpg"
]; 

const projectTwoImages = [
    "img/bookmarked/01.jpg",
    "img/bookmarked/02.jpg",
    "img/bookmarked/03.jpg",
    "img/bookmarked/04.jpg",
    "img/bookmarked/05.jpg",
    "img/bookmarked/06.jpg",
    "img/bookmarked/07.jpg",
    "img/bookmarked/08.jpg",
    "img/bookmarked/09.jpg",
    "img/bookmarked/10.jpg"
]; 
const projectTwoImages = [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
]; 

let projectOneCount = projectOneImages.length - 1
let projectTwoCount = projectTwoImages.length - 1
// let projectThreeCount = projectThreeImages - 1
// let projectFourCount = projectOneImages - 1

// project1LeftArrow.addEventListener("click", function(){
//     changeRight(projectOneImages)
// })
// project1RightArrow.addEventListener("click", function(){
//     changeLeft(projectOneImages)
// })


// project2LeftArrow.addEventListener("click", function(){
//     changeRight(projectOneImages)
// })
// project2RightArrow.addEventListener("click", function(){
//     changeLeft(projectOneImages)
// })


// function changeLeft(arr) {
//     console.log("Test")
    // if (count > 0 ) {
    //     count--
    //     console.log(arr.length)
    //     console.log(count)
    // } else {
    //     count = arr.length -1
    //     console.log(arr.length)
    //     console.log(count)
    // }
    // document.getElementById("project-image").src=arr[count]
}

// function changeRight(arr) {
//     if (count < arr.length -1 ) {
//         count++
//         console.log(arr.length)
//         console.log(count)
//     } else {
//         count = 0
//         console.log(arr.length)
//         console.log(count)
//     }
//     document.getElementById("project-image").src=arr[count]
// }

// console.log(projectOneImages.length)
// console.log(count)

// leftArrow.addEventListener("click", function() {
//     if (count > 0 ) {
//         count--
//         console.log(images.length)
//         console.log(count)
//     } else {
//         count = images.length -1
//     }
//     document.getElementById("project-image").src=images[count]
// }); 

// rightArrow.addEventListener("click", function() {
//     if (count < images.length -1 ) {
//         count++
//         console.log(images.length)
//         console.log(count)
//     } else {
//         count = 0
//     }
//     document.getElementById("project-image").src=images[count]
// }); 