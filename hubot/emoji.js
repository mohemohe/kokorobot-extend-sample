const emoji = require('node-emoji');

module.exports = (robot) => {
  robot.hear(/.*/gi, (msg) => {
    const orig = msg.message.text;
    const emojified = emoji.emojify(orig);
    if (orig !== emojified) {
      msg.send('emojiみっけ！', emojified);
    }
  });
};
