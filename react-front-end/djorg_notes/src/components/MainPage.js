import React, { Component } from 'react';
import axios from 'axios';
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }
    };

    componentDidMount() {
        this.getAllNotes();
    }

    //bring in notes from the django api.
    getAllNotes = () => {
        const token = "Token a3eee6ff6330a0c646223c780356131e2ea82d9e";
        // const data = {
    
        //   'Id': localStorage.getItem('ID')
        // }
    
        const optionTwo = {
          method: 'GET',
          headers: { 'content-type': 'application/json', 'Authorization': token },
          // data: data,
          url: 'https://robert-hogan-djorg.herokuapp.com/api/notes/',
        }
    
        axios(optionTwo)
          .then((res) => {
            this.setState({ notes: res.data })
    
            console.log(res.data)
          })
          .catch(err => console.log(err));
      }

    render() {
        return (
            <div className="over-all-container">
                <div className="container">
                    <div className="notes-wrapper">
                        <div className="notes-header">NOTES LIST</div>
                        <ul className="notes-list-container">
                            {this.state.notes.map(note => <li className="Note-disply"><div className="note-title">{note.title}</div> <div className="note-content">{note.content}</div></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;