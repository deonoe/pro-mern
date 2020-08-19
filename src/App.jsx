function IssueFilter() {
  return <div>This is a placeholder for the issue filter.</div>;
}

function IssueRow(props) {
  const rowStyle = { border: "1px solid silver", padding: 4 };
  return (
    <tr>
      <td style={rowStyle}>{props.issue_id}</td>
      <td style={rowStyle}>{props.issue_title}</td>
    </tr>
  );
}

function IssueTable() {
  const rowStyle = { border: "1px solid silver", padding: 4 };
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={rowStyle}>ID</th>
          <th style={rowStyle}>Title</th>
        </tr>
      </thead>
      <tbody>
        <IssueRow
          issue_id={1}
          issue_title="Error in console when clicking Add"
        />
        <IssueRow issue_id={2} issue_title="Missing bottom border on panel" />
      </tbody>
    </table>
  );
}

function IssueAdd() {
  return <div>This is a placeholder for a form to add an issue.</div>;
}

function IssueList() {
  return (
    <React.Fragment>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr />
      <IssueTable />
      <hr />
      <IssueAdd />
    </React.Fragment>
  );
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById("contents"));
