import shell from 'shelljs';
import http from 'http';


// run serve command
test('serve command', () => {
    // start the server, but terminate it after 5 seconds
    const result = shell.exec('node bin/serve.js --loglevel debug', { async: true });
    setTimeout(() => {
        result.kill();
    }, 5000);
    shell.echo(result.stdout);
    shell.echo(result.stderr);
    //expect(result.code).toBe(0);
    //expect(result.stdout).toContain('Server started on port 80');
});