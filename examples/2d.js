const GPU = require('gpu.js')
const random = require('./common')
const gpu = new GPU();
a = random(512)
b = random(512)

// Create the GPU accelerated function from a kernel
// function that computes a single element in the
// 512 x 512 matrix (2D array). The kernel function
// is run in a parallel manner in the GPU resulting
// in very fast computations! (...sometimes)
const matMult = gpu.createKernel(function(a, b) {
    var sum = 0;
    for (var i = 0; i < 512; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
    }
    return sum;
}).setOutput([512, 512]);

// Perform matrix multiplication on 2 matrices of size 512 x 512
const c = matMult(a, b);