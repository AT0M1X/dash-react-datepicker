import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker/es';
import "react-datepicker/dist/react-datepicker.css";


export default class DashReactDatepicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: this.selectedPropToState(props.selected)
        }
    }

    selectedPropToState(selectedProp) {
        return selectedProp === null ? null : new Date(selectedProp)
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            selected: this.selectedPropToState(newProps.selected)
        })
    }

    onSelectedChange = selected => {
        const {setProps} = this.props
        if (setProps) {
            setProps({
                selected: selected.toISOString()
            })
        } else {
            this.setState({
                selected: this.selectedPropToState(selected)
            })
        }
    }

    render() {
        const {
            dateFormat,
            placeholderText,
            showTimeSelect,
            showTimeSelectOnly,
            timeFormat,
            timeIntervals,
            timeCaption,
        } = this.props
        return <div id={this.props.id}>
            <DatePicker
                onChange={this.onSelectedChange}
                selected={this.state.selected}
                dateFormat={dateFormat}
                placeholderText={placeholderText}
                showTimeSelect={showTimeSelect}
                showTimeSelectOnly={showTimeSelectOnly}
                timeFormat={timeFormat}
                timeIntervals={timeIntervals}
                timeCaption={timeCaption}
            />
        </div>
    }
}

DashReactDatepicker.defaultProps = {
    selected: null,
    dateFormat: 'dd.MM.yyyy',
    placeholderText: null,
    showTimeSelect: false,
    showTimeSelectOnly: false,
    timeFormat: 'HH:mm',
    timeIntervals: 30,
    timeCaption: 'Time'
};

DashReactDatepicker.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Selected date. Updates when a new date or time is selected in the datepicker.
     * Accepts and returns strings in ISO 8601 format.
     */
    selected: PropTypes.string,
    /**
     * Format to display date and time when selected.
     */
    dateFormat: PropTypes.string,
    /**
     * Placeholder text to display before a value is selected.
     */
    placeholderText: PropTypes.string,
    /**
     * Whether to show time selection.
     */
    showTimeSelect: PropTypes.bool,
    /**
     * Whether to only show time selection. Should only be used with showTimeSelect=True.
     */
    showTimeSelectOnly: PropTypes.bool,
    /**
     * Format to display times in the picker.
     */
    timeFormat: PropTypes.string,
    /**
     * Intervals of time to display in the picker. Should only be used with showTimeSelect=True.
     */
    timeIntervals: PropTypes.number,
    /**
     * Caption for the time picker.
     */
    timeCaption: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
