import React from 'react'
import Button from 'react-bootstrap/Button';

function Buttons() {
  return (
    <>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
    </>
  )
}

export default Buttons