import React from 'react'
import Container from '../components/layout/Container';
import Breadcrumb from '../components/layout/Breadcrumb';
import Inputbox from '../components/layout/Inputbox';
import Button from '../components/layout/Button';

const Contact = () => {
  return (
    <>
    <Container>
        <Breadcrumb/>
        <div className='w-2/4'>
            <h2 className='font-dm font-bold text-[38px] mb-10'>Fill up a Form</h2>
            <Inputbox as="input" placeholder="your name here" title="name"/>
            <Inputbox as="input" placeholder="your email here" title="email"/>
            <Inputbox as="textarea" placeholder="your message here" title="message"/>
            <Button title="Post"/>
        </div>
    </Container>
    </>
  )
}

export default Contact;
