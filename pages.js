module.exports = {
  google: {
    username: "//*[@id='identifierId']",
    password:
      "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input",
  },
  tinder: {
    host: "https://tinder.com/app/recs",
    popups: {
      cookies: "/html/body/div[1]/div/div[2]/div/div/div[1]/button",
      location: "/html/body/div[2]/div/div/div/div/div[3]/button[1]",
      notifications: "/html/body/div[2]/div/div/div/div/div[3]/button[1]",
    },
    googleLogin: "Pos(r) Z(1) D(ib)",
    like:
      "/html/body/div[1]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[4]",
    notInterested: '//*[@id="modal-manager"]/div/div/div[2]/button[2]/span',
  },
};
