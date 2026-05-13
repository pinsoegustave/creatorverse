import CreatorForm from '../components/CreatorForm'

export default function EditCreator() {
  const existingCreator = {
    name: 'John Doe',
    url: 'fuiosrioweruoiwe',
    description: 'Amazing creator...',
    // youtube: 'https://youtube.com/@johndoe',
    // instagram: 'https://instagram.com/johndoe',
    // x: 'https://x.com/johndoe',
    imageURL: 'https://example.com/image.jpg',
  }

  const handleSubmit = (values: any) => {
    console.log('Updated creator:', values)
    // update in database here
  }

  return <CreatorForm initialValues={existingCreator} onSubmit={handleSubmit} />
}