import React from 'react';
import { ContactItem } from '../contact-item/contact-item';

class ListContact extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className='list-contact-wrapper'>
                <h4>List contacts</h4>
                <div className='row'>
                    {
                        data.map((contact) => {
                            return (
                                <ContactItem key={contact.id} contact={contact} setFavoriteContact={this.props.setFavoriteContact}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListContact;