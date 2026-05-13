// pages/AddCreator.tsx
import CreatorForm from '../components/CreatorForm'

export default function AddCreator() {
  const handleSubmit = (values: any) => {
    console.log('New creator:', values)
    // save to database here
  }

  return <CreatorForm onSubmit={handleSubmit} />
}