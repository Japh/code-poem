let you = {
  love_me: true
};
let i = {
  love_you: true
};

let us = you.love_me && i.love_you;

if ( us ) {
  console.log('Our love is conditional.');
} else {
  console.log('All love is conditional.');
}
