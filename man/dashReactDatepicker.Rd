% Auto-generated: do not edit by hand
\name{dashReactDatepicker}

\alias{dashReactDatepicker}

\title{DashReactDatepicker component}

\description{

}

\usage{
dashReactDatepicker(id=NULL, selected=NULL, dateFormat=NULL,
placeholderText=NULL, showTimeSelect=NULL,
showTimeSelectOnly=NULL, timeFormat=NULL,
timeIntervals=NULL, timeCaption=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{selected}{Character. Selected date. Updates when a new date or time is selected in the datepicker.
Accepts and returns strings in ISO 8601 format.}

\item{dateFormat}{Character. Format to display date and time when selected.}

\item{placeholderText}{Character. Placeholder text to display before a value is selected.}

\item{showTimeSelect}{Logical. Whether to show time selection.}

\item{showTimeSelectOnly}{Logical. Whether to only show time selection. Should only be used with showTimeSelect=True.}

\item{timeFormat}{Character. Format to display times in the picker.}

\item{timeIntervals}{Numeric. Intervals of time to display in the picker. Should only be used with showTimeSelect=True.}

\item{timeCaption}{Character. Caption for the time picker.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

