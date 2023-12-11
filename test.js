let followers = 0;
  let likes = 0;
  let shares = 0;

  function updateCounts() {
    document.getElementById('followersCount').innerText = followers;
    document.getElementById('likesCount').innerText = likes;
    document.getElementById('sharesCount').innerText = shares;
  }

  function increaseFollowers() {
    followers++;
    updateCounts();
  }

  function increaseLikes() {
    likes++;
    updateCounts();
  }

  function increaseShares() {
    shares++;
    updateCounts();
  }