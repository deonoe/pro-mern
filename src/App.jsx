const issues = [
  {
    id: 1,
    status: "New",
    owner: "Deodésimo",
    effort: 5,
    created: new Date("2020-08-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Benilza",
    effort: 12,
    created: new Date("2020-08-20"),
    due: new Date("2020-08-30"),
    title: "Missing bottom border on panel",
  },
];

function IssueFilter() {
  return <div>This is a placeholder for the issue filter.</div>;
}

function IssueRow(props) {
  const issue = props.issue;
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ""}</td>
      <td>{issue.title}</td>
    </tr>
  );
}

function IssueTable() {
  const issueRows = issues.map((issue) => (
    <IssueRow key={issue.id} issue={issue} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Due Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
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
