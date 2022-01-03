import React, {Component} from 'react';

class Card extends Component {
    render() {
    return  (
            <div className="col">
                <div className="card" style={{width: "18rem", textAlign: "center", marginTop: "40px"}}>
                        <img src={this.props.card.Img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.card.Name}</h5>
                                <p className="card-text">{this.props.card.Price}$</p>
                                <button onClick={()=>this.props.onIncrement(this.props.card)} style={{marginRight: "10px"}} className="btn btn-primary">Add
                                <span className="badge badge-light">{this.props.card.quantity}</span></button>
                                <button onClick={()=>this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Delete</button>
                            </div>
                </div>
            </div>
            )
    }
}

export default Card;