const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { note } = this.props;
    return (
      <Layout title="Edit Note">
        <form action={`/notes/edit/${note._id}?_method=PUT`} method="post">
          <input type="text" value={note.note} placeholder="type your narrative" name="note" />
          <input type="submit" value="edit entry" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
