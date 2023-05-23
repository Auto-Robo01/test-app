import './App.css'
import ReviewBook from './components/ReviewBook'
import StarRating from './components/StarRating'

function App() {

  const handleRating = (rate: number) => {
    console.log()
  }

  const consoleData = (obj: any) => {
    console.log(obj)
  }

  return (
    <>
   <h1>Hello world</h1>
   <StarRating setStarRating={handleRating} initialRating={4}/>
   <ReviewBook setFormData={consoleData}/>
   </>
  )
}

export default App
