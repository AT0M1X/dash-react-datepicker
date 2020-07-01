# AUTO GENERATED FILE - DO NOT EDIT

dashReactDatepicker <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactDatepicker',
        namespace = 'dash_react_datepicker',
        propNames = c('id', 'label', 'value'),
        package = 'dashReactDatepicker'
        )

    structure(component, class = c('dash_component', 'list'))
}
