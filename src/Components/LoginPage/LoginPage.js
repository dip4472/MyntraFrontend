import React from 'react';

function LoginPage() {
  return (
    <div class="loginBox"> <img class="user" src="https://th.bing.com/th/id/OIP.Q3yFeXPyjukMAlgfm44R8AHaEK?rs=1&pid=ImgDetMain" height="100px" width="100px" alt="Logo" />
      <h3>WELCOME TO MYNTRA</h3>
      <form action="login.php" method="post">
        <div class="inputBox"> <input id="uname" type="text" name="Username" placeholder="Username" />
          <input id="pass" type="password" name="Password" placeholder="Password" /> </div> <input type="submit" name="" value="Login" />
      </form>
      <a href="https://github.com/">Forgot Password<br /> </a>
      <div class="text-center">
        <p style={{ color: '#59238F' }}>New Here? Sign-Up</p>
      </div>

    </div>
  );
}

export default LoginPage;
