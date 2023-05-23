import { useState } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import StarRating from "./StarRating"

interface Props{
    setFormData : (obj: any) => void
}


function ReviewBook({setFormData}: Props) {
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [star, setStar] = useState(Number)

    const submitForm = (e: any) => {
        e.preventDefault()
        console.log({name, review, star})
        setFormData({name, review, star})

    }

    const setRating = (rate: number) => {
        setStar(rate)
        console.log('after rating set', star)
    }
    
    return (
    <>
        <h2> Review Form</h2>
        <form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=> {setName(e.target.value)}} type="text" name="name" placeholder="Enter your name"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Review</Form.Label>
                <Form.Control onChange={(e)=> {setReview(e.target.value)}} type="text" name="review" placeholder="Enter your review"></Form.Control>
            </Form.Group>
            <StarRating setStarRating={setRating} initialRating={0}/>
            <Button onClick={submitForm} variant="primary" type="submit">
                Submit
            </Button>
        </form>
    </>
    )
}

export default ReviewBook