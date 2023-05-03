import shell from 'shelljs';
import http from 'http';


// run serve command
test('serve command', () => {
    // start the server, but terminate it after 5 seconds
    const result = shell.exec('node dist/bin/serve.js --loglevel debug', { async: true });
    setTimeout(() => {
        result.kill();
    }, 5000);
    //expect(result.code).toBe(0);
    //expect(result.stdout).toContain('Server started on port 80');
});