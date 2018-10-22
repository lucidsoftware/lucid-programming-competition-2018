function processData(input) {
    const pos = [0,0];
    const move = (b) => {
        pos[0]+=b[0];
        pos[1]+=b[1];
    }

    let dirs = {
        0: [0, -1],
        1: [1, 0],
        2: [0, 1],
        3: [-1, 0]
    }
    let dir = 0;



    const directions = input.length ? input.split('') : ['R'];
    let step = 0;
    let iters = 0;

    const maxIters = 1000000000/2/directions.length;

    while (true) {
        const next = directions[step];
        if (next == "F") {
            move(dirs[dir])
        } else if (next == "R") {
           dir = (dir+1)%4;
       } else {
           dir = dir-1;
           if (dir < 0) {
               dir = 3;
               }
       }

        step++;
        if (step >= directions.length) {
            step = 0;
            iters++;
            if (pos[0] == 0 && pos[1] == 0) {
                console.log(iters);
                break;
            }
            if (iters > maxIters) {
                console.log(-1)
                break;
                }
            }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});