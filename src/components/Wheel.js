import React, { Component } from 'react';
import QuestionModal from './QuestionModal';
import './Styles/Wheel.css';

export default class Wheel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
        };
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem() {
        if (this.state.selectedItem === null) {
            const selectedItem = Math.floor(Math.random() * this.props.items.length);
            if (this.props.onSelectItem) {
                this.props.onSelectItem(selectedItem);
            }
            this.setState({ selectedItem });
        } else {
            this.setState({ selectedItem: null });
            setTimeout(this.selectItem, 500);
        }
    }

    render() {
        const { selectedItem } = this.state;
        const { items } = this.props;
        const isOpen = selectedItem ? true : false;
        const wheelVars = {
            '--nb-item': items.length,
            '--selected-item': selectedItem,
        };
        const spinning = selectedItem !== null ? 'spinning' : '';

        const showButton = () => {
            if (selectedItem !== null) { 
                // setTimeout(() => {return buttonShowing = true}, 3000)
                return true;
            } 
            else return;      
        }

        console.log('selectedItem', selectedItem)

        const selectedItemData = items.filter(item => item.id === selectedItem );

        console.log('items', items);
        console.log('selectedItemData', selectedItemData);

        // const showButton = shouldShowButton

        return (
            <>
            <div className="wheel-container" style={{'margin-top': '20px'}}>
                <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
                    {items.map((item, index) => (
                        <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
            {selectedItem && <QuestionModal isOpen={isOpen} showButton={showButton(selectedItem)} selectedItem={selectedItemData[0]}/>}
            </>
        );
    }
}