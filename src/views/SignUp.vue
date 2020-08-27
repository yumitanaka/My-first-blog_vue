<template>
    <div class="container">
      <h2>Sign Up</h2>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <div class="container">
        <label for="email">
          <b>Email</b>
        </label>
      </div>
      <input type="text" placeholder="Enter Email" name="email" required />
      <div class="container">
        <label for="psw">
          <b>Password</b>
        </label>
      </div>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <div class="container">
        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
      </div>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
      <div class="container" style="margin-top: 20px">
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
      <div class="container" style="margin-top: -20px">
        <button type="button" class="cancelbtn">Cancel</button>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 35%;
  padding: 12px 20px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 12px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  width: 35%;
}

/* Add padding to container elements */
.container {
  padding: 10px;
  text-align: center;
}
</style>
