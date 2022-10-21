'use strict';

const box = document.querySelectorAll('.box'),
      btn = document.querySelectorAll('button'),
      main = document.querySelector('main'),
      poppedBox = document.querySelector('.popped-box'),
      newsText = poppedBox.querySelector('.popped-box-text'),
      newsHeader = poppedBox.querySelector('.popped-box-header');

const specialText = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla bibendum elit vel pharetra.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla est, dignissim eu venenatis in, interdum at mauris.'
]
      
const mainText = `<br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.`;

function toHover(event) {
    event.currentTarget.style.backgroundColor = 'red';
}

function toUnHover(event) {
    event.currentTarget.style.backgroundColor = 'aqua';
}

let helper = false;

main.addEventListener('mouseover', (e) => {
    box.forEach(item => {
        if (e.target == item && !helper) {
            item.addEventListener('mouseover', toHover);
            // item.style.backgroundColor = 'red';
        }
        else {
            item.addEventListener('mouseout', toUnHover);
        }
    });
});

main.addEventListener('click', (e) => {
    btn.forEach((item, index) => {
        if (e.target == item) {
            box.forEach(item => {
                item.style.opacity = '25%'
                item.style.backgroundColor ='aqua';
                item.removeEventListener('mouseover', toHover);
            });

            poppedBox.style.display = 'block';
            
            helper = true;
            
            newsHeader.innerHTML = `Новость ${index + 1}`;
            newsText.innerHTML = `Новость ${index + 1}: ${specialText[index]}${mainText}`;
        }
    });
    poppedBox.addEventListener('click', e => {
        poppedBox.style.display = 'none';
        box.forEach(item => item.style.opacity = '100%');
        helper = false;
    })
})













// box.forEach(item => {
//     item.addEventListener('mouseover', toHover);
//     item.addEventListener('mouseout', toUnHover);
// });

// document.addEventListener('mousemove', () => {
//     if (poppedBox.style.display != 'block') {
//         box.forEach(item => {
//             item.style.opacity = "100%"
//         });
//     }
// });


// btn.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         box.forEach(item => {
//             item.style.opacity = '25%';
//             item.style.backgroundColor = 'aqua';
//         });

//         poppedBox.style.display = 'block';

//         newsText.innerHTML = `Новость ${index + 1}: ${specialText[index]}${mainText}`;
//         newsHeader.innerHTML = `Новость ${index + 1}`;
//     }); 
// });

// document.addEventListener('mousemove', () => poppedBox.style.display = "none");





























      // document.addEventListener('', () => {
//     poppedBox.style.cssText = "visibility: hidden;"
//     box[0].cssText
// });






