const cmd = require("./cmd");
const file = require("./file");
// let day = 10;
const random = (lower, upper) => {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};
// const commit = async () => {
// 	const today = new Date();
// 	today.setTime(
// 		today.getTime() - 0 * 24 * 60 * 60 * 1000 - day * 24 * 60 * 60 * 1000
// 	);
// 	let commitTime = `${today.getFullYear() - 2}.${
// 		today.getMonth() + 1
// 	}.${today.getDate()}`;
// 	if (today.getFullYear() - 2 > 2020) {
// 		console.log('走到这');
// 		return;
// 	}
// 	let commitNumber = random(1, 10);
// 	let dayNumber = random(1, 3);
// 	while (commitNumber) {
// 		await file(commitTime);
// 		await cmd("git status");
// 		await cmd("git add .");
// 		await cmd(`git commit -m "${commitTime}" --no-edit --date="${commitTime}"`);
// 		commitNumber--;
// 	}
// 	if (day >= 10) {
// 		day -= dayNumber;
// 		commit();
// 	} else {
// 		// await cmd('git push origin master');
// 	}
// };
// commit();





const newCommit = async () => {
	let month = random(1, 12)
	let day = random(1, 30)
	let newCommitTime = `2019.${month}.${day}`
	await file(newCommitTime);
	await cmd("git status");
	await cmd("git add .");
	await cmd(`git commit -m "${newCommitTime}" --no-edit --date="${newCommitTime}"`);
}
for (let index = 0; index < 1; index++) {
	newCommit()
}