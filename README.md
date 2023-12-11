<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Social Media Dashboard</title>
</head>
<body>

<div class="dashboard">
  <div class="metrics">
    <h2>Social Media Metrics</h2>
    <p>Followers: <span id="followersCount">0</span></p>
    <p>Likes: <span id="likesCount">0</span></p>
    <p>Shares: <span id="sharesCount">0</span></p>
  </div>
  
  <div class="actions">
    <h2>Actions</h2>
    <button onclick="increaseFollowers()">Increase Followers</button>
    <button onclick="increaseLikes()">Increase Likes</button>
    <button onclick="increaseShares()">Increase Shares</button>
  </div>
</div>

<script>
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
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .dashboard {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
  }

  .metrics,
  .actions {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
  }

  button {
    margin-top: 10px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
</style>

</body>
</html>
