import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import ListContact from './components/list-contact/list-contact';
import AddContact from './components/add-contact/add-contact';
import React from 'react';
import { v4 as uuid } from 'uuid';
import Page404 from './components/page404/page404';

class App extends React.Component {
  state = {
    contacts: [
      {
        id: uuid(),
        firstName: "Andrew",
        lastName: "Riabii",
        phone: "+380(95) 41 66 765",
        image: "https://itc.ua/wp-content/uploads/2018/03/Peter_Rabbit_i00.jpg",
        isFavorite: false
      },
      {
        id: uuid(),
        firstName: "Karina",
        lastName: "Pryvaska",
        phone: "+380(95) 15 34 509",
        image: "https://img.tsn.ua/cached/038/tsn-ad24f423d2dc0c6ecd563773e0b7e3a1/thumbs/1200x630/7b/c1/6f7db8fb71659c593ac8a21d617dc17b.png",
        isFavorite: true
      },
      {
        id: uuid(),
        firstName: "Nastia",
        lastName: "Riabia",
        phone: "+380(98) 85 47 121",
        image: "https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg",
        isFavorite: false
      }
    ],
    goToHome: false
  }

  addContact = (newContact) => {
    let newContacts = this.state.contacts;
    newContact.id = uuid();
    newContacts.push(newContact);

    this.setState({
      contacts: newContacts
    });
  }

  setFavoriteContact = (id, isFavorite) => {
    let newContacts = this.state.contacts;
    let index = newContacts.findIndex(c => c.id == id);
    newContacts[index].isFavorite = isFavorite;

    this.setState({
      contacts: newContacts
    })
  }

  render() {
    return (
      <div className="App container-fluid">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand ml-3" href="#">Contacts book</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="list-contacts">List contacts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="add-contact">Add new contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='row'>
            <Routes>
              {/* <Route path="/" element={<ListContact data={this.state.contacts} />} /> */}
              <Route path="/" exact element={<Navigate to="list-contacts" replace />} />
              <Route path="list-contacts" element={<ListContact data={this.state.contacts} setFavoriteContact={this.setFavoriteContact}/>} />
              <Route path="add-contact" element={<AddContact addContact={this.addContact} />} />
              <Route path="*" element={<Page404 />}/>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;