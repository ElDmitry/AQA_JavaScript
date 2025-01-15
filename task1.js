function printAfterTime(text, time) {
	setTimeout(() => {
		console.log(`${text}`);
	}, time);
}

printAfterTime('Hello!', 4000);