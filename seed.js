const fs = require('fs');

const amount = 1_000;

function randomBoolean() {
  return Math.random() > 0.5;
}

function writeJsonFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

function main() {
  const seeds = [];
  for (var i = 0; i < amount; i++) {
    seeds.push({
      id: i,
      name: randomBoolean()
        ? 'Alice Mysterious Seed'
        : 'Chromia Mysterious Seed',
    });
  }

  const json = {
    seeds,
    profile: {
      name: 'typicode',
    },
  };

  writeJsonFile('db.json', json);
}

main();
