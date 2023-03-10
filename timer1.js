let seconds = process.argv.slice(2);

function timer(seconds) {
  //console.log(seconds);
  for (let secString of seconds) {
    const sec = Number(secString)
    if (typeof sec !== 'number' || sec < 0) {
      continue; // ignore/skip non-numbers and negative numbers
    }
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Beep! ${sec}`)
    }, sec * 1000);
  }
}

timer(seconds);