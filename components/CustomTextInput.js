import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'
import { Label, Input, FormText, FormGroup } from 'reactstrap'

const CustomTextInput = ({
    name,
    type,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    helpText
}) => (
    <FormGroup>
        <Label for={name}>{label}</Label>
        <Input
            id={name}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
        />
        {helpText && <FormText color='muted'>{helpText}</FormText>}
        <ErrorMessage name={name}>
            {msg => <FormText color='danger'>{msg}</FormText>}
        </ErrorMessage>
    </FormGroup>
)

CustomTextInput.propTypes = {
    error: PropTypes.object,
    helpText: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    touched: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.string
}

export { CustomTextInput }
