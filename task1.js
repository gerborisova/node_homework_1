process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let stream;
  while ((stream = process.stdin.read()) !== null) {
    process.stdout.write(stream.split('').reverse().join(''));
  }
});
