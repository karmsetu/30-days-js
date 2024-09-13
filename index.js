const { spawn } = require('child_process');
const path = require('path');

// First, compile the .ts file with npx tsc
const compile = spawn('npx', ['tsc', `${process.argv[2]}/index.ts`], {
    shell: true,
});

// Capture standard output of the compilation process
compile.stdout.on('data', (data) => {
    console.log(`Compilation stdout: ${data}`);
});

// Capture any errors during compilation
compile.stderr.on('data', (data) => {
    console.error(`Compilation stderr: ${data}`);
});

// Handle errors in starting the compile process
compile.on('error', (error) => {
    console.error(`Failed to start compilation: ${error.message}`);
});

// Once the compilation is finished, run the resulting .js file
compile.on('close', (code) => {
    if (code === 0) {
        console.log(
            'Compilation succeeded, now running the JavaScript file...'
        );

        // Now, run the generated JavaScript file (index.js) using Node.js
        const run = spawn('node', [path.join(process.argv[2], 'index.js')], {
            shell: true,
        });

        // Capture output of the JS file execution
        run.stdout.on('data', (data) => {
            // console.log(`Execution stdout: ${data}`);
            console.log(data.toString());
        });

        // Capture errors during JS execution
        run.stderr.on('data', (data) => {
            console.error(`Execution stderr: ${data}`);
        });

        // Handle any errors during the execution process
        run.on('error', (error) => {
            console.error(`Failed to start execution: ${error.message}`);
        });

        // Detect when the JS execution process finishes
        run.on('close', (code) => {
            console.log(`JavaScript execution exited with code ${code}`);
        });
    } else {
        console.error(`TypeScript compilation failed with exit code ${code}`);
    }
});
