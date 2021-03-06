import React, { Component } from 'react';
import './InternetIcons.css';

export default class InternetIcons extends Component {
    state = {
        current: 0,
        interval: null
    }

    componentDidMount = () => {
        const interval = setInterval(() => {
            let next = this.state.current + 1;
            if (next >= this.props.icons.length) next = 0;
            this.setState({
                current: next
            })
        }, 500);

        this.setState({
            interval
        });
    }

    componentWillUnmount = () => {
        if (this.state.interval) {
            clearInterval(this.state.interval);
            this.setState({ interval: null });
        }
    }

    render() {
        const currentImage = `icons/${this.props.icons[this.state.current]}.svg`;
        return (
            <img className="moving_icons" src={currentImage} alt="icone internet" />
        )
    }
}
