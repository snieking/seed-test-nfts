const fs = require('fs');

const amount = 30;

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
      image:
        'https://public.nftstatic.com/static/nft/res/ba97a491604b45ac97093ae16658701a.jpeg',
      description:
        'This exquisite pouch emits colorful lights. There has to be something grand inside! Redeem it in the upcoming companion app for My Neighbor Alice.',
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
