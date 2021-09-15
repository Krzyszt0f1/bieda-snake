// canvas setup 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 425;
const height = canvas.height = 375;

// canvas checkered pattern

for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 17; j++) {
       if((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
           ctx.fillStyle = '#aad751';
       } else {
           ctx.fillStyle = '#a2d149';
       }
        ctx.fillRect(j * 25, i * 25, 25, 25);
    }
}
