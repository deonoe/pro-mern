"use strict";

function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the issue filter.");
}

function IssueRow(props) {
  var rowStyle = {
    border: "1px solid silver",
    padding: 4
  };
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, props.issue_id), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, props.issue_title));
}

function IssueTable() {
  var rowStyle = {
    border: "1px solid silver",
    padding: 4
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(IssueRow, {
    issue_id: 1,
    issue_title: "Error in console when clicking Add"
  }), /*#__PURE__*/React.createElement(IssueRow, {
    issue_id: 2,
    issue_title: "Missing bottom border on panel"
  })));
}

function IssueAdd() {
  return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add an issue.");
}

function IssueList() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
}

var element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById("contents"));