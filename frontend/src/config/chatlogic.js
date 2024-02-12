function getSender(loggedUser, users) {
  return users?.[0]._id === loggedUser._id ? users?.[1].name : users?.[0].name;
}
function getSenderFull(loggedUser, users) {
  return users?.[0]._id === loggedUser._id ? users?.[1] : users?.[0];
}
module.exports = { getSender, getSenderFull };
