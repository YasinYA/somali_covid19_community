import { Formik } from 'formik'
import { Container, Col, Row, Button, Spinner } from 'reactstrap'

import { CustomTextInput } from '../components/'
import { loginFormValidations } from '../utils/'

const Login = () => (
    <Container>
        <Row className='my-5'>
            <Col md={{ size: 4, offset: 4 }} xs='12'>
                <Row>
                    <Col>
                        <h1 className='text-center'>Login</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    actions.setSubmitting(false)
                                }, 3000)
                            }}
                            validationSchema={loginFormValidations}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                isSubmitting
                            }) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <CustomTextInput
                                            error={errors}
                                            helpText='Your username or email'
                                            label='Username'
                                            name='username'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder='Your Username'
                                            touched={touched}
                                            type='text'
                                            value={values.username}
                                        />
                                        <CustomTextInput
                                            error={errors}
                                            label='Password'
                                            name='password'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder='Your Password'
                                            touched={touched}
                                            type='password'
                                            value={values.password}
                                        />
                                        <Button
                                            color='secondary'
                                            outline={true}
                                        >
                                            {isSubmitting && (
                                                <span>
                                                    Submitting{' '}
                                                    <Spinner
                                                        color='dark'
                                                        size='sm'
                                                    />
                                                </span>
                                            )}
                                            {!isSubmitting && 'Submit'}
                                        </Button>
                                    </form>
                                )
                            }}
                        </Formik>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
)

export default Login
