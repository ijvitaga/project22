const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1><div class="title">Personal.</div></h1>
            <h3>
            <nav>
              <span><a href="/auth/signup">SIGNUP </a></span>
              <span><a href="/auth/login"> LOGIN</a></span>
              <span><a href="/auth/logout"> LOGOUT</a></span>
              </nav>
            </h3>
          </header>
          <h4>Take a moment to empty your thoughts onto a virtual page where only you can see them. Be free from the demands of life and capture the moments that matter to you through this digital diary. Reduce stress, self-reflect, and relive the experiences that truly matter, because you are interesting.</h4>
          <main>{this.props.children}</main>
          <footer>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;