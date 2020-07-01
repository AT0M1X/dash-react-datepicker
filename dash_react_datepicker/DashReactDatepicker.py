# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashReactDatepicker(Component):
    """A DashReactDatepicker component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- selected (string; optional)
- dateFormat (string; default 'dd.MM.yyyy')
- placeholderText (string; optional)
- showTimeSelect (boolean; default False)
- showTimeSelectOnly (boolean; default False)
- timeFormat (string; default 'HH:mm')
- timeIntervals (number; default 30)
- timeCaption (string; default 'Time')"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selected=Component.UNDEFINED, dateFormat=Component.UNDEFINED, placeholderText=Component.UNDEFINED, showTimeSelect=Component.UNDEFINED, showTimeSelectOnly=Component.UNDEFINED, timeFormat=Component.UNDEFINED, timeIntervals=Component.UNDEFINED, timeCaption=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selected', 'dateFormat', 'placeholderText', 'showTimeSelect', 'showTimeSelectOnly', 'timeFormat', 'timeIntervals', 'timeCaption']
        self._type = 'DashReactDatepicker'
        self._namespace = 'dash_react_datepicker'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selected', 'dateFormat', 'placeholderText', 'showTimeSelect', 'showTimeSelectOnly', 'timeFormat', 'timeIntervals', 'timeCaption']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashReactDatepicker, self).__init__(**args)
