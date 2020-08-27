<template>
  <div class="container">
    <h2>Log In</h2>
    <p>Please fill in this form to log in.</p>
    <hr />
  </div>
  <div class="container">
    <label for="uname">
      <div class="container" style="margin-top: 2%">
        <b>Username</b>
      </div>
    </label>
    <input type="text" placeholder="Enter Username" name="uname" required />
  </div>
  <div class="container">
    <label for="psw">
      <div class="container">
        <b>Password</b>
      </div>
    </label>
    <input type="password" placeholder="Enter Password" name="psw" required />
  </div>
  <div class="container" style="margin-top: 20px">
    <button type="submit">Login</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

input[type="text"],
input[type="password"] {
  width: 35%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  box-sizing: border-box;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 35%;
  opacity: 0.9;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 10px;
  text-align: center;
}

span.psw {
  float: right;
  padding-top: 16px;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
</style>
