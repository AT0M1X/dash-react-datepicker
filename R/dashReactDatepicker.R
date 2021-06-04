# AUTO GENERATED FILE - DO NOT EDIT

dashReactDatepicker <- function(id=NULL, selected=NULL, dateFormat=NULL, placeholderText=NULL, showTimeSelect=NULL, showTimeSelectOnly=NULL, timeFormat=NULL, timeIntervals=NULL, timeCaption=NULL) {
    
    props <- list(id=id, selected=selected, dateFormat=dateFormat, placeholderText=placeholderText, showTimeSelect=showTimeSelect, showTimeSelectOnly=showTimeSelectOnly, timeFormat=timeFormat, timeIntervals=timeIntervals, timeCaption=timeCaption)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactDatepicker',
        namespace = 'dash_react_datepicker',
        propNames = c('id', 'selected', 'dateFormat', 'placeholderText', 'showTimeSelect', 'showTimeSelectOnly', 'timeFormat', 'timeIntervals', 'timeCaption'),
        package = 'dashReactDatepicker'
        )

    structure(component, class = c('dash_component', 'list'))
}
