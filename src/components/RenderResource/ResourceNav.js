import React from "react";
import styles from './style.module.scss'
import {Button, Col, Form} from "react-bootstrap";
import {useFormik} from 'formik';

const ResourceNav = ({resourceType, resourceLink, togglePlayer, setLink}) => {

    const toggleVideoButton = resourceType === 'video' ?
        (<Button
            variant="outline-light"
            onClick={togglePlayer}>
            Play | Stop
        </Button>)
        : null,
        setVideoForm = useFormik({
            initialValues: {
                link: resourceType === 'video' ? resourceLink : '',
            },
            onSubmit: values => setLink({type: 'video', value: values.link}),
        }),
        setImageForm = useFormik({
            initialValues: {
                link: resourceType === 'image' ? resourceLink : '',
            },
            onSubmit: values => setLink({type: 'image', value: values.link}),
        });

    return (<div className={styles.ReactPlayerNav}>
        {toggleVideoButton}
        <Form onSubmit={setVideoForm.handleSubmit}>
            <Form.Row>
                <Col>
                    <Form.Control value={setVideoForm.values.link} name="link" placeholder="video link"
                                  onChange={setVideoForm.handleChange}/>
                </Col>
                <Col>
                    <Button type="submit" variant="outline-light">set link</Button>
                </Col>
            </Form.Row>
        </Form>
        <Form onSubmit={setImageForm.handleSubmit}>
            <Form.Row>
                <Col>
                    <Form.Control
                        value={setImageForm.values.link}
                        name="link"
                        placeholder="image link"
                        onChange={setImageForm.handleChange}/>
                </Col>
                <Col>
                    <Button type="submit" variant="outline-light">set link</Button>
                </Col>
            </Form.Row>
        </Form>
    </div>);
};

export default ResourceNav;