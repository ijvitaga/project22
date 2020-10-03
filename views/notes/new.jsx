const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="New Notes">
        <form action="/notes/" method="post">
          <input type="text" placeholder="type your narrative" name="note" />
          <input type="submit" value="create entry" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
