import React, { Component } from 'react';

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { id: 1, title: 'First Note', body: 'This is the first note' },
        { id: 2, title: 'Second Note', body: 'This is the second note' },
        { id: 3, title: 'Third Note', body: 'This is the third note' }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {this.state.notes.map((note, i) =>
            <li key={i}>{note.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Notes;
