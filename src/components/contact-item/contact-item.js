import { render } from "@testing-library/react";
import React from "react";

export const ContactItem = (props) => {
    const getFavoriteIcon = () => {
        let favoriteIcon = "favorite fa-star ms-3 fa-2x";
        if (props.contact.isFavorite) {
            favoriteIcon += " fa-solid";
        } else {
            favoriteIcon += " fa-regular";
        }

        return favoriteIcon;
    }

    return (
        <React.Fragment>
            <div className="card col-3" key={props.contact.id}>
                <img className="card-img-top" height="275" src={props.contact.image} alt="Card image cap" />
                <div className="card-body">
                    <h5>{props.contact.firstName} {props.contact.lastName}</h5>
                    <small>{props.contact.phone}</small>
                    <i className={getFavoriteIcon()} onClick={() => props.setFavoriteContact(props.contact.id, !props.contact.isFavorite)}></i>
                </div>
            </div>

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
